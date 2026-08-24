---
title: "inputGroupCallInviteMessage"
original: "https://core.telegram.org/constructor/inputGroupCallInviteMessage"
section: ref
kind: constructor
description: "Определяет конференц-звонок » по его пригласительному сервисному сообщению messageActionConferenceCall."
layout: layout.njk
---

# inputGroupCallInviteMessage

Определяет [конференц-звонок »](/api/group-calls/#conference-calls) по его пригласительному сервисному сообщению [messageActionConferenceCall](/constructor/messageActionConferenceCall/).

```
inputGroupCallInviteMessage#8c10603f msg_id:int = InputGroupCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор <a href="/constructor/messageActionConferenceCall">messageActionConferenceCall</a>.</td></tr></tbody></table>

### Тип

[InputGroupCall](/type/InputGroupCall/)

### Связанные страницы

#### [messageActionConferenceCall](/constructor/messageActionConferenceCall/)

Представляет [конференц-звонок »](/api/group-calls/#conference-calls) либо приглашение на него, если не установлен ни флаг `missed`, ни флаг `active`.

Если [call\_requests\_disabled](/api/config/#call-requests-disabled) не установлен или равен false, входящий [messageActionConferenceCall](/constructor/messageActionConferenceCall/), у которого **не** установлены флаги `missed` и `active`, должен вызывать звонок и экран входящего вызова — так же, как при звонках один на один.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
