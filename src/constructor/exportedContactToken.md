---
title: "exportedContactToken"
original: "https://core.telegram.org/constructor/exportedContactToken"
section: ref
kind: constructor
description: "Описывает временную ссылку на профиль."
layout: layout.njk
---

# exportedContactToken

Описывает [временную ссылку на профиль](/api/links/#temporary-profile-links).

```
exportedContactToken#41bf109b url:string expires:int = ExportedContactToken;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/links#temporary-profile-links">Временная ссылка на профиль</a>.</td></tr><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Срок его действия</td></tr></tbody></table>

### Тип

[ExportedContactToken](/type/ExportedContactToken/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
