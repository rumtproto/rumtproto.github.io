---
title: "account.connectedBots"
original: "https://core.telegram.org/constructor/account.connectedBots"
section: ref
kind: constructor
description: "Информация о подключённых в данный момент бизнес-ботах."
layout: layout.njk
---

# account.connectedBots

Информация о подключённых в данный момент [бизнес-ботах](/api/bots/connected-business-bots/).

```
account.connectedBots#17d7f87b connected_bots:Vector<ConnectedBot> users:Vector<User> = account.ConnectedBots;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>connected_bots</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ConnectedBot">ConnectedBot</a>&gt;</td><td>Информация о подключённых ботах</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Сведения о боте</td></tr></tbody></table>

### Тип

[account.ConnectedBots](/type/account.ConnectedBots/)

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
