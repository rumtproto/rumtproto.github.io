---
title: "botAppSettings"
original: "https://core.telegram.org/constructor/botAppSettings"
section: ref
kind: constructor
description: "Настройки Mini App »"
layout: layout.njk
---

# botAppSettings

[@term:Mini App] Настройки [Mini App »](/api/bots/webapps/)

```
botAppSettings#c99b1950 flags:# placeholder_path:flags.0?bytes background_color:flags.1?int background_dark_color:flags.2?int header_color:flags.3?int header_dark_color:flags.4?int = BotAppSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>placeholder_path</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td>Логотип-заполнитель в формате SVG, сжатый по тому же формату, что и <a href="/api/files#vector-thumbnails">векторные миниатюры »</a>.</td></tr><tr><td><strong>background_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Цвет фона по умолчанию для светлой темы</td></tr><tr><td><strong>background_dark_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Цвет фона по умолчанию для тёмной темы</td></tr><tr><td><strong>header_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Цвет заголовка по умолчанию для светлой темы</td></tr><tr><td><strong>header_dark_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Цвет заголовка по умолчанию для тёмной темы</td></tr></tbody></table>

### Тип

[BotAppSettings](/type/BotAppSettings/)

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
