---
title: "businessBotRecipients"
original: "https://core.telegram.org/constructor/businessBotRecipients"
section: ref
kind: constructor
description: "Задаёт личные чаты, из которых подключённый бизнес-бот » может получать сообщения и с которыми может взаимодействовать."
layout: layout.njk
---

# businessBotRecipients

Задаёт личные чаты, из которых [подключённый бизнес-бот »](/api/bots/connected-business-bots/) может получать сообщения и с которыми может взаимодействовать.

```
businessBotRecipients#b88cf373 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> exclude_users:flags.6?Vector<long> = BusinessBotRecipients;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>existing_chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Выбирает все существующие личные чаты.</td></tr><tr><td><strong>new_chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Выбирает все новые личные чаты.</td></tr><tr><td><strong>contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Выбирает все личные чаты с контактами.</td></tr><tr><td><strong>non_contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Выбирает все личные чаты с пользователями не из контактов.</td></tr><tr><td><strong>exclude_selected</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Если установлено, выбираются все личные чаты, <em>кроме</em> выбранных в <code>existing_chats</code>, <code>new_chats</code>, <code>contacts</code>, <code>non_contacts</code> и <code>users</code>.<br>Учтите, что при установленном флаге любые значения, переданные в <code>exclude_users</code>, будут объединены и перенесены сервером в <code>users</code>, поэтому <code>exclude_users</code> всегда будет пустым.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Явно выбранные личные чаты.</td></tr><tr><td><strong>exclude_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Идентификаторы личных чатов, которые всегда исключаются.</td></tr></tbody></table>

### Тип

[BusinessBotRecipients](/type/BusinessBotRecipients/)

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
