---
title: "messageViews (конструктор)"
original: "https://core.telegram.org/constructor/messageViews"
section: ref
kind: constructor
layout: layout.njk
---

# messageViews

*Конструктор из схемы TL.*

> View, forward counter + info about replies of a specific message

## Определение TL

```
messageViews#455b853d flags:# views:flags.0?int forwards:flags.1?int replies:flags.2?MessageReplies = MessageViews;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| views | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | View count of message |
| forwards | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Forward count of message |
| replies | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[MessageReplies](/type/MessageReplies/) | Reply and [thread](https://core.telegram.org/api/threads) information of message |

## Тип

[MessageViews](/type/MessageViews/)

## Related pages

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
