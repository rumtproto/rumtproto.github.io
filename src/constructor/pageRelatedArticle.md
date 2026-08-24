---
title: "pageRelatedArticle"
original: "https://core.telegram.org/constructor/pageRelatedArticle"
section: ref
kind: constructor
description: "Связанная статья"
layout: layout.njk
---

# pageRelatedArticle

Связанная статья

```
pageRelatedArticle#b390dc08 flags:# url:string webpage_id:long title:flags.0?string description:flags.1?string photo_id:flags.2?long author:flags.3?string published_date:flags.4?int = PageRelatedArticle;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL статьи</td></tr><tr><td><strong>webpage_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор веб-страницы сформированного предпросмотра IV</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Название</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Описание</td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/long">long</a></td><td>Идентификатор фотографии предпросмотра</td></tr><tr><td><strong>author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Имя автора</td></tr><tr><td><strong>published_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Дата публикации</td></tr></tbody></table>

### Тип

[PageRelatedArticle](/type/PageRelatedArticle/)
