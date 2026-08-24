---
title: "stickerSet"
original: "https://core.telegram.org/constructor/stickerSet"
section: ref
kind: constructor
description: "Представляет набор стикеров (стикерпак)"
layout: layout.njk
---

# stickerSet

Представляет набор стикеров (стикерпак)

```
stickerSet#2dd14edc flags:# archived:flags.1?true official:flags.2?true masks:flags.3?true emojis:flags.7?true text_color:flags.9?true channel_emoji_status:flags.10?true creator:flags.11?true installed_date:flags.0?int id:long access_hash:long title:string short_name:string thumbs:flags.4?Vector<PhotoSize> thumb_dc_id:flags.4?int thumb_version:flags.4?int thumb_document_id:flags.8?long count:int hash:int = StickerSet;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>archived</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Был ли этот набор стикеров архивирован (из-за слишком большого числа сохранённых стикеров в текущем аккаунте)</td></tr><tr><td><strong>official</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Является ли этот набор стикеров официальным</td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Является ли этот набор стикеров набором масок</td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Это набор пользовательских эмодзи</td></tr><tr><td><strong>text_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Следует ли менять цвет этого TGS-набора пользовательских эмодзи на цвет текста при использовании в сообщениях, на акцентный цвет при использовании в качестве эмодзи-статуса, на белый на фотографиях чатов либо на другой подходящий цвет в зависимости от контекста.</td></tr><tr><td><strong>channel_emoji_status</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>Если установлено, этот набор пользовательских эмодзи можно использовать в <a href="/api/emoji-status">эмодзи-статусах каналов и супергрупп</a>.</td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Создали ли мы этот набор стикеров</td></tr><tr><td><strong>installed_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Когда был установлен этот набор стикеров</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор набора стикеров</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа набора стикеров</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название набора стикеров</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:short_name] Краткое имя набора стикеров, используемое при отправке набора через <a href="/api/links#stickerset-links">глубокие ссылки на набор стикеров</a>.</td></tr><tr><td><strong>thumbs</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PhotoSize">PhotoSize</a>&gt;</td><td>Миниатюра набора стикеров</td></tr><tr><td><strong>thumb_dc_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Идентификатор DC миниатюры</td></tr><tr><td><strong>thumb_version</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Версия миниатюры</td></tr><tr><td><strong>thumb_document_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/long">long</a></td><td>Идентификатор документа миниатюры пользовательского эмодзи; документ можно получить методом <a href="/method/messages.getCustomEmojiDocuments">messages.getCustomEmojiDocuments</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество стикеров в наборе</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] Хеш</td></tr></tbody></table>

### Тип

[StickerSet](/type/StickerSet/)

### Связанные страницы

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/)

Получить [стикеры с пользовательскими эмодзи »](/api/custom-emoji/).

Возвращает список [документов](/constructor/document/) с анимированным пользовательским эмодзи в формате TGS и атрибутом [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) с исходным эмодзи и сведениями о наборе эмодзи, которому принадлежит этот пользовательский эмодзи.
