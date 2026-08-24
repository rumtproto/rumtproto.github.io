---
title: "inputChatUploadedPhoto"
original: "https://core.telegram.org/constructor/inputChatUploadedPhoto"
section: ref
kind: constructor
description: "Новая фотография, которая будет установлена как фотография профиля группы."
layout: layout.njk
---

# inputChatUploadedPhoto

Новая фотография, которая будет установлена как фотография профиля группы.

Флаги `file`, `video` и `video_emoji_markup` взаимоисключающие.

```
inputChatUploadedPhoto#bdcdaec0 flags:# file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.3?VideoSize = InputChatPhoto;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputFile">InputFile</a></td><td>Файл, сохранённый по частям с помощью метода <a href="/method/upload.saveFilePart">upload.saveFilePart</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputFile">InputFile</a></td><td>Квадратное видео для анимированной фотографии профиля</td></tr><tr><td><strong>video_start_ts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/double">double</a></td><td>Временная метка UNIX в секундах с плавающей точкой, указывающая кадр видео или стикера, который следует использовать как статичный предпросмотр; может использоваться, только если задано поле <code>video</code> или <code>video_emoji_markup</code>.</td></tr><tr><td><strong>video_emoji_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/VideoSize">VideoSize</a></td><td>Анимированный стикер в качестве фотографии профиля; должен содержать конструктор либо <a href="/constructor/videoSizeEmojiMarkup">videoSizeEmojiMarkup</a>, либо <a href="/constructor/videoSizeStickerMarkup">videoSizeStickerMarkup</a>.</td></tr></tbody></table>

### Тип

[InputChatPhoto](/type/InputChatPhoto/)

### Связанные страницы

#### [upload.saveFilePart](/method/upload.saveFilePart/)

Сохраняет часть файла для дальнейшей передачи в один из методов.

#### [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/)

[Анимированная фотография профиля](/api/files/#animated-profile-pictures) на основе [стикера пользовательского эмодзи](/api/custom-emoji/).

#### [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/)

[Анимированная фотография профиля](/api/files/#animated-profile-pictures) на основе [стикера](/api/stickers/).
