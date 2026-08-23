---
title: "AttachMenuBots (тип)"
original: "https://core.telegram.org/type/AttachMenuBots"
section: ref
kind: type
layout: layout.njk
---

# AttachMenuBots

*Тип из схемы TL.*

> Represents a list of [bot mini apps that can be launched from the attachment menu »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu)

## Определение TL

```
attachMenuBotsNotModified#f1d88a5c = AttachMenuBots;
attachMenuBots#3c4301c0 hash:long bots:Vector<AttachMenuBot> users:Vector<User> = AttachMenuBots;

---functions---

messages.getAttachMenuBots#16fcc2cb hash:long = AttachMenuBots;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [attachMenuBotsNotModified](/constructor/attachMenuBotsNotModified/) | The list of bot mini apps hasn't changed |
| [attachMenuBots](/constructor/attachMenuBots/) | Represents a list of [bot mini apps that can be launched from the attachment menu »](https://core.telegram.org/api/bots/attach) |

## Методы

| Method | Описание |
|---|---|
| [messages.getAttachMenuBots](/method/messages.getAttachMenuBots/) | Returns installed attachment menu [bot mini apps »](https://core.telegram.org/api/bots/attach) |

## Related pages

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
