---
title: "premium.getBoostsList"
original: "https://core.telegram.org/method/premium.getBoostsList"
section: ref
kind: method
description: "Получает сведения о бустах, выданных определённому каналу или супергруппе (только для администраторов)"
layout: layout.njk
---

# premium.getBoostsList

Получает сведения о бустах, выданных определённому каналу или супергруппе (только для администраторов)

```
premium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;
---functions---
premium.getBoostsList#60f67660 flags:# gifts:flags.0?true peer:InputPeer offset:string limit:int = premium.BoostsList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Возвращать ли только сведения о бустах, полученных от <a href="/api/giveaways">подарочных кодов и розыгрышей, созданных каналом или супергруппой »</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Канал или супергруппа</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:next_offset] Смещение для постраничной выборки, берётся из <a href="/constructor/premium.boostsList">premium.boostsList</a>.<code>next_offset</code></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[premium.BoostsList](/type/premium.BoostsList/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [premium.boostsList](/constructor/premium.boostsList/)

Список [бустов](/api/boost/), применённых к пиру несколькими пользователями.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
