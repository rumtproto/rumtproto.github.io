---
title: "stickers.checkShortName"
original: "https://core.telegram.org/method/stickers.checkShortName"
section: ref
kind: method
description: "Проверить, свободно ли указанное короткое имя"
layout: layout.njk
---

# stickers.checkShortName

Проверить, свободно ли указанное короткое имя

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stickers.checkShortName#284b3639 short_name:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:short_name] Краткое имя</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>SHORT_NAME_INVALID</td><td>Указанное краткое имя недействительно.</td></tr><tr><td>400</td><td>SHORT_NAME_OCCUPIED</td><td>Указанное краткое имя уже используется.</td></tr></tbody></table>
