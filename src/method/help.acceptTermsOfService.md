---
title: "help.acceptTermsOfService"
original: "https://core.telegram.org/method/help.acceptTermsOfService"
section: ref
kind: method
description: "Принять новые условия обслуживания"
layout: layout.njk
---

# help.acceptTermsOfService

Принять новые условия обслуживания

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
help.acceptTermsOfService#ee72f79a id:DataJSON = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Идентификатор условий использования</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>DATA_JSON_INVALID</td><td>Указанные данные JSON недействительны.</td></tr></tbody></table>
