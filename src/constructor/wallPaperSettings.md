---
title: "wallPaperSettings"
original: "https://core.telegram.org/constructor/wallPaperSettings"
section: ref
kind: constructor
description: "Сведения об отрисовке обоев."
layout: layout.njk
---

# wallPaperSettings

Сведения об отрисовке [обоев](/api/wallpapers/).

```
wallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>blur</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Для <a href="/api/wallpapers#image-wallpapers">обоев-изображений »</a>: если флаг установлен, JPEG необходимо уменьшить так, чтобы он вписался в квадрат 450x450, а затем размыть методом box blur с радиусом 12.</td></tr><tr><td><strong>motion</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если установлено, фон должен слегка смещаться при повороте устройства.</td></tr><tr><td><strong>background_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Используется для <a href="/api/wallpapers#solid-fill">сплошных »</a> заливок, а также заливок <a href="/api/wallpapers#gradient-fill">градиентом »</a> и <a href="/api/wallpapers#freeform-gradient-fill">произвольным градиентом »</a>.</td></tr><tr><td><strong>second_background_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Используется для заливок <a href="/api/wallpapers#gradient-fill">градиентом »</a> и <a href="/api/wallpapers#freeform-gradient-fill">произвольным градиентом »</a>.</td></tr><tr><td><strong>third_background_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Используется для заливок <a href="/api/wallpapers#freeform-gradient-fill">произвольным градиентом »</a>.</td></tr><tr><td><strong>fourth_background_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/int">int</a></td><td>Используется для заливок <a href="/api/wallpapers#freeform-gradient-fill">произвольным градиентом »</a>.</td></tr><tr><td><strong>intensity</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Используется для <a href="/api/wallpapers#pattern-wallpapers">узорных фонов чата »</a>.</td></tr><tr><td><strong>rotation</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Угол поворота градиента по часовой стрелке в градусах; 0-359. Должен быть кратен 45.</td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/string">string</a></td><td>[@term:emoticon] Если установлено, эти обои можно использовать в качестве обоев канала, и они представлены указанным эмодзи в UTF-8.</td></tr></tbody></table>

### Тип

[WallPaperSettings](/type/WallPaperSettings/)

### Связанные страницы

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.
