---
title: "updateBotDeleteBusinessMessage"
original: "https://core.telegram.org/constructor/updateBotDeleteBusinessMessage"
section: ref
kind: constructor
description: "Сообщение было удалено в подключённом бизнес-чате »."
layout: layout.njk
---

# updateBotDeleteBusinessMessage

Сообщение было удалено в [подключённом бизнес-чате »](/api/bots/connected-business-bots/).

```
updateBotDeleteBusinessMessage#a02a982e connection_id:string peer:Peer messages:Vector<int> qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор бизнес-подключения.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] <a href="/api/peers">Пир</a>, в котором были удалены сообщения.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы удалённых сообщений.</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Новое значение <strong>qts</strong>, подробнее см. <a href="/api/updates">обновления »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
