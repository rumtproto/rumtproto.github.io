---
title: "payments.StarGifts"
original: "https://core.telegram.org/type/payments.StarGifts"
section: ref
kind: type
description: "Доступные подарки »."
layout: layout.njk
---

# payments.StarGifts

Доступные [подарки »](/api/gifts/).

```
payments.starGiftsNotModified#a388a368 = payments.StarGifts;
payments.starGifts#2ed82995 hash:int gifts:Vector<StarGift> chats:Vector<Chat> users:Vector<User> = payments.StarGifts;

---functions---

payments.getStarGifts#c4563590 hash:int = payments.StarGifts;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftsNotModified">payments.starGiftsNotModified</a></td><td>Список доступных <a href="/api/gifts">подарков »</a> не изменился.</td></tr><tr><td><a href="/constructor/payments.starGifts">payments.starGifts</a></td><td>Доступные <a href="/api/gifts">подарки »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGifts">payments.getStarGifts</a></td><td>Получить список доступных <a href="/api/gifts">подарков, подробнее см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
