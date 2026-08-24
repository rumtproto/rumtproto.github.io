---
title: "inputMediaUploadedDocument"
original: "https://core.telegram.org/constructor/inputMediaUploadedDocument"
section: ref
kind: constructor
description: "Новый документ"
layout: layout.njk
---

# inputMediaUploadedDocument

Новый документ

```
inputMediaUploadedDocument#37c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>nosound_video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Отправлять ли файл как видео, даже если в нём нет звуковой дорожки (то есть если флаг установлен, атрибут <a href="/constructor/documentAttributeAnimated">documentAttributeAnimated</a> <strong>не</strong> будет установлен даже для видео без звука)</td></tr><tr><td><strong>force_file</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Принудительно загрузить медиафайл как документ</td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Следует ли скрыть это медиа за предупреждением о спойлере</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile">InputFile</a></td><td><a href="/api/files">Загруженный файл</a></td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputFile">InputFile</a></td><td>Миниатюра документа, загружаемая так же, как файл</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-тип документа</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/DocumentAttribute">DocumentAttribute</a>&gt;</td><td>Атрибуты, задающие тип документа (видео, аудио, голосовое сообщение, стикер и т. д.)</td></tr><tr><td><strong>stickers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputDocument">InputDocument</a>&gt;</td><td>Прикреплённые стикеры</td></tr><tr><td><strong>video_cover</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/InputPhoto">InputPhoto</a></td><td>Начать воспроизведение видео с указанной отметки времени (в секундах).</td></tr><tr><td><strong>video_timestamp</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/int">int</a></td><td>Начать воспроизведение видео с указанной отметки времени (в секундах).</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Время жизни самоуничтожающегося документа; может быть равно <code>0</code>, чтобы отключить самоуничтожение, или <code>0x7FFFFFFF</code>, чтобы документ уничтожился сразу после воспроизведения; в остальных случаях документ самоуничтожается через <code>ttl_seconds</code> после воспроизведения.</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)

### Связанные страницы

#### [documentAttributeAnimated](/constructor/documentAttributeAnimated/)

Определяет анимированный GIF

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
