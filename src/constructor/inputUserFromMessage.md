---
title: "inputUserFromMessage"
original: "https://core.telegram.org/constructor/inputUserFromMessage"
section: ref
kind: constructor
description: "Определяет min-пользователя, который встретился в определённом сообщении определённого чата."
layout: layout.njk
---

# inputUserFromMessage

Определяет [min](/api/min/)-пользователя, который встретился в определённом сообщении определённого чата.

```
inputUserFromMessage#1da448e2 peer:InputPeer msg_id:int user_id:long = InputUser;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат, в котором был замечен пользователь</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, который был замечен</td></tr></tbody></table>

### Тип

[InputUser](/type/InputUser/)

### Связанные страницы

#### [Конструкторы min](/api/min/)

В некоторых случаях в конструкторах пользователя и канала присутствует сокращённый набор полей (хотя id есть всегда) и установлен флаг min.
