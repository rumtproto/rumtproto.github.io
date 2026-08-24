---
title: "payments.getStarGifts"
original: "https://core.telegram.org/method/payments.getStarGifts"
section: ref
kind: method
description: "Получить список доступных подарков, подробнее см. здесь »."
layout: layout.njk
---

# payments.getStarGifts

Получить список доступных [подарков, подробнее см. здесь »](/api/gifts/).

```
payments.starGiftsNotModified#a388a368 = payments.StarGifts;
payments.starGifts#2ed82995 hash:int gifts:Vector<StarGift> chats:Vector<Chat> users:Vector<User> = payments.StarGifts;
---functions---
payments.getStarGifts#c4563590 hash:int = payments.StarGifts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.<br>Хеш можно вычислить локально по полям <code>id</code> возвращённых или сохранённых объектов <a href="/constructor/starGift">starGift</a>.</td></tr></tbody></table>

### Результат

[payments.StarGifts](/type/payments.StarGifts/)

### Этот метод доступен и пользователям, и ботам

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [starGift](/constructor/starGift/)

Представляет [звёздный подарок, подробнее см. здесь »](/api/gifts/).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
