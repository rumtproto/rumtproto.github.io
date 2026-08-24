---
title: "emojiGroupGreeting"
original: "https://core.telegram.org/constructor/emojiGroupGreeting"
section: ref
kind: constructor
description: "Представляет категорию эмодзи, которую следует переместить в начало списка при выборе стикера для приветствия Telegram Business"
layout: layout.njk
---

# emojiGroupGreeting

Представляет [категорию эмодзи](/api/emoji-categories/), которую следует переместить в начало списка при выборе стикера для [приветствия Telegram Business](/api/business/#business-introduction)

```
emojiGroupGreeting#80d26cc7 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название категории, например «Животные», «Флаги», «Лица» и так далее...</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Один пользовательский эмодзи, используемый для предпросмотра категории.</td></tr><tr><td><strong>emoticons</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Список эмодзи в кодировке UTF-8, соответствующих категории.</td></tr></tbody></table>

### Тип

[EmojiGroup](/type/EmojiGroup/)

### Связанные страницы

#### [Категории эмодзи](/api/emoji-categories/)

Интерфейсы выбора стикеров, пользовательских эмодзи и GIF должны предлагать список категорий для быстрой фильтрации результатов по эмодзи (или набору эмодзи) либо по иным критериям.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
