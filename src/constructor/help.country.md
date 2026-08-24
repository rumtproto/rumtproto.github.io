---
title: "help.country"
original: "https://core.telegram.org/constructor/help.country"
section: ref
kind: constructor
description: "Название, код ISO, локализованное название и телефонные коды/шаблоны конкретной страны"
layout: layout.njk
---

# help.country

Название, код ISO, локализованное название и телефонные коды/шаблоны конкретной страны

```
help.country#c3878e23 flags:# hidden:flags.0?true iso2:string default_name:string name:flags.1?string country_codes:Vector<help.CountryCode> = help.Country;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Следует ли скрыть эту страну из списка</td></tr><tr><td><strong>iso2</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код страны по ISO</td></tr><tr><td><strong>default_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название страны на языке этой страны</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Название страны на языке пользователя, если оно отличается от исходного</td></tr><tr><td><strong>country_codes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/help.CountryCode">help.CountryCode</a>&gt;</td><td>Телефонные коды и шаблоны</td></tr></tbody></table>

### Тип

[help.Country](/type/help.Country/)
