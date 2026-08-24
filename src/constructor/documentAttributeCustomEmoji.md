---
title: "documentAttributeCustomEmoji"
original: "https://core.telegram.org/constructor/documentAttributeCustomEmoji"
section: ref
kind: constructor
description: "Информация о пользовательском эмодзи"
layout: layout.njk
---

# documentAttributeCustomEmoji

Информация о пользовательском эмодзи

```
documentAttributeCustomEmoji#fd149899 flags:# free:flags.0?true text_color:flags.1?true alt:string stickerset:InputStickerSet = DocumentAttribute;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>free</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Могут ли отправлять этот пользовательский эмодзи пользователи без Premium</td></tr><tr><td><strong>text_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Следует ли менять цвет этого пользовательского эмодзи в формате TGS на цвет текста при использовании в сообщениях, на акцентный цвет при использовании в качестве статуса эмодзи, на белый на фотографиях чатов либо на другой подходящий цвет в зависимости от контекста.</td></tr><tr><td><strong>alt</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Сам эмодзи</td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Набор эмодзи, которому принадлежит этот эмодзи.</td></tr></tbody></table>

### Тип

[DocumentAttribute](/type/DocumentAttribute/)
