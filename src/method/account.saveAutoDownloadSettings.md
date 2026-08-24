---
title: "account.saveAutoDownloadSettings"
original: "https://core.telegram.org/method/account.saveAutoDownloadSettings"
section: ref
kind: method
description: "Изменить настройки автозагрузки медиафайлов"
layout: layout.njk
---

# account.saveAutoDownloadSettings

Изменить настройки автозагрузки медиафайлов

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.saveAutoDownloadSettings#76f36233 flags:# low:flags.0?true high:flags.1?true settings:AutoDownloadSettings = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>low</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Сохранять ли медиафайлы в профиле с низким расходом трафика</td></tr><tr><td><strong>high</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Сохранять ли медиафайлы в профиле высокого потребления трафика</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/AutoDownloadSettings">AutoDownloadSettings</a></td><td>Настройки автозагрузки медиафайлов</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям
