---
title: "phone.JoinAsPeers"
original: "https://core.telegram.org/type/phone.JoinAsPeers"
section: ref
kind: type
description: "Список пиров, от имени которых можно присоединиться к групповому звонку, представившись определённым пользователем или каналом."
layout: layout.njk
---

# phone.JoinAsPeers

Список пиров, от имени которых можно присоединиться к групповому звонку, представившись определённым пользователем или каналом.

```
phone.joinAsPeers#afe5623f peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = phone.JoinAsPeers;

---functions---

phone.getGroupCallJoinAs#ef7c213a peer:InputPeer = phone.JoinAsPeers;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/phone.joinAsPeers">phone.joinAsPeers</a></td><td>Содержит пиры, которые могут использоваться для подключения к видеочату или трансляции, см. <a href="/api/group-calls#joining-a-group-call-on-behalf-of-owned-channels">подключение от имени принадлежащих вам каналов »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCallJoinAs">phone.getGroupCallJoinAs</a></td><td>Получить список пиров, от имени которых можно присоединиться к <a href="/api/group-calls#joining-a-group-call-on-behalf-of-owned-channels">видеочату или трансляции »</a>, представившись определённым пользователем или каналом.<br><br>Этот метод нельзя использовать для прямых историй и конференций. Чтобы комментировать прямую историю или ставить в ней реакции от имени другого пира, вызовите <a href="/method/channels.getSendAs">channels.getSendAs</a> с установленным <code>for_live_stories</code> и передайте один из возвращённых пиров в <a href="/method/phone.sendGroupCallMessage">phone.sendGroupCallMessage</a>.<code>send_as</code>.</td></tr></tbody></table>
