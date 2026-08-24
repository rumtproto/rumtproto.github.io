---
title: "bots.exportBotToken"
original: "https://core.telegram.org/method/bots.exportBotToken"
section: ref
kind: method
description: "Экспортировать токен управляемого бота »; может вызываться только ботом-менеджером."
layout: layout.njk
---

# bots.exportBotToken

Экспортировать токен [управляемого бота »](/api/bots/managed-bots/#managing-a-managed-bot); может вызываться только ботом-менеджером.

```
 Method schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Управляемый бот, для которого нужно экспортировать токен</td></tr><tr><td><strong>revoke</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Если <a href="/constructor/boolTrue">boolTrue</a>, отозвать текущий токен и создать новый</td></tr></tbody></table>

### Результат

[bots.ExportedBotToken](/type/bots.ExportedBotToken/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>

### Связанные страницы

#### [boolTrue](/constructor/boolTrue/)

Конструктор можно трактовать как **логическое** значение `true`.

#### [Управляемые боты](/api/bots/managed-bots/)

Пользователи могут создавать **управляемых** ботов (которыми управляет определённый бот-менеджер) прямо через MTProto API, не обращаясь к [@BotFather](https://t.me/botfather).
