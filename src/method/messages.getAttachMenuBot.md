---
title: "messages.getAttachMenuBot (метод)"
original: "https://core.telegram.org/method/messages.getAttachMenuBot"
section: ref
kind: method
layout: layout.njk
---

# messages.getAttachMenuBot

*Метод из схемы TL.*

> Returns attachment menu entry for a [bot mini app that can be launched from the attachment menu »](https://core.telegram.org/api/bots/attach)

## Определение TL

```
attachMenuBotsBot#93bf667f bot:AttachMenuBot users:Vector<User> = AttachMenuBotsBot;
---functions---
messages.getAttachMenuBot#77216192 bot:InputUser = AttachMenuBotsBot;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | Bot ID |

## Результат

[AttachMenuBotsBot](/type/AttachMenuBotsBot/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |

## Related pages

#### [Bot attachment menu and side menu entries](https://core.telegram.org/api/bots/attach)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
