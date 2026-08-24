---
title: "pageBlockEmbed"
original: "https://core.telegram.org/constructor/pageBlockEmbed"
section: ref
kind: constructor
description: "Встроенная веб-страница"
layout: layout.njk
---

# pageBlockEmbed

Встроенная веб-страница

```
pageBlockEmbed#a8718dc5 flags:# full_width:flags.0?true allow_scrolling:flags.3?true url:flags.1?string html:flags.2?string poster_photo_id:flags.4?long w:flags.5?int h:flags.5?int caption:PageCaption = PageBlock;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>full_width</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Должен ли блок занимать всю ширину</td></tr><tr><td><strong>allow_scrolling</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Разрешена ли прокрутка</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>URL веб-страницы, если доступен</td></tr><tr><td><strong>html</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>HTML-разметка встроенной страницы</td></tr><tr><td><strong>poster_photo_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/long">long</a></td><td>Фотография-постер, если доступна</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Ширина блока, если известна</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Высота блока, если известна</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/PageCaption">PageCaption</a></td><td>Подпись</td></tr></tbody></table>

### Тип

[PageBlock](/type/PageBlock/)
