---
title: "fragment.getCollectibleInfo"
original: "https://core.telegram.org/method/fragment.getCollectibleInfo"
section: ref
kind: method
description: "Получить сведения о коллекционном объекте Fragment; подробнее о полном сценарии см. здесь »."
layout: layout.njk
---

# fragment.getCollectibleInfo

Получить сведения о [коллекционном объекте Fragment; подробнее о полном сценарии см. здесь »](/api/fragment/#fetching-info-about-fragment-collectibles).

```
fragment.collectibleInfo#6ebdff91 purchase_date:int currency:string amount:long crypto_currency:string crypto_amount:long url:string = fragment.CollectibleInfo;
---functions---
fragment.getCollectibleInfo#be1e85ba collectible:InputCollectible = fragment.CollectibleInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>collectible</strong></td><td style="text-align: center;"><a href="/type/InputCollectible">InputCollectible</a></td><td>Коллекционный подарок, сведения о котором нужно получить.</td></tr></tbody></table>

### Результат

[fragment.CollectibleInfo](/type/fragment.CollectibleInfo/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>COLLECTIBLE_INVALID</td><td>Указанный коллекционный объект недействителен.</td></tr><tr><td>400</td><td>COLLECTIBLE_NOT_FOUND</td><td>Указанный коллекционный предмет не найден.</td></tr></tbody></table>

### Связанные страницы

#### [Коллекционные объекты Fragment](/api/fragment/)

Пользователи Telegram могут упростить связь с собой и поиск своих публичных групп и каналов с помощью имён пользователей: клиенты также могут назначать несколько коллекционных имён пользователей с Fragment » принадлежащим им аккаунтам, супергруппам и каналам; кроме того, Fragment » позволяет покупать коллекционные номера телефонов, на которые можно регистрировать аккаунты Telegram.
