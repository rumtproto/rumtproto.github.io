---
title: "chatInvite"
original: "https://core.telegram.org/constructor/chatInvite"
section: ref
kind: constructor
description: "Сведения о приглашении в чат"
layout: layout.njk
---

# chatInvite

Сведения о приглашении в чат

```
chatInvite#5c9d3702 flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:string about:flags.5?string photo:Photo participants_count:int participants:flags.4?Vector<User> color:int subscription_pricing:flags.10?StarsSubscriptionPricing subscription_form_id:flags.12?long bot_verification:flags.13?BotVerification = ChatInvite;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли это <a href="/api/channel">каналом или супергруппой</a> либо <a href="/api/channel">обычной группой</a></td></tr><tr><td><strong>broadcast</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Является ли это <a href="/api/channel">каналом</a></td></tr><tr><td><strong>public</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Является ли это публичным <a href="/api/channel">каналом или супергруппой</a></td></tr><tr><td><strong>megagroup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Является ли это <a href="/api/channel">супергруппой</a></td></tr><tr><td><strong>request_needed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Должна ли <a href="/api/invites#join-requests">заявка на вступление »</a> сначала быть одобрена администратором</td></tr><tr><td><strong>verified</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Верифицирован ли этот чат или канал Telegram?</td></tr><tr><td><strong>scam</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Этот чат, вероятно, мошеннический</td></tr><tr><td><strong>fake</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Если установлено, многие пользователи пожаловались на этот чат как на поддельный или мошеннический: будьте осторожны при взаимодействии с ним.</td></tr><tr><td><strong>can_refulfill_subscription</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что пользователь уже оплатил связанную <a href="/api/stars#star-subscriptions">подписку за Telegram Stars »</a> и она ещё не истекла, поэтому он может повторно вступить в канал с помощью <a href="/method/messages.importChatInvite">messages.importChatInvite</a> без повторной оплаты.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название чата, супергруппы или канала</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/string">string</a></td><td>Описание группы или канала</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/Photo">Photo</a></td><td>Фотография чата, супергруппы или канала</td></tr><tr><td><strong>participants_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество участников</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Несколько участников, состоящих в группе</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/colors">Идентификатор цветовой палитры профиля</a></td></tr><tr><td><strong>subscription_pricing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/StarsSubscriptionPricing">StarsSubscriptionPricing</a></td><td>Для <a href="/api/stars#star-subscriptions">подписок за Telegram Stars »</a> содержит стоимость подписки, которую пользователь должен активировать, чтобы вступить в закрытый канал.</td></tr><tr><td><strong>subscription_form_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/type/long">long</a></td><td>Для <a href="/api/stars#star-subscriptions">подписок за Telegram Stars »</a> — идентификатор платёжной формы подписки.</td></tr><tr><td><strong>bot_verification</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/BotVerification">BotVerification</a></td><td>Описывает <a href="/api/bots/verification">значок верификации бота »</a>.</td></tr></tbody></table>

### Тип

[ChatInvite](/type/ChatInvite/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [messages.importChatInvite](/method/messages.importChatInvite/)

Применить приглашение в чат и вступить в личный чат/супергруппу/канал

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!

#### [Сторонняя верификация](/api/bots/verification/)

Чтобы ещё повысить прозрачность в Telegram, официальные сторонние сервисы могут присваивать аккаунтам пользователей и чатам дополнительные значки верификации — чтобы предотвратить мошенничество и снизить распространение недостоверной информации.
