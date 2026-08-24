---
title: "auth.exportAuthorization"
original: "https://core.telegram.org/method/auth.exportAuthorization"
section: ref
kind: method
description: "Возвращает данные для копирования авторизации в другой дата-центр."
layout: layout.njk
---

# auth.exportAuthorization

Возвращает данные для копирования авторизации в другой дата-центр.

```
auth.exportedAuthorization#b434e2b8 id:long bytes:bytes = auth.ExportedAuthorization;
---functions---
auth.exportAuthorization#e5bfffcd dc_id:int = auth.ExportedAuthorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Номер целевого дата-центра</td></tr></tbody></table>

### Результат

[auth.ExportedAuthorization](/type/auth.ExportedAuthorization/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>DC_ID_INVALID</td><td>Указанный идентификатор DC недействителен.</td></tr></tbody></table>
