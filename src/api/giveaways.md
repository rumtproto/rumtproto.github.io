---
title: "Розыгрыши и подарки"
original: "https://core.telegram.org/api/giveaways"
section: api
description: "Администраторы каналов и супергрупп Telegram с любым набором прав могут запускать розыгрыши, чтобы случайным образом раздавать подписки Telegram Premium и другие подарки среди…"
layout: layout.njk
---

# Розыгрыши и подарки

Администраторы [каналов и супергрупп](/api/channel/) Telegram с любым набором [прав](/api/rights/) могут запускать розыгрыши, чтобы случайным образом раздавать подписки [Telegram Premium](/api/premium/) и другие подарки среди своих подписчиков в обмен на [бусты](/api/boost/).

### Розыгрыши и подарочные коды

Эту функциональность следует включать только в том случае, если параметр конфигурации [giveaway\_gifts\_purchase\_available](/api/config/#giveaway-gifts-purchase-available) выставлен в true.

Обратите внимание, что описанный ниже порядок действий подходит и для того, чтобы подарить подписки Premium сразу нескольким друзьям; он отличается от [старого способа дарения](/api/premium/#gifting-telegram-premium), который позволял подарить лишь одну подписку и накладывал ряд дополнительных ограничений, отсутствующих здесь.

Обратите внимание, что [ссылки для дарения нескольких подписок Premium](/api/links/#premium-multigift-links) ведут на страницу, которая использует новый способ дарения, описанный ниже.

Схема:

```
premiumGiftCodeOption#257e962b flags:# users:int months:int store_product:flags.0?string store_quantity:flags.1?int currency:string amount:long = PremiumGiftCodeOption;

inputStorePaymentPremiumGiveaway#160544ca flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long = InputStorePaymentPurpose;
inputStorePaymentPremiumGiftCode#fb790393 flags:# users:Vector<InputUser> boost_peer:flags.0?InputPeer currency:string amount:long message:flags.1?TextWithEntities = InputStorePaymentPurpose;

inputInvoicePremiumGiftCode#98986c0d purpose:InputStorePaymentPurpose option:PremiumGiftCodeOption = InputInvoice;

prepaidGiveaway#b2539d54 id:long months:int quantity:int date:int = PrepaidGiveaway;

premium.boostsStatus#4959427a flags:# my_boost:flags.2?true level:int current_level_boosts:int boosts:int gift_boosts:flags.4?int next_level_boosts:flags.0?int premium_audience:flags.1?StatsPercentValue boost_url:string prepaid_giveaways:flags.3?Vector<PrepaidGiveaway> my_boost_slots:flags.2?Vector<int> = premium.BoostsStatus;

messageMediaGiveaway#aa073beb flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.2?true channels:Vector<long> countries_iso2:flags.1?Vector<string> prize_description:flags.3?string quantity:int months:flags.4?int stars:flags.5?long until_date:int = MessageMedia;

messageActionGiveawayLaunch#a80f51e4 flags:# stars:flags.0?long = MessageAction;
messageActionGiveawayResults#87e2f155 flags:# stars:flags.0?true winners_count:int unclaimed_count:int = MessageAction;

messageActionGiftCode#31c48347 flags:# via_giveaway:flags.0?true unclaimed:flags.5?true boost_peer:flags.1?Peer days:int slug:string currency:flags.2?string amount:flags.2?long crypto_currency:flags.3?string crypto_amount:flags.3?long message:flags.4?TextWithEntities = MessageAction;

payments.giveawayInfo#4367daa0 flags:# participating:flags.0?true preparing_results:flags.3?true start_date:int joined_too_early_date:flags.1?int admin_disallowed_chat_id:flags.2?long disallowed_country:flags.4?string = payments.GiveawayInfo;
payments.giveawayInfoResults#e175e66f flags:# winner:flags.0?true refunded:flags.1?true start_date:int gift_code_slug:flags.3?string stars_prize:flags.4?long finish_date:int winners_count:int activated_count:flags.2?int = payments.GiveawayInfo;

payments.checkedGiftCode#eb983f8f flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int days:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;

---functions---

payments.getPremiumGiftCodeOptions#2757ba54 flags:# boost_peer:flags.0?InputPeer = Vector<PremiumGiftCodeOption>;

payments.getPaymentForm#37148dbb flags:# invoice:InputInvoice theme_params:flags.0?DataJSON = payments.PaymentForm;

premium.getBoostsStatus#042f1f61 peer:InputPeer = premium.BoostsStatus;

payments.launchPrepaidGiveaway#5ff58f20 peer:InputPeer giveaway_id:long purpose:InputStorePaymentPurpose = Updates;

payments.getGiveawayInfo#f4239425 peer:InputPeer msg_id:int = payments.GiveawayInfo;

payments.checkGiftCode#8e51b4c1 slug:string = payments.CheckedGiftCode;
payments.applyGiftCode#f6e26854 slug:string = Updates;
```

Прежде всего вызовите [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/), чтобы получить список конструкторов [premiumGiftCodeOption](/constructor/premiumGiftCodeOption/) — перечень вариантов розыгрыша, доступных администратору. Каждый вариант задаёт количество и длительность подписок [Telegram Premium](/api/premium/), которые будут разыграны, а также их цену (`amount`) в указанной валюте `currency` (подробнее об этих полях см. на [странице конструктора »](/constructor/premiumGiftCodeOption/)).

Как только администратор выбрал конкретный вариант подарочного кода, вызовите [payments.getPaymentForm](/method/payments.getPaymentForm/), передав [inputInvoicePremiumGiftCode](/constructor/inputInvoicePremiumGiftCode/) с выбранным [premiumGiftCodeOption](/constructor/premiumGiftCodeOption/) в поле `option` и с полем `purpose`, содержащим одно из двух:

-   [inputStorePaymentPremiumGiveaway](/constructor/inputStorePaymentPremiumGiveaway/) — для создания розыгрыша, в котором Telegram случайным образом выберет `option.users` подписчиков канала или супергруппы, указанных в `purpose.boost_peer` (только новых подписчиков, начиная с даты создания розыгрыша, если установлено поле `purpose.only_new_subscribers`).  
    Дополнительные каналы и супергруппы, на которые пользователь обязан подписаться для участия в розыгрыше, указываются в `additional_peers`.  
    Круг пользователей, допущенных к участию, можно ограничить явным белым списком не более чем из [giveaway\_countries\_max](/api/config/#giveaway-countries-max) стран, заданных двухбуквенными кодами ISO 3166-1 alpha-2 в поле `countries_iso2`.  
    Дата завершения розыгрыша указывается в `until_date` и должна отстоять от текущего момента не более чем на [giveaway\_period\_max](/api/config/#giveaway-period-max) секунд; по её наступлении Telegram случайно выберет `option.users` подписчиков согласно перечисленным выше условиям и отправит каждому подарочный код Telegram Premium в виде конструктора [messageActionGiftCode](/constructor/messageActionGiftCode/), из которого клиенту следует сформировать [ссылку на подарочный код](/api/links/#premium-giftcode-links).  
    Канал или супергруппа, указанные в `boost_peer`, получат от каждого победителя по [giveaway\_boosts\_per\_premium](/api/config/#giveaway-boosts-per-premium) [бустов](/api/boost/), которые нельзя переназначить другому каналу или супергруппе на весь срок подаренной подписки.
-   либо [inputStorePaymentPremiumGiftCode](/constructor/inputStorePaymentPremiumGiftCode/) — чтобы подарить подписки [Telegram Premium](/api/premium/) только отдельным подписчикам (`purpose.users`, не более [giveaway\_add\_peers\_max](/api/config/#giveaway-add-peers-max) пользователей) канала или супергруппы, указанных в `purpose.boost_peer`; этот канал или супергруппа получит от каждого такого пользователя по [giveaway\_boosts\_per\_premium](/api/config/#giveaway-boosts-per-premium) [бустов](/api/boost/), которые нельзя переназначить другому каналу или супергруппе на весь срок подаренной подписки.  
    Этим же методом пользователи могут просто дарить подписки контактам, **не** устанавливая поле `boost_peer`: тогда подарок подписки [Telegram Premium](/api/premium/) другому пользователю создаст [boosts\_per\_sent\_gift](/api/config/#boosts-per-sent-gift) [слотов бустов »](/api/boost/) для нас и один слот буста для получателя подарка.

Затем выполните [процедуру оплаты счёта, описанную в документации по платежам »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product).

Доступны и другие способы оплаты:

-   Процедура через Premium Bot: обратитесь к [premium\_bot\_username](/api/config/#premium-bot-username) и пройдите оплату розыгрыша через инлайн-клавиатуру (итоговая клавиатура с ценами будет содержать кнопки с [глубокими ссылками на счёт »](/api/links/#invoice-links), которые и следует использовать для оплаты).
-   Оплата через [Fragment](https://fragment.com), которая к тому же позволяет совершать более крупные покупки.
-   Процедура подписки через магазины приложений на основе [payments.assignAppStoreTransaction](/method/payments.assignAppStoreTransaction/)/[payments.assignPlayMarketTransaction](/method/payments.assignPlayMarketTransaction/); сторонним приложениям она сейчас недоступна.

Далее:

-   Если оплата произведена через [payments.getPaymentForm](/method/payments.getPaymentForm/) или через [payments.assignAppStoreTransaction](/method/payments.assignAppStoreTransaction/)/[payments.assignPlayMarketTransaction](/method/payments.assignPlayMarketTransaction/), розыгрыш стартует сразу после завершения платежа.

-   В противном случае, если использовалась процедура через [Premium bot](/api/config/#premium-bot-username) или [Fragment](https://fragment.com), то после оплаты розыгрыша вызовите [premium.getBoostsStatus](/method/premium.getBoostsStatus/), передав в `peer` идентификатор канала или супергруппы, выбранных при оплате розыгрыша; в поле [premium.boostsStatus](/constructor/premium.boostsStatus/).`prepaid_giveaways` придёт конструктор [prepaidGiveaway](/constructor/prepaidGiveaway/) со сведениями о предоплаченном розыгрыше.

    Чтобы фактически запустить розыгрыш при оплате через Fragment или бота, вызовите [payments.launchPrepaidGiveaway](/method/payments.launchPrepaidGiveaway/), передав [prepaidGiveaway](/constructor/prepaidGiveaway/).`id` в `giveaway_id`, идентификатор канала или супергруппы в `peer` и настройки розыгрыша в `purpose` (заполненные так, как описано выше).

Наконец:

-   Если платёж прошёл успешно и розыгрыш запускается через [inputStorePaymentPremiumGiveaway](/constructor/inputStorePaymentPremiumGiveaway/), в канал или супергруппу будут отправлены сервисное сообщение [messageActionGiveawayLaunch](/constructor/messageActionGiveawayLaunch/) и медиасообщение с [messageMediaGiveaway](/constructor/messageMediaGiveaway/).

    [@term:slug] По завершении розыгрыша в канал или супергруппу будет отправлено сообщение [messageActionGiveawayResults](/constructor/messageActionGiveawayResults/), а победители автоматически получат от служебного пользователя Telegram сервисное сообщение [messageActionGiftCode](/constructor/messageActionGiftCode/) с полем `slug` (короткий текстовый идентификатор подарочного кода, который подставляется в конец ссылки), по которому формируется [ссылка на подарочный код](/api/links/#premium-giftcode-links) для активации подписки Premium.  
    Флаг [messageActionGiftCode](/constructor/messageActionGiftCode/).`via_giveaway` при этом будет установлен.

-   Если платёж прошёл успешно и мы просто дарим несколько подписок конкретным пользователям через [inputStorePaymentPremiumGiftCode](/constructor/inputStorePaymentPremiumGiftCode/), указанные пользователи автоматически получат от служебного пользователя Telegram сервисное сообщение [messageActionGiftCode](/constructor/messageActionGiftCode/) с полем `slug`, по которому формируется [ссылка на подарочный код](/api/links/#premium-giftcode-links) для активации подписки Premium.  
    Флаг [messageActionGiftCode](/constructor/messageActionGiftCode/).`via_giveaway` при этом установлен не будет.

    Учтите: если платёж был совершён от имени пользователя (то есть поле `boost_peer` **не** задавалось), то получатели подарка вместо этого получат [messageService](/constructor/messageService/) от подарившего пользователя с конструктором [messageActionGiftPremium](/constructor/messageActionGiftPremium/), содержащим дополнительные сведения о цене и длительности подаренной подписки Telegram Premium.  
    Клиентам следует отображать такое сообщение вместе со стикером из [набора стикеров](/api/stickers/) [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/): вот [пример](https://telegram.org/blog/custom-emoji#gifting-telegram-premium).

Поле [messageActionGiftCode](/constructor/messageActionGiftCode/).`slug` следует использовать для формирования [ссылки на подарочный код](/api/links/#premium-giftcode-links), по которой пользователь может активировать подписку или передарить её кому-то другому.

Если при запуске розыгрыша установлен флаг `winners_are_visible`, победители становятся публичными и будут перечислены в сообщении [messageMediaGiveawayResults](/constructor/messageMediaGiveawayResults/), которое автоматически отправится в канал или супергруппу по окончании розыгрыша.

Любой пользователь может вызвать [payments.checkGiftCode](/method/payments.checkGiftCode/), передав `slug` ссылки, и получить сведения о розыгрыше: например, канал или супергруппу, подарившие подписку (`from_id`), и пользователя, который изначально получил подарок (`to_id`).  
Это может пригодиться и администраторам канала или супергруппы, чтобы точно определить победителей розыгрыша — скажем, если помимо подписок Premium в розыгрыше были и другие призы (_например, Tesla_): победителю достаточно прислать свою ссылку в качестве неоспоримого доказательства выигрыша, ведь пользователя, получившего подарок, видно в поле `to_id`, которое Telegram возвращает при вызове [payments.checkGiftCode](/method/payments.checkGiftCode/) для этого `slug`.  
Ещё один способ для администраторов проверить, кто получил подарки, — просто воспользоваться [premium.getBoostsList](/method/premium.getBoostsList/), пока бусты, полученные за подарки, ещё активны.

Чтобы активировать подписку [Telegram Premium](/api/premium/), достаточно вызвать [payments.applyGiftCode](/method/payments.applyGiftCode/), передав `slug` ссылки.

### Розыгрыши звёзд

```
starsGiveawayOption#94ce852a flags:# extended:flags.0?true default:flags.1?true stars:long yearly_boosts:int store_product:flags.2?string currency:string amount:long winners:Vector<StarsGiveawayWinnersOption> = StarsGiveawayOption;

starsGiveawayWinnersOption#54236209 flags:# default:flags.0?true users:int per_user_stars:long = StarsGiveawayWinnersOption;

inputInvoiceStars#65f00ce3 purpose:InputStorePaymentPurpose = InputInvoice;

inputStorePaymentStarsGiveaway#751f08fa flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true stars:long boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long users:int = InputStorePaymentPurpose;

---functions---

payments.getStarsGiveawayOptions#bd1efd3e = Vector<StarsGiveawayOption>;

payments.getPaymentForm#37148dbb flags:# invoice:InputInvoice theme_params:flags.0?DataJSON = payments.PaymentForm;
```

Розыгрыши звёзд устроены так же, как [обычные розыгрыши](#giveaways-and-giftcodes), с той лишь разницей, что вместо подарков или [подписок Telegram Premium](/api/premium/) розыгрыш автоматически распределит между победителями [Telegram Stars](/api/stars/).

Прежде всего вызовите [payments.getStarsGiveawayOptions](/method/payments.getStarsGiveawayOptions/), чтобы получить список конструкторов [starsGiveawayOption](/constructor/starsGiveawayOption/) — перечень вариантов розыгрыша, доступных администратору. Каждый вариант задаёт число победителей розыгрыша и количество [Telegram Stars](/api/stars/), которые будут подарены в розыгрыше, а также их цену (`amount`) в указанной валюте `currency` (подробнее об этих и всех остальных полях см. на [странице конструктора »](/constructor/starsGiveawayOption/)).

Как только администратор выбрал конкретный вариант розыгрыша, вызовите [payments.getPaymentForm](/method/payments.getPaymentForm/), передав [inputInvoiceStars](/constructor/inputInvoiceStars/) с конструктором [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/), в котором указано следующее:

-   Поля `stars`, `currency` и `amount` из выбранного [starsGiveawayOption](/constructor/starsGiveawayOption/) и некоторые дополнительные параметры, описанные на [странице конструктора »](/constructor/inputStorePaymentStarsGiveaway/).
-   Дополнительные каналы и супергруппы, на которые пользователь обязан подписаться для участия в розыгрыше, указываются в `additional_peers`.
-   Круг пользователей, допущенных к участию, можно ограничить явным белым списком не более чем из [giveaway\_countries\_max](/api/config/#giveaway-countries-max) стран, заданных двухбуквенными кодами ISO 3166-1 alpha-2 в поле `countries_iso2`.
-   Дата завершения розыгрыша указывается в `until_date` и должна отстоять от текущего момента не более чем на [giveaway\_period\_max](/api/config/#giveaway-period-max) секунд; по её наступлении Telegram случайно выберет `users` подписчиков согласно перечисленным выше условиям и отправит каждому по `per_user_stars` Telegram Stars в виде конструктора [messageActionPrizeStars](/constructor/messageActionPrizeStars/).  
    Кроме того, может прийти [messageActionPrizeStars](/constructor/messageActionPrizeStars/) с установленным флагом `unclaimed`: он возвращает создателю розыгрыша оставшиеся звёзды, если к моменту завершения участников канала оказалось меньше, чем победителей.
-   Канал или супергруппа, указанные в `boost_peer`, получат [starsGiveawayOption](/constructor/starsGiveawayOption/).`yearly_boosts` [бустов](/api/boost/) сроком на один год.

Затем выполните [процедуру оплаты счёта, описанную в документации по платежам »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product).

Доступны и другие способы оплаты:

-   Процедура через Premium Bot: обратитесь к [premium\_bot\_username](/api/config/#premium-bot-username) и пройдите оплату розыгрыша звёзд через инлайн-клавиатуру (итоговая клавиатура с ценами будет содержать кнопки с [глубокими ссылками на счёт »](/api/links/#invoice-links), которые и следует использовать для оплаты).
-   Процедура подписки через магазины приложений на основе [payments.assignAppStoreTransaction](/method/payments.assignAppStoreTransaction/)/[payments.assignPlayMarketTransaction](/method/payments.assignPlayMarketTransaction/); сторонним приложениям она сейчас недоступна.

Далее:

-   Если оплата произведена через [payments.getPaymentForm](/method/payments.getPaymentForm/) или через [payments.assignAppStoreTransaction](/method/payments.assignAppStoreTransaction/)/[payments.assignPlayMarketTransaction](/method/payments.assignPlayMarketTransaction/), розыгрыш стартует сразу после завершения платежа.

-   В противном случае, если использовалась процедура через [Premium bot](/api/config/#premium-bot-username), то после оплаты розыгрыша вызовите [premium.getBoostsStatus](/method/premium.getBoostsStatus/), передав в `peer` идентификатор канала или супергруппы, выбранных при оплате розыгрыша; в поле [premium.boostsStatus](/constructor/premium.boostsStatus/).`prepaid_giveaways` придёт конструктор [prepaidStarsGiveaway](/constructor/prepaidStarsGiveaway/) со сведениями о предоплаченном розыгрыше звёзд.  
    Чтобы фактически запустить розыгрыш при оплате через бота, вызовите [payments.launchPrepaidGiveaway](/method/payments.launchPrepaidGiveaway/), передав [prepaidStarsGiveaway](/constructor/prepaidStarsGiveaway/).`id` в `giveaway_id`, идентификатор канала или супергруппы в `peer` и настройки розыгрыша в `purpose` (те же, что были заполнены в созданном выше [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/)).
