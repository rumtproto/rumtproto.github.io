---
title: "payments.getStarGiftCollections"
original: "https://core.telegram.org/method/payments.getStarGiftCollections"
section: ref
kind: method
description: "Получает все коллекции звёздных подарков » пира."
layout: layout.njk
---

# payments.getStarGiftCollections

Получает все [коллекции звёздных подарков »](/api/gifts/#gift-collections) пира.

```
payments.starGiftCollectionsNotModified#a0ba4f17 = payments.StarGiftCollections;
payments.starGiftCollections#8a2932f3 collections:Vector<StarGiftCollection> = payments.StarGiftCollections;
---functions---
payments.getStarGiftCollections#981b91dd peer:InputPeer hash:long = payments.StarGiftCollections;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш (<a href="/api/offsets#hash-generation">вычисленный так, как указано здесь »</a>) по полям <a href="/constructor/starGiftCollection">starGiftCollection</a>.<code>hash</code> (<strong>не</strong> по полям <code>collection_id</code>) всех коллекций, возвращённых предыдущим вызовом метода; позволяет не запрашивать результат повторно, если он не изменился.</td></tr></tbody></table>

### Результат

[payments.StarGiftCollections](/type/payments.StarGiftCollections/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [starGiftCollection](/constructor/starGiftCollection/)

Представляет [коллекцию звёздных подарков »](/api/gifts/#gift-collections).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
