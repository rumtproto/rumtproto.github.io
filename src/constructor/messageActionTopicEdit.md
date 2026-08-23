---
title: "messageActionTopicEdit (конструктор)"
original: "https://core.telegram.org/constructor/messageActionTopicEdit"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionTopicEdit

*Конструктор из схемы TL.*

> [Forum topic](https://core.telegram.org/api/forum#forum-topics) information was edited.

## Определение TL

```
messageActionTopicEdit#c0944820 flags:# title:flags.0?string icon_emoji_id:flags.1?long closed:flags.2?Bool hidden:flags.3?Bool = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | New topic title. |
| icon_emoji_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[long](/type/long/) | ID of the new [custom emoji](https://core.telegram.org/api/custom-emoji) used as topic icon, or if it was removed. |
| closed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Bool](/type/Bool/) | Whether the topic was opened or closed. |
| hidden | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Bool](/type/Bool/) | Whether the topic was hidden or unhidden (only valid for the "General" topic, id=1). |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
