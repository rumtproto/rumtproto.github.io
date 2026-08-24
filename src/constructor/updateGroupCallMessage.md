---
title: "updateGroupCallMessage"
original: "https://core.telegram.org/constructor/updateGroupCallMessage"
section: ref
kind: constructor
description: "Через оверлей сообщений в звонке » получено новое сообщение, реакция, платный комментарий или пожертвование."
layout: layout.njk
---

# updateGroupCallMessage

Через [оверлей сообщений в звонке »](/api/group-calls/#in-call-messages) получено новое сообщение, реакция, платный комментарий или пожертвование.

```
updateGroupCallMessage#d8326f0d call:InputGroupCall message:GroupCallMessage = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Групповой звонок, получивший сообщение</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/GroupCallMessage">GroupCallMessage</a></td><td>Полученное сообщение во время звонка</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
