---
title: "InputChatTheme"
original: "https://core.telegram.org/type/InputChatTheme"
section: ref
kind: type
description: "Задаёт тему оформления чата »."
layout: layout.njk
---

# InputChatTheme

Задаёт [тему оформления чата »](/api/themes/#chat-themes).

```
inputChatThemeEmpty#83268483 = InputChatTheme;
inputChatTheme#c93de95c emoticon:string = InputChatTheme;
inputChatThemeUniqueGift#87e5dfe4 slug:string = InputChatTheme;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputChatThemeEmpty">inputChatThemeEmpty</a></td><td>Удалить любую заданную в данный момент тему оформления.</td></tr><tr><td><a href="/constructor/inputChatTheme">inputChatTheme</a></td><td>Установить тему оформления чата на основе эмодзи, возвращаемую методом <a href="/method/account.getChatThemes">account.getChatThemes</a>.</td></tr><tr><td><a href="/constructor/inputChatThemeUniqueGift">inputChatThemeUniqueGift</a></td><td>Установить тему оформления на основе принадлежащего вам или <a href="/api/gifts#hosted-collectible-gifts">размещённого коллекционного подарка »</a>, возвращаемого методом <a href="/method/account.getUniqueGiftChatThemes">account.getUniqueGiftChatThemes</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Темы оформления Telegram](/api/themes/)

Приложения Telegram умеют создавать, отправлять и синхронизировать темы оформления.
