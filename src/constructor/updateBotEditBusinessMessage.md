---
title: "updateBotEditBusinessMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateBotEditBusinessMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotEditBusinessMessage

*Конструктор из схемы TL.*

> A message was edited in a [connected business chat »](https://core.telegram.org/api/bots/connected-business-bots).

## Определение TL

```
updateBotEditBusinessMessage#7df587c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| connection_id | [string](/type/string/) | Business connection ID |
| message | [Message](/type/Message/) | New message. |
| reply_to_message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Message](/type/Message/) | The message that message is replying to. |
| qts | [int](/type/int/) | New qts value, see [updates »](/api/updates/) for more info. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
