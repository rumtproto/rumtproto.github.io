---
title: "updates.channelDifferenceTooLong"
original: "https://core.telegram.org/constructor/updates.channelDifferenceTooLong"
section: ref
kind: constructor
description: "Переданное значение pts слишком старое: одно или несколько обновлений, начиная с указанного PTS, были удалены из ящика сообщений этого канала."
layout: layout.njk
---

# updates.channelDifferenceTooLong

[@term:pts] Переданное значение `pts` слишком старое: одно или несколько обновлений, начиная с указанного PTS, были удалены из ящика сообщений этого канала.

Для супергрупп и каналов это обычно происходит с обновлениями старше `latestPts - 100000` (однако полагаться на это значение не следует: это деталь серверной реализации, которая может измениться, и клиенты не должны её использовать никаким образом).

```
updates.channelDifferenceTooLong#a4bcc6fe flags:# final:flags.0?true timeout:flags.1?int dialog:Dialog messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>final</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Есть ли ещё обновления, которые нужно получить (всегда установлено)</td></tr><tr><td><strong>timeout</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Клиенты должны повторно запросить разницу канала по истечении timeout секунд</td></tr><tr><td><strong>dialog</strong></td><td style="text-align: center;"><a href="/type/Dialog">Dialog</a></td><td>Диалог, содержащий последнее значение <a href="/api/updates">PTS</a>, которое можно использовать для сброса состояния канала</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Последние сообщения (не начиная с переданного <code>pts</code>, а просто последние сообщения).</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты из сообщений</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи из сообщений</td></tr></tbody></table>

### Тип

[updates.ChannelDifference](/type/updates.ChannelDifference/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
