---
title: "photos.updateProfilePhoto"
original: "https://core.telegram.org/method/photos.updateProfilePhoto"
section: ref
kind: method
description: "Устанавливает ранее загруженную фотографию в качестве фотографии профиля."
layout: layout.njk
---

# photos.updateProfilePhoto

Устанавливает ранее загруженную фотографию в качестве фотографии профиля.

```
photos.photo#20212ca8 photo:Photo users:Vector<User> = photos.Photo;
---functions---
photos.updateProfilePhoto#9e82039 flags:# fallback:flags.0?true bot:flags.1?InputUser id:InputPhoto = photos.Photo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>fallback</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, выбранная фотография профиля будет показываться пользователям, которые не могут видеть вашу основную фотографию профиля из-за ваших настроек приватности.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputUser">InputUser</a></td><td>Может содержать сведения о боте, которым мы владеем, чтобы изменить фотографию профиля этого бота, а не текущего пользователя.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputPhoto">InputPhoto</a></td><td>Входная фотография</td></tr></tbody></table>

### Результат

[photos.Photo](/type/photos.Photo/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ALBUM_PHOTOS_TOO_MANY</td><td>Вы загрузили слишком много фотографий профиля, удалите часть из них перед повторной попыткой.</td></tr><tr><td>400</td><td>BOT_FALLBACK_UNSUPPORTED</td><td>Флаг fallback нельзя устанавливать для ботов.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>Недопустимое число частей файла.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Сбой при обработке изображения.</td></tr><tr><td>400</td><td>LOCATION_INVALID</td><td>Указанное местоположение недействительно.</td></tr><tr><td>400</td><td>PHOTO_CROP_SIZE_SMALL</td><td>Фотография слишком мала.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>Недопустимое расширение фотографии.</td></tr><tr><td>400</td><td>PHOTO_ID_INVALID</td><td>Недействительный идентификатор фотографии.</td></tr></tbody></table>
