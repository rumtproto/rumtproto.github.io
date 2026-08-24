---
title: "storiesStealthMode"
original: "https://core.telegram.org/constructor/storiesStealthMode"
section: ref
kind: constructor
description: "Информация о текущем сеансе скрытого режима."
layout: layout.njk
---

# storiesStealthMode

Информация о текущем сеансе [скрытого режима](/api/stories/#stealth-mode).

```
storiesStealthMode#712e27fd flags:# active_until_date:flags.0?int cooldown_until_date:flags.1?int = StoriesStealthMode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>active_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Дата, до которой будет действовать скрытый режим.</td></tr><tr><td><strong>cooldown_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Дата, начиная с которой пользователю будет снова разрешено включить скрытый режим.</td></tr></tbody></table>

### Тип

[StoriesStealthMode](/type/StoriesStealthMode/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
