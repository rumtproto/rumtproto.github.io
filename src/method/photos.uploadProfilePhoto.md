---
title: "photos.uploadProfilePhoto"
original: "https://core.telegram.org/method/photos.uploadProfilePhoto"
section: ref
kind: method
description: "Обновляет фотографию профиля текущего пользователя."
layout: layout.njk
---

# photos.uploadProfilePhoto

Обновляет фотографию профиля текущего пользователя.

Флаги `file`, `video` и `video_emoji_markup` взаимоисключающие.

```
photos.photo#20212ca8 photo:Photo users:Vector<User> = photos.Photo;
---functions---
photos.uploadProfilePhoto#388a3b5 flags:# fallback:flags.3?true bot:flags.5?InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.4?VideoSize = photos.Photo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>fallback</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если установлено, выбранная фотография профиля будет показываться пользователям, которые не могут видеть вашу основную фотографию профиля из-за ваших настроек приватности.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/InputUser">InputUser</a></td><td>Может содержать сведения о боте, которым мы владеем, чтобы изменить фотографию профиля этого бота, а не текущего пользователя.</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputFile">InputFile</a></td><td>Фотография профиля</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputFile">InputFile</a></td><td>Видео <a href="/api/files#animated-profile-pictures">анимированной фотографии профиля</a></td></tr><tr><td><strong>video_start_ts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/double">double</a></td><td>Временная метка UNIX в секундах с плавающей точкой, указывающая кадр видео или стикера, который следует использовать как статичный предпросмотр; может использоваться, только если задано поле <code>video</code> или <code>video_emoji_markup</code>.</td></tr><tr><td><strong>video_emoji_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/VideoSize">VideoSize</a></td><td>Анимированный стикер в качестве фотографии профиля; должен содержать конструктор либо <a href="/constructor/videoSizeEmojiMarkup">videoSizeEmojiMarkup</a>, либо <a href="/constructor/videoSizeStickerMarkup">videoSizeStickerMarkup</a>.</td></tr></tbody></table>

### Результат

[photos.Photo](/type/photos.Photo/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ALBUM_PHOTOS_TOO_MANY</td><td>Вы загрузили слишком много фотографий профиля, удалите часть из них перед повторной попыткой.</td></tr><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>EMOJI_MARKUP_INVALID</td><td>Указанное значение <code>video_emoji_markup</code> недействительно.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>Недопустимое число частей файла.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Сбой при обработке изображения.</td></tr><tr><td>400</td><td>PHOTO_CROP_FILE_MISSING</td><td>Отсутствует файл кадрирования фотографии.</td></tr><tr><td>400</td><td>PHOTO_CROP_SIZE_SMALL</td><td>Фотография слишком мала.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>Недопустимое расширение фотографии.</td></tr><tr><td>400</td><td>PHOTO_FILE_MISSING</td><td>Отсутствует файл фотографии профиля.</td></tr><tr><td>400</td><td>PHOTO_INVALID</td><td>Недействительная фотография.</td></tr><tr><td>400</td><td>STICKER_MIME_INVALID</td><td>Указанный MIME-тип стикера недействителен.</td></tr><tr><td>400</td><td>VIDEO_FILE_INVALID</td><td>Указанный видеофайл недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/)

[Анимированная фотография профиля](/api/files/#animated-profile-pictures) на основе [стикера пользовательского эмодзи](/api/custom-emoji/).

#### [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/)

[Анимированная фотография профиля](/api/files/#animated-profile-pictures) на основе [стикера](/api/stickers/).
