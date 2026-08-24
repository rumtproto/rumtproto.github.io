---
title: "channels.getFullChannel"
original: "https://core.telegram.org/method/channels.getFullChannel"
section: ref
kind: method
description: "Получить полную информацию о супергруппе, гигагруппе или канале"
layout: layout.njk
---

# channels.getFullChannel

Получить полную информацию о [супергруппе](/api/channel/#supergroups), [гигагруппе](/api/channel/#gigagroups) или [канале](/api/channel/#channels)

```
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;
---functions---
channels.getFullChannel#8736a09 channel:InputChannel = messages.ChatFull;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td><a href="/api/channel#channels">Канал</a>, <a href="/api/channel#supergroups">супергруппа</a> или <a href="/api/channel#gigagroups">гигагруппа</a>, о которой нужно получить сведения</td></tr></tbody></table>

### Результат

[messages.ChatFull](/type/messages.ChatFull/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHANNEL_PUBLIC_GROUP_NA</td><td>канал/супергруппа недоступны.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>Информация о чате не изменена, потому что переданные вами новые данные совпадают с текущими.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
