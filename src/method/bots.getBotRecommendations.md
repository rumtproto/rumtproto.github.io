---
title: "bots.getBotRecommendations (метод)"
original: "https://core.telegram.org/method/bots.getBotRecommendations"
section: ref
kind: method
layout: layout.njk
---

# bots.getBotRecommendations

*Метод из схемы TL.*

> Obtain a list of similarly themed bots, selected based on similarities in their subscriber bases, see [here »](https://core.telegram.org/api/recommend) for more info.

## Определение TL

```
users.users#62d706b8 users:Vector<User> = users.Users;
users.usersSlice#315a4974 count:int users:Vector<User> = users.Users;
---functions---
bots.getBotRecommendations#a1b70815 bot:InputUser = users.Users;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | The method will return bots related to the passed bot. |

## Результат

[users.Users](/type/users.Users/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |

## Related pages

#### [Similar channels and bots](https://core.telegram.org/api/recommend)

The API offers a method to obtain a list of similarly themed public channels and bots, selected based on similarities in their subscriber bases.
