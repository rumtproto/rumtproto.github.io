---
title: "fragment.CollectibleInfo"
original: "https://core.telegram.org/type/fragment.CollectibleInfo"
section: ref
kind: type
description: "Информация о коллекционном объекте fragment."
layout: layout.njk
---

# fragment.CollectibleInfo

Информация о [коллекционном объекте fragment](/api/fragment/).

```
fragment.collectibleInfo#6ebdff91 purchase_date:int currency:string amount:long crypto_currency:string crypto_amount:long url:string = fragment.CollectibleInfo;

---functions---

fragment.getCollectibleInfo#be1e85ba collectible:InputCollectible = fragment.CollectibleInfo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/fragment.collectibleInfo">fragment.collectibleInfo</a></td><td>Информация о <a href="/api/fragment">коллекционном объекте fragment</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/fragment.getCollectibleInfo">fragment.getCollectibleInfo</a></td><td>Получить сведения о <a href="/api/fragment#fetching-info-about-fragment-collectibles">коллекционном объекте Fragment; подробнее о полном сценарии см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Коллекционные объекты Fragment](/api/fragment/)

Пользователи Telegram могут упростить связь с собой и поиск своих публичных групп и каналов с помощью имён пользователей: клиенты также могут назначать несколько коллекционных имён пользователей с Fragment » принадлежащим им аккаунтам, супергруппам и каналам; кроме того, Fragment » позволяет покупать коллекционные номера телефонов, на которые можно регистрировать аккаунты Telegram.
