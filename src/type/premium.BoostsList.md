---
title: "premium.BoostsList"
original: "https://core.telegram.org/type/premium.BoostsList"
section: ref
kind: type
description: "Список бустов, применённых к пиру несколькими пользователями."
layout: layout.njk
---

# Premium.BoostsList

Список [бустов](/api/boost/), применённых к пиру несколькими пользователями.

```
premium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;

---functions---

premium.getBoostsList#60f67660 flags:# gifts:flags.0?true peer:InputPeer offset:string limit:int = premium.BoostsList;
premium.getUserBoosts#39854d1f peer:InputPeer user_id:InputUser = premium.BoostsList;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/premium.boostsList">premium.boostsList</a></td><td>Список <a href="/api/boost">бустов</a>, применённых к пиру несколькими пользователями.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/premium.getBoostsList">premium.getBoostsList</a></td><td>Получает сведения о бустах, выданных определённому каналу или супергруппе (только для администраторов)</td></tr><tr><td><a href="/method/premium.getUserBoosts">premium.getUserBoosts</a></td><td>Возвращает списки бустов, применённых к каналу/супергруппе определённым пользователем (только для администраторов)</td></tr></tbody></table>

### Связанные страницы

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
