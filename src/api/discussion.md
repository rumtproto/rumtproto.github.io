---
title: "Группы обсуждения"
original: "https://core.telegram.org/api/discussion"
section: api
description: "Группы можно привязать к каналу в качестве группы обсуждения, чтобы пользователи могли обсуждать записи."
layout: layout.njk
---

# Группы обсуждений

[Группы](/api/channel/) можно привязать к [каналу](/api/channel/) как [группу обсуждений](https://telegram.org/blog/privacy-discussions-web-bots), чтобы пользователи могли обсуждать записи.

### Комментарии к записям в канале

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;

channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;

messageReplies#83d60fc2 flags:# comments:flags.0?true replies:int replies_pts:int recent_repliers:flags.1?Vector<Peer> channel_id:flags.0?long max_id:flags.2?int read_max_id:flags.3?int = MessageReplies;

messages.discussionMessage#a6341782 flags:# messages:Vector<Message> max_id:flags.0?int read_inbox_max_id:flags.1?int read_outbox_max_id:flags.2?int unread_count:int chats:Vector<Chat> users:Vector<User> = messages.DiscussionMessage;

---functions---

channels.setDiscussionGroup#40582bb2 broadcast:InputChannel group:InputChannel = Bool;
channels.getGroupsForDiscussion#f5dad378 = messages.Chats;

messages.getDiscussionMessage#446972fd peer:InputPeer msg_id:int = messages.DiscussionMessage;
```

Привязать группу обсуждений к каналу можно методом [channels.setDiscussionGroup](/method/channels.setDiscussionGroup/).  
В клиенте группа обсуждений открывается по кнопке обсуждения в канале или через [раздел комментариев](/api/threads/) конкретной записи; кроме того, ID группы обсуждений лежит в поле `linked_chat_id` конструктора [channelFull](/constructor/channelFull/).

[@term:peer] Все сообщения, отправленные в канал, пересылаются и в привязанную группу — в поле отправителя `from_id` при этом стоит пир привязанного канала (`peer` — пир, то есть адресат: пользователь, чат или канал); там эти сообщения ещё и автоматически [закрепляются](/api/pin/).

Раздел комментариев под записью канала — это попросту [тред сообщений](/api/threads/) того сообщения канала, которое автоматически переслано в привязанную супергруппу обсуждений.  
Поэтому комментарии к отдельной записи отключаются удалением автоматически пересланного сообщения канала из группы обсуждений.

К записи в самом канале будет прикреплён конструктор [messageReplies](/constructor/messageReplies/) со сведениями о разделе комментариев, а именно:

-   `replies.channel_id` будет содержать ID привязанной супергруппы обсуждений
-   `replies.recent_repliers` будет содержать сведения о нескольких последних комментаторах конкретного треда — чтобы клиент мог показать в превью небольшой список их аватарок.
-   `replies.replies` будет содержать общее число ответов в разделе комментариев.
-   `replies.max_id` _может_ содержать ID последнего сообщения в разделе комментариев, если такое есть.
-   [@term:pts] `replies.replies_pts` _может_ содержать `pts` (счётчик состояния, монотонно растущий при каждом изменении: по нему клиент понимает, не пропустил ли он обновления) автоматически пересланного сообщения канала, с которого начался раздел комментариев.

Тот же конструктор [messageReplies](/constructor/messageReplies/) с обычным для [треда](/api/threads/) набором флагов (то есть без `channel_id` и `recent_replies`) будет присутствовать и в сообщении, автоматически пересланном в группу обсуждений, — как и у всех групповых сообщений, начинающих [тред](/api/threads/).

Чтобы получить начальные сообщения [треда](/api/threads/) автоматически пересланного сообщения канала в привязанной супергруппе обсуждений, используйте [messages.getDiscussionMessage](/method/messages.getDiscussionMessage/).

Сообщения возвращаются в обратном хронологическом порядке (то есть по убыванию ID сообщения); поэтому последним метод вернёт то самое автоматически пересланное сообщение канала, с которого начался раздел комментариев.

#### @replies

```
messageFwdHeader#4e4df4bb flags:# imported:flags.7?true saved_out:flags.11?true from_id:flags.0?Peer from_name:flags.5?string date:int channel_post:flags.2?int post_author:flags.3?string saved_from_peer:flags.4?Peer saved_from_msg_id:flags.4?int saved_from_id:flags.8?Peer saved_from_name:flags.9?string saved_date:flags.10?int psa_type:flags.6?string = MessageFwdHeader;

messageReplyHeader#1b97dd66 flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int poll_option:flags.12?bytes = MessageReplyHeader;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

updateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;
updateNewChannelMessage#62ba04d9 message:Message pts:int pts_count:int = Update;

---functions---

contacts.blockFromReplies#29a8962c flags:# delete_message:flags.0?true delete_history:flags.1?true report_spam:flags.2?true msg_id:int = Updates;

contacts.resolveUsername#725afbbc flags:# username:string referer:flags.0?string = contacts.ResolvedPeer;
```

Комментировать записи канала можно и не вступая в саму [супергруппу обсуждений](/api/discussion/), поэтому нужен какой-то способ доставлять таким пользователям уведомления об ответах в разделах комментариев.  
Для этого предусмотрено специальное имя пользователя `@replies`. Его ID для основных и тестовых адресов (endpoint) можно посмотреть в [исходниках tdlib](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3010).

Когда кто-то отвечает на наше сообщение в разделе комментариев под записью канала, а мы не состоим в группе обсуждений, клиент получит два обновления:

-   [updateNewChannelMessage](/constructor/updateNewChannelMessage/) от самой группы обсуждений, устроенное точно так же, как любое обновление из группы, в которой мы состоим:
    -   в `id` — ID ответа
    -   в `from_id` — пир того, кто нам ответил
    -   в `peer_id` — пир [группы обсуждений](/api/discussion/)
    -   в `reply_to.reply_to_msg_id` — ID нашего сообщения
    -   в `reply_to.reply_to_top_id` — [ID треда](/api/threads/).
-   [updateNewMessage](/constructor/updateNewMessage/)
    -   в `id` — ID из общей для пользователей последовательности
    -   в `from_id` — пир `@replies`
    -   в `peer_id` — наш собственный пир
    -   в `fwd_from.saved_from_msg_id` — ID ответа
    -   в `fwd_from.from_id` — пир того, кто нам ответил
    -   в `reply_to.reply_to_peer_id` — пир [группы обсуждений](/api/discussion/)
    -   в `reply_to.reply_to_msg_id` — ID нашего сообщения
    -   в `reply_to.reply_to_top_id` — [ID треда](/api/threads/)

Клиентам следует показывать сообщения от `@replies` как супергруппу, доступную только для чтения: каждый ответ — отдельным сообщением от его автора и с кнопкой «Посмотреть в чате», как у комментариев к записям канала.

Методом [contacts.blockFromReplies](/method/contacts.blockFromReplies/) можно отключить уведомления в `@replies` об ответах в тредах от определённого пользователя.

### Привязка группы обсуждений

Список администрируемых супергрупп, которые администратор канала может привязать к каналу, возвращает [channels.getGroupsForDiscussion](/method/channels.getGroupsForDiscussion/).  
Возвращённые [обычные группы](/api/channel/#basic-groups) сначала обязательно [преобразовать в супергруппы](/api/channel/#migration) — только после этого их можно назначить группой обсуждений.  
Кроме того, прежде чем привязывать супергруппу к каналу, обязательно открыть доступ к её старым сообщениям методом [channels.togglePreHistoryHidden](/method/channels.togglePreHistoryHidden/).

Назначить возвращённую супергруппу группой обсуждений можно методом [channels.setDiscussionGroup](/method/channels.setDiscussionGroup/).

Схема:

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;

messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;

---functions---

channels.setDiscussionGroup#40582bb2 broadcast:InputChannel group:InputChannel = Bool;
channels.getGroupsForDiscussion#f5dad378 = messages.Chats;

channels.togglePreHistoryHidden#eabbb94c channel:InputChannel enabled:Bool = Updates;
```

### Требование вступить в группу

```
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

---functions---

channels.toggleJoinToSend#e4cb9580 channel:InputChannel enabled:Bool = Updates;
```

Методом [channels.toggleJoinToSend](/method/channels.toggleJoinToSend/) администраторы могут потребовать, чтобы пользователь вступил в группу обсуждений, прежде чем комментировать.  
Флаг [`channel.join_to_send`](/constructor/channel/) будет выставлен соответственно, и на каждую попытку не-участника отправить сообщение в группу вернётся ошибка RPC `CHAT_GUEST_SEND_FORBIDDEN`.
