---
title: "Личные сообщения в каналы"
original: "https://core.telegram.org/api/monoforum"
section: api
description: "Telegram поддерживает отправку личных сообщений в каналы; этот же механизм используется, чтобы предлагать посты в канал — в том числе платные."
layout: layout.njk
---

# Личные сообщения в каналы

Telegram поддерживает отправку личных сообщений в каналы; этот же механизм используется, чтобы предлагать посты в канал — в том числе платные.

### Личные сообщения

[@term:monoforum] Хотя в API группы личных сообщений канала иногда называют «монофорумами» (`monoforum` — служебная супергруппа, привязанная к каналу, куда стекаются адресованные ему личные сообщения), на деле они гораздо больше похожи на [API избранных сообщений](/api/saved-messages/).

```
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;

inputReplyToMonoForum#69d66c45 monoforum_peer_id:InputPeer = InputReplyTo;
inputReplyToMessage#3bd4b7c2 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int poll_option:flags.7?bytes = InputReplyTo;

monoForumDialog#64407ea7 flags:# unread_mark:flags.3?true nopaid_messages_exception:flags.4?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_reactions_count:int draft:flags.1?DraftMessage = SavedDialog;

updateReadMonoForumInbox#77b0e372 channel_id:long saved_peer_id:Peer read_max_id:int = Update;
updateReadMonoForumOutbox#a4a79376 channel_id:long saved_peer_id:Peer read_max_id:int = Update;

updateDraftMessage#edfc111e flags:# peer:Peer top_msg_id:flags.0?int saved_peer_id:flags.1?Peer draft:DraftMessage = Update;
updateChannelReadMessagesContents#25f324f7 flags:# channel_id:long top_msg_id:flags.0?int saved_peer_id:flags.1?Peer messages:Vector<int> = Update;
updateDialogUnreadMark#b658f23e flags:# unread:flags.0?true peer:DialogPeer saved_peer_id:flags.1?Peer = Update;
updateMessageReactions#1e297bfa flags:# peer:Peer msg_id:int top_msg_id:flags.0?int saved_peer_id:flags.1?Peer reactions:MessageReactions = Update;

---functions---

channels.updatePaidMessagesPrice#4b12327b flags:# broadcast_messages_allowed:flags.0?true channel:InputChannel send_paid_messages_stars:long = Updates;

messages.getSavedDialogs#1e91fc99 flags:# exclude_pinned:flags.0?true parent_peer:flags.1?InputPeer offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.SavedDialogs;
messages.getSavedDialogsByID#6f6f9c96 flags:# parent_peer:flags.1?InputPeer ids:Vector<InputPeer> = messages.SavedDialogs;
messages.getSavedHistory#998ab009 flags:# parent_peer:flags.0?InputPeer peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.readSavedHistory#ba4a3b5b parent_peer:InputPeer peer:InputPeer max_id:int = Bool;
messages.deleteSavedHistory#4dc5085f flags:# parent_peer:flags.0?InputPeer peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;

messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.getSearchCounters#1bbcf300 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer top_msg_id:flags.0?int filters:Vector<MessagesFilter> = Vector<messages.SearchCounter>;
messages.getSearchResultsCalendar#6aa3f6bd flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int offset_date:int = messages.SearchResultsCalendar;
messages.getSearchResultsPositions#9c7f2f10 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int limit:int = messages.SearchResultsPositions;

messages.markDialogUnread#8c5006f8 flags:# unread:flags.0?true parent_peer:flags.1?InputPeer peer:InputDialogPeer = Bool;
messages.getDialogUnreadMarks#21202222 flags:# parent_peer:flags.0?InputPeer = Vector<DialogPeer>;

messages.updatePinnedMessage#d2aaf7ec flags:# silent:flags.0?true unpin:flags.1?true pm_oneside:flags.2?true peer:InputPeer id:int = Updates;
messages.unpinAllMessages#062dd747 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;

messages.getUnreadReactions#bd7f90ac flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.readReactions#9ec44f93 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;

channels.getMessageAuthor#ece2a0e6 channel:InputChannel id:int = User;
```

