---
title: "BusinessBotRecipients"
original: "https://core.telegram.org/type/BusinessBotRecipients"
section: ref
kind: type
description: "Задаёт личные чаты, из которых подключённый бизнес-бот » может получать сообщения и с которыми может взаимодействовать."
layout: layout.njk
---

# BusinessBotRecipients

Задаёт личные чаты, из которых [подключённый бизнес-бот »](/api/bots/connected-business-bots/) может получать сообщения и с которыми может взаимодействовать.

```
businessBotRecipients#b88cf373 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> exclude_users:flags.6?Vector<long> = BusinessBotRecipients;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/businessBotRecipients">businessBotRecipients</a></td><td>Задаёт личные чаты, из которых <a href="/api/bots/connected-business-bots">подключённый бизнес-бот »</a> может получать сообщения и с которыми может взаимодействовать.</td></tr></tbody></table>

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
