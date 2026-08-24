---
title: "LangPackString"
original: "https://core.telegram.org/type/LangPackString"
section: ref
kind: type
description: "Строка языкового пакета"
layout: layout.njk
---

# LangPackString

Строка языкового пакета

```
langPackString#cad181f6 key:string value:string = LangPackString;
langPackStringPluralized#6c47ac9f flags:# key:string zero_value:flags.0?string one_value:flags.1?string two_value:flags.2?string few_value:flags.3?string many_value:flags.4?string other_value:string = LangPackString;
langPackStringDeleted#2979eeb2 key:string = LangPackString;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/langPackString">langPackString</a></td><td>Переведённая строка локализации</td></tr><tr><td><a href="/constructor/langPackStringPluralized">langPackStringPluralized</a></td><td>Строка языкового пакета, имеющая разные формы в зависимости от количества упоминаемого в ней объекта. Подробнее см. <a href="https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html">https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html</a></td></tr><tr><td><a href="/constructor/langPackStringDeleted">langPackStringDeleted</a></td><td>Удалённая строка локализации</td></tr></tbody></table>
