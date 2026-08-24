---
title: "bots.getAccessSettings"
original: "https://core.telegram.org/method/bots.getAccessSettings"
section: ref
kind: method
description: "Получить настройки ограничения доступа » управляемого бота; может вызываться только ботом-менеджером."
layout: layout.njk
---

# bots.getAccessSettings

Получить [настройки ограничения доступа »](/api/bots/managed-bots/#managing-a-managed-bot) управляемого бота; может вызываться только ботом-менеджером.

```
 Method schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Управляемый бот, настройки доступа которого нужно получить</td></tr></tbody></table>

### Результат

[bots.AccessSettings](/type/bots.AccessSettings/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>

### Связанные страницы

#### [Управляемые боты](/api/bots/managed-bots/)

Пользователи могут создавать **управляемых** ботов (которыми управляет определённый бот-менеджер) прямо через MTProto API, не обращаясь к [@BotFather](https://t.me/botfather).
