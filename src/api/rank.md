---
title: "Звание"
original: "https://core.telegram.org/api/rank"
section: api
description: "Участники групповых чатов (как обычных групп, так и супергрупп) теперь могут добавить рядом со своим именем метку — звание (rank), которое показывает их должность на работе,…"
layout: layout.njk
---

# Звание

[@term:rank] Участники групповых чатов (как обычных групп, так и супергрупп) теперь могут добавить рядом со своим именем **метку** — звание (`rank`: короткая подпись, которая показывает должность на работе, специальность в учебном заведении и тому подобное).

```
channelParticipant#1bd54456 flags:# user_id:long date:int subscription_until_date:flags.0?int rank:flags.2?string = ChannelParticipant;
channelParticipantSelf#a9478a1a flags:# via_request:flags.0?true user_id:long inviter_id:long date:int subscription_until_date:flags.1?int rank:flags.2?string = ChannelParticipant;
channelParticipantCreator#2fe601d3 flags:# user_id:long admin_rights:ChatAdminRights rank:flags.0?string = ChannelParticipant;
channelParticipantAdmin#34c3bb53 flags:# can_edit:flags.0?true self:flags.1?true user_id:long inviter_id:flags.1?long promoted_by:long date:int admin_rights:ChatAdminRights rank:flags.2?string = ChannelParticipant;
channelParticipantBanned#d5f0ad91 flags:# left:flags.0?true peer:Peer kicked_by:long date:int banned_rights:ChatBannedRights rank:flags.2?string = ChannelParticipant;
channelParticipantLeft#1b03f006 peer:Peer = ChannelParticipant;

channels.channelParticipant#dfb80317 participant:ChannelParticipant chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipant;

updateChatParticipantRank#bd8367b9 chat_id:long user_id:long rank:string version:int = Update;

chatParticipant#38e79fde flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
chatParticipantCreator#e1f867b8 flags:# user_id:long rank:flags.0?string = ChatParticipant;
chatParticipantAdmin#360d5d2 flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;

chatParticipantsForbidden#8763d3e1 flags:# chat_id:long self_participant:flags.0?ChatParticipant = ChatParticipants;
chatParticipants#3cbc93f8 chat_id:long participants:Vector<ChatParticipant> version:int = ChatParticipants;

chatFull#2633421b flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions reactions_limit:flags.20?int = ChatFull;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

---functions---

messages.editChatParticipantRank#a00f32b0 peer:InputPeer participant:InputPeer rank:string = Updates;

channels.getParticipant#a0ab6cc6 channel:InputChannel participant:InputPeer = channels.ChannelParticipant;
channels.getParticipants#77ced9d0 channel:InputChannel filter:ChannelParticipantsFilter offset:int limit:int hash:long = channels.ChannelParticipants;

channels.editAdmin#9a98ad68 flags:# channel:InputChannel user_id:InputUser admin_rights:ChatAdminRights rank:flags.0?string = Updates;
```

Участники групповых чатов (как обычных групп, так и супергрупп) теперь могут добавить рядом со своим именем **метку** — чтобы показать свою должность на работе, специальность, по которой они учатся, и тому подобное.

Чтобы изменить метку, вызовите [messages.editChatParticipantRank](/method/messages.editChatParticipantRank/) со следующими параметрами:

-   `peer`: группа
-   `user_id`: пользователь, чью метку требуется изменить. Администратор с [правом администратора »](/api/rights/#admin-rights) `manage_ranks` может изменить метку любого участника.  
    Все остальные могут изменить только собственную метку, и то лишь при выполнении хотя бы одного из условий:
    -   [права чата по умолчанию](/api/rights/#banned-rights) разрешают `edit_rank` И/ИЛИ
    -   [ограничения пользователя](/api/rights/#banned-rights) разрешают `edit_rank`
-   `rank`: новая метка (не более 16 символов, без эмодзи)

Для [супергрупп](/api/channel/#supergroups) метка будет доступна в следующих местах:

-   Во флаге [message](/constructor/message/).`from_rank` всех сообщений, отправленных участниками группы
-   Во флаге [ChannelParticipant](/type/ChannelParticipant/).`rank`, который можно получить методами [channels.getParticipant](/method/channels.getParticipant/)/[channels.getParticipants](/method/channels.getParticipants/)

Для [обычных групп](/api/channel/#basic-groups) метка будет доступна в следующих местах:

-   Во флаге [ChatParticipant](/type/ChatParticipant/).`rank`, доступном в [chatFull](/constructor/chatFull/).`participants`, — [его обязательно всегда кешировать локально »](/api/channel/#basic-group-participants)
-   Изменения меток пользователей будут приходить как обновления [updateChatParticipantRank](/constructor/updateChatParticipantRank/) (только для обычных групп; супергруппам это не нужно, поскольку [message](/constructor/message/).`from_rank` всегда содержит актуальную метку)
-   Для обычных групп [message](/constructor/message/).`from_rank` **не** заполняется: вместо этого клиентам следует брать метки из [ChatParticipant](/type/ChatParticipant/).`rank` для всех участников обычной группы

У администраторов метка тоже есть, и она всегда окрашена в [цвет »](/api/colors/) пира — так их отличают от остальных участников.

Только для администраторов и создателя: если флаг `rank` не задан, клиентам следует по умолчанию показывать «Владелец» для [channelParticipantCreator](/constructor/channelParticipantCreator/) и «Администратор» для [channelParticipantAdmin](/constructor/channelParticipantAdmin/).

Менять метки администраторов супергруппы можно и методом [messages.editChatParticipantRank](/method/messages.editChatParticipantRank/), и методом [channels.editAdmin](/method/channels.editAdmin/).
