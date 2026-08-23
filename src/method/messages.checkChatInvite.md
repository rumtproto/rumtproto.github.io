---
title: "messages.checkChatInvite (метод)"
original: "https://core.telegram.org/method/messages.checkChatInvite"
section: ref
kind: method
layout: layout.njk
---

# messages.checkChatInvite

*Метод из схемы TL.*

> Check the validity of a chat invite link and get basic info about it

## Определение TL

```
chatInviteAlready#5a686d7c chat:Chat = ChatInvite;
chatInvite#5c9d3702 flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:string about:flags.5?string photo:Photo participants_count:int participants:flags.4?Vector<User> color:int subscription_pricing:flags.10?StarsSubscriptionPricing subscription_form_id:flags.12?long bot_verification:flags.13?BotVerification = ChatInvite;
chatInvitePeek#61695cb0 chat:Chat expires:int = ChatInvite;
---functions---
messages.checkChatInvite#3eadb1bb hash:string = ChatInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [string](/type/string/) | Invite hash from [chat invite deep link »](https://core.telegram.org/api/links#chat-invite-links). |

## Результат

[ChatInvite](/type/ChatInvite/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | INVITE_HASH_EMPTY | The invite hash is empty. |
| 406 | INVITE_HASH_EXPIRED | The invite link has expired. |
| 400 | INVITE_HASH_INVALID | The invite hash is invalid. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
