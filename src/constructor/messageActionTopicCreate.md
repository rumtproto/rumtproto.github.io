---
title: "messageActionTopicCreate"
original: "https://core.telegram.org/constructor/messageActionTopicCreate"
section: ref
kind: constructor
description: "Тема форума была создана."
layout: layout.njk
---

# messageActionTopicCreate

[Тема форума](/api/forum/#forum-topics) была создана.

```
messageActionTopicCreate#d999256 flags:# title_missing:flags.1?true title:string icon_color:int icon_emoji_id:flags.0?long = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>title_missing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, у темы нет заданного пользователем названия; флаг может быть установлен только для персональных тем <a href="/api/forum#bot-forums">форумов ботов</a>; если это поле установлено, боту, скорее всего, следует изменить название темы.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название темы.</td></tr><tr><td><strong>icon_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Если значок из пользовательского эмодзи не указан, задаёт цвет запасного значка темы (RGB) — один из <code>0x6FB9F0</code>, <code>0xFFD67E</code>, <code>0xCB86DB</code>, <code>0x8EEE98</code>, <code>0xFF93B2</code> или <code>0xFB6F5F</code>.</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Идентификатор <a href="/api/custom-emoji">пользовательского эмодзи</a>, используемого как значок темы.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
