---
title: "starGiftAttributeOriginalDetails"
original: "https://core.telegram.org/constructor/starGiftAttributeOriginalDetails"
section: ref
kind: constructor
description: "Сведения об отправителе, получателе и сообщении, приложенных к исходному подарку », до того как он был превращён в коллекционный подарок »."
layout: layout.njk
---

# starGiftAttributeOriginalDetails

Сведения об отправителе, получателе и сообщении, приложенных к исходному [подарку »](/api/gifts/), до того как он был превращён в [коллекционный подарок »](/api/gifts/#collectible-gifts).

```
starGiftAttributeOriginalDetails#e0bff26c flags:# sender_id:flags.0?Peer recipient_id:Peer date:int message:flags.1?TextWithEntities = StarGiftAttribute;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>sender_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Peer">Peer</a></td><td>Исходный отправитель подарка; отсутствует, если подарок был анонимным.</td></tr><tr><td><strong>recipient_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Исходный получатель подарка.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда подарок был отправлен.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Исходное сообщение, приложенное к подарку, если оно есть.</td></tr></tbody></table>

### Тип

[StarGiftAttribute](/type/StarGiftAttribute/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
