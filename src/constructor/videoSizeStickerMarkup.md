---
title: "videoSizeStickerMarkup"
original: "https://core.telegram.org/constructor/videoSizeStickerMarkup"
section: ref
kind: constructor
description: "Анимированная фотография профиля на основе стикера."
layout: layout.njk
---

# videoSizeStickerMarkup

[Анимированная фотография профиля](/api/files/#animated-profile-pictures) на основе [стикера](/api/stickers/).

```
videoSizeStickerMarkup#da082fe stickerset:InputStickerSet sticker_id:long background_colors:Vector<int> = VideoSize;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Набор стикеров</td></tr><tr><td><strong>sticker_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор стикера</td></tr><tr><td><strong>background_colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>1, 2, 3 или 4 цвета RBG-24, используемые для построения сплошного (1), градиентного (2) или свободного градиентного (3, 4) фона — аналогично тому, как формируются <a href="/api/wallpapers#fill-types">заливочные обои</a>. Угол поворота для градиентных фонов равен 0.</td></tr></tbody></table>

### Тип

[VideoSize](/type/VideoSize/)

### Связанные страницы

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
