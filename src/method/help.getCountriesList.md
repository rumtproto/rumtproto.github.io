---
title: "help.getCountriesList"
original: "https://core.telegram.org/method/help.getCountriesList"
section: ref
kind: method
description: "Получить название, код ISO, локализованное название и телефонные коды/шаблоны всех доступных стран"
layout: layout.njk
---

# help.getCountriesList

Получить название, код ISO, локализованное название и телефонные коды/шаблоны всех доступных стран

```
help.countriesListNotModified#93cc1f32 = help.CountriesList;
help.countriesList#87d0759e countries:Vector<help.Country> hash:int = help.CountriesList;
---functions---
help.getCountriesList#735787a8 lang_code:string hash:int = help.CountriesList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка текущего пользователя</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[help.CountriesList](/type/help.CountriesList/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
