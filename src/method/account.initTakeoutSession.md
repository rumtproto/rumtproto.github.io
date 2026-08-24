---
title: "account.initTakeoutSession"
original: "https://core.telegram.org/method/account.initTakeoutSession"
section: ref
kind: method
description: "Инициализировать сессию выгрузки данных, подробнее см. здесь »."
layout: layout.njk
---

# account.initTakeoutSession

Инициализировать [сессию выгрузки данных, подробнее см. здесь »](/api/takeout/).

```
account.takeout#4dba4501 id:long = account.Takeout;
---functions---
account.initTakeoutSession#8ef3eab0 flags:# contacts:flags.0?true message_users:flags.1?true message_chats:flags.2?true message_megagroups:flags.3?true message_channels:flags.4?true files:flags.5?true file_max_size:flags.5?long = account.Takeout;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Выгружать ли контакты</td></tr><tr><td><strong>message_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Выгружать ли сообщения из личных чатов</td></tr><tr><td><strong>message_chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Выгружать ли сообщения из <a href="/api/channel#basic-groups">обычных групп</a></td></tr><tr><td><strong>message_megagroups</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Выгружать ли сообщения из <a href="/api/channel#supergroups">супергрупп</a></td></tr><tr><td><strong>message_channels</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Выгружать ли сообщения из <a href="/api/channel#channels">каналов</a></td></tr><tr><td><strong>files</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Выгружать ли файлы</td></tr><tr><td><strong>file_max_size</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/long">long</a></td><td>Максимальный размер экспортируемых файлов</td></tr></tbody></table>

### Результат

[account.Takeout](/type/account.Takeout/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>420</td><td>TAKEOUT_INIT_DELAY_%d</td><td>К сожалению, из соображений безопасности вы сможете начать загрузку своих данных через %d секунд. Мы уведомили все ваши устройства о запросе на экспорт, чтобы убедиться, что он санкционирован, и дать вам время отреагировать, если это не так.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Takeout API](/api/takeout/)

API Telegram позволяет пользователям экспортировать все свои данные через API выгрузки данных.
