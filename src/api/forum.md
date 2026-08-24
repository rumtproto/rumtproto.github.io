---
title: "Темы форума"
original: "https://core.telegram.org/api/forum"
section: api
description: "Telegram позволяет создавать форумы с несколькими независимыми темами."
layout: layout.njk
---

# Темы форума

Telegram позволяет создавать форумы с несколькими независимыми темами.

Боты тоже могут использовать темы, если это включено через [@botfather](https://t.me/botfather).

### Форумы в группах

```
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

---functions---

channels.createChannel#91006707 flags:# broadcast:flags.0?true megagroup:flags.1?true for_import:flags.3?true forum:flags.5?true title:string about:string geo_point:flags.2?InputGeoPoint address:flags.2?string ttl_period:flags.4?int = Updates;

channels.toggleForum#3ff75734 channel:InputChannel enabled:Bool tabs:Bool = Updates;
```

Форумы можно создать двумя способами: вызвать [channels.createChannel](/method/channels.createChannel/) с установленными флагами `megagroup` и `forum` либо превратить уже существующую [супергруппу](/api/channel/) в форум методом [channels.toggleForum](/method/channels.toggleForum/) с `enabled=true`.  
Если это [обычная группа](/api/channel/#basic-groups), её следует [повысить до супергруппы](/api/channel/#migration), прежде чем превращать в форум.

Форум можно преобразовать и обратно в [супергруппу](/api/channel/) — тем же методом [channels.toggleForum](/method/channels.toggleForum/) с `enabled=false`.

Учтите, что метод [channels.toggleForum](/method/channels.toggleForum/) может вызывать только администратор с правами владельца.

У форумов установлен флаг [channel](/constructor/channel/).`forum`, а общение ведётся в отдельных [темах форума](#forum-topics).

Создавать, изменять и удалять темы группового форума могут только пользователи с [правами администратора `manage_topics`](/api/rights/).

### Форумы у ботов

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
```

[@term:Threaded mode] Боты тоже могут вести себя как форумы, если через [@botfather](https://t.me/botfather) включён **Threaded mode** (режим тредов — переписка с ботом делится на отдельные темы); этот режим особенно полезен для [ИИ-ботов »](/api/bots/ai/).

Примечание: за эту возможность взимается дополнительная комиссия с покупок за Telegram Stars — как описано в [разделе 6.2.6](https://telegram.org/tos/bot-developers#6-2-6-enabling-topics-in-private-chats) наших Условий для разработчиков ботов.

У ботов с включённым режимом тредов установлен флаг [user](/constructor/user/).`bot_forum_view`, а общение ведётся в отдельных [темах форума](#forum-topics).

Бот сможет создавать, изменять и удалять [темы форума бота »](#forum-topics) в чатах с пользователями с помощью методов, [перечисленных ниже »](#forum-topics).

Если у бота установлен флаг [user](/constructor/user/).`bot_forum_can_manage_topics`, то создавать, изменять и удалять темы форума бота в личном чате с ботом смогут и сами пользователи — так, как описано ниже; этим флагом управляет параметр «Disallow users to create new threads» в [@botfather](https://t.me/botfather).

Примечание: хотя API всегда позволяет пользователям отправлять сообщения без темы (они попадают в тему «General») независимо от значения флага [user](/constructor/user/).`bot_forum_can_manage_topics` у бота, графическим клиентам следует запрещать пользователю отправку сообщений без темы, если у бота установлен флаг [user](/constructor/user/).`bot_forum_can_manage_topics`: в этом случае перед отправкой или пересылкой сообщений необходимо сначала создать новую тему вызовом [messages.createForumTopic](/method/messages.createForumTopic/), а сообщения следует отправлять уже во вновь созданную тему.  
При этом интерфейс темы «General» следует заменить интерфейсом [просмотра в виде сообщений »](#view-as-messages), но всегда показывать закреплённую внизу подсказку «Type any message to create a new thread», поясняющую пользователю, что отправка нового сообщения в тему «General» на самом деле создаст новую тему и отправит это сообщение туда.

И наоборот, если флаг [user](/constructor/user/).`bot_forum_can_manage_topics` **не** установлен, пользователи не могут создавать, изменять и удалять темы форума бота (попытка приведёт к RPC-ошибке `BOT_FORUM_CREATE_FORBIDDEN`), и клиенту следует разрешать отправку сообщений в тему «General».

### Темы форума

```
forumTopic#fcdad815 flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int unread_poll_votes_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
```

В групповых форумах и форумах ботов может быть несколько тем, в которых общаются пользователи.

Тема имеет название (`title`) и значок: значком может быть [пользовательский эмодзи](/api/custom-emoji/), заданный полем `icon_emoji_id`, либо — если `icon_emoji_id` не задан — стандартный значок чата, залитый цветом из поля `icon_color`.  
Тему можно временно закрыть (флаг `closed`), запретив тем самым отправку в неё новых сообщений.  
Кроме того, тему «General» (и только её) можно ещё и скрыть — флагом `hidden`.

Учтите, что пользователи [Telegram Premium](/api/premium/) могут передать в `icon_emoji_id` любой пользовательский эмодзи, тогда как остальным доступны только эмодзи из набора [inputStickerSetEmojiDefaultTopicIcons](/constructor/inputStickerSetEmojiDefaultTopicIcons/).  
Если используется стандартный значок чата, его цвет нельзя изменить после создания темы.

#### Управление темами

```
forumTopic#fcdad815 flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int unread_poll_votes_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
forumTopicDeleted#023f109b id:int = ForumTopic;

inputStickerSetEmojiDefaultTopicIcons#44c1f8e9 = InputStickerSet;

messageActionTopicCreate#0d999256 flags:# title_missing:flags.1?true title:string icon_color:int icon_emoji_id:flags.0?long = MessageAction;
messageActionTopicEdit#c0944820 flags:# title:flags.0?string icon_emoji_id:flags.1?long closed:flags.2?Bool hidden:flags.3?Bool = MessageAction;

updatePinnedForumTopic#683b2c52 flags:# pinned:flags.0?true peer:Peer topic_id:int = Update;
updatePinnedForumTopics#def143d0 flags:# peer:Peer order:flags.0?Vector<int> = Update;

updateDeleteChannelMessages#c32d5b12 channel_id:long messages:Vector<int> pts:int pts_count:int = Update;
updateDeleteMessages#a20db0e5 messages:Vector<int> pts:int pts_count:int = Update;

---functions---

messages.createForumTopic#2f98c3d5 flags:# title_missing:flags.4?true peer:InputPeer title:string icon_color:flags.0?int icon_emoji_id:flags.3?long random_id:long send_as:flags.2?InputPeer = Updates;
messages.editForumTopic#cecc1134 flags:# peer:InputPeer topic_id:int title:flags.0?string icon_emoji_id:flags.1?long closed:flags.2?Bool hidden:flags.3?Bool = Updates;

messages.deleteTopicHistory#d2816f10 peer:InputPeer top_msg_id:int = messages.AffectedHistory;

messages.updatePinnedForumTopic#175df251 peer:InputPeer topic_id:int pinned:Bool = Updates;
messages.reorderPinnedForumTopics#0e7841f0 flags:# force:flags.0?true peer:InputPeer order:Vector<int> = Updates;
```

Все перечисленные выше методы изменения тем могут вызывать только пользователи и боты с [правами администратора `manage_topics`](/api/rights/) (для [групповых форумов »](#group-forums)), сами боты (для [форумов ботов »](#bot-forums)) либо любой пользователь (для [форумов ботов »](#bot-forums), если у бота установлен флаг [user](/constructor/user/).`bot_forum_can_manage_topics`).

Темы создаются методом [messages.createForumTopic](/method/messages.createForumTopic/), а изменяются методом [messages.editForumTopic](/method/messages.editForumTopic/): эти действия порождают сервисные сообщения [messageActionTopicCreate](/constructor/messageActionTopicCreate/) и [messageActionTopicEdit](/constructor/messageActionTopicEdit/).

Все темы, кроме темы «General», можно удалить вызовом [messages.deleteTopicHistory](/method/messages.deleteTopicHistory/) с указанием ID темы.  
Для [форумов ботов »](#bot-forums) этот метод может вызывать как сам бот, так и (если у бота установлен флаг [user](/constructor/user/).`bot_forum_can_manage_topics`) пользователь, который с ним переписывается.

Отдельного обновления об удалении темы не существует; вместо этого удаление доводится до клиентов (включая ботов) двумя взаимодополняющими способами.

Во-первых, удаление темы удаляет **все** её сообщения, в том числе сервисное сообщение [messageActionTopicCreate](/constructor/messageActionTopicCreate/), которым тема была создана (его `id` совпадает с самим ID темы, см. [ниже »](#interacting-within-topics)).  
Эти удаления доставляются как обычные обновления об удалении сообщений: [updateDeleteChannelMessages](/constructor/updateDeleteChannelMessages/) — для [групповых форумов »](#group-forums) (то есть когда форум — это [канал или супергруппа](/api/channel/)), либо [updateDeleteMessages](/constructor/updateDeleteMessages/) — для [форумов ботов »](#bot-forums) (то есть когда форум размещён в личном чате с ботом и потому определяется пиром [user](/constructor/user/)).  
Если среди ID удалённых сообщений оказалось корневое сообщение темы (сообщение, чей `id` равен ID темы), клиентам и ботам следует считать удалённой всю тему целиком.

Во-вторых, при обновлении состояния одной или нескольких тем — например, после получения описанных выше обновлений об удалении сообщений или после получения [updatePinnedForumTopic](/constructor/updatePinnedForumTopic/) для неизвестной темы — клиенты запрашивают их заново методом [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/): в ответе для каждой более не существующей темы будет содержаться конструктор [forumTopicDeleted](/constructor/forumTopicDeleted/) (вместо [forumTopic](/constructor/forumTopic/)), что подтверждает удаление.

Темы можно закреплять и откреплять методом [messages.updatePinnedForumTopic](/method/messages.updatePinnedForumTopic/), при этом порождаются обновления [updatePinnedForumTopic](/constructor/updatePinnedForumTopic/) или [updatePinnedForumTopics](/constructor/updatePinnedForumTopics/).  
Для изменения порядка закреплённых тем используйте [messages.reorderPinnedForumTopics](/method/messages.reorderPinnedForumTopics/).  
В одном форуме можно закрепить не более `topics_pinned_limit` тем — это значение задаётся [параметрами конфигурации клиента »](/api/config/#client-configuration).

#### Получение списка тем

```
messages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;

---functions---

messages.getForumTopics#3ba47bff flags:# peer:InputPeer q:flags.0?string offset_date:int offset_id:int offset_topic:int limit:int = messages.ForumTopics;
messages.getForumTopicsByID#af0a4a08 peer:InputPeer topics:Vector<int> = messages.ForumTopics;
```

Чтобы получить список тем форума, используйте [messages.getForumTopics](/method/messages.getForumTopics/); этим же методом можно искать темы по названию.  
Чтобы получить сведения об одной или нескольких темах по их ID, используйте [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/).

У сообщений и обновлений из тем форума установлен флаг `top_msg_id`, содержащий ID темы (за исключением темы «General»).

#### Взаимодействие внутри тем

```
messageActionTopicCreate#0d999256 flags:# title_missing:flags.1?true title:string icon_color:int icon_emoji_id:flags.0?long = MessageAction;

forumTopic#fcdad815 flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int unread_poll_votes_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
forumTopicDeleted#023f109b id:int = ForumTopic;

inputReplyToMessage#3bd4b7c2 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int poll_option:flags.7?bytes = InputReplyTo;
```

В каждом форуме есть неудаляемая тема «General» с `id=1`; у остальных тем ID другие — они равны ID сервисного сообщения [messageActionTopicCreate](/constructor/messageActionTopicCreate/), которым была создана тема.

Чтобы отправить сообщение в тему «General», просто вызывайте [messages.sendMessage](/method/messages.sendMessage/) как обычно, словно вы пишете в обыкновенную супергруппу.  
А темы с `id != 1` — это просто [тред сообщений](/api/threads/) того сервисного сообщения [messageActionTopicCreate](/constructor/messageActionTopicCreate/), которым была создана эта тема.  
Это означает, что клиенту следует обрабатывать темы так же, как [треды сообщений](/api/threads/).  
Чтобы отправить сообщение в такую тему, передайте ID темы в параметре `reply_to_msg_id` конструктора [inputReplyToMessage](/constructor/inputReplyToMessage/), который передаётся в `reply_to` при вызове [messages.sendMessage](/method/messages.sendMessage/), [messages.sendMedia](/method/messages.sendMedia/) и других подобных методов.

Чтобы ответить на сообщение внутри темы, передайте ID сообщения, на которое даётся ответ, в поле [inputReplyToMessage](/constructor/inputReplyToMessage/).`reply_to_msg_id`, а ID темы — в поле [inputReplyToMessage](/constructor/inputReplyToMessage/).`top_msg_id`; последнее не нужно, если ответ даётся на сообщение в теме «General».  
Обратите внимание: при ответе на сообщения в теме поле [inputReplyToMessage](/constructor/inputReplyToMessage/).`top_msg_id` обязано содержать ID темы **тогда и только тогда**, когда ответ даётся на сообщения в [темах форума](/api/forum/#forum-topics), отличных от темы «General» (то есть `reply_to_msg_id` задан, при этом `reply_to_msg_id != topicID` и `topicID != 1`): благодаря этому, если сообщение, на которое даётся ответ, будет удалено до завершения выполнения метода, значение из этого поля позволит отправить сообщение в нужную тему, а не в «General».  
Учтите также, что раз [треды сообщений](/api/threads/) не могут содержать вложенных тредов, то и темы (кроме темы «General») не могут иметь собственных тредов — а значит, ответы на сообщения внутри тем не порождают новых тредов.

#### Просмотр в виде сообщений

```
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

updateChannelViewForumAsMessages#07b68920 channel_id:long enabled:Bool = Update;

---functions---

channels.toggleViewForumAsMessages#9738bb15 channel:InputChannel enabled:Bool = Updates;
```

Применимо только к форумам-супергруппам.

[@term:View as messages] Пользователи также могут включить отображение сообщений из всех тем так, будто они отправлены в обычную группу, — для этого в клиенте есть локальная настройка «View as messages» («Просмотр в виде сообщений»).  
Эта настройка действует только для текущей учётной записи и синхронизируется с другими активными сессиями методом [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/); вызов этого метода изменяет значение флага `view_forum_as_messages` в [channelFull](/constructor/channelFull/) или [dialog](/constructor/dialog/) и порождает обновление [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

#### Интерфейс форума: вкладки или список

```
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

---functions---

channels.toggleForum#3ff75734 channel:InputChannel enabled:Bool tabs:Bool = Updates;
```

Применимо только к форумам-супергруппам.

Форумы-супергруппы могут использовать для выбора тем либо интерфейс со вкладками, либо интерфейс со списком — в зависимости от значения флага `forum_tabs` конструктора [channel](/constructor/channel/).

Переключить этот флаг можно методом [channels.toggleForum](/method/channels.toggleForum/), передав `enabled=true` и `tabs=true|false`, чтобы соответственно включить или отключить интерфейс со вкладками.

### Монофорумы

[@term:monoforum] Монофорумы (`monoforum`) — особая разновидность форумов, на которой построены личные сообщения в каналы.

Хотя в API их иногда называют «монофорумами», по устройству они ближе к API избранных сообщений: полная документация по личным сообщениям в каналы — [здесь »](/api/monoforum/).
