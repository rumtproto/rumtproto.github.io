---
title: "account.getConnectedBots"
original: "https://core.telegram.org/method/account.getConnectedBots"
section: ref
kind: method
description: "Перечислить все подключённые в данный момент бизнес-боты »"
layout: layout.njk
---

# account.getConnectedBots

Перечислить все подключённые в данный момент [бизнес-боты »](/api/bots/connected-business-bots/)

```
account.connectedBots#17d7f87b connected_bots:Vector<ConnectedBot> users:Vector<User> = account.ConnectedBots;
---functions---
account.getConnectedBots#4ea4c80f = account.ConnectedBots;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[account.ConnectedBots](/type/account.ConnectedBots/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
