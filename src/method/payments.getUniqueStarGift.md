---
title: "payments.getUniqueStarGift"
original: "https://core.telegram.org/method/payments.getUniqueStarGift"
section: ref
kind: method
description: "Получить сведения о коллекционном подарке » по слагу, полученному из ссылки на коллекционный подарок »."
layout: layout.njk
---

# payments.getUniqueStarGift

Получить сведения о [коллекционном подарке »](/api/gifts/#collectible-gifts) по слагу, полученному из [ссылки на коллекционный подарок »](/api/links/#collectible-gift-link).

```
payments.uniqueStarGift#416c56e8 gift:StarGift chats:Vector<Chat> users:Vector<User> = payments.UniqueStarGift;
---functions---
payments.getUniqueStarGift#a1974d72 slug:string = payments.UniqueStarGift;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Слаг.</td></tr></tbody></table>

### Результат

[payments.UniqueStarGift](/type/payments.UniqueStarGift/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>Указанный слаг подарка недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
