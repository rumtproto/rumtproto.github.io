---
title: "updateUserTyping (конструктор)"
original: "https://core.telegram.org/constructor/updateUserTyping"
section: ref
kind: constructor
layout: layout.njk
---

# updateUserTyping

*Конструктор из схемы TL.*

> The user is preparing a message; typing, recording, uploading, etc. This update is valid for 6 seconds. If no further updates of this kind are received after 6 seconds, it should be considered that the user stopped doing whatever they were doing

## Определение TL

```
updateUserTyping#2a17bf5c flags:# user_id:long top_msg_id:flags.0?int action:SendMessageAction = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| user_id | [long](/type/long/) | User id |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | If set, this notification was sent within a [bot forum topic »](https://core.telegram.org/api/forum#bot-forums). |
| action | [SendMessageAction](/type/SendMessageAction/) | Action type |

## Тип

[Update](/type/Update/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
