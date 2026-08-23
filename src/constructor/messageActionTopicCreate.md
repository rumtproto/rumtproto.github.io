---
title: "messageActionTopicCreate (конструктор)"
original: "https://core.telegram.org/constructor/messageActionTopicCreate"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionTopicCreate

*Конструктор из схемы TL.*

> A [forum topic](https://core.telegram.org/api/forum#forum-topics) was created.

## Определение TL

```
messageActionTopicCreate#d999256 flags:# title_missing:flags.1?true title:string icon_color:int icon_emoji_id:flags.0?long = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| title_missing | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, the topic has no user-defined title, can only be set for the per-user topics of [bot forums](https://core.telegram.org/api/forum#bot-forums); if this field is set, the topic title likely needs to be changed by the bot. |
| title | [string](/type/string/) | Topic name. |
| icon_color | [int](/type/int/) | If no custom emoji icon is specified, specifies the color of the fallback topic icon (RGB), one of 0x6FB9F0, 0xFFD67E, 0xCB86DB, 0x8EEE98, 0xFF93B2, or 0xFB6F5F. |
| icon_emoji_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | ID of the [custom emoji](https://core.telegram.org/api/custom-emoji) used as topic icon. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
