---
title: "account.updateEmojiStatus"
original: "https://core.telegram.org/method/account.updateEmojiStatus"
section: ref
kind: method
description: "Установить эмодзи-статус"
layout: layout.njk
---

# account.updateEmojiStatus

Установить [эмодзи-статус](/api/emoji-status/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateEmojiStatus#fbd3de6b emoji_status:EmojiStatus = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>emoji_status</strong></td><td style="text-align: center;"><a href="/type/EmojiStatus">EmojiStatus</a></td><td><a href="/api/emoji-status">Эмодзи-статус</a>, который нужно установить</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>COLLECTIBLE_INVALID</td><td>Указанный коллекционный объект недействителен.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>Указанный документ недействителен.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr></tbody></table>

### Связанные страницы

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.
