---
title: "BusinessRecipients"
original: "https://core.telegram.org/type/BusinessRecipients"
section: ref
kind: type
description: "Задаёт чаты, которые **могут** получать сообщения Telegram Business об отсутствии » и приветственные »."
layout: layout.njk
---

# BusinessRecipients

Задаёт чаты, которые **могут** получать сообщения Telegram Business [об отсутствии »](/api/business/#away-messages) и [приветственные »](/api/business/#greeting-messages).

```
businessRecipients#21108ff7 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> = BusinessRecipients;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/businessRecipients">businessRecipients</a></td><td>Задаёт чаты, которые <strong>могут</strong> получать сообщения Telegram Business <a href="/api/business#away-messages">об отсутствии »</a> и <a href="/api/business#greeting-messages">приветственные »</a>.<br><br>Если установлен <code>exclude_selected</code>, задаёт все чаты, которые <strong>не могут</strong> получать сообщения Telegram Business <a href="/api/business#away-messages">об отсутствии »</a> и <a href="/api/business#greeting-messages">приветственные »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
