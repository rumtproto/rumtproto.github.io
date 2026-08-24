---
title: "smsjobs.status"
original: "https://core.telegram.org/constructor/smsjobs.status"
section: ref
kind: constructor
description: "Статус"
layout: layout.njk
---

# smsjobs.status

Статус

```
smsjobs.status#2aee9191 flags:# allow_international:flags.0?true recent_sent:int recent_since:int recent_remains:int total_sent:int total_since:int last_gift_slug:flags.1?string terms_url:string = smsjobs.Status;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>allow_international</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Разрешить международные номера</td></tr><tr><td><strong>recent_sent</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Недавно отправленные</td></tr><tr><td><strong>recent_since</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Начиная с</td></tr><tr><td><strong>recent_remains</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Осталось</td></tr><tr><td><strong>total_sent</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Всего отправлено</td></tr><tr><td><strong>total_since</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Итог с</td></tr><tr><td><strong>last_gift_slug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Глубокая ссылка на последний подарок</td></tr><tr><td><strong>terms_url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес условий использования</td></tr></tbody></table>

### Тип

[smsjobs.Status](/type/smsjobs.Status/)
