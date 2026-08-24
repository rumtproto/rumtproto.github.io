---
title: "messages.EmojiGroups"
original: "https://core.telegram.org/type/messages.EmojiGroups"
section: ref
kind: type
description: "Представляет список категорий эмодзи."
layout: layout.njk
---

# messages.EmojiGroups

Представляет список [категорий эмодзи](/api/emoji-categories/).

```
messages.emojiGroupsNotModified#6fb4ad87 = messages.EmojiGroups;
messages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;

---functions---

messages.getEmojiGroups#7488ce5b hash:int = messages.EmojiGroups;
messages.getEmojiStatusGroups#2ecd56cd hash:int = messages.EmojiGroups;
messages.getEmojiProfilePhotoGroups#21a548f3 hash:int = messages.EmojiGroups;
messages.getEmojiStickerGroups#1dd840f5 hash:int = messages.EmojiGroups;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.emojiGroupsNotModified">messages.emojiGroupsNotModified</a></td><td>Список <a href="/api/emoji-categories">категорий эмодзи</a> не изменился.</td></tr><tr><td><a href="/constructor/messages.emojiGroups">messages.emojiGroups</a></td><td>Представляет список <a href="/api/emoji-categories">категорий эмодзи</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getEmojiGroups">messages.getEmojiGroups</a></td><td>Представляет список <a href="/api/emoji-categories">категорий эмодзи</a>.</td></tr><tr><td><a href="/method/messages.getEmojiStatusGroups">messages.getEmojiStatusGroups</a></td><td>Представляет список <a href="/api/emoji-categories">категорий эмодзи</a>, используемый при выборе пользовательских эмодзи для установки в качестве <a href="/api">эмодзи-статуса</a>.</td></tr><tr><td><a href="/method/messages.getEmojiProfilePhotoGroups">messages.getEmojiProfilePhotoGroups</a></td><td>Представляет список <a href="/api/emoji-categories">категорий эмодзи</a>, используемый при выборе пользовательских эмодзи для установки в качестве <a href="/api/files#sticker-profile-pictures">фотографии профиля</a>.</td></tr><tr><td><a href="/method/messages.getEmojiStickerGroups">messages.getEmojiStickerGroups</a></td><td>Представляет список <a href="/api/emoji-categories">категорий эмодзи</a>, используемый при выборе стикера.</td></tr></tbody></table>

### Связанные страницы

#### [Категории эмодзи](/api/emoji-categories/)

Интерфейсы выбора стикеров, пользовательских эмодзи и GIF должны предлагать список категорий для быстрой фильтрации результатов по эмодзи (или набору эмодзи) либо по иным критериям.
