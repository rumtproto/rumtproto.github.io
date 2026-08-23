---
title: "messages.readHistory (метод)"
original: "https://core.telegram.org/method/messages.readHistory"
section: ref
kind: method
layout: layout.njk
---

# messages.readHistory

*Метод из схемы TL.*

> Marks message history as read.

## Определение TL

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
---functions---
messages.readHistory#e306d3a peer:InputPeer max_id:int = messages.AffectedMessages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Target user or group |
| max_id | [int](/type/int/) | If a positive value is passed, only messages with identifiers less than or equal to the given one will be read |

## Результат

[messages.AffectedMessages](/type/messages.AffectedMessages/)

## Only users can use this method

## This method can be invoked over a business connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BUSINESS_CONNECTION_INVALID | The connection_id passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
