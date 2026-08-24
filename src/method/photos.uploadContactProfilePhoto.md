---
title: "photos.uploadContactProfilePhoto"
original: "https://core.telegram.org/method/photos.uploadContactProfilePhoto"
section: ref
kind: method
description: "Загрузить собственную фотографию профиля для контакта или предложить контакту новую фотографию профиля."
layout: layout.njk
---

# photos.uploadContactProfilePhoto

Загрузить собственную фотографию профиля для контакта или предложить контакту новую фотографию профиля.

Флаги `file`, `video` и `video_emoji_markup` взаимоисключающие.

```
photos.photo#20212ca8 photo:Photo users:Vector<User> = photos.Photo;
---functions---
photos.uploadContactProfilePhoto#e14c4a71 flags:# suggest:flags.3?true save:flags.4?true user_id:InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.5?VideoSize = photos.Photo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>suggest</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если установлено, будет отправлено сервисное сообщение <a href="/constructor/messageActionSuggestProfilePhoto">messageActionSuggestProfilePhoto</a> пользователю <code>user_id</code> с предложением использовать указанную фотографию профиля; иначе для пользователя будет установлена персональная фотография профиля (видимая только текущему пользователю).</td></tr><tr><td><strong>save</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Если установлено, удаляет ранее установленную персональную фотографию профиля (не влияет на предложенные фотографии профиля; чтобы удалить их, просто удалите сервисное сообщение <a href="/constructor/messageActionSuggestProfilePhoto">messageActionSuggestProfilePhoto</a> с помощью <a href="/method/messages.deleteMessages">messages.deleteMessages</a>).</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Контакт</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputFile">InputFile</a></td><td>Фотография профиля</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputFile">InputFile</a></td><td>Видео <a href="/api/files#animated-profile-pictures">анимированной фотографии профиля</a></td></tr><tr><td><strong>video_start_ts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/double">double</a></td><td>Временная метка UNIX в секундах с плавающей точкой, указывающая кадр видео или стикера, который следует использовать как статичный предпросмотр; может использоваться, только если задано поле <code>video</code> или <code>video_emoji_markup</code>.</td></tr><tr><td><strong>video_emoji_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/VideoSize">VideoSize</a></td><td>Анимированный стикер в качестве фотографии профиля; должен содержать конструктор либо <a href="/constructor/videoSizeEmojiMarkup">videoSizeEmojiMarkup</a>, либо <a href="/constructor/videoSizeStickerMarkup">videoSizeStickerMarkup</a>.</td></tr></tbody></table>

### Результат

[photos.Photo](/type/photos.Photo/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CONTACT_MISSING</td><td>Указанный пользователь не является контактом.</td></tr><tr><td>400</td><td>NEED_ACTION_MISSING</td><td>Вызывающая сторона не указала допустимое действие (сохранить или предложить) для загрузки фотографии профиля контакта.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [messageActionSuggestProfilePhoto](/constructor/messageActionSuggestProfilePhoto/)

Новая фотография профиля предложена с помощью [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/).

#### [messages.deleteMessages](/method/messages.deleteMessages/)

Удаляет сообщения по их идентификаторам.

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/)

[Анимированная фотография профиля](/api/files/#animated-profile-pictures) на основе [стикера пользовательского эмодзи](/api/custom-emoji/).

#### [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/)

[Анимированная фотография профиля](/api/files/#animated-profile-pictures) на основе [стикера](/api/stickers/).
