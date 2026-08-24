---
title: "themeSettings"
original: "https://core.telegram.org/constructor/themeSettings"
section: ref
kind: constructor
description: "Параметры темы оформления"
layout: layout.njk
---

# themeSettings

Параметры темы оформления

```
themeSettings#fa58b6d4 flags:# message_colors_animated:flags.2?true base_theme:BaseTheme accent_color:int outbox_accent_color:flags.3?int message_colors:flags.0?Vector<int> wallpaper:flags.1?WallPaper = ThemeSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>message_colors_animated</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если установлено, произвольную градиентную заливку нужно анимировать при каждом отправленном сообщении.</td></tr><tr><td><strong>base_theme</strong></td><td style="text-align: center;"><a href="/type/BaseTheme">BaseTheme</a></td><td>Базовая тема</td></tr><tr><td><strong>accent_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Акцентный цвет в формате ARGB</td></tr><tr><td><strong>outbox_accent_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Акцентный цвет исходящих сообщений в формате ARGB</td></tr><tr><td><strong>message_colors</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Заливка, используемая как фон исходящих сообщений, в формате RGB24.<br>Если задан один цвет или два одинаковых, описывает сплошную заливку фона.<br>Если заданы два разных цвета, описывает верхний и нижний цвета градиента под углом 0 градусов.<br>Если задано три или четыре цвета, описывает свободную градиентную заливку фона.</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/WallPaper">WallPaper</a></td><td><a href="/api/wallpapers">Обои</a></td></tr></tbody></table>

### Тип

[ThemeSettings](/type/ThemeSettings/)

### Связанные страницы

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.
