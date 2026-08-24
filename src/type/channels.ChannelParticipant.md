---
title: "channels.ChannelParticipant"
original: "https://core.telegram.org/type/channels.ChannelParticipant"
section: ref
kind: type
description: "Участник канала"
layout: layout.njk
---

# Channels.ChannelParticipant

Участник канала

```
channels.channelParticipant#dfb80317 participant:ChannelParticipant chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipant;

---functions---

channels.getParticipant#a0ab6cc6 channel:InputChannel participant:InputPeer = channels.ChannelParticipant;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/channels.channelParticipant">channels.channelParticipant</a></td><td>Представляет участника канала</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/channels.getParticipant">channels.getParticipant</a></td><td>Получить информацию об участнике <a href="/api/channel">канала или супергруппы</a></td></tr></tbody></table>
