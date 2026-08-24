---
title: "bots.checkUsername"
original: "https://core.telegram.org/method/bots.checkUsername"
section: ref
kind: method
description: "Проверить, доступно ли имя пользователя и подходит ли оно для использования при создании управляемого бота »."
layout: layout.njk
---

# bots.checkUsername

Проверить, доступно ли имя пользователя и подходит ли оно для использования при [создании управляемого бота »](/api/bots/managed-bots/#creating-a-managed-bot).

```
 Method schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя пользователя для проверки; допускаются только буквы, цифры и подчёркивания, оно должно оканчиваться на <code>bot</code>, а полная длина имени должна составлять 5–32 символа</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>USERNAME_INVALID</td><td>Указанное имя пользователя недействительно.</td></tr><tr><td>400</td><td>USERNAME_OCCUPIED</td><td>Указанное имя пользователя уже занято.</td></tr><tr><td>400</td><td>USERNAME_SUFFIX_MISSING</td><td>В указанном юзернейме отсутствует обязательный суффикс <code>bot</code>.</td></tr></tbody></table>

### Связанные страницы

#### [Управляемые боты](/api/bots/managed-bots/)

Пользователи могут создавать **управляемых** ботов (которыми управляет определённый бот-менеджер) прямо через MTProto API, не обращаясь к [@BotFather](https://t.me/botfather).
