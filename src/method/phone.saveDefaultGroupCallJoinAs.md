---
title: "phone.saveDefaultGroupCallJoinAs"
original: "https://core.telegram.org/method/phone.saveDefaultGroupCallJoinAs"
section: ref
kind: method
description: "Задать пир по умолчанию, используемый для присоединения к видеочату или трансляции », связанным с конкретным диалогом."
layout: layout.njk
---

# phone.saveDefaultGroupCallJoinAs

Задать пир по умолчанию, используемый для присоединения к [видеочату или трансляции »](/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels), связанным с конкретным диалогом.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.saveDefaultGroupCallJoinAs#575e1f8c peer:InputPeer join_as:InputPeer = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Обычная группа, супергруппа или канал, для которых требуется изменить настройку видеочата или трансляции по умолчанию</td></tr><tr><td><strong>join_as</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Подходящий пир, используемый по умолчанию при подключении к видеочатам и трансляциям этого диалога; выбирается из <a href="/method/phone.getGroupCallJoinAs">phone.getGroupCallJoinAs</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>JOIN_AS_PEER_INVALID</td><td>Указанный пир нельзя использовать для присоединения к групповому звонку.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [phone.getGroupCallJoinAs](/method/phone.getGroupCallJoinAs/)

Получить список пиров, от имени которых можно присоединиться к [видеочату или трансляции »](/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels), представившись определённым пользователем или каналом.

Этот метод нельзя использовать для прямых историй и конференций. Чтобы комментировать прямую историю или ставить в ней реакции от имени другого пира, вызовите [channels.getSendAs](/method/channels.getSendAs/) с установленным `for_live_stories` и передайте один из возвращённых пиров в [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/).`send_as`.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
