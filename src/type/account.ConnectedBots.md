---
title: "account.ConnectedBots"
original: "https://core.telegram.org/type/account.ConnectedBots"
section: ref
kind: type
description: "Информация о подключённых в данный момент бизнес-ботах."
layout: layout.njk
---

# account.ConnectedBots

Информация о подключённых в данный момент [бизнес-ботах](/api/bots/connected-business-bots/).

```
account.connectedBots#17d7f87b connected_bots:Vector<ConnectedBot> users:Vector<User> = account.ConnectedBots;

---functions---

account.getConnectedBots#4ea4c80f = account.ConnectedBots;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.connectedBots">account.connectedBots</a></td><td>Информация о подключённых в данный момент <a href="/api/bots/connected-business-bots">бизнес-ботах</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getConnectedBots">account.getConnectedBots</a></td><td>Перечислить все подключённые в данный момент <a href="/api/bots/connected-business-bots">бизнес-боты »</a></td></tr></tbody></table>

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
