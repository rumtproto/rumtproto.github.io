---
title: "channels.inviteToChannel"
original: "https://core.telegram.org/method/channels.inviteToChannel"
section: ref
kind: method
description: "Пригласить пользователей в канал или супергруппу"
layout: layout.njk
---

# channels.inviteToChannel

Пригласить пользователей в канал или супергруппу

```
messages.invitedUsers#7f5defa6 updates:Updates missing_invitees:Vector<MissingInvitee> = messages.InvitedUsers;
---functions---
channels.inviteToChannel#c9e33d54 channel:InputChannel users:Vector<InputUser> = messages.InvitedUsers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Канал или супергруппа</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputUser">InputUser</a>&gt;</td><td>Пользователи для приглашения</td></tr></tbody></table>

### Результат

[messages.InvitedUsers](/type/messages.InvitedUsers/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOTS_TOO_MUCH</td><td>В этом чате или канале слишком много ботов.</td></tr><tr><td>400</td><td>BOT_GROUPS_BLOCKED</td><td>Этого бота нельзя добавлять в группы.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel#monoforums">Монофорумы</a> не поддерживают эту возможность.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_INVALID</td><td>Недействительный чат.</td></tr><tr><td>400</td><td>CHAT_MEMBER_ADD_FAILED</td><td>Не удалось добавить участников.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>USERS_TOO_MUCH</td><td>Превышено максимальное количество пользователей (например, при создании чата).</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>Вам запрещено отправлять сообщения в супергруппах и каналах.</td></tr><tr><td>400</td><td>USER_BLOCKED</td><td>Пользователь заблокирован.</td></tr><tr><td>400</td><td>USER_BOT</td><td>Боты могут быть администраторами только в каналах.</td></tr><tr><td>403</td><td>USER_CHANNELS_TOO_MUCH</td><td>Один из пользователей, которых вы попытались добавить, уже состоит в слишком большом числе каналов и супергрупп.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr><tr><td>400</td><td>USER_KICKED</td><td>Этот пользователь был исключён из этой супергруппы или канала.</td></tr><tr><td>403</td><td>USER_NOT_MUTUAL_CONTACT</td><td>Указанный пользователь не является взаимным контактом.</td></tr><tr><td>403</td><td>USER_PRIVACY_RESTRICTED</td><td>Настройки приватности пользователя не позволяют вам это сделать.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
