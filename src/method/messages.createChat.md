---
title: "messages.createChat"
original: "https://core.telegram.org/method/messages.createChat"
section: ref
kind: method
description: "Создаёт новый чат."
layout: layout.njk
---

# messages.createChat

Создаёт новый чат.

```
messages.invitedUsers#7f5defa6 updates:Updates missing_invitees:Vector<MissingInvitee> = messages.InvitedUsers;
---functions---
messages.createChat#92ceddd4 flags:# users:Vector<InputUser> title:string ttl_period:flags.0?int = messages.InvitedUsers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputUser">InputUser</a>&gt;</td><td>Список идентификаторов пользователей, которых нужно пригласить</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название чата</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Время жизни всех сообщений, которые будут отправлены в чат: как только message.date+message.ttl_period === time(), сообщение будет удалено на сервере, и его также необходимо удалить локально. Изменить это значение позже можно с помощью метода <a href="/method/messages.setDefaultHistoryTTL">messages.setDefaultHistoryTTL</a>.</td></tr></tbody></table>

### Результат

[messages.InvitedUsers](/type/messages.InvitedUsers/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>500</td><td>CHAT_ID_GENERATE_FAILED</td><td>Сбой при генерации идентификатора чата.</td></tr><tr><td>400</td><td>CHAT_INVALID</td><td>Недействительный чат.</td></tr><tr><td>400</td><td>CHAT_MEMBER_ADD_FAILED</td><td>Не удалось добавить участников.</td></tr><tr><td>400</td><td>CHAT_TITLE_EMPTY</td><td>Не указано название чата.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>TTL_PERIOD_INVALID</td><td>[@term:TTL] Указанный период TTL недействителен.</td></tr><tr><td>400</td><td>USERS_TOO_FEW</td><td>Недостаточно пользователей (например, для создания чата).</td></tr><tr><td>406</td><td>USER_RESTRICTED</td><td>На вас пожаловались как на спам, вы не можете создавать каналы или чаты.</td></tr></tbody></table>

### Связанные страницы

#### [messages.setDefaultHistoryTTL](/method/messages.setDefaultHistoryTTL/)

Изменяет значение по умолчанию настройки времени жизни сообщений (Time-To-Live), применяемое ко всем новым чатам.
