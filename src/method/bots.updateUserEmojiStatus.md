---
title: "bots.updateUserEmojiStatus (метод)"
original: "https://core.telegram.org/method/bots.updateUserEmojiStatus"
section: ref
kind: method
layout: layout.njk
---

# bots.updateUserEmojiStatus

*Метод из схемы TL.*

> Change the emoji status of a user (invoked by bots, see [here »](https://core.telegram.org/api/emoji-status#setting-an-emoji-status-from-a-bot) for more info on the full flow)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.updateUserEmojiStatus#ed9f30c5 user_id:InputUser emoji_status:EmojiStatus = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [InputUser](/type/InputUser/) | The user whose emoji status should be changed |
| emoji_status | [EmojiStatus](/type/EmojiStatus/) | The emoji status |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |
| 403 | USER_PERMISSION_DENIED | The user hasn't granted or has revoked the bot's access to change their emoji status using [bots.toggleUserEmojiStatusPermission](/method/bots.toggleUserEmojiStatusPermission/). |

## Related pages

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.

#### [bots.toggleUserEmojiStatusPermission](/method/bots.toggleUserEmojiStatusPermission/)

Allow or prevent a bot from [changing our emoji status »](https://core.telegram.org/api/emoji-status#setting-an-emoji-status-from-a-bot)
