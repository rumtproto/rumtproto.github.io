---
title: "EmojiList"
original: "https://core.telegram.org/type/EmojiList"
section: ref
kind: type
description: "Представляет список пользовательских эмодзи."
layout: layout.njk
---

# EmojiList

Представляет список [пользовательских эмодзи](/api/custom-emoji/).

```
emojiListNotModified#481eadfa = EmojiList;
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;

---functions---

account.getDefaultProfilePhotoEmojis#e2750328 hash:long = EmojiList;
account.getDefaultGroupPhotoEmojis#915860ae hash:long = EmojiList;
account.getDefaultBackgroundEmojis#a60ab9ce hash:long = EmojiList;
account.getChannelRestrictedStatusEmojis#35a9e0d5 hash:long = EmojiList;

messages.searchCustomEmoji#2c11c0d7 emoticon:string hash:long = EmojiList;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/emojiListNotModified">emojiListNotModified</a></td><td>Список <a href="/api/custom-emoji">пользовательских эмодзи</a> не изменился.</td></tr><tr><td><a href="/constructor/emojiList">emojiList</a></td><td>Представляет список <a href="/api/custom-emoji">пользовательских эмодзи</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getDefaultProfilePhotoEmojis">account.getDefaultProfilePhotoEmojis</a></td><td>Получить набор рекомендуемых <a href="/api/custom-emoji">стикеров пользовательских эмодзи</a>, которые можно <a href="/api/files#sticker-profile-pictures">использовать в качестве фотографии профиля</a></td></tr><tr><td><a href="/method/account.getDefaultGroupPhotoEmojis">account.getDefaultGroupPhotoEmojis</a></td><td>Получить набор рекомендуемых <a href="/api/custom-emoji">стикеров пользовательских эмодзи</a>, которые можно <a href="/api/files#sticker-profile-pictures">использовать в качестве изображения группы</a></td></tr><tr><td><a href="/method/account.getDefaultBackgroundEmojis">account.getDefaultBackgroundEmojis</a></td><td>Получить набор рекомендуемых <a href="/api/custom-emoji">стикеров с пользовательскими эмодзи</a>, которые можно использовать в <a href="/api/colors">узоре акцентного цвета</a>.</td></tr><tr><td><a href="/method/account.getChannelRestrictedStatusEmojis">account.getChannelRestrictedStatusEmojis</a></td><td>Возвращает полный список <a href="/api/custom-emoji">идентификаторов пользовательских эмодзи »</a>, которые нельзя использовать в <a href="/api/emoji-status">эмодзи-статусах каналов »</a>.</td></tr><tr><td><a href="/method/messages.searchCustomEmoji">messages.searchCustomEmoji</a></td><td>Искать <a href="/api/custom-emoji">пользовательские эмодзи</a>, связанные с UTF8-эмодзи</td></tr></tbody></table>

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
