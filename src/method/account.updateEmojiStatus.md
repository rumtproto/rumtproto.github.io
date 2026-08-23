---
title: "account.updateEmojiStatus (метод)"
original: "https://core.telegram.org/method/account.updateEmojiStatus"
section: ref
kind: method
layout: layout.njk
---

# account.updateEmojiStatus

*Метод из схемы TL.*

> Set an [emoji status](https://core.telegram.org/api/emoji-status)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateEmojiStatus#fbd3de6b emoji_status:EmojiStatus = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| emoji_status | [EmojiStatus](/type/EmojiStatus/) | [Emoji status](https://core.telegram.org/api/emoji-status) to set |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | COLLECTIBLE_INVALID | The specified collectible is invalid. |
| 400 | DOCUMENT_INVALID | The specified document is invalid. |
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |

## Related pages

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
