---
title: "Подарки Telegram"
original: "https://core.telegram.org/api/gifts"
section: api
description: "Пользователи могут отправлять друзьям подарки. Получатель подарка может показать его на своей странице профиля или обменять на Telegram Stars ». Telegram Stars пригодятся для…"
layout: layout.njk
---

# Подарки Telegram

[@term:Mini App] Пользователи могут отправлять друзьям **подарки**. Получатели подарков могут показывать их на своих страницах профиля или обменивать на [Telegram Stars »](/api/stars/). Telegram Stars пригодятся для многого: например, ими поддерживают авторов и оплачивают услуги в Mini Apps (мини-приложениях, работающих прямо внутри Telegram).

### Отправка подарков

```
payments.starGiftsNotModified#a388a368 = payments.StarGifts;
payments.starGifts#2ed82995 hash:int gifts:Vector<StarGift> chats:Vector<Chat> users:Vector<User> = payments.StarGifts;

starGift#313a9547 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true auction:flags.11?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int auction_slug:flags.11?string gifts_per_round:flags.11?int auction_start_date:flags.11?int upgrade_variants:flags.12?int background:flags.13?StarGiftBackground = StarGift;

payments.checkCanSendGiftResultOk#374fa7ad = payments.CheckCanSendGiftResult;
payments.checkCanSendGiftResultFail#d5e58274 reason:TextWithEntities = payments.CheckCanSendGiftResult;

inputInvoiceStarGift#e8625e92 flags:# hide_name:flags.0?true include_upgrade:flags.2?true peer:InputPeer gift_id:long message:flags.1?TextWithEntities = InputInvoice;
inputInvoiceStarGiftResale#c39f5324 flags:# ton:flags.0?true slug:string to_id:InputPeer = InputInvoice;

messageActionStarGift#ea2c31d3 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true auction_acquired:flags.17?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int to_id:flags.18?Peer gift_num:flags.19?int = MessageAction;

inputPrivacyKeyStarGiftsAutoSave#e1732341 = InputPrivacyKey;
privacyKeyStarGiftsAutoSave#2ca4fdf8 = PrivacyKey;

---functions---

payments.getStarGifts#c4563590 hash:int = payments.StarGifts;
payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true stars_only:flags.5?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
payments.checkCanSendGift#c0c4edc9 gift_id:long = payments.CheckCanSendGiftResult;
payments.saveStarGift#2a2a697c flags:# unsave:flags.0?true stargift:InputSavedStarGift = Bool;
```

