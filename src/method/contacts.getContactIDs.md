---
title: "contacts.getContactIDs"
original: "https://core.telegram.org/method/contacts.getContactIDs"
section: ref
kind: method
description: "Получить идентификаторы Telegram всех контактов."
layout: layout.njk
---

# contacts.getContactIDs

Получить идентификаторы Telegram всех контактов.  
Возвращает массив идентификаторов пользователей Telegram для всех контактов (0, если у контакта нет связанного аккаунта Telegram или он скрыл свой аккаунт с помощью настроек приватности).

```
---functions---
contacts.getContactIDs#7adc669d hash:long = Vector<int>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)\>

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
