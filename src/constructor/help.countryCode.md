---
title: "help.countryCode"
original: "https://core.telegram.org/constructor/help.countryCode"
section: ref
kind: constructor
description: "Код страны и шаблон номера телефона для конкретной страны"
layout: layout.njk
---

# help.countryCode

Код страны и шаблон номера телефона для конкретной страны

```
help.countryCode#4203c5ef flags:# country_code:string prefixes:flags.0?Vector<string> patterns:flags.1?Vector<string> = help.CountryCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>country_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код страны по ISO</td></tr><tr><td><strong>prefixes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Возможные префиксы телефонных номеров</td></tr><tr><td><strong>patterns</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Шаблоны телефонных номеров: например, <code>XXX XXX XXX</code></td></tr></tbody></table>

### Тип

[help.CountryCode](/type/help.CountryCode/)
