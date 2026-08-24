---
title: "updateReadChannelOutbox"
original: "https://core.telegram.org/constructor/updateReadChannelOutbox"
section: ref
kind: constructor
description: "Исходящие сообщения в канале/супергруппе были прочитаны"
layout: layout.njk
---

# updateReadChannelOutbox

Исходящие сообщения в [канале/супергруппе](/api/channel/) были прочитаны

```
updateReadChannelOutbox#b75f99a9 channel_id:long max_id:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала/супергруппы</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция, до которой прочитаны все исходящие сообщения.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
