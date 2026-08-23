---
title: "messages.getMessageReadParticipants (метод)"
original: "https://core.telegram.org/method/messages.getMessageReadParticipants"
section: ref
kind: method
layout: layout.njk
---

# messages.getMessageReadParticipants

*Метод из схемы TL.*

> Get which users read a specific message: only available for groups and supergroups with less than [`chat_read_mark_size_threshold` members](https://core.telegram.org/api/config#chat-read-mark-size-threshold), read receipts will be stored for [`chat_read_mark_expire_period` seconds after the message was sent](https://core.telegram.org/api/config#chat-read-mark-expire-period), see [client configuration for more info »](https://core.telegram.org/api/config#client-configuration).

## Определение TL

```
---functions---
messages.getMessageReadParticipants#31c1c44f peer:InputPeer msg_id:int = Vector<ReadParticipantDate>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Dialog |
| msg_id | [int](/type/int/) | Message ID |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[ReadParticipantDate](/type/ReadParticipantDate/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_TOO_BIG | This method is not available for groups with more than chat_read_mark_size_threshold members, [see client configuration »](https://core.telegram.org/api/config#client-configuration). |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | MSG_TOO_OLD | [chat_read_mark_expire_period seconds](https://core.telegram.org/api/config#chat-read-mark-expire-period) have passed since the message was sent, read receipts were deleted. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
