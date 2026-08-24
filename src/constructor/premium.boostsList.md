---
title: "premium.boostsList"
original: "https://core.telegram.org/constructor/premium.boostsList"
section: ref
kind: constructor
description: "Список бустов, применённых к пиру несколькими пользователями."
layout: layout.njk
---

# premium.boostsList

Список [бустов](/api/boost/), применённых к пиру несколькими пользователями.

```
premium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число результатов</td></tr><tr><td><strong>boosts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Boost">Boost</a>&gt;</td><td><a href="/api/boost">Бусты</a></td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>[@term:next_offset] Смещение, которое можно использовать для <a href="/api/offsets">постраничной выборки</a>.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr></tbody></table>

### Тип

[premium.BoostsList](/type/premium.BoostsList/)

### Связанные страницы

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
