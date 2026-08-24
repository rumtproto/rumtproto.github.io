---
title: "payments.saveStarGift"
original: "https://core.telegram.org/method/payments.saveStarGift"
section: ref
kind: method
description: "Показать в нашем профиле или убрать из него полученный или размещённый подарок »."
layout: layout.njk
---

# payments.saveStarGift

Показать в нашем профиле или убрать из него [полученный или размещённый подарок »](/api/gifts/#hosted-collectible-gifts).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.saveStarGift#2a2a697c flags:# unsave:flags.0?true stargift:InputSavedStarGift = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, скрывает подарок из нашего профиля.</td></tr><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift">InputSavedStarGift</a></td><td>Подарок для показа или удаления. <a href="/api/gifts#hosted-collectible-gifts">Размещённый коллекционный подарок »</a> может использоваться тем, у кого он размещён, или его владельцем.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>SAVED_ID_EMPTY</td><td>Переданное значение inputSavedStarGiftChat.saved_id пусто.</td></tr><tr><td>400</td><td>STARGIFT_OBJECT_INVALID</td><td>Указанный объект подарка недействителен.</td></tr><tr><td>400</td><td>STARGIFT_OWNER_INVALID</td><td>Нельзя передать или продать подарок, принадлежащий другому пользователю.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
