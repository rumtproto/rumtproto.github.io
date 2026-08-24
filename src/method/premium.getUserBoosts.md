---
title: "premium.getUserBoosts"
original: "https://core.telegram.org/method/premium.getUserBoosts"
section: ref
kind: method
description: "Возвращает списки бустов, применённых к каналу/супергруппе определённым пользователем (только для администраторов)"
layout: layout.njk
---

# premium.getUserBoosts

Возвращает списки бустов, применённых к каналу/супергруппе определённым пользователем (только для администраторов)

```
premium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;
---functions---
premium.getUserBoosts#39854d1f peer:InputPeer user_id:InputUser = premium.BoostsList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Канал или супергруппа</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Пользователь</td></tr></tbody></table>

### Результат

[premium.BoostsList](/type/premium.BoostsList/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>
