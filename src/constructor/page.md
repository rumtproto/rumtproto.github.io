---
title: "page"
original: "https://core.telegram.org/constructor/page"
section: ref
kind: constructor
description: "Страница Instant view"
layout: layout.njk
---

# page

Страница [Instant view](https://instantview.telegram.org)

```
page#98657f0d flags:# part:flags.0?true rtl:flags.1?true v2:flags.2?true url:string blocks:Vector<PageBlock> photos:Vector<Photo> documents:Vector<Document> views:flags.3?int = Page;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>part</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Указывает, что клиенту доступен неполный предпросмотр страницы и ему потребуется получить полную версию Instant View с сервера с помощью <a href="/method/messages.getWebPagePreview">messages.getWebPagePreview</a>.</td></tr><tr><td><strong>rtl</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Содержит ли страница текст с письмом справа налево</td></tr><tr><td><strong>v2</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Является ли это страницей <a href="https://instantview.telegram.org/docs#what-39s-new-in-2-0">IV v2</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>HTTP-адрес исходной страницы</td></tr><tr><td><strong>blocks</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PageBlock">PageBlock</a>&gt;</td><td>Элементы страницы (как элементы HTML, только в виде конструкторов TL)</td></tr><tr><td><strong>photos</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Photo">Photo</a>&gt;</td><td>Фотографии на странице</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Document">Document</a>&gt;</td><td>Медиа на странице</td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Количество просмотров</td></tr></tbody></table>

### Тип

[Page](/type/Page/)

### Связанные страницы

#### [messages.getWebPagePreview](/method/messages.getWebPagePreview/)

Получить предпросмотр веб-страницы
