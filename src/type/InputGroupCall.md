---
title: "InputGroupCall"
original: "https://core.telegram.org/type/InputGroupCall"
section: ref
kind: type
description: "Обозначает групповой звонок"
layout: layout.njk
---

# InputGroupCall

Обозначает групповой звонок

```
inputGroupCall#d8aa840f id:long access_hash:long = InputGroupCall;
inputGroupCallSlug#fe06823f slug:string = InputGroupCall;
inputGroupCallInviteMessage#8c10603f msg_id:int = InputGroupCall;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputGroupCall">inputGroupCall</a></td><td>Указывает на конкретный <a href="/api/group-calls">групповой звонок</a>.</td></tr><tr><td><a href="/constructor/inputGroupCallSlug">inputGroupCallSlug</a></td><td>Определяет <a href="/api/group-calls#conference-calls">конференц-звонок »</a> по слагу из его пригласительной ссылки.<br><br>Этот конструктор можно использовать только для конференц-звонков. Он не подходит для видеочатов и трансляций, прямых историй и любых других типов групповых звонков.</td></tr><tr><td><a href="/constructor/inputGroupCallInviteMessage">inputGroupCallInviteMessage</a></td><td>Определяет <a href="/api/group-calls#conference-calls">конференц-звонок »</a> по его пригласительному сервисному сообщению <a href="/constructor/messageActionConferenceCall">messageActionConferenceCall</a>.</td></tr></tbody></table>
