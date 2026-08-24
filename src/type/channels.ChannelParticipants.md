---
title: "channels.ChannelParticipants"
original: "https://core.telegram.org/type/channels.ChannelParticipants"
section: ref
kind: type
description: "Участники канала или супергруппы"
layout: layout.njk
---

# Channels.ChannelParticipants

Участники канала или супергруппы

```
channels.channelParticipants#9ab0feaf count:int participants:Vector<ChannelParticipant> chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipants;
channels.channelParticipantsNotModified#f0173fe9 = channels.ChannelParticipants;

---functions---

channels.getParticipants#77ced9d0 channel:InputChannel filter:ChannelParticipantsFilter offset:int limit:int hash:long = channels.ChannelParticipants;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/channels.channelParticipants">channels.channelParticipants</a></td><td>Представляет несколько участников канала</td></tr><tr><td><a href="/constructor/channels.channelParticipantsNotModified">channels.channelParticipantsNotModified</a></td><td>Новых сведений об участнике не найдено</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/channels.getParticipants">channels.getParticipants</a></td><td>Получить участников <a href="/api/channel">супергруппы или канала</a></td></tr></tbody></table>
