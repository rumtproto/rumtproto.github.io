---
title: "messageExtendedMediaPreview"
original: "https://core.telegram.org/constructor/messageExtendedMediaPreview"
section: ref
kind: constructor
description: "Предпросмотр платных медиа, которые ещё не куплены, подробнее см. здесь »."
layout: layout.njk
---

# messageExtendedMediaPreview

Предпросмотр платных медиа, которые ещё не куплены, подробнее [см. здесь »](/api/paid-media/).

```
messageExtendedMediaPreview#ad628cc8 flags:# w:flags.0?int h:flags.0?int thumb:flags.1?PhotoSize video_duration:flags.2?int = MessageExtendedMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Ширина</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Высота</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/PhotoSize">PhotoSize</a></td><td><a href="/api/files#stripped-thumbnails">Миниатюра крайне низкого разрешения</a>.</td></tr><tr><td><strong>video_duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Длительность видео, для видеозаписей.</td></tr></tbody></table>

### Тип

[MessageExtendedMedia](/type/MessageExtendedMedia/)

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [Платные медиа](/api/paid-media/)

Авторы контента могут принимать Stars, публикуя в своих каналах платные фотографии и видео. Подписчики смогут просмотреть такие посты, только заплатив автору за их разблокировку.
