---
title: "channels.editAdmin"
original: "https://core.telegram.org/method/channels.editAdmin"
section: ref
kind: method
description: "Изменить права администратора пользователя в супергруппе или канале."
layout: layout.njk
---

# channels.editAdmin

Изменить права администратора пользователя в [супергруппе или канале](/api/channel/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.editAdmin#9a98ad68 flags:# channel:InputChannel user_id:InputUser admin_rights:ChatAdminRights rank:flags.0?string = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td><a href="/api/channel">Супергруппа или канал</a>.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор пользователя, права администратора которого нужно изменить</td></tr><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/type/ChatAdminRights">ChatAdminRights</a></td><td>Права администратора</td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Указывает роль (звание) администратора в группе — произвольная строка. Если флаг не установлен, звание остаётся без изменений.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ADMINS_TOO_MUCH</td><td>Слишком много администраторов.</td></tr><tr><td>400</td><td>ADMIN_RANK_EMOJI_NOT_ALLOWED</td><td>Ранг администратора не может содержать эмодзи.</td></tr><tr><td>400</td><td>ADMIN_RANK_INVALID</td><td>Указанный ранг администратора недействителен.</td></tr><tr><td>400</td><td>BOTS_TOO_MUCH</td><td>В этом чате или канале слишком много ботов.</td></tr><tr><td>400</td><td>BOT_CHANNELS_NA</td><td>Боты не могут изменять права администраторов.</td></tr><tr><td>400</td><td>BOT_GROUPS_BLOCKED</td><td>Этого бота нельзя добавлять в группы.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel#monoforums">Монофорумы</a> не поддерживают эту возможность.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_ADMIN_INVITE_REQUIRED</td><td>У вас нет прав на это действие.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>406</td><td>FRESH_CHANGE_ADMINS_FORBIDDEN</td><td>Вы только что назначены администратором и пока не можете добавлять или изменять других администраторов.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>403</td><td>RIGHT_FORBIDDEN</td><td>Ваши права администратора не позволяют вам это сделать.</td></tr><tr><td>400</td><td>USERS_TOO_MUCH</td><td>Превышено максимальное количество пользователей (например, при создании чата).</td></tr><tr><td>400</td><td>USER_BLOCKED</td><td>Пользователь заблокирован.</td></tr><tr><td>403</td><td>USER_CHANNELS_TOO_MUCH</td><td>Один из пользователей, которых вы попытались добавить, уже состоит в слишком большом числе каналов и супергрупп.</td></tr><tr><td>400</td><td>USER_CREATOR</td><td>Для channels.editAdmin: вы попытались изменить права администратора владельца, не будучи владельцем; для channels.leaveChannel: вы не можете покинуть этот канал, поскольку вы его создатель.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr><tr><td>400</td><td>USER_KICKED</td><td>Этот пользователь был исключён из этой супергруппы или канала.</td></tr><tr><td>403</td><td>USER_NOT_MUTUAL_CONTACT</td><td>Указанный пользователь не является взаимным контактом.</td></tr><tr><td>403</td><td>USER_PRIVACY_RESTRICTED</td><td>Настройки приватности пользователя не позволяют вам это сделать.</td></tr><tr><td>403</td><td>USER_RESTRICTED</td><td>На вас пожаловались как на спам, вы не можете создавать каналы или чаты.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
