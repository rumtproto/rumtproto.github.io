---
title: "emojiStatus (конструктор)"
original: "https://core.telegram.org/constructor/emojiStatus"
section: ref
kind: constructor
layout: layout.njk
---

# emojiStatus

*Конструктор из схемы TL.*

> An [emoji status](https://core.telegram.org/api/emoji-status)

## Определение TL

```
emojiStatus#e7ff068a flags:# document_id:long until:flags.0?int = EmojiStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| document_id | [long](/type/long/) | [Custom emoji document ID](https://core.telegram.org/api/custom-emoji) |
| until | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | If set, the emoji status will be active until the specified unixtime. |

## Тип

[EmojiStatus](/type/EmojiStatus/)

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
