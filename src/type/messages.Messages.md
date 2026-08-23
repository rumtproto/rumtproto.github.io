---
title: "messages.Messages (тип)"
original: "https://core.telegram.org/type/messages.Messages"
section: ref
kind: type
layout: layout.njk
---

# messages.Messages

*Тип из схемы TL.*

> Object contains information on list of messages with auxiliary data.

## Определение TL

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

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.messages](/constructor/messages.messages/) | Full list of messages with auxiliary data. |
| [messages.messagesSlice](/constructor/messages.messagesSlice/) | Incomplete list of messages and auxiliary data. |
| [messages.channelMessages](/constructor/messages.channelMessages/) | Channel messages |
| [messages.messagesNotModified](/constructor/messages.messagesNotModified/) | No new messages matching the query were found |

## Методы

| Method | Описание |
|---|---|
| [messages.getMessages](/method/messages.getMessages/) | Returns the list of messages by their IDs. |
| [messages.getHistory](/method/messages.getHistory/) | Returns the message history in a peer. Results are ordered by date (descending). |
| [messages.search](/method/messages.search/) | Search for messages. |
| [messages.searchGlobal](/method/messages.searchGlobal/) | Search for messages and peers globally |
| [messages.getUnreadMentions](/method/messages.getUnreadMentions/) | Get unread messages where we were mentioned |
| [messages.getRecentLocations](/method/messages.getRecentLocations/) | Get all recent [live locations](https://core.telegram.org/api/live-location) sent to a specific chat: returns up to 1 location message ([messageMediaGeoLive](/constructor/messageMediaGeoLive/)) per chat participant. |
| [messages.getScheduledHistory](/method/messages.getScheduledHistory/) | Get scheduled messages |
| [messages.getScheduledMessages](/method/messages.getScheduledMessages/) | Get scheduled messages |
| [messages.getReplies](/method/messages.getReplies/) | Get messages in a reply thread |
| [messages.getUnreadReactions](/method/messages.getUnreadReactions/) | Get unread reactions to messages you sent |
| [messages.searchSentMedia](/method/messages.searchSentMedia/) | View and search recently sent media. This method does not support pagination. |
| [messages.getSavedHistory](/method/messages.getSavedHistory/) | Fetch [saved messages »](https://core.telegram.org/api/saved-messages) forwarded from a specific peer, or fetch messages from a [monoforum topic »](https://core.telegram.org/api/monoforum). |
| [messages.getQuickReplyMessages](/method/messages.getQuickReplyMessages/) | Fetch (a subset or all) messages in a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| [messages.getUnreadPollVotes](https://core.telegram.org/method/messages.getUnreadPollVotes) | Get messages containing polls with [unread votes »](https://core.telegram.org/api/poll#unread-poll-votes) |
| [messages.getPersonalChannelHistory](https://core.telegram.org/method/messages.getPersonalChannelHistory) | Fetch the message history of a user's [personal channel »](https://core.telegram.org/api/profile#personal-channel). |
| [channels.getMessages](/method/channels.getMessages/) | Get [channel/supergroup](https://core.telegram.org/api/channel) messages |
| [channels.searchPosts](/method/channels.searchPosts/) | Globally search for posts from public [channels »](https://core.telegram.org/api/channel) (including those we aren't a member of) containing either a specific hashtag, or a full text query. Exactly one of query and hashtag must be set. |
