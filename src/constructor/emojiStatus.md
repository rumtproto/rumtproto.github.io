---
title: "emojiStatus"
original: "https://core.telegram.org/constructor/emojiStatus"
section: ref
kind: constructor
description: "Статус эмодзи"
layout: layout.njk
---

# emojiStatus

[Статус эмодзи](/api/emoji-status/)

```
emojiStatus#e7ff068a flags:# document_id:long until:flags.0?int = EmojiStatus;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>document_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/custom-emoji">Идентификатор документа пользовательского эмодзи</a></td></tr><tr><td><strong>until</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Если установлено, эмодзи-статус будет активен до указанного unixtime.</td></tr></tbody></table>

### Тип

[EmojiStatus](/type/EmojiStatus/)

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.
