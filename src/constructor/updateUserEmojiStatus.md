---
title: "updateUserEmojiStatus (конструктор)"
original: "https://core.telegram.org/constructor/updateUserEmojiStatus"
section: ref
kind: constructor
layout: layout.njk
---

# updateUserEmojiStatus

*Конструктор из схемы TL.*

> The [emoji status](https://core.telegram.org/api/emoji-status) of a certain user has changed

## Определение TL

```
updateUserEmojiStatus#28373599 user_id:long emoji_status:EmojiStatus = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | User ID |
| emoji_status | [EmojiStatus](/type/EmojiStatus/) | New [emoji status](https://core.telegram.org/api/emoji-status) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
