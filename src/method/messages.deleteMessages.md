---
title: "messages.deleteMessages (метод)"
original: "https://core.telegram.org/method/messages.deleteMessages"
section: ref
kind: method
layout: layout.njk
---

# messages.deleteMessages

*Метод из схемы TL.*

> Deletes messages by their identifiers.

## Определение TL

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
---functions---
messages.deleteMessages#e58e95d2 flags:# revoke:flags.0?true id:Vector<int> = messages.AffectedMessages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| revoke | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to delete messages for all participants of the chat |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Message ID list |

## Результат

[messages.AffectedMessages](/type/messages.AffectedMessages/)

## Both users and bots can use this method

## This method can be invoked over a business connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | BOT_ACCESS_FORBIDDEN | The specified method can be used over a [business connection](https://core.telegram.org/api/bots/connected-business-bots) for some operations, but the specified query attempted an operation that is not allowed over a business connection. |
| 400 | BUSINESS_CONNECTION_INVALID | The connection_id passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. |
| 403 | MESSAGE_DELETE_FORBIDDEN | You can't delete one of the messages you tried to delete, most likely because it is a service message. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | SELF_DELETE_RESTRICTED | Business bots can't delete messages just for the user, revoke must be set. |

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
