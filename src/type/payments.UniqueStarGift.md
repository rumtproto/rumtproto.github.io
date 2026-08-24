---
title: "payments.UniqueStarGift"
original: "https://core.telegram.org/type/payments.UniqueStarGift"
section: ref
kind: type
description: "Представляет коллекционный подарок »."
layout: layout.njk
---

# payments.UniqueStarGift

Представляет [коллекционный подарок »](/api/gifts/#collectible-gifts).

```
payments.uniqueStarGift#416c56e8 gift:StarGift chats:Vector<Chat> users:Vector<User> = payments.UniqueStarGift;

---functions---

payments.getUniqueStarGift#a1974d72 slug:string = payments.UniqueStarGift;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.uniqueStarGift">payments.uniqueStarGift</a></td><td>Представляет <a href="/api/gifts#collectible-gifts">коллекционный подарок »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getUniqueStarGift">payments.getUniqueStarGift</a></td><td>Получить сведения о <a href="/api/gifts#collectible-gifts">коллекционном подарке »</a> по слагу, полученному из <a href="/api/links#collectible-gift-link">ссылки на коллекционный подарок »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
