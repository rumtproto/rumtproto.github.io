---
title: "inputGroupCallSlug"
original: "https://core.telegram.org/constructor/inputGroupCallSlug"
section: ref
kind: constructor
description: "Определяет конференц-звонок » по слагу из его пригласительной ссылки."
layout: layout.njk
---

# inputGroupCallSlug

Определяет [конференц-звонок »](/api/group-calls/#conference-calls) по слагу из его пригласительной ссылки.

Этот конструктор можно использовать только для конференц-звонков. Его нельзя использовать для видеочатов и трансляций, прямых историй и любых других типов групповых звонков.

```
inputGroupCallSlug#fe06823f slug:string = InputGroupCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Слаг из <a href="/api/links#conference-links">ссылки на конференцию »</a>.</td></tr></tbody></table>

### Тип

[InputGroupCall](/type/InputGroupCall/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
