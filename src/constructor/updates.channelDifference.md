---
title: "updates.channelDifference"
original: "https://core.telegram.org/constructor/updates.channelDifference"
section: ref
kind: constructor
description: "Новые обновления"
layout: layout.njk
---

# updates.channelDifference

Новые обновления

```
updates.channelDifference#2064674e flags:# final:flags.0?true pts:int timeout:flags.1?int new_messages:Vector<Message> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>final</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>[@term:pts] Есть ли ещё обновления, которые нужно получить через getDifference, начиная с указанного <code>pts</code></td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">PTS</a>, начиная с которого следует получать обновления в следующий раз</td></tr><tr><td><strong>timeout</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Клиенты должны повторно запросить разницу канала по истечении timeout секунд, если пользователь <a href="/api/updates#subscribing-to-updates-of-channels-supergroups">в данный момент просматривает чат, подробнее см. здесь »</a>.</td></tr><tr><td><strong>new_messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Новые сообщения</td></tr><tr><td><strong>other_updates</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Update">Update</a>&gt;</td><td>Прочие обновления</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи</td></tr></tbody></table>

### Тип

[updates.ChannelDifference](/type/updates.ChannelDifference/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
