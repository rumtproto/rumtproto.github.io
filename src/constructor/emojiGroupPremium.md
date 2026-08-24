---
title: "emojiGroupPremium"
original: "https://core.telegram.org/constructor/emojiGroupPremium"
section: ref
kind: constructor
description: "Категория эмодзи, используемая для выбора всех Premium-стикеров (то есть тех, у которых есть эффект Premium »)/Premium-пользовательских эмодзи (то есть тех, у которых флаг…"
layout: layout.njk
---

# emojiGroupPremium

[Категория эмодзи](/api/emoji-categories/), используемая для выбора всех [Premium](/api/premium/)-стикеров (то есть тех, у которых есть [эффект Premium »](/api/stickers/#premium-animated-sticker-effects))/[Premium](/api/premium/)-[пользовательских эмодзи](/api/custom-emoji/) (то есть тех, у которых флаг [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`free` **не** установлен)

```
emojiGroupPremium#93bcf34 title:string icon_emoji_id:long = EmojiGroup;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название категории, например «Животные», «Флаги», «Лица» и так далее...</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Один пользовательский эмодзи, используемый для предпросмотра категории.</td></tr></tbody></table>

### Тип

[EmojiGroup](/type/EmojiGroup/)

### Связанные страницы

#### [Категории эмодзи](/api/emoji-categories/)

Интерфейсы выбора стикеров, пользовательских эмодзи и GIF должны предлагать список категорий для быстрой фильтрации результатов по эмодзи (или набору эмодзи) либо по иным критериям.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/)

Информация о пользовательском эмодзи
