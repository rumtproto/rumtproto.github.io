---
title: "GroupCallMessage"
original: "https://core.telegram.org/type/GroupCallMessage"
section: ref
kind: type
description: "Представляет сообщение во время звонка, реакцию эмодзи », платный комментарий к прямой трансляции истории или отдельное платное пожертвование в прямой трансляции истории."
layout: layout.njk
---

# GroupCallMessage

Представляет сообщение во время звонка, [реакцию эмодзи »](/api/group-calls/#in-call-reactions), платный комментарий к прямой трансляции истории или отдельное платное пожертвование в прямой трансляции истории.

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===216===
groupCallMessage#907ce88e random_id:long message:TextWithEntities = GroupCallMessage;
```

Схема API:

```
groupCallMessage#1a8afc7e flags:# from_admin:flags.1?true id:int from_id:Peer date:int message:TextWithEntities paid_message_stars:flags.0?long = GroupCallMessage;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/groupCallMessage">groupCallMessage</a></td><td>Представляет <a href="/api/group-calls#in-call-messages">сообщение во время звонка »</a>, реакцию эмодзи, платный комментарий к прямой трансляции истории или отдельное платное пожертвование в прямой трансляции истории.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
