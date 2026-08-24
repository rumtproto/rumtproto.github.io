---
title: "Telegram Stars"
original: "https://core.telegram.org/api/stars"
section: api
description: "Telegram Stars — это виртуальные единицы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять…"
layout: layout.njk
---

# Telegram Stars

Telegram Stars — это виртуальные единицы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам контента на платформе Telegram и не только.

На этой странице описаны методы, с помощью которых можно покупать, тратить и выводить [Telegram Stars](https://telegram.org/blog/mini-app-bar-paid-media-and-more#rewards-for-content-creators-and-developers), а также просматривать подробную статистику доходов и совершать покупки за Telegram Stars.

Клиентам следует отключать поддержку Telegram Stars для текущего пользователя из-за региональных ограничений, если [поле stars\_purchase\_blocked равно `true` »](/api/config/#stars-purchase-blocked).

### Баланс и история транзакций

```
inputStarsTransaction#206ae6d1 flags:# refund:flags.0?true id:string = InputStarsTransaction;

starsTransactionPeerAppStore#b457b375 = StarsTransactionPeer;
starsTransactionPeerPlayMarket#7b560a0b = StarsTransactionPeer;
starsTransactionPeerPremiumBot#250dbaf8 = StarsTransactionPeer;
starsTransactionPeerFragment#e92fd902 = StarsTransactionPeer;
starsTransactionPeer#d80da15d peer:Peer = StarsTransactionPeer;
starsTransactionPeerAds#60682812 = StarsTransactionPeer;
starsTransactionPeerUnsupported#95f2bfe4 = StarsTransactionPeer;

starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true offer:flags.29?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;

payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;

updateStarsBalance#4e80a379 balance:StarsAmount = Update;

---functions---

payments.getStarsStatus#4ea9b3bf flags:# ton:flags.0?true peer:InputPeer = payments.StarsStatus;

payments.getStarsTransactions#69da4557 flags:# inbound:flags.0?true outbound:flags.1?true ascending:flags.2?true ton:flags.4?true subscription_id:flags.3?string peer:InputPeer offset:string limit:int = payments.StarsStatus;

payments.getStarsTransactionsByID#2dca16b8 flags:# ton:flags.0?true peer:InputPeer id:Vector<InputStarsTransaction> = payments.StarsStatus;
```

[@term:peer] Метод [payments.getStarsStatus](/method/payments.getStarsStatus/) возвращает текущий баланс звёзд активной учётной записи (при peer=[inputPeerSelf](/constructor/inputPeerSelf/)) либо баланс звёзд бота или канала, указанного в поле `peer` (пир — адресат: пользователь, бот, чат или канал).

История транзакций и баланс рекламных доходов канала или бота в **нанограммах** (`1/1_000_000_000` доля Gram) также доступны администраторам канала или бота: для этого во всех перечисленных выше методах нужно выставить флаг `ton`, если установлен флаг [channelFull](/constructor/channelFull/).`can_view_revenue`/[userFull](/constructor/userFull/).`can_view_revenue`.

Кроме того, метод возвращает последние 5 [транзакций со звёздами »](/constructor/starsTransaction/).  
Чтобы получить все [транзакции со звёздами »](/constructor/starsTransaction/) (и при необходимости выполнить поиск по фильтрам), используйте [payments.getStarsTransactions](/method/payments.getStarsTransactions/), перебирая транзакции постранично и передавая возвращённое значение `next_offset` (если оно задано) в параметр `offset` [обычным образом](/api/offsets/).

Метод [payments.getStarsTransactionsByID](/method/payments.getStarsTransactionsByID/) позволяет получить сведения о конкретных транзакциях (или возвратах) Telegram Stars по их идентификаторам, передаваемым в виде конструкторов [inputStarsTransaction](/constructor/inputStarsTransaction/).

Об изменениях баланса звёзд (в результате [пополнения](#buying-or-gifting-stars) или [трат](#using-stars)) сервер уведомляет обновлением [updateStarsBalance](/constructor/updateStarsBalance/).

### Статистика доходов

```
starsRevenueStatus#febe5491 flags:# withdrawal_enabled:flags.0?true current_balance:StarsAmount available_balance:StarsAmount overall_revenue:StarsAmount next_withdrawal_at:flags.1?int = StarsRevenueStatus;

payments.starsRevenueStats#6c207376 flags:# top_hours_graph:flags.0?StatsGraph revenue_graph:StatsGraph status:StarsRevenueStatus usd_rate:double = payments.StarsRevenueStats;

updateStarsRevenueStatus#a584b019 peer:Peer status:StarsRevenueStatus = Update;

---functions---

payments.getStarsRevenueStats#d91ffad6 flags:# dark:flags.0?true ton:flags.1?true peer:InputPeer = payments.StarsRevenueStats;
```

Статистику доходов в Telegram Stars могут получать владельцы ботов, а также администраторы каналов, если установлен флаг [channelFull](/constructor/channelFull/).`can_view_stars_revenue`.

Статистика рекламных доходов канала или бота в **нанограммах** (`1/1_000_000_000` доля Gram) также доступна администраторам канала или бота при установленном флаге `ton`, если установлен флаг [channelFull](/constructor/channelFull/).`can_view_revenue`/[userFull](/constructor/userFull/).`can_view_revenue`.

Используйте [payments.getStarsRevenueStats](/method/payments.getStarsRevenueStats/), чтобы получить статистику заработанных Telegram Stars или нанограммов; возвращаемые графики [StatsGraph](/type/StatsGraph/) отрисовываются [так, как описано здесь »](/api/stats/#graph-visualization).

А именно:

-   `revenue_graph` — график доходов в звёздах (количество заработанных звёзд)
-   `status` — текущий баланс, текущий доступный к выводу баланс и общее количество заработанных Telegram Stars
-   `usd_rate` — текущий курс пересчёта Telegram Stars в доллары США
-   `top_hours_graph` — график показов рекламы, для статистики рекламных доходов канала или бота

Сервер присылает обновление [updateStarsRevenueStatus](/constructor/updateStarsRevenueStatus/) при каждом изменении баланса; если клиент в этот момент находится на вкладке монетизации канала или бота, по этому обновлению следует применить новые значения баланса (они содержатся в самом обновлении) и обновить список транзакций через [payments.getStarsTransactions](/method/payments.getStarsTransactions/), как описано [здесь »](#balance-and-transaction-history).

### Покупка звёзд и звёзды в подарок

```
starsTopupOption#0bd915c0 flags:# extended:flags.1?true stars:long store_product:flags.0?string currency:string amount:long = StarsTopupOption;

starsGiftOption#5e0589f1 flags:# extended:flags.1?true stars:long store_product:flags.0?string currency:string amount:long = StarsGiftOption;

inputStorePaymentStarsTopup#f9a2a6cb flags:# stars:long currency:string amount:long spend_purpose_peer:flags.0?InputPeer = InputStorePaymentPurpose;
inputStorePaymentStarsGift#1d741ef7 user_id:InputUser stars:long currency:string amount:long = InputStorePaymentPurpose;

inputInvoiceStars#65f00ce3 purpose:InputStorePaymentPurpose = InputInvoice;

---functions---

payments.getStarsTopupOptions#c00ec7d3 = Vector<StarsTopupOption>;

payments.getStarsGiftOptions#d3c96bc8 flags:# user_id:flags.0?InputUser = Vector<StarsGiftOption>;
```

Чтобы купить звёзды себе, сначала вызовите метод [payments.getStarsTopupOptions](/method/payments.getStarsTopupOptions/) и получите список вариантов пополнения в виде конструкторов [starsTopupOption](/constructor/starsTopupOption/).

Чтобы купить звёзды в подарок другу, сначала вызовите метод [payments.getStarsGiftOptions](/method/payments.getStarsGiftOptions/) и получите список вариантов подарка в виде конструкторов [starsGiftOption](/constructor/starsGiftOption/).

**Примечание**: возможность дарить звёзды следует включать, только если флаг [stars\_gifts\_enabled »](/api/config/#stars-gifts-enabled) равен true.

После того как пользователь выбрал конкретный вариант пополнения или подарка, вызовите [payments.getPaymentForm](/method/payments.getPaymentForm/), передав [inputInvoiceStars](/constructor/inputInvoiceStars/) с конструктором [inputStorePaymentStarsTopup](/constructor/inputStorePaymentStarsTopup/) или [inputStorePaymentStarsGift](/constructor/inputStorePaymentStarsGift/), заполненным значениями из выбранного [starsTopupOption](/constructor/starsTopupOption/)/[starsGiftOption](/constructor/starsGiftOption/).

В поле `spend_purpose_peer` конструктора [inputStorePaymentStarsTopup »](/constructor/inputStorePaymentStarsTopup/) следует указать пир, при работе с которым пополнение было начато из-за нехватки средств (то есть бота — для платежей боту, канал — для платных медиа или реакций и так далее); оставьте этот флаг незаполненным, если процесс пополнения был начат не при попытке потратить больше звёзд, чем есть на балансе учётной записи.

Затем следуйте [процедуре оплаты счёта, описанной в документации по платежам »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product).

Доступны и другие способы оплаты:

-   Оплата через [Fragment](https://fragment.com), которая к тому же позволяет совершать более крупные покупки.
-   Оформление подписки через магазин приложений на основе [payments.assignAppStoreTransaction](/method/payments.assignAppStoreTransaction/)/[payments.assignPlayMarketTransaction](/method/payments.assignPlayMarketTransaction/) — в настоящее время сторонним приложениям недоступно.

Что касается подарков: после успешной обработки платежа пользователь, которому предназначен подарок, автоматически получит от отправителя [messageService](/constructor/messageService/) с конструктором [messageActionGiftStars](/constructor/messageActionGiftStars/), содержащим дополнительные сведения о цене и сроке действия подаренных Telegram Stars.  
Клиентам следует показывать это сообщение вместе со стикером из [набора стикеров](/api/stickers/) [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/): вот [пример](https://telegram.org/blog/w3-browser-mini-app-store#gifting-stars-to-friends).

Цену 1000 Telegram Stars в долларах США можно узнать из [параметра конфигурации `stars_usd_sell_rate_x1000` »](/api/config/#stars-usd-sell-rate-x1000).

Страницу пополнения баланса звёзд следует открывать также при переходе пользователя по [глубокой ссылке на пополнение »](/api/links/#stars-topup-link), если выполнены [некоторые условия](/api/links/#stars-topup-link).

### Рейтинг по звёздам

```
starsRating#1b0e4f07 flags:# level:int current_level_stars:long stars:long next_level_stars:flags.0?long = StarsRating;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;
```

Теперь в профилях Telegram отображается значок с числовым рейтингом, который рассчитывается по общему объёму успешных транзакций, совершённых с Telegram Stars.

Он подчёркивает ваш уровень в Telegram и помогает владельцам каналов видеть, что вам можно доверять в предложенных постах и других обращениях.

Покупка [подарков](#star-gifts), отправка [платных сообщений](#paid-messages) и оплата [предложенных постов](#suggested-posts) звёздами повышают рейтинг. При этом возврат средств за покупки, оплаченные звёздами, или [обмен подарков на звёзды](/api/gifts/) рейтинг понижают.

Рейтинг содержится в конструкторе [starsRating](/constructor/starsRating/), доступном через [userFull](/constructor/userFull/).`stars_rating`.

Звёздный рейтинг задаётся полями `level` (целое число, возможно отрицательное) и `rating` (целое число, возможно отрицательное): достигая определённых пороговых значений `rating`, пользователь переходит на уровень выше или ниже.

[@note] В оригинале это поле названо `rating`, но в конструкторе `starsRating` такого поля нет: само значение рейтинга хранится в `stars`, а границы текущего и следующего уровней — в `current_level_stars` и `next_level_stars`.

Кроме того, в [userFull](/constructor/userFull/).`stars_my_pending_rating` можно увидеть ожидающий применения звёздный рейтинг — но только для самого себя; он будет применён в момент, указанный в [userFull](/constructor/userFull/).`stars_my_pending_rating_date`.

В [stars\_rating\_learnmore\_url](/api/config/#stars-rating-learnmore-url) передаётся URL, который можно показать пользователям: он ведёт на страницу с подробным описанием системы звёздного рейтинга.

### Использование звёзд

```
payments.paymentFormStars#7bf6b15c flags:# form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice users:Vector<User> = payments.PaymentForm;

payments.paymentReceiptStars#dabbf83a flags:# date:int bot_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice currency:string total_amount:long transaction_id:string users:Vector<User> = payments.PaymentReceipt;

---functions---

payments.sendStarsForm#7998c914 form_id:long invoice:InputInvoice = payments.PaymentResult;

payments.refundStarsCharge#25ae8f4a user_id:InputUser charge_id:string = Updates;
```

Полный порядок покупок за Telegram Stars описан вместе с обычным платёжным сценарием в [документации по платежам »](/api/payments/): во всех счетах и конструкторах, работающих с денежными суммами, используется код валюты `XTR`, а сами суммы указываются в Telegram Stars.

#### Платные медиа

Telegram Stars служат для оплаты [платных медиа](/api/paid-media/), которые администраторы могут публиковать в каналах так, как описано [здесь »](/api/paid-media/).

Покупка платного медиа переводит Telegram Stars на баланс канала.  
Далее владельцы канала могут [вывести звёзды в Gram »](#withdrawing-revenue) или [потратить звёзды на рекламу канала »](#paying-for-ads).

Владельцам каналов также доступны [статистика доходов в звёздах](#revenue-statistics) и [сведения о балансе](#balance-and-transaction-history).

#### Платные сообщения

Telegram Stars можно использовать для оплаты отправки сообщений пользователям и каналам, у которых настроены [платные сообщения »](/api/paid-messages/): за каждое отправленное им сообщение взимается плата.

Покупка платного медиа переводит Telegram Stars на баланс канала или пользователя.

#### Платные реакции

Теперь пользователи могут напрямую поддерживать любимые каналы и авторов, отправляя им Telegram Stars с помощью новой реакции-звезды.

Владельцы каналов получают 100 % звёзд и могут обменять их на вознаграждение в криптовалюте Gram или на рекламу по льготной цене.

Полный порядок действий описан [здесь »](/api/reactions/#paid-reactions).

#### Предложенные посты

Telegram предлагает администраторам каналов мощный инструмент монетизации — **предложенные посты**.

Полный порядок действий описан [здесь »](/api/suggested-posts/).

#### Платежи в ботах

Telegram Stars используются и для оплаты цифровых услуг в ботах — через [keyboardButtonBuy](/constructor/keyboardButtonBuy/) и [обычный платёжный сценарий »](/api/payments/) с `currency="XTR"`.

Покупка платного медиа переводит Telegram Stars на баланс бота.  
Далее владельцы бота могут [вывести звёзды в Gram »](#withdrawing-revenue) или [потратить звёзды на рекламу канала »](#paying-for-ads).

Владельцам ботов также доступны [статистика доходов в звёздах](#revenue-statistics) и [сведения о балансе](#balance-and-transaction-history).

#### Реферальная программа за звёзды

[@term:Mini App] Разработчики могут открыть партнёрскую программу для своего [mini app](/api/bots/webapps/) (Mini App — приложение, работающее внутри Telegram), позволив **авторам контента**, другим **разработчикам Mini App** и **любому пользователю Telegram** продвигать его и получать комиссию с покупок, совершённых приглашёнными ими людьми.

Подробнее о полном порядке действий — [здесь »](/api/bots/referrals/).

#### Подписки за звёзды

Боты и каналы могут создавать подписки, периодически списывая с пользователей определённое количество [Telegram Stars](/api/stars/) в обмен на контент и услуги.

Полный порядок действий описан [здесь »](/api/subscriptions/).

#### Розыгрыши звёзд

Розыгрыши звёзд устроены так же, как [обычные розыгрыши](/api/giveaways/#giveaways-and-giftcodes), с единственным отличием: вместо подарков или [подписок Telegram Premium](/api/premium/) розыгрыш автоматически распределяет между победителями Telegram Stars.

Полный порядок действий описан [здесь »](/api/giveaways/#star-giveaways).

#### Подарки за звёзды

Пользователи могут отправлять друзьям **подарки**. Получатели вправе показать их в своём профиле либо обменять на Telegram Stars.

Полный порядок действий описан [здесь »](/api/gifts/).

### Вывод доходов

```
payments.starsRevenueWithdrawalUrl#1dab80b7 url:string = payments.StarsRevenueWithdrawalUrl;
---functions---

payments.getStarsRevenueWithdrawalUrl#2433dc92 flags:# ton:flags.0?true peer:InputPeer amount:flags.1?long password:InputCheckPasswordSRP = payments.StarsRevenueWithdrawalUrl;
```

Чтобы вывести средства со звёздного баланса принадлежащего вам канала или бота, вызовите [payments.getStarsRevenueWithdrawalUrl](/method/payments.getStarsRevenueWithdrawalUrl/), передав [пароль двухфакторной аутентификации](/api/srp/) текущей учётной записи в виде конструктора [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/), сформированного [так, как описано здесь »](/api/srp/).

Чтобы вывести рекламный доход канала или бота, вызовите тот же метод тем же образом, дополнительно выставив флаг `ton`.

Вызывать этот метод может только владелец канала или бота, и лишь при условии, что баланс не меньше [stars\_revenue\_withdrawal\_min »](/api/config/#stars-revenue-withdrawal-min), а метод [payments.getStarsRevenueStats](/method/payments.getStarsRevenueStats/) возвращает установленный флаг `status.withdrawal_enabled`.

Параметр [stars\_revenue\_withdrawal\_max »](/api/config/#stars-revenue-withdrawal-max) задаёт максимальное количество [Telegram Stars](/api/stars/), которое можно [вывести »](/api/stars/#withdrawing-revenue) с баланса канала или бота.  
Чтобы вывести больше звёзд, запустите процедуру вывода заново.

Метод возвращает уникальную ссылку на страницу [Fragment](https://fragment.com/), где пользователь сможет указать и подтвердить адрес TON-кошелька, на который будут отправлены средства.

За вывод тысячи звёзд пользователь получит сумму, эквивалентную [`stars_usd_withdraw_rate_x1000` долларам США — согласно конфигурации клиента »](/api/config/#stars-usd-withdraw-rate-x1000).

### Оплата рекламы

```
starsTransactionPeerAds#60682812 = StarsTransactionPeer;

payments.starsRevenueAdsAccountUrl#394e7f21 url:string = payments.StarsRevenueAdsAccountUrl;

---functions---

payments.getStarsRevenueAdsAccountUrl#d1d7efc5 peer:InputPeer = payments.StarsRevenueAdsAccountUrl;
```

Владельцы каналов и ботов могут размещать в Telegram рекламу принадлежащих им каналов и ботов через рекламную платформу Telegram, оплачивая её **звёздами**, доступными на балансе бота или канала, по особому курсу со **скидкой 30 %** — это **выгодный** способ привлечь новых пользователей.

Чтобы оплатить рекламу звёздами, перейдите в раздел «Баланс» или «Монетизация» своего бота или канала и нажмите «_Купить рекламу_».  
По нажатию кнопки клиент должен вызвать [payments.getStarsRevenueAdsAccountUrl](/method/payments.getStarsRevenueAdsAccountUrl/), передав бота или канал в параметре `peer`.  
Возвращённая ссылка `url` ведёт на страницу, где пользователь сможет разместить рекламу для канала или бота, указанного в `peer`.

[Транзакции](#balance-and-transaction-history) по оплате рекламы имеют тип [starsTransactionPeerAds](/constructor/starsTransactionPeerAds/).

### Перевод звёзд с бизнес-аккаунта на бизнес-бота

```
inputInvoiceBusinessBotTransferStars#f4997e42 bot:InputUser stars:long = InputInvoice;

payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;

---functions---

payments.getStarsStatus#4ea9b3bf flags:# ton:flags.0?true peer:InputPeer = payments.StarsStatus;
```

Конструктор [inputInvoiceBusinessBotTransferStars](/constructor/inputInvoiceBusinessBotTransferStars/) позволяет перевести звёзды с баланса учётной записи пользователя, [подключённой к бизнес-боту](/api/bots/connected-business-bots/), на баланс самого бизнес-бота.

Количество доступных звёзд на балансе пользователя можно узнать, вызвав [payments.getStarsStatus](/method/payments.getStarsStatus/) с peer=[inputPeerSelf](/constructor/inputPeerSelf/) через бизнес-подключение.

Чтобы выполнить перевод, вызовите [payments.getPaymentForm](/method/payments.getPaymentForm/) с [inputInvoiceBusinessBotTransferStars](/constructor/inputInvoiceBusinessBotTransferStars/) (где `bot`\=[inputPeerSelf](/constructor/inputPeerSelf/)) и пройдите обычный [процесс оплаты »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product), **выполняя все вызовы методов через бизнес-подключение**.

### Глубокие ссылки «Мои звёзды»

[@term:deep link] [Глубокие ссылки «Мои звёзды» »](/api/links/#my-stars-links) и [глубокие ссылки «Мои Gram» »](/api/links/#my-grams-links) (`deep link` — ссылка, открывающая нужный экран прямо в приложении) позволяют открыть страницу «Мои звёзды» или «Мои Gram» с кнопкой пополнения, историей транзакций в звёздах и TON, статистикой и прочими сведениями, описанными в разделах выше.

### Gram

```
starsTonAmount#74aee3e0 amount:long = StarsAmount;

messageActionGiftTon#a8a3c699 flags:# currency:string amount:long crypto_currency:string crypto_amount:long transaction_id:flags.0?string = MessageAction;

inputStickerSetTonGifts#1cf671a0 = InputStickerSet;
```

В некоторых местах API вместо звёзд можно использовать Gram: в этом случае вместо конструктора [starsAmount](/constructor/starsAmount/) применяется [starsTonAmount](/constructor/starsTonAmount/), указывающий сумму в TON в наименьшей единице этой криптовалюты — сейчас это _нанограммы_, то есть `1/1_000_000_000` (одна миллиардная) доля Gram.

Когда пользователю дарят TON, приходит конструктор [messageActionGiftTon](/constructor/messageActionGiftTon/): его вместе с содержимым следует показывать рядом с подходящим стикером из [набора стикеров »](/api/stickers/#stickersets) [inputStickerSetTonGifts »](/constructor/inputStickerSetTonGifts/):

-   Если `crypto_amount <= 10_000_000_000`, выберите стикер с эмодзи «<img class="emoji" src="https://telegram.org/img/emoji/40/32E283A3.png" width="20" height="20" alt="2️⃣">»
-   Если `crypto_amount <= 50_000_000_000`, выберите стикер с эмодзи «<img class="emoji" src="https://telegram.org/img/emoji/40/31E283A3.png" width="20" height="20" alt="1️⃣">»
-   В противном случае выберите стикер с эмодзи «<img class="emoji" src="https://telegram.org/img/emoji/40/33E283A3.png" width="20" height="20" alt="3️⃣">»
