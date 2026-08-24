---
title: "phone.joinAsPeers"
original: "https://core.telegram.org/constructor/phone.joinAsPeers"
section: ref
kind: constructor
description: "Содержит пиры, которые могут использоваться для подключения к видеочату или трансляции, см. подключение от имени принадлежащих вам каналов »."
layout: layout.njk
---

# phone.joinAsPeers

Содержит пиры, которые могут использоваться для подключения к видеочату или трансляции, см. [подключение от имени принадлежащих вам каналов »](/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels).

```
phone.joinAsPeers#afe5623f peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = phone.JoinAsPeers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Пиры</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты, упомянутые в векторе пиров</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в векторе пиров</td></tr></tbody></table>

### Тип

[phone.JoinAsPeers](/type/phone.JoinAsPeers/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
