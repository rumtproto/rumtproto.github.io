---
title: "channels.readMessageContents"
original: "https://core.telegram.org/method/channels.readMessageContents"
section: ref
kind: method
description: "Отметить содержимое сообщений канала/супергруппы как прочитанное, порождая updateChannelReadMessagesContents."
layout: layout.njk
---

# channels.readMessageContents

Отметить содержимое сообщений [канала/супергруппы](/api/channel/) как прочитанное, порождая [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.readMessageContents#eab5dc38 channel:InputChannel id:Vector<int> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td><a href="/api/channel">Канал/супергруппа</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы сообщений, содержимое которых следует пометить как прочитанное</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/)

Указанные сообщения [канала или супергруппы](/api/channel/) были прочитаны (генерируется специально для таких сообщений, как голосовые сообщения или видео, только после того, как медиафайл просмотрен и отмечен как прочитанный с помощью [channels.readMessageContents](/method/channels.readMessageContents/))
