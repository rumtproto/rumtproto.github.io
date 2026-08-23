---
title: "AttachMenuBotsBot (тип)"
original: "https://core.telegram.org/type/AttachMenuBotsBot"
section: ref
kind: type
layout: layout.njk
---

# AttachMenuBotsBot

*Тип из схемы TL.*

> Represents a [bot mini app that can be launched from the attachment menu »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu)

## Определение TL

```
attachMenuBotsBot#93bf667f bot:AttachMenuBot users:Vector<User> = AttachMenuBotsBot;

---functions---

messages.getAttachMenuBot#77216192 bot:InputUser = AttachMenuBotsBot;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [attachMenuBotsBot](/constructor/attachMenuBotsBot/) | Represents a [bot mini app that can be launched from the attachment menu »](https://core.telegram.org/api/bots/attach) |

## Методы

| Method | Описание |
|---|---|
| [messages.getAttachMenuBot](/method/messages.getAttachMenuBot/) | Returns attachment menu entry for a [bot mini app that can be launched from the attachment menu »](https://core.telegram.org/api/bots/attach) |

## Related pages

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
