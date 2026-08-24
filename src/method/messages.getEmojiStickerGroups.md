---
title: "messages.getEmojiStickerGroups"
original: "https://core.telegram.org/method/messages.getEmojiStickerGroups"
section: ref
kind: method
description: "Представляет список категорий эмодзи, используемый при выборе стикера."
layout: layout.njk
---

# messages.getEmojiStickerGroups

Представляет список [категорий эмодзи](/api/emoji-categories/), используемый при выборе стикера.

```
messages.emojiGroupsNotModified#6fb4ad87 = messages.EmojiGroups;
messages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;
---functions---
messages.getEmojiStickerGroups#1dd840f5 hash:int = messages.EmojiGroups;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[messages.EmojiGroups](/type/messages.EmojiGroups/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Категории эмодзи](/api/emoji-categories/)

Интерфейсы выбора стикеров, пользовательских эмодзи и GIF должны предлагать список категорий для быстрой фильтрации результатов по эмодзи (или набору эмодзи) либо по иным критериям.
