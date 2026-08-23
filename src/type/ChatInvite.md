---
title: "ChatInvite (тип)"
original: "https://core.telegram.org/type/ChatInvite"
section: ref
kind: type
layout: layout.njk
---

# ChatInvite

*Тип из схемы TL.*

> Chat invite

## Определение TL

```
chatInviteAlready#5a686d7c chat:Chat = ChatInvite;
chatInvite#5c9d3702 flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:string about:flags.5?string photo:Photo participants_count:int participants:flags.4?Vector<User> color:int subscription_pricing:flags.10?StarsSubscriptionPricing subscription_form_id:flags.12?long bot_verification:flags.13?BotVerification = ChatInvite;
chatInvitePeek#61695cb0 chat:Chat expires:int = ChatInvite;

---functions---

messages.checkChatInvite#3eadb1bb hash:string = ChatInvite;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatInviteAlready](/constructor/chatInviteAlready/) | The user has already joined this chat |
| [chatInvite](/constructor/chatInvite/) | Chat invite info |
| [chatInvitePeek](/constructor/chatInvitePeek/) | A chat invitation that also allows peeking into the group to read messages without joining it. |

## Методы

| Method | Описание |
|---|---|
| [messages.checkChatInvite](/method/messages.checkChatInvite/) | Check the validity of a chat invite link and get basic info about it |
