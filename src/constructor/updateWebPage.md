---
title: "updateWebPage"
original: "https://core.telegram.org/constructor/updateWebPage"
section: ref
kind: constructor
description: "Был сформирован предпросмотр веб-страницы instant view"
layout: layout.njk
---

# updateWebPage

Был сформирован предпросмотр веб-страницы [instant view](https://instantview.telegram.org)

```
updateWebPage#7f891213 webpage:WebPage pts:int pts_count:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>webpage</strong></td><td style="text-align: center;"><a href="/type/WebPage">WebPage</a></td><td>Предпросмотр веб-страницы</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] <a href="/api/updates">Число событий после генерации</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Число сгенерированных событий</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
