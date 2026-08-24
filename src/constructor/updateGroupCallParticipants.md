---
title: "updateGroupCallParticipants"
original: "https://core.telegram.org/constructor/updateGroupCallParticipants"
section: ref
kind: constructor
description: "Изменился список участников группового звонка."
layout: layout.njk
---

# updateGroupCallParticipants

Изменился список участников [группового звонка](/api/group-calls/#applying-group-call-updates).

```
updateGroupCallParticipants#f2ebdb4e call:InputGroupCall participants:Vector<GroupCallParticipant> version:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Групповой звонок, состав участников которого изменился</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/GroupCallParticipant">GroupCallParticipant</a>&gt;</td><td>Участники, состояние которых изменилось</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Ревизия группового звонка, используемая <a href="/api/group-calls#applying-group-call-updates">правилами применения обновлений »</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
