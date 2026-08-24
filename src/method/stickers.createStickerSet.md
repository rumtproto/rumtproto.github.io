---
title: "stickers.createStickerSet"
original: "https://core.telegram.org/method/stickers.createStickerSet"
section: ref
kind: method
description: "Создать набор стикеров."
layout: layout.njk
---

# stickers.createStickerSet

Создать набор стикеров.

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.createStickerSet#9021ab67 flags:# masks:flags.0?true emojis:flags.5?true text_color:flags.6?true user_id:InputUser title:string short_name:string thumb:flags.2?InputDocument stickers:Vector<InputStickerSetItem> software:flags.3?string = messages.StickerSet;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли это набором стикеров-масок</td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Является ли это набором <a href="/api/custom-emoji">пользовательских эмодзи</a>.</td></tr><tr><td><strong>text_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Следует ли менять цвет содержащихся в этом наборе пользовательских эмодзи в формате TGS на цвет текста при использовании в сообщениях, на акцентный цвет при использовании в качестве статуса эмодзи, на белый на фотографиях чатов либо на другой подходящий цвет в зависимости от контекста. Только для наборов пользовательских эмодзи.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Владелец набора стикеров</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название набора стикеров, <code>1-64</code> символов</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:short_name] Краткое имя набора стикеров, используемое в <a href="/api/links#stickerset-links">глубоких ссылках на стикеры »</a>. Может содержать только латинские буквы, цифры и подчёркивания. Обязано начинаться с буквы, не может содержать идущие подряд подчёркивания и, <strong>если вызов выполняется ботом</strong>, обязано заканчиваться на <code>"_by_&lt;bot_username&gt;"</code>. <code>&lt;bot_username&gt;</code> нечувствительно к регистру. От 1 до 64 символов.</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputDocument">InputDocument</a></td><td>Миниатюра</td></tr><tr><td><strong>stickers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputStickerSetItem">InputStickerSetItem</a>&gt;</td><td>Стикеры</td></tr><tr><td><strong>software</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Используется при <a href="/import-stickers">импорте стикеров с помощью SDK для импорта стикеров</a>; задаёт название программы, создавшей стикеры</td></tr></tbody></table>

### Результат

[messages.StickerSet](/type/messages.StickerSet/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PACK_SHORT_NAME_INVALID</td><td>Краткое имя набора недействительно.</td></tr><tr><td>400</td><td>PACK_SHORT_NAME_OCCUPIED</td><td>Стикерпак с таким именем уже существует.</td></tr><tr><td>400</td><td>PACK_TITLE_INVALID</td><td>Название стикерпака недействительно.</td></tr><tr><td>400</td><td>PACK_TYPE_INVALID</td><td>Флаги masks и emojis взаимно исключают друг друга.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>STICKERS_EMPTY</td><td>Стикер не передан.</td></tr><tr><td>400</td><td>STICKER_EMOJI_INVALID</td><td>Недопустимый эмодзи стикера.</td></tr><tr><td>400</td><td>STICKER_FILE_INVALID</td><td>Недопустимый файл стикера.</td></tr><tr><td>400</td><td>STICKER_GIF_DIMENSIONS</td><td>У указанного видеостикера недопустимые размеры.</td></tr><tr><td>400</td><td>STICKER_PNG_DIMENSIONS</td><td>Недопустимые размеры PNG-файла стикера.</td></tr><tr><td>400</td><td>STICKER_PNG_NOPNG</td><td>Один из указанных стикеров не является корректным файлом PNG.</td></tr><tr><td>400</td><td>STICKER_TGS_NODOC</td><td>Анимированный стикер необходимо отправлять как документ.</td></tr><tr><td>400</td><td>STICKER_TGS_NOTGS</td><td>Указан недопустимый стикер TGS.</td></tr><tr><td>400</td><td>STICKER_THUMB_PNG_NOPNG</td><td>Передан некорректный файл миниатюры для набора стикеров, ожидается PNG / WEBP.</td></tr><tr><td>400</td><td>STICKER_THUMB_TGS_NOTGS</td><td>Передан некорректный файл миниатюры TGS для набора стикеров.</td></tr><tr><td>400</td><td>STICKER_VIDEO_BIG</td><td>Указанный видеостикер слишком велик.</td></tr><tr><td>400</td><td>STICKER_VIDEO_NODOC</td><td>Видеостикер необходимо отправлять как документ.</td></tr><tr><td>400</td><td>STICKER_VIDEO_NOWEBM</td><td>Указанный видеостикер имеет формат, отличный от webm.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
