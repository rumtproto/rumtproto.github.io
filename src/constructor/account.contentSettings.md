---
title: "account.contentSettings"
original: "https://core.telegram.org/constructor/account.contentSettings"
section: ref
kind: constructor
description: "Настройки материалов деликатного характера"
layout: layout.njk
---

# account.contentSettings

Настройки материалов деликатного характера

```
account.contentSettings#57e28221 flags:# sensitive_enabled:flags.0?true sensitive_can_change:flags.1?true = account.ContentSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>sensitive_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Включён ли просмотр материалов деликатного характера (NSFW)</td></tr><tr><td><strong>sensitive_can_change</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Может ли текущий клиент изменять настройки материалов деликатного характера для просмотра содержимого NSFW</td></tr></tbody></table>

### Тип

[account.ContentSettings](/type/account.ContentSettings/)
