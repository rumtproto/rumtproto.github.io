---
title: "payments.toggleStarGiftsPinnedToTop"
original: "https://core.telegram.org/method/payments.toggleStarGiftsPinnedToTop"
section: ref
kind: method
description: "Закрепляет полученный подарок в верхней части профиля пользователя или принадлежащих ему каналов с помощью payments.toggleStarGiftsPinnedToTop."
layout: layout.njk
---

# payments.toggleStarGiftsPinnedToTop

Закрепляет полученный подарок в верхней части профиля пользователя или принадлежащих ему каналов с помощью [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.toggleStarGiftsPinnedToTop#1513e7b0 peer:InputPeer stargift:Vector<InputSavedStarGift> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором нужно закрепить подарок.</td></tr><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputSavedStarGift">InputSavedStarGift</a>&gt;</td><td>Подарок для закрепления.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/)

Закрепляет полученный подарок в верхней части профиля пользователя или принадлежащих ему каналов с помощью [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/).
