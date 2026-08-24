---
title: "account.getThemes"
original: "https://core.telegram.org/method/account.getThemes"
section: ref
kind: method
description: "Получить установленные темы оформления"
layout: layout.njk
---

# account.getThemes

Получить установленные темы оформления

```
account.themesNotModified#f41eb622 = account.Themes;
account.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;
---functions---
account.getThemes#7206e458 format:string hash:long = account.Themes;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>format</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Формат темы оформления — строка, определяющая движки оформления, поддерживаемые клиентом</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[account.Themes](/type/account.Themes/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
