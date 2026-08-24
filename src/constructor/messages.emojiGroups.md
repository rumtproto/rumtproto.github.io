---
title: "messages.emojiGroups"
original: "https://core.telegram.org/constructor/messages.emojiGroups"
section: ref
kind: constructor
description: "Представляет список категорий эмодзи."
layout: layout.njk
---

# messages.emojiGroups

Представляет список [категорий эмодзи](/api/emoji-categories/).

```
messages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>groups</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/EmojiGroup">EmojiGroup</a>&gt;</td><td>Список <a href="/api/emoji-categories">категорий эмодзи</a>.</td></tr></tbody></table>

### Тип

[messages.EmojiGroups](/type/messages.EmojiGroups/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Категории эмодзи](/api/emoji-categories/)

Интерфейсы выбора стикеров, пользовательских эмодзи и GIF должны предлагать список категорий для быстрой фильтрации результатов по эмодзи (или набору эмодзи) либо по иным критериям.
