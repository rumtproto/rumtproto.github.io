---
title: "account.getCollectibleEmojiStatuses"
original: "https://core.telegram.org/method/account.getCollectibleEmojiStatuses"
section: ref
kind: method
description: "Получить список эмодзи-статусов » для принадлежащих вам или размещённых коллекционных подарков »."
layout: layout.njk
---

# account.getCollectibleEmojiStatuses

Получить список [эмодзи-статусов »](/api/emoji-status/) для принадлежащих вам или [размещённых коллекционных подарков »](/api/gifts/#hosted-collectible-gifts).

```
account.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;
---functions---
account.getCollectibleEmojiStatuses#2e7b4543 hash:long = account.EmojiStatuses;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets">Хеш для постраничной выборки</a></td></tr></tbody></table>

### Результат

[account.EmojiStatuses](/type/account.EmojiStatuses/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
