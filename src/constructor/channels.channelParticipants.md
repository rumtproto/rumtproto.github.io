---
title: "channels.channelParticipants"
original: "https://core.telegram.org/constructor/channels.channelParticipants"
section: ref
kind: constructor
description: "Представляет несколько участников канала"
layout: layout.njk
---

# channels.channelParticipants

Представляет несколько участников канала

```
channels.channelParticipants#9ab0feaf count:int participants:Vector<ChannelParticipant> chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipants;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число участников, соответствующих заданному запросу</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ChannelParticipant">ChannelParticipant</a>&gt;</td><td>Участники</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в информации об участнике</td></tr></tbody></table>

### Тип

[channels.ChannelParticipants](/type/channels.ChannelParticipants/)
