---
title: "starsTransaction"
original: "https://core.telegram.org/constructor/starsTransaction"
section: ref
kind: constructor
description: "Представляет транзакцию Telegram Stars или TON »."
layout: layout.njk
---

# starsTransaction

Представляет [транзакцию Telegram Stars или TON »](/api/stars/).

```
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true offer:flags.29?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>refund</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Является ли эта транзакция возвратом средств.</td></tr><tr><td><strong>pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Транзакция сейчас находится в обработке.</td></tr><tr><td><strong>failed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Эта транзакция завершилась неудачей.</td></tr><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>Эта транзакция была подарком от пользователя, указанного в <code>peer.peer</code>.</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Эта транзакция является <a href="/api/reactions#paid-reactions">платной реакцией »</a>.</td></tr><tr><td><strong>stargift_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/constructor/true">true</a></td><td>Эта транзакция оплачивает улучшение подарка до <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>.</td></tr><tr><td><strong>business_transfer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.21?<a href="/constructor/true">true</a></td><td>Эта транзакция переводит звёзды с баланса учётной записи пользователя, <a href="/api/bots/connected-business-bots">подключённой к бизнес-боту</a>, на баланс бизнес-бота; подробнее см. <a href="/api/stars#transferring-stars-from-a-business-account-to-the-business-bot">здесь »</a>.</td></tr><tr><td><strong>stargift_resale</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.22?<a href="/constructor/true">true</a></td><td>Эта транзакция связана с <a href="/api/gifts#reselling-collectible-gifts">перепродажей коллекционного подарка »</a>.</td></tr><tr><td><strong>posts_search</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.24?<a href="/constructor/true">true</a></td><td>Представляет оплату <a href="/api/search#posts-tab">платного глобального поиска по записям »</a>.</td></tr><tr><td><strong>stargift_prepaid_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.25?<a href="/constructor/true">true</a></td><td>Представляет оплату <a href="/api/gifts#prepaying-for-someone-elses-upgrade">отдельного предоплаченного улучшения подарка</a>.</td></tr><tr><td><strong>stargift_drop_original_details</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.26?<a href="/constructor/true">true</a></td><td>Представляет оплату удаления атрибута <a href="/constructor/starGiftAttributeOriginalDetails">starGiftAttributeOriginalDetails</a> у подарка; полный порядок действий описан <a href="/api/gifts#dropping-the-original-details-of-an-upgraded-gift">здесь »</a>.</td></tr><tr><td><strong>phonegroup_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.27?<a href="/constructor/true">true</a></td><td>Представляет оплату платного текстового сообщения, отправленного во время <a href="/api/group-calls">группового звонка или прямой видеотрансляции »</a>.</td></tr><tr><td><strong>stargift_auction_bid</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.28?<a href="/constructor/true">true</a></td><td>Представляет оплату размещения <a href="/api/auctions">ставки на аукционе коллекционных подарков »</a>.</td></tr><tr><td><strong>offer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.29?<a href="/constructor/true">true</a></td><td>Представляет оплату <a href="/api/gifts#collectible-gift-purchase-offers">предложения о покупке коллекционного подарка »</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор транзакции.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/StarsAmount">StarsAmount</a></td><td>Количество Telegram Stars или TON.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата транзакции (unixtime).</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/StarsTransactionPeer">StarsTransactionPeer</a></td><td>[@term:peer] Источник входящей транзакции либо получатель исходящей транзакции.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Для операций с ботами — название купленного товара.</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Для операций с ботами — описание купленного товара.</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/WebDocument">WebDocument</a></td><td>Для операций с ботами — фотография купленного товара.</td></tr><tr><td><strong>transaction_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Если не заданы ни <code>pending</code>, ни <code>failed</code>, транзакция завершилась успешно, и это поле будет содержать момент времени (Unix timestamp), когда вывод средств был успешно завершён.</td></tr><tr><td><strong>transaction_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/string">string</a></td><td>Если не заданы ни <code>pending</code>, ни <code>failed</code>, транзакция завершилась успешно, и это поле будет содержать URL, по которому можно посмотреть транзакцию вывода средств.</td></tr><tr><td><strong>bot_payload</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/bytes">bytes</a></td><td>Полезная нагрузка счёта, заданная ботом (то есть <code>payload</code>, переданный в <a href="/constructor/inputMediaInvoice">inputMediaInvoice</a> при <a href="/api/payments">создании счёта</a>).</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/int">int</a></td><td>[@term:msg_id] Для <a href="/api/paid-media">транзакций с платными медиа »</a> — идентификатор сообщения с платным медиа, опубликованного в <code>peer.peer</code> (может указывать на удалённое сообщение; в любом случае поле <code>extended_media</code> всегда будет содержать купленное медиа).</td></tr><tr><td><strong>extended_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageMedia">MessageMedia</a>&gt;</td><td>Приобретённое <a href="/api/paid-media">платное медиа »</a>.</td></tr><tr><td><strong>subscription_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/type/int">int</a></td><td>Количество секунд между последовательными списаниями Telegram Stars для <a href="/api/stars#star-subscriptions">подписок за Telegram Stars »</a>.</td></tr><tr><td><strong>giveaway_post_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/int">int</a></td><td>Идентификатор сообщения, содержащего <a href="/constructor/messageMediaGiveaway">messageMediaGiveaway</a>, — для входящих <a href="/api/giveaways#star-giveaways">призов розыгрыша звёзд</a>.</td></tr><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/type/StarGift">StarGift</a></td><td>Эта транзакция обозначает покупку или продажу (обратный обмен на Stars) <a href="/api/stars">подарка »</a>.</td></tr><tr><td><strong>floodskip_number</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/int">int</a></td><td>Эта транзакция является оплатой <a href="/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once">платных рассылок бота</a>.<br>Платные рассылки допускаются только в том случае, если при попытке отправить более 30 сообщений в секунду пользователям бота задан параметр <code>allow_paid_floodskip</code> метода <a href="/method/messages.sendMessage">messages.sendMessage</a> или других методов отправки сообщений.<br>Целочисленное значение, возвращаемое этим флагом, указывает количество тарифицированных вызовов API.</td></tr><tr><td><strong>starref_commission_permille</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/type/int">int</a></td><td>Эта транзакция — получение (или возврат) <a href="/api/bots/referrals">партнёрской комиссии</a> (то есть это транзакция, полученная пиром, который создал <a href="/api/links#referral-links">реферальную ссылку</a>; флаг 17 относится к транзакциям пользователей, перешедших по реферальной ссылке).</td></tr><tr><td><strong>starref_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/Peer">Peer</a></td><td>Для операций, совершённых <a href="/api/bots/referrals">приведёнными пользователями</a>, — пир, получивший партнёрскую комиссию.</td></tr><tr><td><strong>starref_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/StarsAmount">StarsAmount</a></td><td>Для операций, совершённых <a href="/api/bots/referrals">приведёнными пользователями</a>, — количество Telegram Stars, полученных партнёром; может быть отрицательным при возвратах.</td></tr><tr><td><strong>paid_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/type/int">int</a></td><td>Эта транзакция связана с получением или отправкой <a href="/api/paid-messages">платного сообщения »</a>.</td></tr><tr><td><strong>premium_gift_months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.20?<a href="/type/int">int</a></td><td>Эта транзакция обозначает оплату <a href="/api/premium#gifting-telegram-premium">подаренной подписки Telegram Premium »</a>.</td></tr><tr><td><strong>ads_proceeds_from_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.23?<a href="/type/int">int</a></td><td>Указывает, что это выплата дохода от рекламы начиная с указанного времени (unixtime) (всегда устанавливается вместе с <strong>ads_proceeds_to_date</strong>).</td></tr><tr><td><strong>ads_proceeds_to_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.23?<a href="/type/int">int</a></td><td>Указывает, что это выплата дохода от рекламы по указанное время (unixtime).</td></tr></tbody></table>

### Тип

[StarsTransaction](/type/StarsTransaction/)

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Поиск и фильтры](/api/search/)

Telegram позволяет применять подробные фильтры сообщений при поиске в чатах.

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Сведения об отправителе, получателе и сообщении, приложенных к исходному [подарку »](/api/gifts/), до того как он был превращён в [коллекционный подарок »](/api/gifts/#collectible-gifts).

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.

#### [inputMediaInvoice](/constructor/inputMediaInvoice/)

Сформированный счёт [платежа через бота](https://core.telegram.org/bots/payments)

#### [API платежей](/api/payments/)

Вы можете принимать платежи от пользователей Telegram через ботов Telegram.

#### [Платные медиа](/api/paid-media/)

Авторы контента могут принимать Stars, публикуя в своих каналах платные фотографии и видео. Подписчики смогут просмотреть такие посты, только заплатив автору за их разблокировку.

#### [messageMediaGiveaway](/constructor/messageMediaGiveaway/)

Содержит информацию о [розыгрыше, подробнее см. здесь »](/api/giveaways/).

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [Bots FAQ — частые вопросы о ботах](https://core.telegram.org/bots/faq)

#### [messages.sendMessage](/method/messages.sendMessage/)

Отправляет сообщение в чат

#### [Партнёрские программы](/api/bots/referrals/)

[@term:Mini App] Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.
