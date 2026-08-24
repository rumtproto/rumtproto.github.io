---
title: "channels.toggleViewForumAsMessages"
original: "https://core.telegram.org/method/channels.toggleViewForumAsMessages"
section: ref
kind: method
description: "Пользователи также могут отображать сообщения из всех тем форума так, как если бы они были отправлены в обычную группу, — с помощью настройки «Показывать как сообщения» в…"
layout: layout.njk
---

# channels.toggleViewForumAsMessages

Пользователи также могут отображать сообщения из всех тем [форума](/api/forum/) так, как если бы они были отправлены в обычную группу, — с помощью настройки «Показывать как сообщения» в локальном клиенте: эта настройка влияет только на текущий аккаунт и синхронизируется с другими активными сессиями с помощью этого метода.

Вызов этого метода обновит значение флага `view_forum_as_messages` в [channelFull](/constructor/channelFull/) или [dialog](/constructor/dialog/) и отправит обновление [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.toggleViewForumAsMessages#9738bb15 channel:InputChannel enabled:Bool = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Форум</td></tr><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Новое значение флага <code>view_forum_as_messages</code>.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [channelFull](/constructor/channelFull/)

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups) или [гигагруппе](/api/channel/#gigagroups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [dialog](/constructor/dialog/)

Чат

#### [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/)

Пользователи также могут выбрать отображение сообщений из всех тем так, как если бы они были отправлены в обычную группу, с помощью настройки «Показывать как сообщения» в локальном клиенте.  
Эта настройка затрагивает только текущую учётную запись и синхронизируется с другими активными сессиями методом [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/); вызов этого метода обновит значение флага `view_forum_as_messages` в [channelFull](/constructor/channelFull/) или [dialog](/constructor/dialog/) и отправит [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).
