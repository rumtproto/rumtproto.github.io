---
title: "Аукционы коллекционных подарков"
original: "https://core.telegram.org/api/auctions"
section: api
description: "Чтобы гарантировать честное распределение коллекционных подарков, новые выпуски подарков будут распространяться через аукционы — пользователи смогут делать ставки в Stars на новые…"
layout: layout.njk
---

# Аукционы коллекционных подарков

Чтобы гарантировать честное распределение [коллекционных подарков](/api/gifts/#collectible-gifts), новые выпуски подарков будут распространяться через **аукционы** — пользователи смогут делать ставки в Stars на новые подарки в течение нескольких раундов.

### Получение состояния аукциона

```
inputStarGiftAuction#02e16c98 gift_id:long = InputStarGiftAuction;
inputStarGiftAuctionSlug#7ab58308 slug:string = InputStarGiftAuction;

starGift#313a9547 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true auction:flags.11?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int auction_slug:flags.11?string gifts_per_round:flags.11?int auction_start_date:flags.11?int upgrade_variants:flags.12?int background:flags.13?StarGiftBackground = StarGift;

starGiftAuctionState#771a4e66 version:int start_date:int end_date:int min_bid_amount:long bid_levels:Vector<AuctionBidLevel> top_bidders:Vector<long> next_round_at:int last_gift_num:int gifts_left:int current_round:int total_rounds:int rounds:Vector<StarGiftAuctionRound> = StarGiftAuctionState;
starGiftAuctionStateFinished#972dabbf flags:# start_date:int end_date:int average_price:long listed_count:flags.0?int fragment_listed_count:flags.1?int fragment_listed_url:flags.1?string = StarGiftAuctionState;
starGiftAuctionStateNotModified#fe333952 = StarGiftAuctionState;

starGiftAuctionUserState#2eeed1c4 flags:# returned:flags.1?true bid_amount:flags.0?long bid_date:flags.0?int min_bid_amount:flags.0?long bid_peer:flags.0?Peer acquired_count:int = StarGiftAuctionUserState;

starGiftActiveAuctionState#d31bc45d gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState = StarGiftActiveAuctionState;

payments.starGiftActiveAuctionsNotModified#db33dad0 = payments.StarGiftActiveAuctions;
payments.starGiftActiveAuctions#aef6abbc auctions:Vector<StarGiftActiveAuctionState> users:Vector<User> chats:Vector<Chat> = payments.StarGiftActiveAuctions;

payments.starGiftAuctionState#6b39f4ec gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionState;

updateStarGiftAuctionState#48e246c2 gift_id:long state:StarGiftAuctionState = Update;
updateStarGiftAuctionUserState#dc58f31e gift_id:long user_state:StarGiftAuctionUserState = Update;

---functions---

payments.getStarGiftActiveAuctions#a5d0514d hash:long = payments.StarGiftActiveAuctions;
payments.getStarGiftAuctionState#5c9ff4d6 auction:InputStarGiftAuction version:int = payments.StarGiftAuctionState;
```

Каждый аукцион распределяет между участниками с наибольшими ставками определённое количество экземпляров конкретного подарка: информация об аукционе разделена между объектом [StarGiftAuctionState](/type/StarGiftAuctionState/), связанным с ним объектом [starGift](/constructor/starGift/) и объектом [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) пользователя — последний присутствует, если пользователь делал ставку на этом аукционе.

Все три перечисленных объекта возвращаются вместе следующими методами:

-   [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/) — возвращает состояние конкретного аукциона; принимает следующие параметры:

    -   [@term:deep link] `auction`: идентификатор разыгрываемого подарка, передаваемый через [inputStarGiftAuction](/constructor/inputStarGiftAuction/), либо [слаг глубокой ссылки на аукцион »](/api/links/#auction-links) — короткая опознавательная часть ссылки `deep link`, открывающей аукцион прямо в приложении, — через [inputStarGiftAuctionSlug](/constructor/inputStarGiftAuctionSlug/):
    -   `version`: значение поля `version` из локально закешированного [starGiftAuctionState](/constructor/starGiftAuctionState/); `0`, если закешированного [starGiftAuctionState](/constructor/starGiftAuctionState/) ещё нет.

    Вызов этого метода также подписывает пользователя на обновления [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) по указанному аукциону на число секунд, заданное полем `timeout` в [payments.starGiftAuctionState](/constructor/payments.starGiftAuctionState/); если пользователь всё ещё находится на странице состояния аукциона, следует повторно вызвать метод по истечении `timeout` секунд, чтобы продолжать получать обновления.

    Кроме того, сервер самостоятельно присылает [updateStarGiftAuctionUserState](/constructor/updateStarGiftAuctionUserState/) — без необходимости опрашивать [payments.starGiftAuctionState](/constructor/payments.starGiftAuctionState/) — в следующих случаях:

    -   Пользователь делает ставку
    -   Пользователь выигрывает подарок

    Если переданное значение `version` совпадает с версией на сервере, информация об аукционе не изменилась, и поэтому возвращается [starGiftAuctionStateNotModified](/constructor/starGiftAuctionStateNotModified/): обратите внимание, что подписка на обновления при этом **всё равно** продлевается.

    Учтите, что [starGiftAuctionStateNotModified](/constructor/starGiftAuctionStateNotModified/) может быть возвращён **только** этим методом и никогда не приходит в обновлениях или в результатах других методов.

    Учтите, что [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) и [updateStarGiftAuctionUserState](/constructor/updateStarGiftAuctionUserState/) НЕ содержат связанный объект [starGift](/constructor/starGift/) (без которого графические клиенты не смогут отобразить часть информации), а содержат лишь идентификатор подарка.

    В большинстве случаев это не проблема, поскольку такие обновления рассылаются только клиентам, вызвавшим [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/), а этот метод уже возвращает подарок; однако иногда подарок может отсутствовать в кеше. В этом случае (когда обновление об аукционе ссылается на неизвестный аукцион) можно воспользоваться методом [payments.getStarGiftActiveAuctions](/method/payments.getStarGiftActiveAuctions/), который возвращает полную информацию (подарок + аукцион + состояние пользователя) по всем текущим активным аукционам подарков, **на которых пользователь делал ставку**:

-   [payments.getStarGiftActiveAuctions](/method/payments.getStarGiftActiveAuctions/) возвращает все ещё не завершённые аукционы подарков, **на которых пользователь когда-либо делал ставку** (включая аукционы, где ставка пользователя была перебита и возвращена, то есть с установленным флагом `returned` в [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/)); принимает следующие параметры:

    -   `hash`: при первом вызове равен `0`, в дальнейшем в него передаётся хеш выборки по аукционам (вместе с состоянием пользователя на них), в которых участвует пользователь; он вычисляется по локально закешированному списку так:

        По всем активным аукционам (завершённые аукционы отбрасываются по значению поля `end_date` в [StarGiftAuctionState](/type/StarGiftAuctionState/)), на которых пользователь делал ставку (оставляются только аукционы с установленным флагом `bid_date` в [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/)), вычислите [хеш »](/api/offsets/#hash-generation), передавая для каждого отобранного аукциона значение `version` из [starGiftAuctionState](/constructor/starGiftAuctionState/), а следом — значение `bid_date` из [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/).

        [Пример (tdesktop) »](https://github.com/telegramdesktop/tdesktop/blob/9cca0059b5cdc6be94ba355bf91d69d890dfdf75/Telegram/SourceFiles/data/components/gift_auctions.cpp#L335)

    Основное назначение метода [payments.getStarGiftActiveAuctions](/method/payments.getStarGiftActiveAuctions/) — сразу при запуске приложения показать значок аукциона в списке чатов, не дожидаясь прихода обновлений [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) в реальном времени: клиент вызывает его, чтобы выяснить, в каких аукционах участвует пользователь, и заранее отобразить значок.

    Этим он отличается от [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/), который вызывается в момент открытия пользователем конкретного аукциона — чтобы получить его полное состояние, подписаться на обновления в реальном времени и отрисовать подробный интерфейс аукциона.

Любой [starGift](/constructor/starGift/) с установленным флагом `auction` (и связанными с ним флагами) доступен только через аукцион: его **нельзя** купить обычным [способом отправки подарков »](/api/gifts/#sending-gifts).

Поле `auction_slug` в [starGift](/constructor/starGift/) содержит [слаг глубокой ссылки на аукцион »](/api/links/#auction-links), по которому можно построить [глубокую ссылку на аукцион »](/api/links/#auction-links).

Поле `background` в [starGift](/constructor/starGift/) содержит палитру фона по умолчанию для данного типа подарка; она же используется при отрисовке превью аукциона.

Активные или ещё не начавшиеся аукционы описываются конструкторами [starGiftAuctionState](/constructor/starGiftAuctionState/).

Примечание: применяйте новые входящие объекты [starGiftAuctionState](/constructor/starGiftAuctionState/) из [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) и из результатов вызова методов только в том случае, если входящее значение `version` больше локально закешированного, — сервер иногда возвращает в результатах методов и/или в обновлениях слегка устаревшие закешированные версии.

Завершённые же аукционы описываются конструктором [starGiftAuctionStateFinished](/constructor/starGiftAuctionStateFinished/), у которого нет поля `version`: его следует безусловно применять поверх любого локально закешированного [starGiftAuctionState](/constructor/starGiftAuctionState/), так как это окончательное и необратимое состояние любого аукциона.

Как уже сказано выше, информация об аукционе разделена между [StarGiftAuctionState](/type/StarGiftAuctionState/), [starGift](/constructor/starGift/) и [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/); ниже — более подробный обзор.

Подарки, полученные на аукционе коллекционных подарков, нельзя [обменять обратно на Telegram Stars »](/api/gifts/#converting-a-gift-back-into-stars).

### Ход аукциона

```
auctionBidLevel#310240cc pos:int amount:long date:int = AuctionBidLevel;

starGiftAuctionRound#3aae0528 num:int duration:int = StarGiftAuctionRound;
starGiftAuctionRoundExtendable#0aa021e5 num:int duration:int extend_top:int extend_window:int = StarGiftAuctionRound;

starGift#313a9547 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true auction:flags.11?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int auction_slug:flags.11?string gifts_per_round:flags.11?int auction_start_date:flags.11?int upgrade_variants:flags.12?int background:flags.13?StarGiftBackground = StarGift;

starGiftAuctionState#771a4e66 version:int start_date:int end_date:int min_bid_amount:long bid_levels:Vector<AuctionBidLevel> top_bidders:Vector<long> next_round_at:int last_gift_num:int gifts_left:int current_round:int total_rounds:int rounds:Vector<StarGiftAuctionRound> = StarGiftAuctionState;
starGiftAuctionStateFinished#972dabbf flags:# start_date:int end_date:int average_price:long listed_count:flags.0?int fragment_listed_count:flags.1?int fragment_listed_url:flags.1?string = StarGiftAuctionState;

starGiftAuctionUserState#2eeed1c4 flags:# returned:flags.1?true bid_amount:flags.0?long bid_date:flags.0?int min_bid_amount:flags.0?long bid_peer:flags.0?Peer acquired_count:int = StarGiftAuctionUserState;

inputInvoiceStarGiftAuctionBid#1ecafa10 flags:# hide_name:flags.0?true update_bid:flags.2?true peer:flags.3?InputPeer gift_id:long bid_amount:long message:flags.1?TextWithEntities = InputInvoice;

messageActionStarGift#ea2c31d3 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true auction_acquired:flags.17?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int to_id:flags.18?Peer gift_num:flags.19?int = MessageAction;

starGiftAuctionAcquiredGift#42b00348 flags:# name_hidden:flags.0?true peer:Peer date:int bid_amount:long round:int pos:int message:flags.1?TextWithEntities gift_num:flags.2?int = StarGiftAuctionAcquiredGift;

payments.starGiftAuctionAcquiredGifts#7d5bd1f0 gifts:Vector<StarGiftAuctionAcquiredGift> users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionAcquiredGifts;


webPageAttributeStarGiftAuction#01c641c2 gift:StarGift end_date:int = WebPageAttribute;

---functions---

payments.getStarGiftAuctionAcquiredGifts#6ba2cbec gift_id:long = payments.StarGiftAuctionAcquiredGifts;
```

Аукцион начинается в момент [StarGiftAuctionState](/type/StarGiftAuctionState/).`start_date` и завершается в момент [StarGiftAuctionState](/type/StarGiftAuctionState/).`end_date` (оба поля — временные метки UNIX).

Каждый аукцион состоит из [starGiftAuctionState](/constructor/starGiftAuctionState/).`total_rounds` раундов: в каждом раунде определённое количество (N = [starGift](/constructor/starGift/).`gifts_per_round`) экземпляров конкретного подарка (того самого [starGift](/constructor/starGift/)) распределяется между `N` участниками с наибольшими ставками, то есть всего разыгрывается [starGift](/constructor/starGift/).`gifts_per_round` `*` [starGiftAuctionState](/constructor/starGiftAuctionState/).`total_rounds` подарков.

Поле [starGiftAuctionState](/constructor/starGiftAuctionState/).`current_round` указывает текущий активный раунд аукциона.

Если ваша ставка не вошла в первые `N`, она автоматически переносится в следующий раунд. После того как все подарки разыграны, все оставшиеся ставки автоматически возвращаются.

Можно участвовать более чем в одном раунде и получить несколько подарков, а также повысить свои шансы, в любой момент увеличив ставку: ставки делаются с помощью [Telegram Stars](/api/stars/).

Один и тот же пользователь может одновременно участвовать в нескольких активных аукционах: у каждого аукциона есть собственный [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/), а список всех активных аукционов, где сделана ставка, можно получить методом [payments.getStarGiftActiveAuctions](/method/payments.getStarGiftActiveAuctions/).

Минимальный размер ставки содержится в [starGiftAuctionState](/constructor/starGiftAuctionState/).`min_bid_amount`; однако если пользователь уже делал ставку на этом аукционе, то вместо него обязательно использовать значение из [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/).`min_bid_amount`.

Сделанную ставку нельзя отозвать: возможных исходов всего три — выигрыш (в текущем или в любом из последующих раундов, поскольку ставка переносится автоматически), увеличение размера ставки либо возврат средств, если пользователь проигрывает по всем ставкам и аукцион завершается.

Сделанные ставки отображаются в [истории транзакций Stars »](/api/stars/) с установленным флагом `stargift_auction_bid`.

Чтобы сделать ставку, вызовите [payments.getPaymentForm](/method/payments.getPaymentForm/), передав [inputInvoiceStarGiftAuctionBid](/constructor/inputInvoiceStarGiftAuctionBid/), а затем следуйте [обычному процессу оплаты »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product).

[@term:peer] Конструктор принимает следующие параметры (`peer` — пир, то есть пользователь, чат или канал как адресат):

-   `peer`: идентификатор пользователя или канала (для канала — только если установлен флаг [channelFull](/constructor/channelFull/).`stargifts_available`), который получит подарок
-   `gift_id`: идентификатор подарка, из [starGift](/constructor/starGift/).`id`
-   `message`: необязательное сообщение, которое будет приложено к подарку, если мы выиграем этот раунд: максимальная длина этого поля задаётся [значением клиентской конфигурации stargifts\_message\_length\_max »](/api/config/#stargifts-message-length-max).  
    Не должно устанавливаться при изменении существующей ставки, так как для уже сделанных ставок это значение изменить нельзя.
-   `hide_name`: если флаг установлен, ваше имя будет скрыто в случае, если получатель решит показать подарок в своём профиле (при этом он всё равно будет видеть, что подарок отправили вы).  
    Не должно устанавливаться при изменении существующей ставки, так как для уже сделанных ставок это значение изменить нельзя.
-   `bid_amount`: полный размер ставки в [Telegram Stars](/api/stars/).
-   `peer`: получатель, который получит подарок, если мы выиграем этот раунд: обязательно указывается при новой ставке и не должно устанавливаться при изменении существующей ставки, так как для уже сделанных ставок это значение изменить нельзя.
-   `update_bid`: должно быть установлено при увеличении уже существующей ставки.

Флаги `bid_amount`, `bid_date`, `bid_peer` и `min_bid_amount` конструктора [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) устанавливаются все вместе, если пользователь ранее делал ставку:

-   [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/).`bid_amount` содержит размер сделанной ставки в [Telegram Stars](/api/stars/)
-   [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/).`bid_date` содержит временную метку UNIX, указывающую, когда была сделана ставка
-   [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/).`bid_peer` содержит пира, который получит подарок, если вы выиграете этот раунд
-   [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/).`min_bid_amount` содержит минимально допустимый размер ставки в [Telegram Stars](/api/stars/); если поле задано, оно переопределяет [starGiftAuctionState](/constructor/starGiftAuctionState/).`min_bid_amount` для текущего пользователя

Поле [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/).`acquired_count` содержит количество подарков, приобретённых текущим пользователем в этом аукционе к настоящему моменту.

Флаг [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/).`returned` устанавливается, если ставка была возвращена пользователю: её перебили настолько, что она выпала за пределы первых [starGiftAuctionState](/constructor/starGiftAuctionState/).`gifts_left` позиций, а значит, даже если новых ставок больше не будет, пользователь не получит ни одного подарка. Поэтому ставка полностью снимается с аукциона, и для повторного участия пользователь обязан вручную сделать новую ставку.

Ниже описаны остальные поля конструктора [starGiftAuctionState](/constructor/starGiftAuctionState/):

-   `gifts_left` содержит количество подарков, которые ещё можно разыграть в аукционе (переопределяет локально закешированное [starGift](/constructor/starGift/).`availability_remains`, где хранится то же значение, но с отставанием, поскольку оно не обновляется через [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/)).

-   `top_bidders` содержит идентификаторы пользователей, занимающих три первых места по размеру ставки; соответствующие пользователи возвращаются в векторе `users` содержащего объекта как [min](/api/min/)-пользователи.

-   `rounds` содержит полную и подробную информацию обо всех раундах аукциона в виде списка объектов [StarGiftAuctionRound](/type/StarGiftAuctionRound/): учтите, что каждый [StarGiftAuctionRound](/type/StarGiftAuctionRound/) описывает один или несколько раундов (а именно каждый [StarGiftAuctionRound](/type/StarGiftAuctionRound/) охватывает раунды начиная с `num` и до `next.num-1` включительно, где `next` — следующий [StarGiftAuctionRound](/type/StarGiftAuctionRound/)), так что все раунды аукциона описываются компактно.

    Продлеваемые раунды содержат также параметры `extend_top` и `extend_window`: они означают, что изменения в первых `extend_top` позициях по ставкам продлевают текущий раунд на `extend_window` секунд.

-   `last_gift_num` содержит количество подарков, разыгранных в предыдущем раунде, а также используется для вычисления примерного номера подарка, который достанется текущему пользователю, если он сделал ставку, — подробнее см. ниже.

-   `bid_levels` перечисляет ставки для разных позиций в рейтинге, представленные конструктором [auctionBidLevel](/constructor/auctionBidLevel/): для первых 100 мест указываются точные значения, а для дальних позиций возвращаются всё более редкие опорные точки (например, 1, 2, 3, ..., 100, 200, 300, ..., 900, 1000, 2000, ..., [starGiftAuctionState](/constructor/starGiftAuctionState/).`gifts_left`).

    Уровни отсортированы по возрастанию, как показано в примере.

    Чтобы оценить текущую позицию пользователя, используйте `bid_levels` вместе с [starGiftAuctionState](/constructor/starGiftAuctionState/).`top_bidders`, [starGiftAuctionState](/constructor/starGiftAuctionState/).`last_gift_num`, [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/).`bid_amount` и [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/).`bid_date` следующим образом:

    -   Если идентификатор текущего пользователя есть в `top_bidders`, позиция в точности равна индексу внутри `top_bidders` плюс единица (так как места нумеруются с 1)

    -   Иначе перебирайте `bid_levels`, пока не выполнится одно из условий:

        -   ([auctionBidLevel](/constructor/auctionBidLevel/).`amount` равно размеру нашей ставки И [auctionBidLevel](/constructor/auctionBidLevel/).`date` больше либо равно дате нашей ставки) ЛИБО
        -   [auctionBidLevel](/constructor/auctionBidLevel/).`amount` меньше нашей ставки

        Иными словами, при равных размерах ставок выше стоит та, что сделана раньше; а приблизительные позиции округляются вверх, до следующей возвращённой опорной точки.

        Позиция пользователя тогда равна значению `pos` выбранного [auctionBidLevel](/constructor/auctionBidLevel/).  
        Если по двум правилам выше не нашлось ни одного подходящего [auctionBidLevel](/constructor/auctionBidLevel/), позиция равна `pos` последнего [auctionBidLevel](/constructor/auctionBidLevel/) плюс единица.

    Ожидаемый номер коллекционного экземпляра для ставки текущего пользователя оценивается как `last_gift_num + user_position`.

[@term:gift_num] Выигранные подарки доставляются в виде сервисных сообщений [messageActionStarGift](/constructor/messageActionStarGift/) с установленным флагом `auction_acquired`.  
Поле `to_id` указывает конечного получателя подарка, а `gift_num` содержит коллекционный номер — порядковый номер экземпляра подарка в его коллекционной серии.

Чтобы получить список подарков, выигранных текущим пользователем на аукционе, используйте [payments.getStarGiftAuctionAcquiredGifts](/method/payments.getStarGiftAuctionAcquiredGifts/).

Каждый возвращаемый [starGiftAuctionAcquiredGift](/constructor/starGiftAuctionAcquiredGift/) содержит пир получателя, размер ставки, номер раунда, позицию, необязательное сообщение, флаг скрытия имени и необязательное поле `gift_num` с коллекционным номером.

После завершения аукциона метод [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/) будет возвращать [starGiftAuctionStateFinished](/constructor/starGiftAuctionStateFinished/) с итоговыми значениями `start_date`, `end_date` и `average_price`.

Кроме того, [starGiftAuctionStateFinished](/constructor/starGiftAuctionStateFinished/) может содержать флаги `listed_count` и `fragment_listed_count`+`fragment_listed_url` с количеством подарков этого аукциона, которые сейчас перепродаются в Telegram и на [Fragment](https://fragment.com); когда пользователь нажимает на соответствующую подпись в интерфейсе, клиент должен открыть список подарков, выставленных на перепродажу, следующим образом:

-   для `listed_count` — вызвать [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/) с идентификатором подарка, следуя обычному [порядку выбора подарка »](/api/gifts/#sending-gifts)
-   для `fragment_listed_count` — открыть `fragment_listed_url` в браузере.

[Глубокие ссылки на аукционы »](/api/links/#auction-links) имеют [webPage](/constructor/webPage/).`type`, равный `telegram_auction`, и содержат атрибут [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/).
