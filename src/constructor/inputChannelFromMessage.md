---
title: "inputChannelFromMessage"
original: "https://core.telegram.org/constructor/inputChannelFromMessage"
section: ref
kind: constructor
description: "Определяет min-канал, который встретился в определённом сообщении определённого чата."
layout: layout.njk
---

# inputChannelFromMessage

Определяет [min](/api/min/)-канал, который встретился в определённом сообщении определённого чата.

```
inputChannelFromMessage#5b934f9d peer:InputPeer msg_id:int channel_id:long = InputChannel;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат, в котором был замечен канал</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения в чате, где был замечен канал</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала</td></tr></tbody></table>

### Тип

[InputChannel](/type/InputChannel/)

### Связанные страницы

#### [Конструкторы min](/api/min/)

В некоторых случаях в конструкторах пользователя и канала присутствует сокращённый набор полей (хотя id есть всегда) и установлен флаг min.
