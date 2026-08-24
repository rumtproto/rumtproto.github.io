---
title: "Упоминания и ответы"
original: "https://core.telegram.org/api/mentions"
section: api
description: "Telegram позволяет упоминать других пользователей, когда нужно срочно обсудить неотложные утиные дела, и быстро переходить к этим упоминаниям, чтобы как можно скорее их прочитать."
layout: layout.njk
---

# Упоминания и ответы

Telegram позволяет упоминать других пользователей, когда нужно срочно обсудить неотложные утиные дела, и быстро переходить к этим упоминаниям, чтобы как можно скорее их прочитать.

```
messageEntityMention#fa04579d offset:int length:int = MessageEntity;
messageEntityMentionName#dc7b1140 offset:int length:int user_id:long = MessageEntity;
inputMessageEntityMentionName#208e68c9 offset:int length:int user_id:InputUser = MessageEntity;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

channelParticipantsMentions#e04b5ceb flags:# q:flags.0?string top_msg_id:flags.1?int = ChannelParticipantsFilter;

---functions---

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

channels.getParticipants#77ced9d0 channel:InputChannel filter:ChannelParticipantsFilter offset:int limit:int hash:long = channels.ChannelParticipants;
```

[@term:message entity] Упоминания реализованы как [сущности оформления](/api/entities/) (`message entity` — служебная разметка текста сообщения: смещение, длина и тип фрагмента), передаваемые в метод [messages.sendMessage](/method/messages.sendMessage/):

-   [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/) — используется при отправке сообщений, позволяет упомянуть пользователя [прямо в тексте, даже если у него нет @username](https://t.me/botfather)
-   [messageEntityMentionName](/constructor/messageEntityMentionName/) — аналог [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/) для входящих сообщений
-   [messageEntityMention](/constructor/messageEntityMention/) — [@botfather](https://t.me/botfather) (эта сущность генерируется автоматически на стороне сервера для @username в сообщениях, вручную её указывать не нужно)

Во входящих [сообщениях](/constructor/message/), где упомянут текущий пользователь, выставлен флаг `mentioned` и присутствует один или несколько конструкторов [messageEntityMention](/constructor/messageEntityMention/) и [messageEntityMentionName](/constructor/messageEntityMentionName/).

Графические клиенты могут показывать список пользователей, которых можно упомянуть, как только пользователь начинает вводить `@` в строке ввода; для этого в [channels.getParticipants](/method/channels.getParticipants/) можно применить фильтр [channelParticipantsMentions](/constructor/channelParticipantsMentions/).  
Этот фильтр можно уточнить, передав дополнительную строку запроса `q` (всё, что пользователь ввёл после `@`); он вернёт и тех, кто не состоит в участниках, — например, когда пользователи канала пишут в [разделах комментариев к постам](/api/discussion/).

### Упоминания в диалогах

```
dialog#fc89f7f3 flags:# pinned:flags.2?true unread_mark:flags.3?true view_forum_as_messages:flags.6?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int unread_poll_votes_count:int notify_settings:PeerNotifySettings pts:flags.0?int draft:flags.1?DraftMessage folder_id:flags.4?int ttl_period:flags.5?int = Dialog;

---functions---

messages.getUnreadMentions#f107e790 flags:# peer:InputPeer top_msg_id:flags.0?int offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.readMentions#36e5bf4d flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;
```

Графическим клиентам следует показывать синий индикатор упоминания рядом со счётчиком сообщений у чатов в списке диалогов.  
Конструктор [dialog](/constructor/dialog/) содержит поле `unread_mentions_count` — по нему выделяют чаты с непрочитанными упоминаниями; сам счётчик упоминаний следует показывать внутри чата, над кнопкой `@`: повторными нажатиями на неё пользователь перемещается назад по истории упоминаний (для этого вызывается [messages.getUnreadMentions](/method/messages.getUnreadMentions/)).

Когда прочитано последнее непрочитанное упоминание или когда выполнено долгое нажатие на кнопку `@`, все упоминания в чате следует пометить прочитанными с помощью [messages.readMentions](/method/messages.readMentions/).
