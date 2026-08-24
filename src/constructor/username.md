---
title: "username"
original: "https://core.telegram.org/constructor/username"
section: ref
kind: constructor
description: "Содержит информацию об имени пользователя."
layout: layout.njk
---

# username

Содержит информацию об имени пользователя.

```
username#b4073647 flags:# editable:flags.0?true active:flags.1?true username:string = Username;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>editable</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Можно ли изменить это имя пользователя, то есть не было ли оно куплено на <a href="https://fragment.com">fragment</a>.</td></tr><tr><td><strong>active</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Активно ли имя пользователя.</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя пользователя.</td></tr></tbody></table>

### Тип

[Username](/type/Username/)
