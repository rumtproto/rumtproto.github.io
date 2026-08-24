---
title: "account.EmojiStatuses"
original: "https://core.telegram.org/type/account.EmojiStatuses"
section: ref
kind: type
description: "Список эмодзи-статусов"
layout: layout.njk
---

# account.EmojiStatuses

Список [эмодзи-статусов](/api/emoji-status/)

```
account.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;

---functions---

account.getDefaultEmojiStatuses#d6753386 hash:long = account.EmojiStatuses;
account.getRecentEmojiStatuses#f578105 hash:long = account.EmojiStatuses;
account.getChannelDefaultEmojiStatuses#7727a7d5 hash:long = account.EmojiStatuses;
account.getCollectibleEmojiStatuses#2e7b4543 hash:long = account.EmojiStatuses;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.emojiStatusesNotModified">account.emojiStatusesNotModified</a></td><td>Серверный список <a href="/api/emoji-status">эмодзи-статусов</a> не изменился</td></tr><tr><td><a href="/constructor/account.emojiStatuses">account.emojiStatuses</a></td><td>Список <a href="/api/emoji-status">эмодзи-статусов</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getDefaultEmojiStatuses">account.getDefaultEmojiStatuses</a></td><td>Получить список предлагаемых по умолчанию <a href="/api/emoji-status">эмодзи-статусов</a></td></tr><tr><td><a href="/method/account.getRecentEmojiStatuses">account.getRecentEmojiStatuses</a></td><td>Получить недавно использованные <a href="/api/emoji-status">эмодзи-статусы</a></td></tr><tr><td><a href="/method/account.getChannelDefaultEmojiStatuses">account.getChannelDefaultEmojiStatuses</a></td><td>Получить список предлагаемых по умолчанию <a href="/api/emoji-status">эмодзи-статусов канала</a>.</td></tr><tr><td><a href="/method/account.getCollectibleEmojiStatuses">account.getCollectibleEmojiStatuses</a></td><td>Получить список <a href="/api/emoji-status">эмодзи-статусов »</a> для принадлежащих вам или <a href="/api/gifts#hosted-collectible-gifts">размещённых коллекционных подарков »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.
