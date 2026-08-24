---
title: "updateUserEmojiStatus"
original: "https://core.telegram.org/constructor/updateUserEmojiStatus"
section: ref
kind: constructor
description: "Изменился эмодзи-статус определённого пользователя"
layout: layout.njk
---

# updateUserEmojiStatus

Изменился [эмодзи-статус](/api/emoji-status/) определённого пользователя

```
updateUserEmojiStatus#28373599 user_id:long emoji_status:EmojiStatus = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>emoji_status</strong></td><td style="text-align: center;"><a href="/type/EmojiStatus">EmojiStatus</a></td><td>Новый <a href="/api/emoji-status">эмодзи-статус</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.
