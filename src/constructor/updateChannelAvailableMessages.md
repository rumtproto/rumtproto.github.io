---
title: "updateChannelAvailableMessages"
original: "https://core.telegram.org/constructor/updateChannelAvailableMessages"
section: ref
kind: constructor
description: "История канала или супергруппы была скрыта."
layout: layout.njk
---

# updateChannelAvailableMessages

История [канала или супергруппы](/api/channel/) была скрыта.

```
updateChannelAvailableMessages#b23fc698 channel_id:long available_min_id:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала/супергруппы</td></tr><tr><td><strong>available_min_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Наибольший идентификатор сообщения в канале, недоступного из-за скрытой истории.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
