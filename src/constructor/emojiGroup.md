---
title: "emojiGroup"
original: "https://core.telegram.org/constructor/emojiGroup"
section: ref
kind: constructor
description: "Представляет категорию эмодзи."
layout: layout.njk
---

# emojiGroup

Представляет [категорию эмодзи](/api/emoji-categories/).

```
emojiGroup#7a9abda9 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название категории, например «Животные», «Флаги», «Лица» и так далее...</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Один пользовательский эмодзи, используемый для предпросмотра категории.</td></tr><tr><td><strong>emoticons</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Список эмодзи в кодировке UTF-8, соответствующих категории.</td></tr></tbody></table>

### Тип

[EmojiGroup](/type/EmojiGroup/)

### Связанные страницы

#### [Категории эмодзи](/api/emoji-categories/)

Интерфейсы выбора стикеров, пользовательских эмодзи и GIF должны предлагать список категорий для быстрой фильтрации результатов по эмодзи (или набору эмодзи) либо по иным критериям.
