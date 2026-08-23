---
title: "bots.toggleUserEmojiStatusPermission (метод)"
original: "https://core.telegram.org/method/bots.toggleUserEmojiStatusPermission"
section: ref
kind: method
layout: layout.njk
---

# bots.toggleUserEmojiStatusPermission

*Метод из схемы TL.*

> Allow or prevent a bot from [changing our emoji status »](https://core.telegram.org/api/emoji-status#setting-an-emoji-status-from-a-bot)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.toggleUserEmojiStatusPermission#6de6392 bot:InputUser enabled:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | The bot |
| enabled | [Bool](/type/Bool/) | Whether to allow or prevent the bot from changing our emoji status |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |

## Related pages

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
