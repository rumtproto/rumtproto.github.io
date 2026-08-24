---
title: "updateGroupCall"
original: "https://core.telegram.org/constructor/updateGroupCall"
section: ref
kind: constructor
description: "Указывает, что информация о групповом звонке изменилась, см. применение обновлений групповых звонков »."
layout: layout.njk
---

# updateGroupCall

Указывает, что информация о групповом звонке изменилась, см. [применение обновлений групповых звонков »](/api/group-calls/#applying-group-call-updates).

```
updateGroupCall#9d2216e0 flags:# live_story:flags.2?true peer:flags.1?Peer call:GroupCall = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>live_story</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Относится ли это обновление к <a href="/api/group-calls#live-stories">прямой истории »</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, связанный с групповым звонком</td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/GroupCall">GroupCall</a></td><td>Информация о групповом звонке или трансляции</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
