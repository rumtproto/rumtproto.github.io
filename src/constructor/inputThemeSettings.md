---
title: "inputThemeSettings"
original: "https://core.telegram.org/constructor/inputThemeSettings"
section: ref
kind: constructor
description: "Параметры темы оформления"
layout: layout.njk
---

# inputThemeSettings

Параметры темы оформления

```
inputThemeSettings#8fde504f flags:# message_colors_animated:flags.2?true base_theme:BaseTheme accent_color:int outbox_accent_color:flags.3?int message_colors:flags.0?Vector<int> wallpaper:flags.1?InputWallPaper wallpaper_settings:flags.1?WallPaperSettings = InputThemeSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>message_colors_animated</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если установлено, произвольную градиентную заливку нужно анимировать при каждом отправленном сообщении</td></tr><tr><td><strong>base_theme</strong></td><td style="text-align: center;"><a href="/type/BaseTheme">BaseTheme</a></td><td>Стандартная тема, на которой основана эта тема</td></tr><tr><td><strong>accent_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Акцентный цвет в формате ARGB</td></tr><tr><td><strong>outbox_accent_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Акцентный цвет исходящих сообщений в формате ARGB</td></tr><tr><td><strong>message_colors</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Заливка, используемая как фон исходящих сообщений, в формате RGB24.<br>Если задан один цвет или два одинаковых, описывает сплошную заливку фона.<br>Если заданы два разных цвета, описывает верхний и нижний цвета градиента под углом 0 градусов.<br>Если задано три или четыре цвета, описывает свободную градиентную заливку фона.</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputWallPaper">InputWallPaper</a></td><td><a href="/constructor/inputWallPaper">inputWallPaper</a> или <a href="/constructor/inputWallPaper">inputWallPaperSlug</a> при передаче файлов обоев для <a href="/api/wallpapers#image-wallpapers">обоев-изображений</a> или <a href="/api/wallpapers#pattern-wallpapers">обоев с узором</a>, иначе — <a href="/constructor/inputWallPaperNoFile">inputWallPaperNoFile</a> с <code>id=0</code>.</td></tr><tr><td><strong>wallpaper_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/WallPaperSettings">WallPaperSettings</a></td><td>Параметры <a href="/api/wallpapers">обоев</a>.</td></tr></tbody></table>

### Тип

[InputThemeSettings](/type/InputThemeSettings/)

### Связанные страницы

#### [inputWallPaper](/constructor/inputWallPaper/)

[Обои](/api/wallpapers/)

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.

#### [inputWallPaperNoFile](/constructor/inputWallPaperNoFile/)

[Обои](/api/wallpapers/) без хеша доступа к файлу; используются, например, при удалении обоев (`unsave=true`) методом [account.saveWallPaper](/method/account.saveWallPaper/), когда передаётся только идентификатор обоев.
