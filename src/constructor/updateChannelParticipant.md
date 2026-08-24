---
title: "updateChannelParticipant"
original: "https://core.telegram.org/constructor/updateChannelParticipant"
section: ref
kind: constructor
description: "Участник вышел, вступил, был заблокирован или назначен администратором в канале или супергруппе."
layout: layout.njk
---

# updateChannelParticipant

Участник вышел, вступил, был заблокирован или назначен администратором в [канале или супергруппе](/api/channel/).

```
updateChannelParticipant#985d3abb flags:# via_chatlist:flags.3?true channel_id:long date:int actor_id:long user_id:long prev_participant:flags.0?ChannelParticipant new_participant:flags.1?ChannelParticipant invite:flags.2?ExportedChatInvite qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>via_chatlist</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Присоединился ли участник по <a href="/api/links#chat-folder-links">глубокой ссылке на папку чатов »</a>.</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата события</td></tr><tr><td><strong>actor_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь, вызвавший изменение (пригласивший, администратор, исключивший пользователя, или даже сам <strong>user_id</strong>)</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь, которого затронуло изменение</td></tr><tr><td><strong>prev_participant</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/ChannelParticipant">ChannelParticipant</a></td><td>Предыдущий статус участника</td></tr><tr><td><strong>new_participant</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/ChannelParticipant">ChannelParticipant</a></td><td>Новый статус участника</td></tr><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ExportedChatInvite">ExportedChatInvite</a></td><td>Приглашение в чат, использованное для вступления в <a href="/api/channel">канал или супергруппу</a></td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Новое значение <strong>qts</strong>, подробнее см. <a href="/api/updates">обновления »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
