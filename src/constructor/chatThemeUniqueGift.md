---
title: "chatThemeUniqueGift"
original: "https://core.telegram.org/constructor/chatThemeUniqueGift"
section: ref
kind: constructor
description: "Тема оформления чата на основе коллекционного подарка »."
layout: layout.njk
---

# chatThemeUniqueGift

Тема оформления чата на основе [коллекционного подарка »](/api/gifts/#collectible-gifts).

```
chatThemeUniqueGift#3458f9c8 gift:StarGift theme_settings:Vector<ThemeSettings> = ChatTheme;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift">StarGift</a></td><td>Принадлежащий пользователю или <a href="/api/gifts#hosted-collectible-gifts">размещённый коллекционный подарок »</a>, на котором основана эта тема, в виде конструктора <a href="/constructor/starGiftUnique">starGiftUnique</a>.</td></tr><tr><td><strong>theme_settings</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ThemeSettings">ThemeSettings</a>&gt;</td><td>Параметры темы оформления.</td></tr></tbody></table>

### Тип

[ChatTheme](/type/ChatTheme/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [starGiftUnique](/constructor/starGiftUnique/)

Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts).

Стикер, представляющий подарок, содержится в объекте [starGiftAttributeModel](/constructor/starGiftAttributeModel/) в поле `attributes`.
