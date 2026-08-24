---
title: "webPagePending"
original: "https://core.telegram.org/constructor/webPagePending"
section: ref
kind: constructor
description: "Предпросмотр веб-страницы сейчас создаётся"
layout: layout.njk
---

# webPagePending

Предпросмотр веб-страницы сейчас создаётся

```
webPagePending#b0d13e47 flags:# id:long url:flags.0?string date:int = WebPage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор предпросмотра</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>URL веб-страницы</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда началась обработка</td></tr></tbody></table>

### Тип

[WebPage](/type/WebPage/)
