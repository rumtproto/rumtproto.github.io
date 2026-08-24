---
title: "ChatInvite"
original: "https://core.telegram.org/type/ChatInvite"
section: ref
kind: type
description: "Приглашение в чат"
layout: layout.njk
---

# ChatInvite

Приглашение в чат

```
chatInviteAlready#5a686d7c chat:Chat = ChatInvite;
chatInvite#5c9d3702 flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:string about:flags.5?string photo:Photo participants_count:int participants:flags.4?Vector<User> color:int subscription_pricing:flags.10?StarsSubscriptionPricing subscription_form_id:flags.12?long bot_verification:flags.13?BotVerification = ChatInvite;
chatInvitePeek#61695cb0 chat:Chat expires:int = ChatInvite;

---functions---

messages.checkChatInvite#3eadb1bb hash:string = ChatInvite;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/chatInviteAlready">chatInviteAlready</a></td><td>Пользователь уже вступил в этот чат</td></tr><tr><td><a href="/constructor/chatInvite">chatInvite</a></td><td>Сведения о приглашении в чат</td></tr><tr><td><a href="/constructor/chatInvitePeek">chatInvitePeek</a></td><td>Приглашение в чат, которое также позволяет заглянуть в группу и читать сообщения, не вступая в неё.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.checkChatInvite">messages.checkChatInvite</a></td><td>Проверить действительность пригласительной ссылки на чат и получить основные сведения о ней</td></tr></tbody></table>
