---
title: "messageActionSuggestBirthday (конструктор)"
original: "https://core.telegram.org/constructor/messageActionSuggestBirthday"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionSuggestBirthday

*Конструктор из схемы TL.*

> A new birthday was suggested using [users.suggestBirthday](/method/users.suggestBirthday/), see [here »](https://core.telegram.org/api/profile#birthday) for more info on birthdays in the API.

## Определение TL

```
messageActionSuggestBirthday#2c8f2a25 birthday:Birthday = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| birthday | [Birthday](/type/Birthday/) | The suggested birthday. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [users.suggestBirthday](/method/users.suggestBirthday/)

Suggest a birthday to another user, see [here »](https://core.telegram.org/api/profile#birthday) for more info on birthdays in the API.

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
