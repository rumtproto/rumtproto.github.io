---
title: "Треды сообщений"
original: "https://core.telegram.org/api/threads"
section: api
description: "Telegram позволяет комментировать пост канала или произвольное сообщение супергруппы — это делается с помощью тредов сообщений (thread — ветка обсуждения, объединяющая исходное…"
layout: layout.njk
---

# Треды сообщений

[@term:thread] Благодаря тредам сообщений (`thread` — ветка обсуждения, объединяющая исходное сообщение и все ответы на него) Telegram позволяет комментировать [пост канала](/api/channel/) или обычное [сообщение супергруппы](/api/channel/).

### Треды сообщений

Схема:

```
messageReplyHeader#1b97dd66 flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int poll_option:flags.12?bytes = MessageReplyHeader;

messageReplies#83d60fc2 flags:# comments:flags.0?true replies:int replies_pts:int recent_repliers:flags.1?Vector<Peer> channel_id:flags.0?long max_id:flags.2?int read_max_id:flags.3?int = MessageReplies;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

---functions---

messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

Треды обычно создаются автоматически при ответе на любое сообщение в группе.  
Например, все ответы на сообщение с ID `420` относятся к треду с ID `420`, уникальным в пределах этой группы; ID треда передаётся в поле `reply_to_top_id` конструктора [messageReplyHeader](/constructor/messageReplyHeader/), лежащего в `reply_to`, — вместе с `reply_to_msg_id`, если это ответ на сообщение внутри треда.  
Ответы на сообщения в треде входят в тот же тред и не порождают новых.

[@term:pts] Когда из группы приходит [сообщение](/constructor/message/), которое одновременно возглавляет тред (сообщение с ID `420`), необязательное поле `replies` содержит конструктор [messageReplies](/constructor/messageReplies/): в нём указаны ID сообщения и [PTS](/api/updates/) (счётчик состояния, по которому клиент отслеживает применённые обновления) последнего ответа в треде, ID последнего прочитанного ответа в треде и общее число ответов.

Ответы в треде можно также получить вручную методом [messages.search](/method/messages.search/), передав ID треда в параметре `top_msg_id`.

### Комментарии к постам канала

Тот же конструктор [messageReplies](/constructor/messageReplies/), описанный выше, приходит и в постах каналов, но описывает уже блок комментариев к конкретному посту; подробнее [здесь »](/api/discussion/).
