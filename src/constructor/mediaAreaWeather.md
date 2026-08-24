---
title: "mediaAreaWeather"
original: "https://core.telegram.org/constructor/mediaAreaWeather"
section: ref
kind: constructor
description: "Представляет виджет погоды »."
layout: layout.njk
---

# mediaAreaWeather

Представляет [виджет погоды »](/api/stories/#weather).

```
mediaAreaWeather#49a6549c coordinates:MediaAreaCoordinates emoji:string temperature_c:double color:int = MediaArea;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates">MediaAreaCoordinates</a></td><td>Размер и расположение области медиа, соответствующей виджету поверх медиа истории.</td></tr><tr><td><strong>emoji</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Эмодзи погоды; должен отображаться как <a href="/api/animated-emojis">анимированный эмодзи</a>.</td></tr><tr><td><strong>temperature_c</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Температура в градусах Цельсия.</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Цвет фона в формате ARGB.</td></tr></tbody></table>

### Тип

[MediaArea](/type/MediaArea/)

### Связанные страницы

#### [Анимированные эмодзи](/api/animated-emojis/)

Графические клиенты Telegram должны заменять эмодзи соответствующей анимированной версией.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
