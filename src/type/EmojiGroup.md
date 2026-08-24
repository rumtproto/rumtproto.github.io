---
title: "EmojiGroup"
original: "https://core.telegram.org/type/EmojiGroup"
section: ref
kind: type
description: "Представляет категорию эмодзи."
layout: layout.njk
---

# EmojiGroup

Представляет [категорию эмодзи](/api/emoji-categories/).

```
emojiGroup#7a9abda9 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
emojiGroupGreeting#80d26cc7 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
emojiGroupPremium#93bcf34 title:string icon_emoji_id:long = EmojiGroup;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/emojiGroup">emojiGroup</a></td><td>Представляет <a href="/api/emoji-categories">категорию эмодзи</a>.</td></tr><tr><td><a href="/constructor/emojiGroupGreeting">emojiGroupGreeting</a></td><td>Представляет <a href="/api/emoji-categories">категорию эмодзи</a>, которую следует переместить в начало списка при выборе стикера для <a href="/api/business#business-introduction">приветствия Telegram Business</a></td></tr><tr><td><a href="/constructor/emojiGroupPremium">emojiGroupPremium</a></td><td><a href="/api/emoji-categories">Категория эмодзи</a>, используемая для выбора всех <a href="/api/premium">Premium</a>-стикеров (то есть тех, у которых есть <a href="/api/stickers#premium-animated-sticker-effects">эффект Premium »</a>)/<a href="/api/premium">Premium</a>-<a href="/api/custom-emoji">пользовательских эмодзи</a> (то есть тех, у которых флаг <a href="/constructor/documentAttributeCustomEmoji">documentAttributeCustomEmoji</a>.<code>free</code> <strong>не</strong> установлен)</td></tr></tbody></table>

### Связанные страницы

#### [Категории эмодзи](/api/emoji-categories/)

Интерфейсы выбора стикеров, пользовательских эмодзи и GIF должны предлагать список категорий для быстрой фильтрации результатов по эмодзи (или набору эмодзи) либо по иным критериям.
