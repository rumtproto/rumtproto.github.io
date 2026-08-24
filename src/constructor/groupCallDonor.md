---
title: "groupCallDonor"
original: "https://core.telegram.org/constructor/groupCallDonor"
section: ref
kind: constructor
description: "Описывает донатера прямого эфира истории в таблице лидеров пожертвований »."
layout: layout.njk
---

# groupCallDonor

Описывает донатера прямого эфира истории в [таблице лидеров пожертвований »](/api/group-calls/#paid-live-story-donations).

```
groupCallDonor#ee430c85 flags:# top:flags.0?true my:flags.1?true peer_id:flags.3?Peer stars:long = GroupCallDonor;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>top</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Включён ли этот жертвователь в таблицу лидеров крупнейших жертвователей</td></tr><tr><td><strong>my</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Описывает ли эта запись пожертвования текущего пользователя</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Peer">Peer</a></td><td>Донатер, отображаемый в таблице лидеров</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Всего stars, пожертвованных этим жертвователем</td></tr></tbody></table>

### Тип

[GroupCallDonor](/type/GroupCallDonor/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
