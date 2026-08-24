---
title: "AttachMenuPeerType"
original: "https://core.telegram.org/type/AttachMenuPeerType"
section: ref
kind: type
description: "Обозначает тип пира, поддерживаемый меню вложений mini app бота"
layout: layout.njk
---

# AttachMenuPeerType

[@term:Mini App] Обозначает тип пира, поддерживаемый [меню вложений mini app бота](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu)

```
attachMenuPeerTypeSameBotPM#7d6be90e = AttachMenuPeerType;
attachMenuPeerTypeBotPM#c32bfa1a = AttachMenuPeerType;
attachMenuPeerTypePM#f146d31f = AttachMenuPeerType;
attachMenuPeerTypeChat#509113f = AttachMenuPeerType;
attachMenuPeerTypeBroadcast#7bfbdefc = AttachMenuPeerType;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/attachMenuPeerTypeSameBotPM">attachMenuPeerTypeSameBotPM</a></td><td>Пункт меню вложений бота доступен в чате с тем ботом, который его предлагает</td></tr><tr><td><a href="/constructor/attachMenuPeerTypeBotPM">attachMenuPeerTypeBotPM</a></td><td>Пункт меню вложений бота доступен в личных чатах с другими ботами (кроме бота, который предлагает текущее меню вложений)</td></tr><tr><td><a href="/constructor/attachMenuPeerTypePM">attachMenuPeerTypePM</a></td><td>Пункт меню вложений бота доступен в личных чатах с другими пользователями (не ботами)</td></tr><tr><td><a href="/constructor/attachMenuPeerTypeChat">attachMenuPeerTypeChat</a></td><td>Пункт меню вложений бота доступен в <a href="/api/channel">группах и супергруппах</a></td></tr><tr><td><a href="/constructor/attachMenuPeerTypeBroadcast">attachMenuPeerTypeBroadcast</a></td><td>Пункт меню вложений бота доступен в каналах</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
