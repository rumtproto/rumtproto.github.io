---
title: "starGiftCollection"
original: "https://core.telegram.org/constructor/starGiftCollection"
section: ref
kind: constructor
description: "Представляет коллекцию звёздных подарков »."
layout: layout.njk
---

# starGiftCollection

Представляет [коллекцию звёздных подарков »](/api/gifts/#gift-collections).

```
starGiftCollection#9d6b13b0 flags:# collection_id:int title:string icon:flags.0?Document gifts_count:int hash:long = StarGiftCollection;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>collection_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор коллекции.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название коллекции.</td></tr><tr><td><strong>icon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Document">Document</a></td><td>Необязательный значок коллекции, взятый у первого подарка в коллекции.</td></tr><tr><td><strong>gifts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество подарков в коллекции.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Поле, которое используется <strong>вместо <code>collection_id</code></strong> при вычислении хеша, передаваемого в <a href="/method/payments.getStarGiftCollections">payments.getStarGiftCollections</a>.</td></tr></tbody></table>

### Тип

[StarGiftCollection](/type/StarGiftCollection/)

### Связанные страницы

#### [payments.getStarGiftCollections](/method/payments.getStarGiftCollections/)

Получает все [коллекции звёздных подарков »](/api/gifts/#gift-collections) пира.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
