---
title: "businessBotRights"
original: "https://core.telegram.org/constructor/businessBotRights"
section: ref
kind: constructor
description: "Права бизнес-бота."
layout: layout.njk
---

# businessBotRights

[Права бизнес-бота](/api/bots/connected-business-bots/).

```
businessBotRights#a0624cf7 flags:# reply:flags.0?true read_messages:flags.1?true delete_sent_messages:flags.2?true delete_received_messages:flags.3?true edit_name:flags.4?true edit_bio:flags.5?true edit_profile_photo:flags.6?true edit_username:flags.7?true view_gifts:flags.8?true sell_gifts:flags.9?true change_gift_settings:flags.10?true transfer_and_upgrade_gifts:flags.11?true transfer_stars:flags.12?true manage_stories:flags.13?true = BusinessBotRights;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>reply</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Может ли бот отправлять и изменять сообщения в личных чатах, в которых были входящие сообщения за последние 24 часа.</td></tr><tr><td><strong>read_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Может ли бот отмечать входящие личные сообщения как прочитанные.</td></tr><tr><td><strong>delete_sent_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Может ли бот удалять отправленные им сообщения.</td></tr><tr><td><strong>delete_received_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Может ли бот удалять полученные личные сообщения в управляемых чатах.</td></tr><tr><td><strong>edit_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Может ли бот изменять имя и фамилию бизнес-аккаунта.</td></tr><tr><td><strong>edit_bio</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Может ли бот изменять описание бизнес-аккаунта.</td></tr><tr><td><strong>edit_profile_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Может ли бот изменять фотографию профиля бизнес-аккаунта.</td></tr><tr><td><strong>edit_username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Может ли бот изменять имя пользователя бизнес-аккаунта.</td></tr><tr><td><strong>view_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Может ли бот просматривать подарки и количество Telegram Stars, принадлежащих бизнес-аккаунту.</td></tr><tr><td><strong>sell_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Может ли бот преобразовывать обычные подарки, принадлежащие бизнес-аккаунту, в Telegram Stars.</td></tr><tr><td><strong>change_gift_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>Может ли бот изменять настройки приватности, относящиеся к подаркам бизнес-аккаунта.</td></tr><tr><td><strong>transfer_and_upgrade_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Может ли бот передавать и улучшать подарки, принадлежащие бизнес-аккаунту.</td></tr><tr><td><strong>transfer_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/constructor/true">true</a></td><td>Может ли бот переводить Telegram Stars, полученные бизнес-аккаунтом, на собственный аккаунт либо использовать их для улучшения и передачи подарков.</td></tr><tr><td><strong>manage_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/constructor/true">true</a></td><td>Может ли бот публиковать, изменять и удалять истории от имени бизнес-аккаунта.</td></tr></tbody></table>

### Тип

[BusinessBotRights](/type/BusinessBotRights/)

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
