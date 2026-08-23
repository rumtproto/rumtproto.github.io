---
title: "channelAdminLogEventActionChangeEmojiStatus (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionChangeEmojiStatus"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionChangeEmojiStatus

*Конструктор из схемы TL.*

> The [emoji status](https://core.telegram.org/api/emoji-status) was changed

## Определение TL

```
channelAdminLogEventActionChangeEmojiStatus#3ea9feb1 prev_value:EmojiStatus new_value:EmojiStatus = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_value | [EmojiStatus](/type/EmojiStatus/) | Previous emoji status |
| new_value | [EmojiStatus](/type/EmojiStatus/) | New emoji status |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
