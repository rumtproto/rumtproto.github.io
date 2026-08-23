---
title: "messageActionSetMessagesTTL (конструктор)"
original: "https://core.telegram.org/constructor/messageActionSetMessagesTTL"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionSetMessagesTTL

*Конструктор из схемы TL.*

> The Time-To-Live of messages in this chat was changed.

## Определение TL

```
messageActionSetMessagesTTL#3c134d7b flags:# period:int auto_setting_from:flags.0?long = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| period | [int](/type/int/) | New Time-To-Live of all messages sent in this chat; if 0, autodeletion was disabled. |
| auto_setting_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | If set, the chat TTL setting was set not due to a manual change by one of participants, but automatically because one of the participants has the [default TTL settings enabled »](/method/messages.setDefaultHistoryTTL/). For example, when a user writes to us for the first time and we have set a default messages TTL of 1 week, this service message (with auto_setting_from=our_userid) will be emitted before our first message. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [messages.setDefaultHistoryTTL](/method/messages.setDefaultHistoryTTL/)

Changes the default value of the Time-To-Live setting, applied to all new chats.
