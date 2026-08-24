---
title: "InputMessage"
original: "https://core.telegram.org/type/InputMessage"
section: ref
kind: type
description: "Сообщение"
layout: layout.njk
---

# InputMessage

Сообщение

```
inputMessageID#a676a322 id:int = InputMessage;
inputMessageReplyTo#bad88395 id:int = InputMessage;
inputMessagePinned#86872538 = InputMessage;
inputMessageCallbackQuery#acfa1a7e id:int query_id:long = InputMessage;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputMessageID">inputMessageID</a></td><td>Сообщение по идентификатору</td></tr><tr><td><a href="/constructor/inputMessageReplyTo">inputMessageReplyTo</a></td><td>Сообщение, на которое отвечает указанное сообщение</td></tr><tr><td><a href="/constructor/inputMessagePinned">inputMessagePinned</a></td><td>Закреплённое сообщение</td></tr><tr><td><a href="/constructor/inputMessageCallbackQuery">inputMessageCallbackQuery</a></td><td>Используется ботами для получения сведений о сообщении, из которого пришёл callback-запрос</td></tr></tbody></table>
