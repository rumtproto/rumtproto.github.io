---
title: "bots.updateUserEmojiStatus"
original: "https://core.telegram.org/method/bots.updateUserEmojiStatus"
section: ref
kind: method
description: "Изменить эмодзи-статус пользователя (вызывается ботами, подробнее о полном порядке действий здесь »)"
layout: layout.njk
---

# bots.updateUserEmojiStatus

Изменить эмодзи-статус пользователя (вызывается ботами, подробнее о полном порядке действий [здесь »](/api/emoji-status/#setting-an-emoji-status-from-a-bot))

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.updateUserEmojiStatus#ed9f30c5 user_id:InputUser emoji_status:EmojiStatus = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Пользователь, чей эмодзи-статус нужно изменить</td></tr><tr><td><strong>emoji_status</strong></td><td style="text-align: center;"><a href="/type/EmojiStatus">EmojiStatus</a></td><td>Статус в виде эмодзи</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr><tr><td>403</td><td>USER_PERMISSION_DENIED</td><td>Пользователь не предоставил боту доступ к изменению своего эмодзи-статуса через <a href="/method/bots.toggleUserEmojiStatusPermission">bots.toggleUserEmojiStatusPermission</a> либо отозвал его.</td></tr></tbody></table>

### Связанные страницы

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.

#### [bots.toggleUserEmojiStatusPermission](/method/bots.toggleUserEmojiStatusPermission/)

Разрешить или запретить боту [изменять наш эмодзи-статус »](/api/emoji-status/#setting-an-emoji-status-from-a-bot)
