---
title: "account.emojiStatuses"
original: "https://core.telegram.org/constructor/account.emojiStatuses"
section: ref
kind: constructor
description: "Список эмодзи-статусов"
layout: layout.njk
---

# account.emojiStatuses

Список [эмодзи-статусов](/api/emoji-status/)

```
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>statuses</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/EmojiStatus">EmojiStatus</a>&gt;</td><td><a href="/api/emoji-status">Эмодзи-статусы</a></td></tr></tbody></table>

### Тип

[account.EmojiStatuses](/type/account.EmojiStatuses/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.
