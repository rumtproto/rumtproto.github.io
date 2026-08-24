---
title: "langPackStringPluralized"
original: "https://core.telegram.org/constructor/langPackStringPluralized"
section: ref
kind: constructor
description: "Строка языкового пакета, имеющая разные формы в зависимости от количества упоминаемого в ней объекта. Подробнее см.…"
layout: layout.njk
---

# langPackStringPluralized

Строка языкового пакета, имеющая разные формы в зависимости от количества упоминаемого в ней объекта. Подробнее см. [https://www.unicode.org/cldr/charts/latest/supplemental/language\_plural\_rules.html](https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)

```
langPackStringPluralized#6c47ac9f flags:# key:string zero_value:flags.0?string one_value:flags.1?string two_value:flags.2?string few_value:flags.3?string many_value:flags.4?string other_value:string = LangPackString;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Ключ локализации</td></tr><tr><td><strong>zero_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Значение для нуля объектов</td></tr><tr><td><strong>one_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Значение для одного объекта</td></tr><tr><td><strong>two_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Значение для двух объектов</td></tr><tr><td><strong>few_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Значение для нескольких объектов</td></tr><tr><td><strong>many_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td>Значение для многих объектов</td></tr><tr><td><strong>other_value</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Значение по умолчанию</td></tr></tbody></table>

### Тип

[LangPackString](/type/LangPackString/)
