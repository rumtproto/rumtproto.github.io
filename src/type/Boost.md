---
title: "Boost"
original: "https://core.telegram.org/type/Boost"
section: ref
kind: type
description: "Информация об одном или нескольких бустах, применённых определённым пользователем."
layout: layout.njk
---

# Boost

Информация об одном или нескольких [бустах](/api/boost/), применённых определённым пользователем.

```
boost#4b3e14d6 flags:# gift:flags.1?true giveaway:flags.2?true unclaimed:flags.3?true id:string user_id:flags.0?long giveaway_msg_id:flags.2?int date:int expires:int used_gift_slug:flags.4?string multiplier:flags.5?int stars:flags.6?long = Boost;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/boost">boost</a></td><td>[@term:boost] Информация об одном или нескольких <a href="/api/boost">бустах</a>, применённых конкретным пользователем.</td></tr></tbody></table>

### Связанные страницы

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
