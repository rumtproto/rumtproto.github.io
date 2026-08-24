---
title: "Категории эмодзи"
original: "https://core.telegram.org/api/emoji-categories"
section: api
description: "Интерфейсы выбора стикеров, эмодзи, пользовательских эмодзи и GIF должны предлагать список категорий, позволяющий быстро отфильтровать результаты по эмодзи (или списку эмодзи)…"
layout: layout.njk
---

# Категории эмодзи

Интерфейсы выбора стикеров, эмодзи, пользовательских эмодзи и GIF должны предлагать список категорий, позволяющий быстро отфильтровать результаты по эмодзи (или списку эмодзи) либо по какому-то иному признаку.

```
messages.emojiGroupsNotModified#6fb4ad87 = messages.EmojiGroups;
messages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;

emojiGroup#7a9abda9 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
emojiGroupGreeting#80d26cc7 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
emojiGroupPremium#93bcf34 title:string icon_emoji_id:long = EmojiGroup;

---functions---

messages.getEmojiGroups#7488ce5b hash:int = messages.EmojiGroups;
messages.getEmojiStickerGroups#1dd840f5 hash:int = messages.EmojiGroups;
messages.getEmojiStatusGroups#2ecd56cd hash:int = messages.EmojiGroups;
messages.getEmojiProfilePhotoGroups#21a548f3 hash:int = messages.EmojiGroups;
```

Используйте:

-   [messages.getEmojiStickerGroups](/method/messages.getEmojiStickerGroups/) — при выборе стикера.
-   [messages.getEmojiStatusGroups](/method/messages.getEmojiStatusGroups/) — при выборе пользовательского эмодзи, который будет установлен как [эмодзи-статус](/api/emoji-status/).
-   [messages.getEmojiProfilePhotoGroups](/method/messages.getEmojiProfilePhotoGroups/) — при выборе пользовательского эмодзи, который будет установлен как [фотография профиля](/api/files/#sticker-profile-pictures)
-   [messages.getEmojiGroups](/method/messages.getEmojiGroups/) — во всех остальных случаях (включая GIF, эмодзи и пользовательские эмодзи).

[@term:hash] Разбитый на категории список эмодзи в кодировке UTF-8 обязательно запрашивается перечисленными выше методами; клиент периодически обновляет этот список, передавая `hash` (хеш выборки), возвращённый предыдущим вызовом.

Каждая категория описывается заголовком `title` (например, «Животные», «Лица», «Флаги») и представлена в интерфейсе одним [пользовательским эмодзи »](/api/custom-emoji/) (`icon_emoji_id`).

Все категории следует показывать по их `icon_emoji_id` в строке поиска стикеров, эмодзи, пользовательских эмодзи и GIF, расположенной в верхней части интерфейса выбора стикеров, пользовательских эмодзи и GIF.

Когда пользователь нажимает на определённую категорию эмодзи, клиент должен показать:

-   все стикеры только для [Premium](/api/premium/) (то есть те, у которых есть [Premium-эффект »](/api/stickers/#premium-animated-sticker-effects)), и [пользовательские эмодзи](/api/custom-emoji/) только для [Premium](/api/premium/) (то есть те, у которых **не** установлен флаг `free` конструктора [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/)), — если нажата категория [emojiGroupPremium](/constructor/emojiGroupPremium/), ЛИБО
-   все стикеры, [пользовательские эмодзи](/api/custom-emoji/), эмодзи и GIF, соответствующие эмодзи из поля `emoticons` выбранной категории, — если нажата категория [emojiGroup](/constructor/emojiGroup/) или [emojiGroupGreeting](/constructor/emojiGroupGreeting/).

Обратите внимание:

-   При [выборе GIF](/api/gifs/) включайте в список только категории [emojiGroup](/constructor/emojiGroup/).
-   При выборе эмодзи сначала перечислите все пригодные к отправке пользовательские эмодзи, соответствующие полю `emoticons` выбранной категории (для пользователей с Premium — и Premium, и обычные, для остальных — только обычные), а затем сами эмодзи из `emoticons`.
-   При выборе стикера для [бизнес-представления](/api/business/#business-introduction) отсортируйте результат [messages.getEmojiStickerGroups](/method/messages.getEmojiStickerGroups/) локально, поместив все категории [emojiGroupGreeting](/constructor/emojiGroupGreeting/) в начало списка.
