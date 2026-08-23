---
title: "updateBotInlineSend (конструктор)"
original: "https://core.telegram.org/constructor/updateBotInlineSend"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotInlineSend

*Конструктор из схемы TL.*

> The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the [feedback collecting](https://core.telegram.org/bots/inline#collecting-feedback) for details on how to enable these updates for your bot.

## Определение TL

```
updateBotInlineSend#12f12a07 flags:# user_id:long query:string geo:flags.0?GeoPoint id:string msg_id:flags.1?InputBotInlineMessageID = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| user_id | [long](/type/long/) | The user that chose the result |
| query | [string](/type/string/) | The query that was used to obtain the result |
| geo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[GeoPoint](/type/GeoPoint/) | Optional. Sender location, only for bots that require user location |
| id | [string](/type/string/) | The unique identifier for the result that was chosen |
| msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputBotInlineMessageID](/type/InputBotInlineMessageID/) | Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. |

## Тип

[Update](/type/Update/)
