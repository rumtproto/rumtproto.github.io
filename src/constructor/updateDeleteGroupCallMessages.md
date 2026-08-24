---
title: "updateDeleteGroupCallMessages"
original: "https://core.telegram.org/constructor/updateDeleteGroupCallMessages"
section: ref
kind: constructor
description: "Указывает, что из наложения сообщений во время звонка » видеочата, трансляции или прямого эфира в историях были удалены сообщения, в том числе в режиме RTMP."
layout: layout.njk
---

# updateDeleteGroupCallMessages

Указывает, что из [наложения сообщений во время звонка »](/api/group-calls/#in-call-messages) видеочата, трансляции или прямого эфира в историях были удалены сообщения, в том числе в режиме RTMP.

```
updateDeleteGroupCallMessages#3e85e92c call:InputGroupCall messages:Vector<int> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Видеочат, трансляция или прямой эфир в истории, из которых были удалены сообщения</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы удалённых сообщений о звонках</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
