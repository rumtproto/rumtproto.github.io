---
title: "pageBlockPhoto"
original: "https://core.telegram.org/constructor/pageBlockPhoto"
section: ref
kind: constructor
description: "Фотография"
layout: layout.njk
---

# pageBlockPhoto

Фотография

```
pageBlockPhoto#1759c560 flags:# photo_id:long caption:PageCaption url:flags.0?string webpage_id:flags.0?long = PageBlock;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор фотографии</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/PageCaption">PageCaption</a></td><td>Подпись</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>HTTP-адрес страницы, на которую ведёт фотография при нажатии</td></tr><tr><td><strong>webpage_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Идентификатор предпросмотра страницы, на которую ведёт фотография при нажатии</td></tr></tbody></table>

### Тип

[PageBlock](/type/PageBlock/)
