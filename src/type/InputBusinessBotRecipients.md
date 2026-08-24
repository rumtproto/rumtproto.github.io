---
title: "InputBusinessBotRecipients"
original: "https://core.telegram.org/type/InputBusinessBotRecipients"
section: ref
kind: type
description: "Задаёт личные чаты, с которыми может взаимодействовать подключённый бизнес-бот »."
layout: layout.njk
---

# InputBusinessBotRecipients

Задаёт личные чаты, с которыми может взаимодействовать [подключённый бизнес-бот »](/api/bots/connected-business-bots/).

```
inputBusinessBotRecipients#c4e5921e flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<InputUser> exclude_users:flags.6?Vector<InputUser> = InputBusinessBotRecipients;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputBusinessBotRecipients">inputBusinessBotRecipients</a></td><td>Задаёт личные чаты, с которыми может взаимодействовать <a href="/api/bots/connected-business-bots">подключённый бизнес-бот »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
