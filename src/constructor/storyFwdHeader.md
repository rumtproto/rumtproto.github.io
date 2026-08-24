---
title: "storyFwdHeader"
original: "https://core.telegram.org/constructor/storyFwdHeader"
section: ref
kind: constructor
description: "Содержит информацию о первоначальном авторе истории, на которую сделан репост."
layout: layout.njk
---

# storyFwdHeader

Содержит информацию о первоначальном авторе истории, на которую сделан репост.

```
storyFwdHeader#b826e150 flags:# modified:flags.3?true from:flags.0?Peer from_name:flags.1?string story_id:flags.2?int = StoryFwdHeader;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>modified</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Было ли медиа истории изменено перед повторной публикацией (например, наложением реакции на видеосообщение).</td></tr><tr><td><strong>from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Peer">Peer</a></td><td>Пир, изначально опубликовавший историю; будет пустым для историй, пересланных от пользователя с включённой приватностью пересылок, — в этом случае вместо него задаётся <code>from_name</code>.</td></tr><tr><td><strong>from_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Будет установлено для историй, пересланных от пользователя с включённой приватностью пересылок; в этом случае поле <code>from</code> также будет пустым.</td></tr><tr><td><strong>story_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>, содержит идентификатор истории</td></tr></tbody></table>

### Тип

[StoryFwdHeader](/type/StoryFwdHeader/)
