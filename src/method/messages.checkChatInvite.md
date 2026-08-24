---
title: "messages.checkChatInvite"
original: "https://core.telegram.org/method/messages.checkChatInvite"
section: ref
kind: method
description: "Проверить действительность пригласительной ссылки на чат и получить основные сведения о ней"
layout: layout.njk
---

# messages.checkChatInvite

Проверить действительность пригласительной ссылки на чат и получить основные сведения о ней

```
chatInviteAlready#5a686d7c chat:Chat = ChatInvite;
chatInvite#5c9d3702 flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:string about:flags.5?string photo:Photo participants_count:int participants:flags.4?Vector<User> color:int subscription_pricing:flags.10?StarsSubscriptionPricing subscription_form_id:flags.12?long bot_verification:flags.13?BotVerification = ChatInvite;
chatInvitePeek#61695cb0 chat:Chat expires:int = ChatInvite;
---functions---
messages.checkChatInvite#3eadb1bb hash:string = ChatInvite;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:hash] Хеш приглашения из <a href="/api/links#chat-invite-links">пригласительной глубокой ссылки на чат »</a>.</td></tr></tbody></table>

### Результат

[ChatInvite](/type/ChatInvite/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>INVITE_HASH_EMPTY</td><td>Хеш приглашения пуст.</td></tr><tr><td>406</td><td>INVITE_HASH_EXPIRED</td><td>Срок действия пригласительной ссылки истёк.</td></tr><tr><td>400</td><td>INVITE_HASH_INVALID</td><td>Хеш приглашения недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
