---
title: "messageActionGroupCallScheduled"
original: "https://core.telegram.org/constructor/messageActionGroupCallScheduled"
section: ref
kind: constructor
description: "Видеочат или трансляция были запланированы."
layout: layout.njk
---

# messageActionGroupCallScheduled

[Видеочат или трансляция](/api/group-calls/#video-chats-livestreams) были запланированы.

```
messageActionGroupCallScheduled#b3a07661 call:InputGroupCall schedule_date:int = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Запланированный видеочат или трансляция</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>На когда запланировано начало группового звонка</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
