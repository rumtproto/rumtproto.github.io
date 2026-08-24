---
title: "AttachMenuBots"
original: "https://core.telegram.org/type/AttachMenuBots"
section: ref
kind: type
description: "Представляет список mini app ботов, которые можно запустить из меню вложений »"
layout: layout.njk
---

# AttachMenuBots

[@term:Mini App] Представляет список [mini app ботов, которые можно запустить из меню вложений »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu)

```
attachMenuBotsNotModified#f1d88a5c = AttachMenuBots;
attachMenuBots#3c4301c0 hash:long bots:Vector<AttachMenuBot> users:Vector<User> = AttachMenuBots;

---functions---

messages.getAttachMenuBots#16fcc2cb hash:long = AttachMenuBots;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/attachMenuBotsNotModified">attachMenuBotsNotModified</a></td><td>Список mini app ботов не изменился</td></tr><tr><td><a href="/constructor/attachMenuBots">attachMenuBots</a></td><td>Представляет список <a href="/api/bots/attach">mini app ботов, которые можно запустить из меню вложений »</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getAttachMenuBots">messages.getAttachMenuBots</a></td><td>Возвращает установленные <a href="/api/bots/attach">mini app ботов »</a> из меню вложений</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
