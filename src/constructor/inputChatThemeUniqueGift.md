---
title: "inputChatThemeUniqueGift"
original: "https://core.telegram.org/constructor/inputChatThemeUniqueGift"
section: ref
kind: constructor
description: "Установить тему оформления на основе принадлежащего вам или размещённого коллекционного подарка », возвращаемого методом account.getUniqueGiftChatThemes."
layout: layout.njk
---

# inputChatThemeUniqueGift

Установить тему оформления на основе принадлежащего вам или [размещённого коллекционного подарка »](/api/gifts/#hosted-collectible-gifts), возвращаемого методом [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/).

```
inputChatThemeUniqueGift#87e5dfe4 slug:string = InputChatTheme;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Слаг из поля <a href="/constructor/starGiftUnique">starGiftUnique</a>.<code>slug</code>.</td></tr></tbody></table>

### Тип

[InputChatTheme](/type/InputChatTheme/)

### Связанные страницы

#### [starGiftUnique](/constructor/starGiftUnique/)

Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts).

Стикер, представляющий подарок, содержится в объекте [starGiftAttributeModel](/constructor/starGiftAttributeModel/) в поле `attributes`.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/)

Получить все [темы оформления чатов »](/api/themes/#chat-themes), связанные с принадлежащими вам или [размещёнными коллекционными подарками »](/api/gifts/#hosted-collectible-gifts).
