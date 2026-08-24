---
title: "videoSizeEmojiMarkup"
original: "https://core.telegram.org/constructor/videoSizeEmojiMarkup"
section: ref
kind: constructor
description: "Анимированная фотография профиля на основе стикера пользовательского эмодзи."
layout: layout.njk
---

# videoSizeEmojiMarkup

[Анимированная фотография профиля](/api/files/#animated-profile-pictures) на основе [стикера пользовательского эмодзи](/api/custom-emoji/).

```
videoSizeEmojiMarkup#f85c413c emoji_id:long background_colors:Vector<int> = VideoSize;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>emoji_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/custom-emoji">Идентификатор пользовательского эмодзи</a>: стикер этого пользовательского эмодзи показывается в центре фотографии профиля и занимает не более 67 % её площади.</td></tr><tr><td><strong>background_colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>1, 2, 3 или 4 цвета RBG-24, используемые для построения сплошного (1), градиентного (2) или свободного градиентного (3, 4) фона — аналогично тому, как формируются <a href="/api/wallpapers#fill-types">заливочные обои</a>. Угол поворота для градиентных фонов равен 0.</td></tr></tbody></table>

### Тип

[VideoSize](/type/VideoSize/)

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
