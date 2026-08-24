---
title: "account.installTheme"
original: "https://core.telegram.org/method/account.installTheme"
section: ref
kind: method
description: "Установить тему оформления"
layout: layout.njk
---

# account.installTheme

Установить тему оформления

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.installTheme#c727bb3b flags:# dark:flags.0?true theme:flags.1?InputTheme format:flags.2?string base_theme:flags.3?BaseTheme = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Устанавливать ли тёмную версию</td></tr><tr><td><strong>theme</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputTheme">InputTheme</a></td><td>Тема оформления, которую нужно установить</td></tr><tr><td><strong>format</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Формат темы оформления — строка, определяющая движки оформления, поддерживаемые клиентом</td></tr><tr><td><strong>base_theme</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/BaseTheme">BaseTheme</a></td><td>Обозначает базовую тему, поддерживаемую всеми клиентами</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям
