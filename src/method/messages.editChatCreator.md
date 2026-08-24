---
title: "messages.editChatCreator"
original: "https://core.telegram.org/method/messages.editChatCreator"
section: ref
kind: method
description: "Передать права владельца обычной группы, супергруппы или канала другому пользователю; полное описание процесса см. здесь »."
layout: layout.njk
---

# messages.editChatCreator

Передать права владельца обычной группы, супергруппы или канала другому пользователю; полное описание процесса см. [здесь »](/api/channel/#transferring-ownership-of-a-group-channel).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.editChatCreator#f743b857 peer:InputPeer user_id:InputUser password:InputCheckPasswordSRP = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Группа/супергруппа/канал, которыми мы владеем.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор нового владельца.</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td><a href="/api/srp">Пароль двухфакторной авторизации</a> текущей учётной записи.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_ADMIN_PUBLIC_TOO_MUCH</td><td>Вы администратор слишком многих публичных каналов; сделайте часть каналов закрытыми, чтобы изменить имя пользователя этого канала.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_MEMBER_ADD_FAILED</td><td>Не удалось добавить участников.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>Указанный хеш пароля недействителен.</td></tr><tr><td>400</td><td>PASSWORD_MISSING</td><td>Перед выполнением этой операции вы обязаны <a href="/api/srp">включить двухфакторную аутентификацию</a>.</td></tr><tr><td>400</td><td>PASSWORD_TOO_FRESH_%d</td><td>Пароль был изменён менее 24 часов назад, повторите попытку через %d секунд.</td></tr><tr><td>400</td><td>SESSION_TOO_FRESH_%d</td><td>Эта сессия была создана менее 24 часов назад, повторите попытку через %d секунд.</td></tr><tr><td>400</td><td>SRP_ID_INVALID</td><td>Указан недействительный SRP ID.</td></tr><tr><td>400</td><td>USERS_TOO_MUCH</td><td>Превышено максимальное количество пользователей (например, при создании чата).</td></tr><tr><td>403</td><td>USER_CHANNELS_TOO_MUCH</td><td>Один из пользователей, которых вы попытались добавить, уже состоит в слишком большом числе каналов и супергрупп.</td></tr><tr><td>400</td><td>USER_NOT_MUTUAL_CONTACT</td><td>Указанный пользователь не является взаимным контактом.</td></tr><tr><td>403</td><td>USER_PRIVACY_RESTRICTED</td><td>Настройки приватности пользователя не позволяют вам это сделать.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