Личные сообщения каналу включаются методом [channels.updatePaidMessagesPrice](/method/channels.updatePaidMessagesPrice/), которому в параметре `channel` передаётся ID канала: тем же методом можно задать цену в [Telegram Stars](/api/stars/), которую пользователи обязаны заплатить за отправку личного сообщения каналу (или за отправку сообщения в супергруппу, см. [платные сообщения »](/api/paid-messages/)).

После включения будет выставлен флаг [channel](/constructor/channel/).`broadcast_messages_allowed`, а поле [channel](/constructor/channel/).`linked_monoforum_id` автоматически заполнится идентификатором новой особой [супергруппы](/api/channel/), которую также называют **монофорумом**.

Чтобы отправить каналу личное сообщение, пользователю достаточно написать в связанный с ним монофорум: в отличие от обычных супергрупп и форумов, вступать в него не нужно.

Монофорумы обладают следующими особенностями:

-   Поле [channel](/constructor/channel/).`id` монофорума лежит в диапазоне, отличном от диапазонов обычных супергрупп и каналов (это особенно важно при формировании и классификации соответствующего [ID для bot API, см. здесь »](/api/bots/ids/#monoforum-ids) — там описана правильная процедура для ID монофорумов).

-   Флаг [channel](/constructor/channel/).`monoforum` выставляется **только** у монофорума.

-   Флаг [channel](/constructor/channel/).`broadcast_messages_allowed` выставляется **только** у связанного канала.

-   Поле [channel](/constructor/channel/).`linked_monoforum_id` монофорума содержит ID связанного канала.

    -   Как сказано выше, поле [channel](/constructor/channel/).`linked_monoforum_id` связанного канала содержит ID соответствующего монофорума.
-   Все сообщения, отправленные в монофорум, разбиваются на «темы» — при этом переиспользуется тот же интерфейс, что и для [форумов с вкладками](/api/forum/#tabbed-or-list-based-forum-ui) (примечание: монофорумы должны использовать интерфейс форума с вкладками независимо от значения [channel](/constructor/channel/).`forum_tabs`).

    Каждая тема связана ровно с одним пользователем и содержит только историю личной переписки между этим пользователем и самим каналом.

    [@term:saved_peer_id] Темы идентифицируются полем `saved_peer_id` конструкторов [message](/constructor/message/) и [messageService](/constructor/messageService/) — это идентификатор темы, то есть пир, с перепиской которого она связана; его значение равно ID пользователя.

    Разумеется, это означает, что реализация тем монофорума **не** совпадает с реализацией тем форума (та построена на тредах). Отсюда следует и другое: в отличие от обычных форумов, монофорумы полностью поддерживают [треды сообщений](/api/threads/), поскольку для тем треды не используются.

    Обратите внимание, что поле [message](/constructor/message/).`saved_peer_id` используется и для совершенно другой возможности — [диалогов в избранных сообщениях »](/api/saved-messages/#saved-message-dialogs): в этом случае `peer_id` равно ID текущего авторизованного пользователя, а не ID монофорума.

-   Администраторы канала, **обладающие [правом manage\_direct\_messages »](/constructor/chatAdminRights/)**, могут просматривать все сообщения во всех темах монофорума и отвечать на них.

    Чтобы отправить сообщение в конкретную тему монофорума (то есть конкретному пользователю), администратор канала при вызове [messages.sendMessage](/method/messages.sendMessage/) и других методов обязан передать в `reply_to` конструктор [inputReplyToMonoForum](/constructor/inputReplyToMonoForum/), где `monoforum_peer_id` равно ID темы (он же `saved_peer_id`): у получившегося исходящего сообщения `saved_peer_id` будет равно переданному `monoforum_peer_id` (поле выставляется с одинаковым значением и у администратора, и у пользователя-получателя).

    Сообщение отправляется от имени канала, связанного с монофорумом (то есть `send_as` принудительно выставляется сервером в [channel](/constructor/channel/).`linked_monoforum_id` самого монофорума): произвольные значения `send_as` не допускаются и попросту игнорируются.

    Администраторы монофорума (только пользователи, не боты) могут вызвать [channels.getMessageAuthor](/method/channels.getMessageAuthor/), чтобы узнать настоящего отправителя сообщения, отправленного в монофорум другим администратором от имени связанного с монофорумом канала.

    Чтобы ответить на сообщение внутри темы монофорума, передайте [inputReplyToMessage](/constructor/inputReplyToMessage/) с обычным образом заполненными `reply_to_msg_id` и прочими флагами и с `monoforum_peer_id`, равным ID темы (он же `saved_peer_id`); в отличие от обычных форумов, `top_msg_id` заполнять **не** нужно.

    Для работы с монофорумами администраторам канала доступны все следующие методы.

    -   [messages.getSavedDialogs](/method/messages.getSavedDialogs/)/[messages.getSavedDialogsByID](/method/messages.getSavedDialogsByID/) с `parent_peer`, равным ID монофорума, позволяют получить список тем или его часть — темы всегда возвращаются как [monoForumDialog](/constructor/monoForumDialog/).

    Перечисленные ниже методы требуют, чтобы `parent_peer` был равен ID монофорума, а `peer` — ID темы (иначе они подействуют на избранные или обычные диалоги, а не на темы монофорума):

    -   [messages.getSavedHistory](/method/messages.getSavedHistory/) загружает сообщения из истории темы (применять его следует только в клиентах, только что прошедших авторизацию, у которых эти сообщения ещё не закешированы, — при обычной работе сообщения тем монофорума доставляются клиенту автоматически, через [обновления](/api/updates/), как обычно).
    -   [messages.readSavedHistory](/method/messages.readSavedHistory/) отмечает сообщения темы как прочитанные.
    -   [messages.deleteSavedHistory](/method/messages.deleteSavedHistory/) массово удаляет сообщения из темы.
    -   [messages.markDialogUnread](/method/messages.markDialogUnread/), [messages.getDialogUnreadMarks](/method/messages.getDialogUnreadMarks/) помечают конкретные темы монофорума как непрочитанные (и снимают такую пометку), а также позволяют получить уже проставленные пометки.
    -   [messages.getUnreadReactions](/method/messages.getUnreadReactions/), [messages.readReactions](/method/messages.readReactions/) служат для работы с реакциями.

    [messages.updatePinnedMessage](/method/messages.updatePinnedMessage/) позволяет закрепить сообщение в теме: достаточно передать ID монофорума в `peer`, а ID сообщения — в `id` (сообщение автоматически закрепляется в содержащей его теме, а не во всех темах сразу); закреплённые в теме сообщения загружаются [так, как описано здесь »](/api/pin/#getting-pinned-messages), с той разницей, что при вызове [messages.search](/method/messages.search/) `peer` обязан быть равен ID монофорума, а `saved_peer_id`\=ID темы. Чтобы открепить все сообщения в монофоруме, используйте [messages.unpinAllMessages](/method/messages.unpinAllMessages/); при желании можно выставить флаг `saved_peer_id`, чтобы открепить сообщения только внутри указанной темы.

    Для поиска сообщений внутри монофорума используются обычные методы [messages.search](/method/messages.search/), [messages.getSearchCounters](/method/messages.getSearchCounters/), [messages.getSearchResultsCalendar](/method/messages.getSearchResultsCalendar/), [messages.getSearchResultsPositions](/method/messages.getSearchResultsPositions/) с `peer`\=ID монофорума.  
    Для поиска сообщений внутри темы монофорума дополнительно выставьте `saved_peer_id` в ID темы.

    Методы [messages.getPinnedSavedDialogs](/method/messages.getPinnedSavedDialogs/), [messages.toggleSavedDialogPin](/method/messages.toggleSavedDialogPin/), [messages.reorderPinnedSavedDialogs](/method/messages.reorderPinnedSavedDialogs/) применимы только к [избранным сообщениям](/api/saved-messages/), но **не** к монофорумам.

    Администраторы получают обновления [updateReadMonoForumInbox](/constructor/updateReadMonoForumInbox/)/[updateReadMonoForumOutbox](/constructor/updateReadMonoForumOutbox/) вместо [updateReadChannelInbox](/constructor/updateReadChannelInbox/)/[updateReadChannelOutbox](/constructor/updateReadChannelOutbox/).

    Кроме того, в обновлениях [updateDraftMessage](/constructor/updateDraftMessage/), [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/), [updateDialogUnreadMark](/constructor/updateDialogUnreadMark/), [updateMessageReactions](/constructor/updateMessageReactions/), приходящих от монофорумов, администраторы получают дополнительный флаг `saved_peer_id` с ID темы.

-   Рядовые пользователи могут просматривать сообщения только в собственной теме и писать только в неё.

    Чтобы отправить каналу личное сообщение, пользователю достаточно написать в связанный монофорум: в отличие от обычных супергрупп и форумов, вступать в монофорум не нужно.

    Исходящие и входящие сообщения монофорума по-прежнему идентифицируются полем `saved_peer_id`, однако при отправке сообщений в монофорум задавать [inputReplyToMonoForum](/constructor/inputReplyToMonoForum/) или [inputReplyToMessage](/constructor/inputReplyToMessage/).`monoforum_peer_id` не требуется.

    Со стороны пользователя монофорум, как и следует из названия, представляет собой форум с одной-единственной темой, поэтому при работе с API его следует рассматривать так же, как супергруппу.

    В графических клиентах интерфейс на стороне пользователя должен быть похож на интерфейс обычной переписки один на один.

    Чтобы работать с сообщениями монофорума от лица рядового пользователя, применяйте все те же методы, что и для супергрупп, а **не** варианты `messages.*Saved*`, и не задавайте ни один из перечисленных выше изменённых аргументов `saved_*` — они доступны только администраторам монофорума.

    То же касается и _некоторых_ обновлений: рядовые пользователи никогда не получат дополнительный флаг `saved_peer_id` в [updateDraftMessage](/constructor/updateDraftMessage/), [updateDialogUnreadMark](/constructor/updateDialogUnreadMark/), но **получат** его в [updateMessageReactions](/constructor/updateMessageReactions/), [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/).

    Точно так же рядовые пользователи никогда не получат обновления [updateReadMonoForumInbox](/constructor/updateReadMonoForumInbox/)/[updateReadMonoForumOutbox](/constructor/updateReadMonoForumOutbox/) вместо [updateReadChannelInbox](/constructor/updateReadChannelInbox/)/[updateReadChannelOutbox](/constructor/updateReadChannelOutbox/)

### Платные личные сообщения

```
---functions---

channels.updatePaidMessagesPrice#4b12327b flags:# broadcast_messages_allowed:flags.0?true channel:InputChannel send_paid_messages_stars:long = Updates;
```

Владелец канала может назначить плату в [Telegram Stars](/api/stars/), которую вносят пользователи, желающие отправить ему личное сообщение.

Чтобы включить или отключить платные личные сообщения, заполните соответствующим образом поле `send_paid_messages_stars` метода [channels.updatePaidMessagesPrice](/method/channels.updatePaidMessagesPrice/): помните, что в `channel` всегда передаётся ID канала, а **не** ID связанного с ним монофорума (в отличие от платных сообщений в супергруппах и обычных форумах, где в `channel` необходимо передавать ID самой супергруппы или монофорума).

Полное описание процесса см. [здесь »](/api/paid-messages/).

### Предлагаемые посты

[@term:suggested posts] Telegram предлагает администраторам каналов мощный инструмент монетизации — **предлагаемые посты** (`suggested posts` — публикации, которые сторонний пользователь предлагает каналу, а администратор утверждает или отклоняет).

Посты можно предлагать через монофорум канала; полное описание процесса см. [здесь »](/api/suggested-posts/).

### Ссылки на монофорумы

Ссылки на монофорумы позволяют открыть чат личных сообщений (то есть монофорум), связанный с каналом, см. [подробнее о монофорумах »](/api/links/#monoforum-links).

**Примечание**: когда вы делитесь сообщениями, отправленными в монофорум, используйте [обычные ссылки на сообщения »](/api/links/#message-links) с ID монофорума, а не с ID связанного канала; то же правило действует и для всех остальных ссылок на чаты, когда в них участвует монофорум.
