---
title: "payments.uniqueStarGift"
original: "https://core.telegram.org/constructor/payments.uniqueStarGift"
section: ref
kind: constructor
description: "Представляет коллекционный подарок »."
layout: layout.njk
---

# payments.uniqueStarGift

Представляет [коллекционный подарок »](/api/gifts/#collectible-gifts).

```
payments.uniqueStarGift#416c56e8 gift:StarGift chats:Vector<Chat> users:Vector<User> = payments.UniqueStarGift;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift">StarGift</a></td><td>Конструктор <a href="/constructor/starGiftUnique">starGiftUnique</a>.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты, упомянутые в поле <code>gift</code>.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в поле <code>gift</code>.</td></tr></tbody></table>

### Тип

[payments.UniqueStarGift](/type/payments.UniqueStarGift/)

### Связанные страницы

#### [starGiftUnique](/constructor/starGiftUnique/)

Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts).

Стикер, представляющий подарок, содержится в объекте [starGiftAttributeModel](/constructor/starGiftAttributeModel/) в поле `attributes`.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
