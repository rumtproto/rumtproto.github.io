---
title: "bots.getBotMenuButton"
original: "https://core.telegram.org/method/bots.getBotMenuButton"
section: ref
kind: method
description: "Получает действие кнопки меню для указанного пользователя или для всех пользователей, ранее заданное с помощью bots.setBotMenuButton; пользователи видят эту информацию в…"
layout: layout.njk
---

# bots.getBotMenuButton

Получает действие кнопки меню для указанного пользователя или для всех пользователей, ранее заданное с помощью [bots.setBotMenuButton](/method/bots.setBotMenuButton/); пользователи видят эту информацию в конструкторе [botInfo](/constructor/botInfo/).

```
botMenuButtonDefault#7533a588 = BotMenuButton;
botMenuButtonCommands#4258c205 = BotMenuButton;
botMenuButton#c7b57ce6 text:string url:string = BotMenuButton;
---functions---
bots.getBotMenuButton#9c60eb28 user_id:InputUser = BotMenuButton;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор пользователя либо пусто для кнопки меню по умолчанию.</td></tr></tbody></table>

### Результат

[BotMenuButton](/type/BotMenuButton/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>

### Связанные страницы

#### [bots.setBotMenuButton](/method/bots.setBotMenuButton/)

Задаёт [действие кнопки меню »](/api/bots/menu/) для указанного пользователя или для всех пользователей

#### [botInfo](/constructor/botInfo/)

Информация о ботах (доступные команды бота и прочее)