Если флаг [userFull](/constructor/userFull/).`display_gifts_button` установлен и у нас, и у другого пользователя (он изменяется через [globalPrivacySettings](/constructor/globalPrivacySettings/)), в поле ввода личного чата с этим пользователем всегда должна отображаться кнопка подарка: по нажатию открывается интерфейс подарков, предлагающий подарить подписку [Telegram Premium »](/api/premium/#gifting-telegram-premium) или [Telegram Gifts »](/api/gifts/).

Тот же интерфейс дарения должен быть всегда (безусловно) доступен через окно выбора чата, вызываемое пунктом «Отправить подарок» в настройках приложения.

Пользователи могут запретить приём отдельных типов подарков, заполнив флаг [globalPrivacySettings](/constructor/globalPrivacySettings/).`disallowed_gifts`; другим пользователям он виден в [userFull](/constructor/userFull/).`disallowed_gifts`.

-   Используйте [payments.getStarGifts](/method/payments.getStarGifts/), чтобы получить полный список доступных [starGifts](/constructor/starGift/); этот метод может вернуть и распроданные подарки с установленным флагом `availability_resale`, который означает, что часть подарков этого типа выставлена на [перепродажу »](#reselling-collectible-gifts)

-   Используйте [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/), чтобы получить подарки, выставленные на перепродажу сейчас.  
    Передайте возвращённое значение [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).`next_offset` в параметр `offset` следующего вызова метода, чтобы получить следующую страницу результатов.

    Параметры `sort_by_price` и `sort_by_num` взаимно исключают друг друга; если не задан ни один из них, результаты сортируются по unixtime последнего изменения цены перепродажи (по убыванию).

    Тот же метод позволяет получить полный список доступных атрибутов ([payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).`attributes`) для указанного типа подарка: чтобы получить его, поле `attributes_hash` **обязано** быть заполнено и равно `0`.  
    В параметр `attributes_hash` можно также передать ранее полученное значение [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).`attributes_hash`, чтобы не запрашивать атрибуты повторно, если они не изменились.

    Если верно хотя бы одно из перечисленного:

    -   Параметр метода `attributes_hash` _не_ задан
    -   Параметр `offset` непустой
    -   Переданное значение `attributes_hash` совпадает со значением на стороне сервера

    ...поле [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).`attributes` возвращено **не** будет, поскольку поле [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).`attributes` относится ко всем подаркам определённого типа, а не только к тем, что попали на текущую страницу.  
    Установка параметра-фильтра `attributes` этого метода также никак не влияет на возвращаемое поле [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).`attributes`.

    Возвращаемое поле [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).`counters` связано с полем [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).`attributes` и указывает общее количество подарков, обладающих определённым атрибутом: поле `counters` _будет_ возвращено, даже если параметр `attributes_hash` не задан, но не будет возвращено, если поле `offset` непустое.

    Наконец, параметру `attributes` метода [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/) можно задать значение, чтобы получить только подарки с указанными атрибутами.  
    Если флаг заполнен, но атрибуты какого-либо типа не перечислены, разрешены все атрибуты этого типа.  
    Учтите, что на возвращаемые `attributes` и `counters` это не влияет.

Подарки [starGift](/constructor/starGift/) с установленным флагом `limited_per_user` и `per_user_remains <= 0` не могут быть куплены текущим пользователем, поскольку он уже купил `per_user_total` подарков того же типа (себе или кому-то другому).

Подарки [starGift](/constructor/starGift/) с установленным флагом `locked_until_date` _возможно_ недоступны для покупки до указанного времени в формате unixtime: чтобы проверить, так ли это, вызовите [payments.checkCanSendGift](/method/payments.checkCanSendGift/).  
Этот метод вернёт [payments.checkCanSendGiftResultFail](/constructor/payments.checkCanSendGiftResultFail/), если подарок отправить нельзя, вместе с локализованным описанием причины, по которой это пока невозможно.  
В противном случае он вернёт [payments.checkCanSendGiftResultOk](/constructor/payments.checkCanSendGiftResultOk/), и тогда клиенту всё равно следует проверить, установлен ли флаг [starGift](/constructor/starGift/).`require_premium`, и если да — потребовать от пользователя оформить подписку [Telegram Premium](/api/premium/) (если он ещё не подписан).

Подарки [starGift](/constructor/starGift/) с установленным флагом `auction` нельзя купить обычным способом через [inputInvoiceStarGift](/constructor/inputInvoiceStarGift/): вместо этого их следует обрабатывать как [аукционы коллекционных подарков »](#collectible-gift-auctions).

[@term:peer] Когда пользователь выбрал подарок, доступный к отправке (не `sold_out`), он может купить его, потратив [starGift](/constructor/starGift/).`stars` [Telegram Stars](/api/stars/) со своего баланса: для этого вызывается [payments.getPaymentForm](/method/payments.getPaymentForm/) с передачей [inputInvoiceStarGift](/constructor/inputInvoiceStarGift/) и следующих параметров (`peer` — пир, то есть адресат: пользователь, чат или канал):

-   `peer`: идентификатор пользователя или канала (только если установлен [channelFull](/constructor/channelFull/).`stargifts_available`), который получит подарок
-   `gift_id`: идентификатор подарка, из [starGift](/constructor/starGift/).`id`
-   `message`: необязательное сообщение, прикладываемое к подарку: максимальная длина этого поля задана в [значении клиентской конфигурации stargifts\_message\_length\_max »](/api/config/#stargifts-message-length-max).
-   `hide_name`: если установлен, ваше имя будет скрыто, когда пир-получатель решит показать подарок в своём профиле (при этом он всё равно увидит, что подарок отправили вы)
-   `include_upgrade`: установите этот флаг, чтобы дополнительно оплатить вперёд [starGift](/constructor/starGift/).`upgrade_stars` [Telegram Stars](/api/stars/), позволив получателю превратить подарок в [коллекционный »](#collectible-gifts) без каких-либо доплат.  
    Учтите, что этот флаг можно установить, только если задано [starGift](/constructor/starGift/).`upgrade_stars`.

При покупке подарка из списка выставленных на [перепродажу »](#reselling-collectible-gifts) передавайте вместо этого [inputInvoiceStarGiftResale](/constructor/inputInvoiceStarGiftResale/):

-   [@term:slug] `slug`: берётся из возвращённого [starGiftUnique](/constructor/starGiftUnique/).`slug` (короткого текстового идентификатора подарка) либо из ссылки
-   `to_id`: идентификатор пользователя или канала, который получит подарок

Затем следуйте [обычной процедуре оплаты »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product).

После завершения оплаты пир-получатель получит от нас [messageService](/constructor/messageService/) с [messageActionStarGift](/constructor/messageActionStarGift/), содержащим сведения о полученном подарке.

Затем пир может показать полученный подарок в своём профиле с помощью [payments.saveStarGift](/method/payments.saveStarGift/).  
Полученные подарки могут также отображаться в профиле автоматически — в зависимости от [настроек приватности](/api/privacy/) пира-получателя (ключ [inputPrivacyKeyStarGiftsAutoSave](/constructor/inputPrivacyKeyStarGiftsAutoSave/)).

Если пользователь решит показать полученный подарок в своём профиле, тот станет доступен для получения всем пользователям, как описано [здесь »](#list-all-received-gifts).  
Тем же методом можно получить все подарки, полученные принадлежащими вам пирами от любого пользователя.

Учтите, что поддержку подарков необходимо отключить, если [флаг клиентской конфигурации `stargifts_blocked` »](/api/config/) выставлен в true.

### Обратный обмен подарка на звёзды

```
---functions---

payments.convertStarGift#74bf076b stargift:InputSavedStarGift = Bool;
```

Принадлежащий пользователю подарок можно обменять на [Telegram Stars](/api/stars/) с помощью [payments.convertStarGift](/method/payments.convertStarGift/); эта операция безвозвратно уничтожает подарок, превращая его в [starGift](/constructor/starGift/).`convert_stars` Telegram Stars, которые зачисляются на баланс пользователя (учтите, что [starGift](/constructor/starGift/).`convert_stars` будет меньше покупной цены подарка — [starGift](/constructor/starGift/).`stars`).

Обменять подарок обратно на [Telegram Stars](/api/stars/) можно, только если он был получен менее чем [`stargifts_convert_period_max` секунд назад, согласно значению клиентской конфигурации »](/api/config/#stargifts-convert-period-max), и если поле [starGift](/constructor/starGift/).`convert_stars` не равно `0`.

Подарки, приобретённые на [аукционах коллекционных подарков »](#collectible-gift-auctions), обменять обратно на [Telegram Stars](/api/stars/) нельзя.

### Список всех полученных подарков

```
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;

---functions---

payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer_color_available:flags.9?true exclude_hosted:flags.10?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
```

Метод [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/) позволяет получить полный список подарков, полученных пиром, а именно:

-   Пользователем, при peer=[inputPeerUser](/constructor/inputPeerUser/) (в том числе пользователем, отличным от нас)
-   Каналом, при peer=[inputPeerChannel](/constructor/inputPeerChannel/) (в том числе каналом, который не принадлежит текущему авторизованному пользователю)
-   [Подключённым бизнес-пользователем](/api/bots/connected-business-bots/) (когда метод выполняется от имени бота через бизнес-подключение), при peer=[inputPeerUser](/constructor/inputPeerUser/) управляемого пользователя

Параметры метода позволяют отфильтровать подарки по различным критериям, подробности — на [странице метода](/method/payments.getSavedStarGifts/).

Учтите, что вопреки названию метод позволяет получать как «сохранённые», так и «несохранённые» подарки (то есть как закреплённые в профиле, так и не закреплённые) для пользователей и каналов, принадлежащих текущему авторизованному пользователю или управляемых им, — в зависимости от переданных флагов.

По умолчанию метод может вернуть и [размещённые коллекционные подарки »](#hosted-collectible-gifts); установите `exclude_hosted`, чтобы получить только подарки, которыми `peer` действительно владеет или которые он действительно получил.

### Список конкретных принадлежащих вам подарков

```
inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
inputSavedStarGiftSlug#2085c238 slug:string = InputSavedStarGift;

payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;

---functions---

payments.getSavedStarGift#b455a106 stargift:Vector<InputSavedStarGift> = payments.SavedStarGifts;
```

Метод [payments.getSavedStarGift](/method/payments.getSavedStarGift/) позволяет получить сведения о конкретных подарках, принадлежащих пиру, который управляется текущим авторизованным пользователем.

Учтите, что вопреки названию метод позволяет получать как «сохранённые», так и «несохранённые» подарки (то есть как закреплённые в профиле, так и не закреплённые).

### Уведомления о подарках, полученных каналом

```
---functions---

payments.toggleChatStarGiftNotifications#60eaefa1 flags:# enabled:flags.0?true peer:InputPeer = Bool;
```

Метод [payments.toggleChatStarGiftNotifications](/method/payments.toggleChatStarGiftNotifications/) позволяет включить или отключить приём уведомлений о каждом [подарке »](/api/gifts/), полученном указанным каналом: вызвать его могут только администраторы с [правом администратора](/constructor/chatAdminRights/) `post_messages`.

Уведомления приходят от канала в виде сервисных сообщений [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/) и [messageActionStarGift](/constructor/messageActionStarGift/).

### Закрепление полученного подарка

```
---functions---

payments.toggleStarGiftsPinnedToTop#1513e7b0 peer:InputPeer stargift:Vector<InputSavedStarGift> = Bool;
```

Полученный подарок можно закрепить вверху профиля пользователя или принадлежащих ему каналов с помощью [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/).

Максимальное количество подарков, которые можно закрепить в профиле, задано в [значении клиентской конфигурации stargifts\_pinned\_to\_top\_limit »](/api/config/#stargifts-pinned-to-top-limit).

### Коллекции подарков

```
inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
inputSavedStarGiftSlug#2085c238 slug:string = InputSavedStarGift;

starGiftCollection#9d6b13b0 flags:# collection_id:int title:string icon:flags.0?Document gifts_count:int hash:long = StarGiftCollection;

payments.starGiftCollectionsNotModified#a0ba4f17 = payments.StarGiftCollections;
payments.starGiftCollections#8a2932f3 collections:Vector<StarGiftCollection> = payments.StarGiftCollections;

---functions---

payments.createStarGiftCollection#1f4a0e87 peer:InputPeer title:string stargift:Vector<InputSavedStarGift> = StarGiftCollection;
payments.getStarGiftCollections#981b91dd peer:InputPeer hash:long = payments.StarGiftCollections;
payments.updateStarGiftCollection#4fddbee7 flags:# peer:InputPeer collection_id:int title:flags.0?string delete_stargift:flags.1?Vector<InputSavedStarGift> add_stargift:flags.2?Vector<InputSavedStarGift> order:flags.3?Vector<InputSavedStarGift> = StarGiftCollection;
payments.reorderStarGiftCollections#c32af4cc peer:InputPeer order:Vector<int> = Bool;
payments.deleteStarGiftCollection#ad5648e8 peer:InputPeer collection_id:int = Bool;

payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer_color_available:flags.9?true exclude_hosted:flags.10?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
```

Коллекции подарков объединяют несколько принадлежащих пользователю или [размещённых коллекционных подарков »](#hosted-collectible-gifts); каждый подарок может входить сразу в несколько коллекций.

Создать коллекцию позволяет метод [payments.createStarGiftCollection](/method/payments.createStarGiftCollection/).

Чтобы получить подарки, входящие в коллекцию, вызовите [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/) с установленным флагом `collection_id`.

Метод [payments.getStarGiftCollections](/method/payments.getStarGiftCollections/) возвращает список всех коллекций подарков указанного пира.

**Примечание**: параметр `hash` метода [payments.getStarGiftCollections](/method/payments.getStarGiftCollections/) вычисляется по полю [starGiftCollection](/constructor/starGiftCollection/).`hash` (а **не** по полю `collection_id`) всех ранее полученных коллекций — это позволяет не возвращать результаты, если набор доступных коллекций и их содержимое не изменились.

Метод [payments.updateStarGiftCollection](/method/payments.updateStarGiftCollection/) позволяет добавлять подарки в коллекцию, удалять их оттуда, менять их порядок, а также переименовывать саму коллекцию.

Метод [payments.reorderStarGiftCollections](/method/payments.reorderStarGiftCollections/) позволяет изменить порядок коллекций в профиле принадлежащего пользователю пира.

Удалить коллекцию подарков позволяет метод [payments.deleteStarGiftCollection](/method/payments.deleteStarGiftCollection/).

Профиль может содержать не более [stargifts\_collections\_limit »](/api/config/#stargifts-collections-limit) коллекций подарков, а каждая из них — не более [stargifts\_collection\_gifts\_limit](/api/config/#stargifts-collection-gifts-limit) подарков.

[@term:deep link] Поделиться коллекцией подарков можно с помощью [глубоких ссылок на коллекцию подарков »](/api/links/#gift-collection-links) (`deep link` — ссылка вида `tg://`, которая открывает нужный раздел прямо в приложении Telegram).

### Коллекционные подарки

[Полученный подарок](#sending-gifts) можно превратить в [коллекционный подарок](https://telegram.org/blog/collectible-gifts-and-more#collectible-gifts).

[@term:NFT] У коллекционных подарков есть **особые атрибуты**, их можно **передавать** другим пользователям и **выставлять на аукционы** на NFT-маркетплейсах (NFT — невзаимозаменяемый токен, уникальная запись о владении в блокчейне).

При улучшении подарка открывается **новый облик** — один из десятков **уникальных вариантов оформления**, созданных художниками Telegram. Кроме того, коллекционный подарок получает случайный набор **вторичных атрибутов**: цвет фона, значок и номер. Благодаря этому каждый коллекционный подарок — **уникальное произведение искусства**, причём одни из них оказываются **более редкими**, чем другие.

#### Улучшение подарка до коллекционного

```
messageActionStarGift#ea2c31d3 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true auction_acquired:flags.17?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int to_id:flags.18?Peer gift_num:flags.19?int = MessageAction;
savedStarGift#41df43fc flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long gift_num:flags.19?int can_craft_at:flags.20?int = SavedStarGift;

starGift#313a9547 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true auction:flags.11?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int auction_slug:flags.11?string gifts_per_round:flags.11?int auction_start_date:flags.11?int upgrade_variants:flags.12?int background:flags.13?StarGiftBackground = StarGift;

starGiftAttributeRarity#36437737 permille:int = StarGiftAttributeRarity;
starGiftAttributeRarityUncommon#dbce6389 = StarGiftAttributeRarity;
starGiftAttributeRarityRare#f08d516b = StarGiftAttributeRarity;
starGiftAttributeRarityEpic#78fbf3a8 = StarGiftAttributeRarity;
starGiftAttributeRarityLegendary#cef7e7a8 = StarGiftAttributeRarity;

starGiftAttributeModel#565251e2 flags:# crafted:flags.0?true name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributePattern#4e7085ea name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributeBackdrop#9f2504e4 name:string backdrop_id:int center_color:int edge_color:int pattern_color:int text_color:int rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributeOriginalDetails#e0bff26c flags:# sender_id:flags.0?Peer recipient_id:Peer date:int message:flags.1?TextWithEntities = StarGiftAttribute;

starGiftBackground#aff56398 center_color:int edge_color:int text_color:int = StarGiftBackground;

starGiftUpgradePrice#99ea331d date:int upgrade_stars:long = StarGiftUpgradePrice;

payments.starGiftUpgradePreview#3de1dfed sample_attributes:Vector<StarGiftAttribute> prices:Vector<StarGiftUpgradePrice> next_prices:Vector<StarGiftUpgradePrice> = payments.StarGiftUpgradePreview;

payments.starGiftUpgradeAttributes#46c6e36f attributes:Vector<StarGiftAttribute> = payments.StarGiftUpgradeAttributes;

inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
inputSavedStarGiftSlug#2085c238 slug:string = InputSavedStarGift;

---functions---

payments.getStarGiftUpgradePreview#9c9abcb1 gift_id:long = payments.StarGiftUpgradePreview;
payments.getStarGiftUpgradeAttributes#6d038b58 gift_id:long = payments.StarGiftUpgradeAttributes;
payments.upgradeStarGift#aed6e4f5 flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = Updates;
```

Полученный подарок можно улучшить до коллекционного, если установлен флаг [messageActionStarGift](/constructor/messageActionStarGift/)/[savedStarGift](/constructor/savedStarGift/).`can_upgrade`.

Чтобы заранее узнать будущие цены улучшения и возможные **атрибуты** (выбираемые случайным образом), которые подарок может получить после улучшения, вызовите [payments.getStarGiftUpgradePreview](/method/payments.getStarGiftUpgradePreview/).

#### Перечисление всех возможных коллекционных вариантов

Чтобы получить **полный** список только тех коллекционных атрибутов, которые могут выпасть для подарка этого типа, вызовите [payments.getStarGiftUpgradeAttributes](/method/payments.getStarGiftUpgradeAttributes/), передав в `gift_id` значение [starGift](/constructor/starGift/).`id`.

Метод [payments.getStarGiftUpgradeAttributes](/method/payments.getStarGiftUpgradeAttributes/) возвращает все конструкторы [starGiftAttributeModel](/constructor/starGiftAttributeModel/), [starGiftAttributePattern](/constructor/starGiftAttributePattern/) и [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/), которые могут быть назначены подаркам этого типа при их превращении в [коллекционные подарки »](#collectible-gifts).

У каждого атрибута есть конструктор [StarGiftAttributeRarity](/type/StarGiftAttributeRarity/), который описывает вероятность выпадения этого атрибута.

Метод также возвращает модели с установленным флагом [starGiftAttributeModel](/constructor/starGiftAttributeModel/).`crafted`: они зарезервированы для [изготовления »](#crafting-collectible-gifts), и их следует отфильтровывать при обычном предпросмотре улучшения. И наоборот, в интерфейсе изготовления следует показывать только модели, доступные исключительно при изготовлении.

Поле [starGift](/constructor/starGift/).`upgrade_variants` содержит общее число коллекционных вариантов, доступных для подарка этого типа; его можно сочетать с несколькими примерами записей [starGiftAttributeModel](/constructor/starGiftAttributeModel/) из [payments.getStarGiftUpgradeAttributes](/method/payments.getStarGiftUpgradeAttributes/), чтобы отрисовать интерфейс предпросмотра.

Поле [starGift](/constructor/starGift/).`background` содержит палитру фона по умолчанию для подарка этого типа; она используется при отрисовке карточек подарков и предпросмотра [аукционов »](#collectible-gift-auctions) до того, как выбран конкретный коллекционный фон.

Если установлено поле [starGift](/constructor/starGift/).`peer_color_available`, коллекционные подарки этого типа можно также использовать для создания [цветовой палитры и узора оформления сообщений »](/api/colors/#collectible-message-palettes).

Текущая цена улучшения содержится в поле [starGift](/constructor/starGift/).`upgrade_stars`.

Поле [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/).`next_prices` содержит текущую цену улучшения и список будущих цен, каждая из которых снабжена UNIX-меткой времени, указывающей, когда эта цена вступит в силу (текущая цена действует лишь до момента вступления в силу следующей, и так далее для всех цен в списке).

Поле [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/).`prices` содержит похожий список цен улучшения и меток времени, но менее подробный, чем в `next_prices` (то есть цены отстоят друг от друга примерно на месяц); он предназначен главным образом для масштабирования графика цен и для показа более общей картины будущей цены улучшения.

Чтобы улучшить полученный подарок, заплатите [starGift](/constructor/starGift/).`upgrade_stars` [Telegram Stars](/api/stars/): вызовите [payments.getPaymentForm](/method/payments.getPaymentForm/), передав [inputInvoiceStarGiftUpgrade](/constructor/inputInvoiceStarGiftUpgrade/) со следующими параметрами:

-   `stargift`: идентификатор полученного подарка
-   `keep_original_details`: установите этот флаг, чтобы сохранить в улучшенном подарке исходный текст, отправителя и получателя в виде атрибута [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/).  
    Позже эти сведения можно удалить с помощью [inputInvoiceStarGiftDropOriginalDetails](/constructor/inputInvoiceStarGiftDropOriginalDetails/), как описано [здесь »](#dropping-the-original-details-of-an-upgraded-gift).

Затем выполните [обычную процедуру оплаты »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product).

Если исходный отправитель подарка уже оплатил улучшение [так, как описано здесь »](#prepaying-for-someone-elses-upgrade) (на что указывают специальные флаги, перечисленные [здесь »](#prepaying-for-someone-elses-upgrade)), то вместо процедуры оплаты через [payments.getPaymentForm](/method/payments.getPaymentForm/) достаточно вызвать [payments.upgradeStarGift](/method/payments.upgradeStarGift/) с теми же флагами.

Улучшение подарка порождает [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/), содержащий сведения о только что улучшенном подарке в виде [starGiftUnique](/constructor/starGiftUnique/), а также некоторую дополнительную информацию.

##### Удаление исходных сведений из улучшенного подарка

```
messageActionStarGiftUnique#e6c31522 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true craft:flags.16?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long can_craft_at:flags.15?int = MessageAction;

savedStarGift#41df43fc flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long gift_num:flags.19?int can_craft_at:flags.20?int = SavedStarGift;


inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
inputSavedStarGiftSlug#2085c238 slug:string = InputSavedStarGift;

inputInvoiceStarGiftDropOriginalDetails#0923d8d1 stargift:InputSavedStarGift = InputInvoice;

starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true offer:flags.29?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
```

При [превращении подарка в коллекционный »](#upgrade-a-gift-to-a-collectible-gift), если установлен флаг `keep_original_details`, у улучшенного подарка появится атрибут [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/), содержащий исходный текст подарка, отправителя и получателя.

Если у [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)/[savedStarGift](/constructor/savedStarGift/) установлен флаг `drop_original_details_stars`, эти сведения можно удалить, заплатив количество [звёзд](/api/stars/), указанное в `drop_original_details_stars`: для этого используется [inputInvoiceStarGiftDropOriginalDetails](/constructor/inputInvoiceStarGiftDropOriginalDetails/), который передаётся в [обычную процедуру оплаты »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product) вместе с [InputSavedStarGift](/type/InputSavedStarGift/), указывающим на принадлежащий пользователю подарок.

У получившейся [транзакции](/constructor/starsTransaction/) будет установлен флаг `stargift_drop_original_details`.

##### Предоплата улучшения чужого подарка

```
messageActionStarGift#ea2c31d3 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true auction_acquired:flags.17?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int to_id:flags.18?Peer gift_num:flags.19?int = MessageAction;

inputInvoiceStarGiftPrepaidUpgrade#9a0b48b8 peer:InputPeer hash:string = InputInvoice;

messageActionStarGiftUnique#e6c31522 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true craft:flags.16?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long can_craft_at:flags.15?int = MessageAction;
```

Отправляя подарок, отправитель может сразу оплатить его улучшение, установив при покупке флаг [inputInvoiceStarGift](/constructor/inputInvoiceStarGift/).`include_upgrade`.  
У получившегося [messageActionStarGift](/constructor/messageActionStarGift/) будет установлен флаг `prepaid_upgrade`, а у связанного с ним [savedStarGift](/constructor/savedStarGift/) **будет** установлено поле `upgrade_stars` с уплаченной суммой.

Улучшение чужого подарка можно оплатить и постфактум (даже если текущий пользователь не был отправителем этого подарка) — с помощью [inputInvoiceStarGiftPrepaidUpgrade](/constructor/inputInvoiceStarGiftPrepaidUpgrade/), передав пир, которому был отправлен подарок, и хеш улучшения из [messageActionStarGift](/constructor/messageActionStarGift/).`prepaid_upgrade_hash` либо [savedStarGift](/constructor/savedStarGift/).`prepaid_upgrade_hash`.

Затем выполните [обычную процедуру оплаты »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product).

По завершении будет создан новый [messageActionStarGift](/constructor/messageActionStarGift/) с установленным флагом `upgrade_separate` и заполненным полем `gift_msg_id`, содержащим идентификатор того [messageActionStarGift](/constructor/messageActionStarGift/), в котором находится улучшенный подарок; этот идентификатор действителен только для получателя сообщения.

#### Как поделиться коллекционным подарком и получить сведения о нём

```
starGiftUnique#85f0a9cd flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int craft_chance_permille:flags.16?int = StarGift;

payments.uniqueStarGift#416c56e8 gift:StarGift chats:Vector<Chat> users:Vector<User> = payments.UniqueStarGift;

payments.uniqueStarGiftValueInfo#512fe446 flags:# last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:string value:long initial_sale_date:int initial_sale_stars:long initial_sale_price:long last_sale_date:flags.0?int last_sale_price:flags.0?long floor_price:flags.2?long average_price:flags.3?long listed_count:flags.4?int fragment_listed_count:flags.5?int fragment_listed_url:flags.5?string = payments.UniqueStarGiftValueInfo;

---functions---

payments.getUniqueStarGift#a1974d72 slug:string = payments.UniqueStarGift;
payments.getUniqueStarGiftValueInfo#4365af6b slug:string = payments.UniqueStarGiftValueInfo;
```

Сведениями об уникальном подарке можно поделиться, создав [ссылку на коллекционный подарок »](/api/links/#collectible-gift-link) на основе значения `slug` из [starGiftUnique](/constructor/starGiftUnique/).`slug`.

Разбирая полученную ссылку на коллекционный подарок, вызовите [payments.getUniqueStarGift](/method/payments.getUniqueStarGift/), чтобы получить сведения о подарке.

Значение `slug` используется и при покупке подарка, выставленного на [перепродажу »](#reselling-collectible-gifts).

Значение `slug` **принадлежащего пользователю или размещённого у него** коллекционного подарка можно также использовать везде, где API принимает [InputSavedStarGift](/type/InputSavedStarGift/), передавая [inputSavedStarGiftSlug](/constructor/inputSavedStarGiftSlug/).

Метод [payments.getUniqueStarGiftValueInfo](/method/payments.getUniqueStarGiftValueInfo/) позволяет получить сведения о стоимости коллекционного подарка.

#### Размещённые коллекционные подарки

```
starGiftUnique#85f0a9cd flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int craft_chance_permille:flags.16?int = StarGift;

messageActionStarGiftUnique#e6c31522 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true craft:flags.16?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long can_craft_at:flags.15?int = MessageAction;

---functions---

payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer_color_available:flags.9?true exclude_hosted:flags.10?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
```

[@term:host_id] [Коллекционный подарок »](#collectible-gifts), находящийся в [блокчейне TON »](#withdraw-a-collectible-gift-to-the-ton-blockchain), можно привязать к профилю пользователя или канала Telegram, не передавая этому пиру право владения. В этом случае поле [starGiftUnique](/constructor/starGiftUnique/).`host_id` содержит профиль, у которого размещён подарок (профиль-хозяин), тогда как владельцем остаётся кошелёк TON, указанный в [starGiftUnique](/constructor/starGiftUnique/).`owner_address`.

Владелец может [передать »](#transferring-collectible-gifts), [перепродать »](#reselling-collectible-gifts) или [экспортировать »](#withdraw-a-collectible-gift-to-the-ton-blockchain) подарок. Владелец или хозяин профиля может показать или скрыть его в профиле размещения, добавить его в [коллекции подарков »](#gift-collections), использовать его как [эмодзи-статус »](#setting-a-collectible-gift-as-emoji-status), как [палитру и узор оформления сообщений »](#setting-a-collectible-gift-as-message-palette-and-pattern) или как [тему чата »](#setting-a-collectible-gift-as-chat-theme).

Когда подарок привязывается из блокчейна TON к профилю Telegram, в [Избранное »](/api/saved-messages/) этого профиля поступает сервисное сообщение [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/) с установленным флагом `assigned`.

Вызывайте [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/) с параметром `exclude_hosted`, чтобы скрыть подарки, у которых `host_id` равен `peer`, и получить только те подарки, которыми `peer` владеет или которые он получил.

#### Изготовление коллекционных подарков

```
messageActionStarGiftUnique#e6c31522 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true craft:flags.16?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long can_craft_at:flags.15?int = MessageAction;

savedStarGift#41df43fc flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long gift_num:flags.19?int can_craft_at:flags.20?int = SavedStarGift;

starGiftUnique#85f0a9cd flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int craft_chance_permille:flags.16?int = StarGift;

updateStarGiftCraftFail#ac072444 = Update;

---functions---

payments.getCraftStarGifts#fd05dd00 gift_id:long offset:string limit:int = payments.SavedStarGifts;
payments.craftStarGift#b0f9684f stargift:Vector<InputSavedStarGift> = Updates;
```

От 1 до 4 принадлежащих вам коллекционных подарков одного и того же типа (то есть с одинаковым значением [starGiftUnique](/constructor/starGiftUnique/).`gift_id`) можно объединить, чтобы изготовить новый коллекционный подарок того же исходного типа.

У подарков, пригодных для изготовления, установлен флаг [savedStarGift](/constructor/savedStarGift/).`can_craft_at`/[messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/).`can_craft_at`: если он присутствует, подарок можно использовать для изготовления только начиная с указанной даты.

Чтобы получить список принадлежащих вам подарков одного типа, пригодных для изготовления, вызовите [payments.getCraftStarGifts](/method/payments.getCraftStarGifts/) со значением `gift_id`, равным [starGiftUnique](/constructor/starGiftUnique/).`gift_id` первого выбранного подарка (из [savedStarGift](/constructor/savedStarGift/).`gift`/[messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/).`gift`).

Можно также воспользоваться методом [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/) с установленным флагом `for_craft`, чтобы [получить список выставленных на перепродажу коллекционных подарков того же типа »](#reselling-collectible-gifts), пригодных для изготовления (в этом случае для каждого подарка из списка следует также показывать вероятность успеха [starGiftUnique](/constructor/starGiftUnique/).`craft_chance_permille`).

Метод [payments.getStarGiftUpgradeAttributes](/method/payments.getStarGiftUpgradeAttributes/) возвращает все конструкторы [starGiftAttributeModel](/constructor/starGiftAttributeModel/), [starGiftAttributePattern](/constructor/starGiftAttributePattern/) и [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/), которые могут быть назначены подаркам этого типа при их превращении в [коллекционные подарки »](#collectible-gifts).

Метод также возвращает модели с установленным флагом [starGiftAttributeModel](/constructor/starGiftAttributeModel/).`crafted`: они зарезервированы для [изготовления »](#crafting-collectible-gifts), и их следует отфильтровывать при обычном предпросмотре улучшения. И наоборот, в интерфейсе изготовления следует показывать только модели, доступные исключительно при изготовлении.

Чтобы начать изготовление, вызовите [payments.craftStarGift](/method/payments.craftStarGift/), передав от 1 до 4 ссылок [InputSavedStarGift](/type/InputSavedStarGift/) на подарки одного типа.

Изготовление имеет определённую вероятность успеха, которая в интерфейсе выражается в процентах, а в API — в промилле.

Вероятность успеха вычисляется как сумма полей [starGiftUnique](/constructor/starGiftUnique/).`craft_chance_permille` всех переданных подарков, поэтому чем больше подарков передано методу изготовления, тем выше шансы на успех.

Чтобы показать суммарное значение `craft_chance_permille` в интерфейсе, округлите его вверх, прибавив `5`, а затем разделите на `10` — получится значение в процентах.

При отображении предпросмотра атрибутов в интерфейсе изготовления используйте [параметр клиентской конфигурации `stargifts_craft_attribute_permilles` »](/api/config/#stargifts-craft-attribute-permilles), чтобы показать вероятность того, что атрибут исходных подарков сохранится в изготовленном подарке.

Это массив из 4 массивов целых чисел: подмассив с индексом N содержит N+1 целых чисел, каждое из которых задаёт вероятность в промилле.

Сначала выберите подмассив, соответствующий числу подарков, выбранных для изготовления (индекс равен `count(craft_input_gifts)-1`):

```
attr_probability := stargifts_craft_attribute_permilles[count(craft_input_gifts)-1]
```

Затем для каждого подарка из `craft_input_gifts` сгруппируйте в `grouped_attrs`:

-   атрибуты узора с одинаковым идентификатором документа узора;
-   атрибуты фона с одинаковым `backdrop_id`

```
grouped_attr_patterns := Map<long, Vector<starGiftAttributePattern>>
grouped_attr_backdrop := Map<int, Vector<starGiftAttributeBackdrop>>

for gift := range craft_input_gifts {
    for attr := range gift.attributes {
        if cons(attr) == starGiftAttributePattern {
            grouped_attr_patterns[attr.document.id].append(attr)
        } else if cons(attr) == starGiftAttributeBackdrop {
            grouped_attr_backdrop[attr.backdrop_id].append(attr)
        }
    }
}
```

Для каждого сгруппированного атрибута вероятность в промилле получить именно этот атрибут в изготовленном подарке равна `attr_probability[count(grouped_attrs)-1]`:

```
grouped_attr_pattern_probabilities := Map<long, int>
grouped_attr_backdrop_probabilities := Map<int, int>

for idx, grouped_attrs := range grouped_attr_patterns {
    probability := attr_probability[count(grouped_attrs)-1]

    grouped_attr_pattern_probabilities[idx] = probability
}

for idx, grouped_attrs := range grouped_attr_backdrop {
    probability := attr_probability[count(grouped_attrs)-1]

    grouped_attr_backdrop_probabilities[idx] = probability
}
```

Например, если для изготовления передаются три подарка, среди которых зелёный фон встречается дважды, а чёрный — один раз, и третья строка `stargifts_craft_attribute_permilles` равна `[60, 180, 450]`, то вероятность сохранения зелёного фона составляет 18 %, а чёрного — 6 %.

И для узоров, и для фонов интерфейс должен показывать либо атрибут с наибольшей вероятностью, либо поочерёдно перебирать выбранные атрибуты каждые несколько секунд.

Независимо от исхода изготовления (кроме случаев, когда изготовление не удаётся по иным причинам — например, переданы подарки разных типов, непригодные для изготовления подарки, подарки, ещё не доступные для изготовления согласно `can_craft_at`, либо любые другие причины, делающие какой-либо из переданных подарков непригодным для изготовления), все подарки, переданные в [payments.craftStarGift](/method/payments.craftStarGift/), будут сожжены (уничтожены): у них будет установлен атрибут [starGiftUnique](/constructor/starGiftUnique/).`burned`, и пользоваться подарком больше не получится.

Если изготовление прошло успешно, будет создан подарок [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/) с установленным флагом `craft` (у соответствующего [starGiftUnique](/constructor/starGiftUnique/) будет установлен также флаг `crafted`), причём для нового изготовленного подарка будет повторно использован `id` первого подарка (поэтому первый переданный подарок **не** должен [находиться в блокчейне TON](#withdraw-a-collectible-gift-to-the-ton-blockchain)).

Если изготовление не удалось, вызов метода породит обновление [updateStarGiftCraftFail](/constructor/updateStarGiftCraftFail/).

#### Аукционы коллекционных подарков

Чтобы гарантировать справедливое распределение коллекционных подарков, новые выпуски подарков будут основаны на **аукционах** — пользователи смогут делать ставки в Stars на новые подарки в течение нескольких раундов, подробности [здесь »](/api/auctions/).

#### Перепродажа коллекционных подарков

```
messageActionStarGiftUnique#e6c31522 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true craft:flags.16?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long can_craft_at:flags.15?int = MessageAction;

inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
inputSavedStarGiftSlug#2085c238 slug:string = InputSavedStarGift;

payments.resaleStarGifts#947a12df flags:# count:int gifts:Vector<StarGift> next_offset:flags.0?string attributes:flags.1?Vector<StarGiftAttribute> attributes_hash:flags.1?long chats:Vector<Chat> counters:flags.2?Vector<StarGiftAttributeCounter> users:Vector<User> = payments.ResaleStarGifts;

---functions---

payments.updateStarGiftPrice#edbe6ccb stargift:InputSavedStarGift resell_amount:StarsAmount = Updates;

payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true stars_only:flags.5?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
```

Принадлежащий вам [коллекционный подарок »](#collectible-gifts) можно выставить на продажу на [маркетплейсе подарков »](https://telegram.org/blog/gift-marketplace-and-more) с помощью метода [payments.updateStarGiftPrice](/method/payments.updateStarGiftPrice/), указав цену в поле `resell_stars`.

Учтите: если установлен флаг [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)/[savedStarGift](/constructor/savedStarGift/).`can_resell_at`, подарок можно выставить на продажу только начиная с указанной даты.

Минимальная и максимальная цены перепродажи задаются параметрами клиентской конфигурации [stars\_stargift\_resale\_amount\_min »](/api/config/#stars-stargift-resale-amount-min)/[stars\_stargift\_resale\_amount\_max »](/api/config/#stars-stargift-resale-amount-max); передача значения `0` снимает подарок с продажи на маркетплейсе.  
Если кто-нибудь купит подарок, вы получите `price*`[stars\_stargift\_resale\_commission\_permille »](/api/config/#stars-stargift-resale-commission-permille) `/1000` звёзд.

При указании цены в нанограммах минимальная и максимальная цены перепродажи задаются параметрами клиентской конфигурации [ton\_stargift\_resale\_amount\_min »](/api/config/#ton-stargift-resale-amount-min)/[ton\_stargift\_resale\_amount\_max »](/api/config/#ton-stargift-resale-amount-max); передача значения `0` снимает подарок с продажи на маркетплейсе.

Если кто-нибудь купит подарок, вы получите `price*`[ton\_stargift\_resale\_commission\_permille »](/api/config/#ton-stargift-resale-commission-permille) `/1000` нанограммов.

Полный список доступных подарков [starGifts](/constructor/starGift/) возвращает метод [payments.getStarGifts](/method/payments.getStarGifts/); он может вернуть в том числе распроданные подарки с установленным флагом `availability_resale` — это означает, что часть подарков этого типа выставлена на [перепродажу »](#reselling-collectible-gifts), и получить их можно методом [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/).

Подробная документация по методу [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/) приведена [здесь »](/api/gifts/#sending-gifts).

Чтобы купить подарок на перепродаже, выполните обычную [процедуру оплаты »](#collectible-gifts), передав [inputInvoiceStarGiftResale](/constructor/inputInvoiceStarGiftResale/).

#### Предложения о покупке коллекционных подарков

```
starsAmount#bbb6b4a3 amount:long nanos:int = StarsAmount;
starsTonAmount#74aee3e0 amount:long = StarsAmount;

starGiftUnique#85f0a9cd flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int craft_chance_permille:flags.16?int = StarGift;

messageActionStarGiftPurchaseOffer#774278d4 flags:# accepted:flags.0?true declined:flags.1?true gift:StarGift price:StarsAmount expires_at:int = MessageAction;

messageActionStarGiftPurchaseOfferDeclined#73ada76b flags:# expired:flags.0?true gift:StarGift price:StarsAmount = MessageAction;

messageActionStarGiftUnique#e6c31522 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true craft:flags.16?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long can_craft_at:flags.15?int = MessageAction;

starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true offer:flags.29?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;

---functions---

payments.sendStarGiftOffer#8fb86b41 flags:# peer:InputPeer slug:string price:StarsAmount duration:int random_id:long allow_paid_stars:flags.0?long = Updates;

payments.resolveStarGiftOffer#e9ce781c flags:# decline:flags.0?true offer_msg_id:int = Updates;
```

Просматривая коллекционный подарок в [профиле »](/api/profile/) пользователя, вы теперь можете **предложить цену** и купить подарок за Stars или TON.

Предложения о покупке подарка **защищены Telegram** и дают **удобный** и **безопасный способ** проводить прямые сделки внутри Telegram, ограждая от мошенничества и **покупателей**, и **владельцев подарков**.

Предложить цену за подарок можно, если в [starGiftUnique](/constructor/starGiftUnique/) установлен флаг `offer_min_stars`.

Если цена указывается в [Stars](/api/stars/):

-   Минимальная цена предложения указана во флаге [starGiftUnique](/constructor/starGiftUnique/).`offer_min_stars`
-   Максимальная цена предложения задана параметром клиентской конфигурации [stars\_stargift\_resale\_amount\_max »](/api/config/#stars-stargift-resale-amount-max).
-   Если предложение принято, вы получите `price*`[stars\_stargift\_resale\_commission\_permille »](/api/config/#stars-stargift-resale-commission-permille) `/1000` звёзд.

Если цена указывается в нанограммах:

-   Минимальная цена предложения указана во флаге [starGiftUnique](/constructor/starGiftUnique/).`offer_min_stars`; её нужно перевести в USD по курсу из [stars\_usd\_sell\_rate\_x1000](/api/config/#stars-usd-sell-rate-x1000), затем в TON по курсу из [ton\_usd\_rate](/api/config/#ton-usd-rate), а затем в нанограммы, умножив полученное значение на 1 миллион (1 ton = 1 миллиард нанограммов, но поскольку `stars_usd_sell_rate_x1000` уже умножил значение на 1000, достаточно умножить на 1 миллион).
-   Максимальная цена предложения задана параметром клиентской конфигурации [ton\_stargift\_resale\_amount\_max »](/api/config/#ton-stargift-resale-amount-max).
-   Если предложение принято, вы получите `price*`[ton\_stargift\_resale\_commission\_permille »](/api/config/#ton-stargift-resale-commission-permille) `/1000` нанограммов.

Чтобы сделать предложение, вызовите [payments.sendStarGiftOffer](/method/payments.sendStarGiftOffer/), передав следующие параметры:

-   `peer`: равен [starGiftUnique](/constructor/starGiftUnique/).`owner_id` (поле `owner_id` всегда заполнено, если установлен [starGiftUnique](/constructor/starGiftUnique/).`offer_min_stars`)
-   `slug`: равен [starGiftUnique](/constructor/starGiftUnique/).`slug`
-   `price`: предлагаемая цена
-   `duration`: срок действия предложения в секундах; обязан быть равен одному из значений 21600, 43200, 86400, 129600, 172800 или 259200. В тестовом режиме допускается также 120.
-   `random_id`: случайное 64-битное целое число, нужное для того, чтобы одно и то же предложение не было отправлено дважды при сетевых сбоях.
-   `allow_paid_stars`: если у пира-получателя включены [платные сообщения »](/api/paid-messages/), указывает количество [Telegram Stars](/api/stars/), которое отправляющий пользователь согласился заплатить за отправку предложения (сверх суммы самого предложения, указанной в `price`).

В результате будет сформировано сервисное сообщение [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/), а указанная сумма звёзд будет зарезервирована на весь срок действия предложения. Если предложение отклонено или истекло, вся сумма платежа возвращается мгновенно.

Клиенты, отображающие [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/), должны показывать, насколько сумма предложения близка к оценочной стоимости подарка из [starGiftUnique](/constructor/starGiftUnique/).`value_usd_amount`; цены в звёздах и в ton можно пересчитать в USD с помощью [stars\_usd\_sell\_rate\_x1000](/api/config/#stars-usd-sell-rate-x1000) и [ton\_usd\_rate](/api/config/#ton-usd-rate).

Получатель предложения может принять или отклонить его методом [payments.resolveStarGiftOffer](/method/payments.resolveStarGiftOffer/), передав ID сервисного сообщения [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/) и заполнив флаг `decline` в соответствии с выбором пользователя.

Если предложение отклонено или срок его действия истёк, формируется [messageActionStarGiftPurchaseOfferDeclined](/constructor/messageActionStarGiftPurchaseOfferDeclined/), а возврат средств выполняется автоматически.

Если предложение принято, подарок автоматически передаётся покупателю и формируется [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/) с установленным флагом `from_offer`.

У всех транзакций, связанных с предложениями о покупке подарков, — включая исходную транзакцию, резервирующую нужную сумму звёзд, и возможные возвраты средств — будет установлен флаг [starsTransaction](/constructor/starsTransaction/).`offer`.

#### Передача коллекционных подарков

```
messageActionStarGiftUnique#e6c31522 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true craft:flags.16?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long can_craft_at:flags.15?int = MessageAction;

starGiftUnique#85f0a9cd flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int craft_chance_permille:flags.16?int = StarGift;

inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
inputSavedStarGiftSlug#2085c238 slug:string = InputSavedStarGift;

inputInvoiceStarGiftTransfer#4a5f5bd9 stargift:InputSavedStarGift to_id:InputPeer = InputInvoice;

---functions---

payments.transferStarGift#7f18176a stargift:InputSavedStarGift to_id:InputPeer = Updates;
```

Коллекционный подарок можно передать другому пользователю.

Чтобы передать коллекционный подарок, заплатите [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)/[savedStarGift](/constructor/savedStarGift/).`transfer_stars` [Telegram Stars](/api/stars/): вызовите [payments.getPaymentForm](/method/payments.getPaymentForm/), передав [inputInvoiceStarGiftTransfer](/constructor/inputInvoiceStarGiftTransfer/) со следующими параметрами:

-   `stargift`: идентификатор полученного подарка
-   `to_id`: пир-получатель

Затем выполните [обычную процедуру оплаты »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product).

Если поле [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)/[savedStarGift](/constructor/savedStarGift/).`transfer_stars` не задано, подарок можно передать бесплатно: в этом случае достаточно вызвать [payments.transferStarGift](/method/payments.transferStarGift/).

#### Вывод коллекционного подарка в блокчейн TON

```
messageActionStarGiftUnique#e6c31522 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true craft:flags.16?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long can_craft_at:flags.15?int = MessageAction;

savedStarGift#41df43fc flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long gift_num:flags.19?int can_craft_at:flags.20?int = SavedStarGift;

payments.starGiftWithdrawalUrl#84aa3a9c url:string = payments.StarGiftWithdrawalUrl;

---functions---

payments.getStarGiftWithdrawalUrl#d06e93a8 stargift:InputSavedStarGift password:InputCheckPasswordSRP = payments.StarGiftWithdrawalUrl;
```

Коллекционный подарок можно превратить в NFT в блокчейне TON с помощью метода [payments.getStarGiftWithdrawalUrl](/method/payments.getStarGiftWithdrawalUrl/): метод требует пароль двухфакторной аутентификации текущего пользователя, который передаётся [как описано здесь »](/api/srp/), и возвращает URL, по которому NFT можно импортировать на Fragment.

Учтите, что если установлен флаг [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)/[savedStarGift](/constructor/savedStarGift/).`can_export_at`, подарок можно вывести в блокчейн только начиная с указанной в нём даты.

#### Установка коллекционного подарка в качестве эмодзи-статуса

[Принадлежащие пользователю или размещённые у него коллекционные подарки »](#hosted-collectible-gifts) можно устанавливать в качестве эмодзи-статусов (при этом также меняются [фоновая палитра и узор профиля »](/api/colors/)): полное описание процесса приведено [здесь »](/api/emoji-status/#collectibles-as-emoji-statuses).

#### Установка коллекционного подарка в качестве палитры и узора сообщений

[Принадлежащие пользователю или размещённые у него коллекционные подарки »](#hosted-collectible-gifts) можно использовать для создания [цветовой палитры и узора оформления сообщений »](/api/colors/#collectible-message-palettes): полное описание процесса приведено [здесь »](/api/colors/#collectible-message-palettes).

#### Установка коллекционного подарка в качестве темы чата

Некоторые [принадлежащие пользователю или размещённые у него коллекционные подарки »](#hosted-collectible-gifts) (те, у которых установлен флаг [starGiftUnique](/constructor/starGiftUnique/).`theme_available`) можно устанавливать в качестве тем чата: полное описание процесса приведено [здесь »](/api/themes/#chat-themes).
