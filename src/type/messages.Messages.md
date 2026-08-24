---
title: "messages.Messages"
original: "https://core.telegram.org/type/messages.Messages"
section: ref
kind: type
description: "Объект содержит информацию о списке сообщений и вспомогательные данные."
layout: layout.njk
---

# messages.Messages

Объект содержит информацию о списке сообщений и вспомогательные данные.

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;

---functions---

messages.getMessages#63c66506 id:Vector<InputMessage> = messages.Messages;
messages.getHistory#4423e6c5 peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.searchGlobal#4bc6589a flags:# broadcasts_only:flags.1?true groups_only:flags.2?true users_only:flags.3?true folder_id:flags.0?int q:string filter:MessagesFilter min_date:int max_date:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;
messages.getUnreadMentions#f107e790 flags:# peer:InputPeer top_msg_id:flags.0?int offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.getRecentLocations#702a40e0 peer:InputPeer limit:int hash:long = messages.Messages;
messages.getScheduledHistory#f516760b peer:InputPeer hash:long = messages.Messages;
messages.getScheduledMessages#bdbb0464 peer:InputPeer id:Vector<int> = messages.Messages;
messages.getReplies#22ddd30c peer:InputPeer msg_id:int offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.getUnreadReactions#bd7f90ac flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.searchSentMedia#107e31a0 q:string filter:MessagesFilter limit:int = messages.Messages;
messages.getSavedHistory#998ab009 flags:# parent_peer:flags.0?InputPeer peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.getQuickReplyMessages#94a495c3 flags:# shortcut_id:int id:flags.0?Vector<int> hash:long = messages.Messages;

channels.getMessages#ad8c9a23 channel:InputChannel id:Vector<InputMessage> = messages.Messages;
channels.searchPosts#f2c4f24d flags:# hashtag:flags.0?string query:flags.1?string offset_rate:int offset_peer:InputPeer offset_id:int limit:int allow_paid_stars:flags.2?long = messages.Messages;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.messages">messages.messages</a></td><td>Полный список сообщений со вспомогательными данными.</td></tr><tr><td><a href="/constructor/messages.messagesSlice">messages.messagesSlice</a></td><td>Неполный список сообщений и вспомогательных данных.</td></tr><tr><td><a href="/constructor/messages.channelMessages">messages.channelMessages</a></td><td>Сообщения канала</td></tr><tr><td><a href="/constructor/messages.messagesNotModified">messages.messagesNotModified</a></td><td>Новых сообщений, соответствующих запросу, не найдено</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getMessages">messages.getMessages</a></td><td>Возвращает список сообщений по их идентификаторам.</td></tr><tr><td><a href="/method/messages.getHistory">messages.getHistory</a></td><td>Возвращает историю сообщений в пире.<br><br>Результаты упорядочены по дате (по убыванию).</td></tr><tr><td><a href="/method/messages.search">messages.search</a></td><td>Поиск сообщений.</td></tr><tr><td><a href="/method/messages.searchGlobal">messages.searchGlobal</a></td><td>Глобальный поиск сообщений и пиров</td></tr><tr><td><a href="/method/messages.getUnreadMentions">messages.getUnreadMentions</a></td><td>Получить непрочитанные сообщения, в которых нас упомянули</td></tr><tr><td><a href="/method/messages.getRecentLocations">messages.getRecentLocations</a></td><td>Получить все недавние <a href="/api/live-location">трансляции геопозиции</a>, отправленные в определённый чат: возвращает не более одного сообщения с геопозицией (<a href="/constructor/messageMediaGeoLive">messageMediaGeoLive</a>) на каждого участника чата.</td></tr><tr><td><a href="/method/messages.getScheduledHistory">messages.getScheduledHistory</a></td><td>Получить отложенные сообщения</td></tr><tr><td><a href="/method/messages.getScheduledMessages">messages.getScheduledMessages</a></td><td>Получить отложенные сообщения</td></tr><tr><td><a href="/method/messages.getReplies">messages.getReplies</a></td><td>Получить сообщения из ветки обсуждения</td></tr><tr><td><a href="/method/messages.getUnreadReactions">messages.getUnreadReactions</a></td><td>Получить непрочитанные реакции на отправленные вами сообщения</td></tr><tr><td><a href="/method/messages.searchSentMedia">messages.searchSentMedia</a></td><td>Просмотр и поиск среди недавно отправленных медиафайлов.<br>Этот метод не поддерживает постраничную выборку.</td></tr><tr><td><a href="/method/messages.getSavedHistory">messages.getSavedHistory</a></td><td>Получить <a href="/api/saved-messages">сохранённые сообщения »</a>, пересланные от определённого пира, либо сообщения из <a href="/api/monoforum">темы монофорума »</a>.</td></tr><tr><td><a href="/method/messages.getQuickReplyMessages">messages.getQuickReplyMessages</a></td><td>Получить сообщения (все или их часть) в <a href="/api/business#quick-reply-shortcuts">шаблоне быстрого ответа »</a>.</td></tr><tr><td><a href="/method/messages.getUnreadPollVotes">messages.getUnreadPollVotes</a></td><td>Получить сообщения с опросами, в которых есть <a href="/api/poll#unread-poll-votes">непрочитанные голоса »</a></td></tr><tr><td><a href="/method/messages.getPersonalChannelHistory">messages.getPersonalChannelHistory</a></td><td>Получить историю сообщений <a href="/api/profile#personal-channel">персонального канала »</a> пользователя.</td></tr><tr><td><a href="/method/channels.getMessages">channels.getMessages</a></td><td>Получить сообщения <a href="/api/channel">канала или супергруппы</a></td></tr><tr><td><a href="/method/channels.searchPosts">channels.searchPosts</a></td><td>Глобальный поиск постов в публичных <a href="/api/channel">каналах »</a> (<em>в том числе</em> в тех, участниками которых мы не являемся) по определённому хештегу <em>или</em> по полнотекстовому запросу.<br><br>Должно быть задано ровно одно из полей <code>query</code> и <code>hashtag</code>.</td></tr></tbody></table>
