---
title: "Бусты каналов и супергрупп"
original: "https://core.telegram.org/api/boost"
section: api
description: "Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, право публиковать истории, — выдавая им бусты."
layout: layout.njk
---

# Бусты каналов и супергрупп

Пользователи [Telegram Premium](/api/premium/) могут открывать любимым каналам и супергруппам дополнительные возможности — например, право публиковать [истории](/api/stories/), — выдавая им **бусты**.

Набирая бусты, каналы и супергруппы повышают уровень, и на каждом уровне им становятся доступны новые возможности.

Кроме того, администраторы каналов могут получить ещё больше бустов, запустив [розыгрыш »](/api/giveaways/).

Максимально возможный уровень буста для канала задаётся в ключе конфигурации [boosts\_channel\_level\_max](/api/config/#boosts-channel-level-max).

Схема:

```
myBoost#c448415c flags:# slot:int peer:flags.0?Peer date:int expires:int cooldown_until_date:flags.1?int = MyBoost;

premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;


prepaidGiveaway#b2539d54 id:long months:int quantity:int date:int = PrepaidGiveaway;

premium.boostsStatus#4959427a flags:# my_boost:flags.2?true level:int current_level_boosts:int boosts:int gift_boosts:flags.4?int next_level_boosts:flags.0?int premium_audience:flags.1?StatsPercentValue boost_url:string prepaid_giveaways:flags.3?Vector<PrepaidGiveaway> my_boost_slots:flags.2?Vector<int> = premium.BoostsStatus;


boost#4b3e14d6 flags:# gift:flags.1?true giveaway:flags.2?true unclaimed:flags.3?true id:string user_id:flags.0?long giveaway_msg_id:flags.2?int date:int expires:int used_gift_slug:flags.4?string multiplier:flags.5?int stars:flags.6?long = Boost;

premium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

messageActionBoostApply#cc02aa6d boosts:int = MessageAction;
messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;

---functions---

premium.getMyBoosts#0be77b4a = premium.MyBoosts;
premium.applyBoost#6b7da746 flags:# slots:flags.0?Vector<int> peer:InputPeer = premium.MyBoosts;

premium.getBoostsStatus#042f1f61 peer:InputPeer = premium.BoostsStatus;

premium.getUserBoosts#39854d1f peer:InputPeer user_id:InputUser = premium.BoostsList;

premium.getBoostsList#60f67660 flags:# gifts:flags.0?true peer:InputPeer offset:string limit:int = premium.BoostsList;
```

[@term:boost slot] У каждого пользователя есть определённое количество слотов для бустов (`boost slot` — ячейка, которую можно закрепить за одним каналом или супергруппой, отдав ему тем самым один буст), которые он может раздать каналам и супергруппам: точное их число зависит от того, куплена подписка [Premium](/api/premium/) самостоятельно или получена в подарок, и его можно узнать методом [premium.getMyBoosts](/method/premium.getMyBoosts/) — вместе со сведениями о каналах и супергруппах, занимающих каждый из слотов, если такие есть.

[Подарок подписки Telegram Premium](/api/premium/#gifting-telegram-premium) другому пользователю создаёт для нас [boosts\_per\_sent\_gift](/api/config/#boosts-per-sent-gift) новых слотов для бустов, а для получателя — один слот.

Чтобы отдать часть своих слотов каналу или супергруппе, используйте [premium.applyBoost](/method/premium.applyBoost/).

Если у текущей учётной записи нет подписки [Telegram Premium](/api/premium/), будет возвращена ошибка `PREMIUM_ACCOUNT_REQUIRED`.  
RPC-ошибка `BOOST_NOT_MODIFIED` возвращается при вызове любого из этих двух методов, если пользователь уже бустит указанный канал или супергруппу теми же самыми слотами.

Закрепив слот за каналом или супергруппой, пользователь некоторое время не сможет перенести этот слот на другой канал или супергруппу: длительность паузы указана в поле [myBoost](/constructor/myBoost/).`cooldown_until_date`. Пока пауза не истекла, метод вернёт ошибку 420 `FLOOD_WAIT_X` с числом секунд, оставшихся до момента, когда можно будет забустить другой канал или супергруппу.

Пользователи также могут вызвать [premium.getBoostsStatus](/method/premium.getBoostsStatus/), чтобы получить текущий статус бустов канала или супергруппы в виде конструктора [premium.boostsStatus](/constructor/premium.boostsStatus/); подробности смотрите на [странице конструктора](/constructor/premium.boostsStatus/).

Количество бустов, которое мы в данный момент отдали каналу или супергруппе, также видно в [channelFull](/constructor/channelFull/).`boosts_applied`.

Администраторы канала или супергруппы могут вызвать [premium.getBoostsList](/method/premium.getBoostsList/), чтобы получить список пользователей, бустящих канал или супергруппу в данный момент, и [premium.getUserBoosts](/method/premium.getUserBoosts/) — чтобы узнать о бустах, отданных каналу или супергруппе конкретным пользователем.

Буст канала или супергруппы порождает (не сразу, а максимум через 15 секунд, чтобы можно было сгруппировать повторные бусты) сообщение [messageService](/constructor/messageService/) с действием [messageActionBoostApply](/constructor/messageActionBoostApply/), которое рассылается всем пользователям (в супергруппах) или только отправителю (в каналах); поле `from_id` при этом равно отправителю бустов.

### Возможности

#### Публикация историй от имени канала или супергруппы

С каждым бустом каналы и супергруппы получают право публиковать в ленты историй своих подписчиков ещё по 1 истории в день.

```
inputPeerChannel#27bcbbfc channel_id:long access_hash:long = InputPeer;

messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;

---functions---

stories.getChatsToSend#a56a8b60 = messages.Chats;
```

Всё работает точно так же, как при [публикации историй от имени пользователя](/api/stories/#posting-stories), с единственным отличием: клиенты должны передавать в [stories.canSendStory](/method/stories.canSendStory/), [stories.sendStory](/method/stories.sendStory/) и во все остальные методы работы с историями подходящий [inputPeerChannel](/constructor/inputPeerChannel/) вместо [inputPeerSelf](/constructor/inputPeerSelf/); подробности смотрите в [основной документации »](/api/stories/#posting-stories).

Используйте [stories.getChatsToSend](/method/stories.getChatsToSend/), чтобы получить список каналов и супергрупп, в которых пользователь может публиковать истории; при этом перед загрузкой истории по-прежнему обязательно вызывать [stories.canSendStory](/method/stories.canSendStory/), чтобы убедиться, что не достигнут какой-либо другой лимит, как описано в [основной документации »](/api/stories/#posting-stories).

#### Индикатор бустов у сообщений супергруппы

Только во входящих сообщениях супергруппы от неанонимных участников поле [message](/constructor/message/).`from_boosts_applied` содержит число бустов, отданных автором сообщения этой супергруппе.  
Этот счётчик следует показывать в интерфейсе, в шапке сообщения.  
Учтите, что для неанонимных _исходящих_ сообщений супергруппы значение [message](/constructor/message/).`from_boosts_applied` следует локально переопределять в соответствии с текущим значением [channelFull](/constructor/channelFull/).`boosts_applied` — так оно останется верным даже для сообщений, отправленных текущим пользователем до того, как он забустил супергруппу (или после того, как срок буста истёк либо число бустов изменилось); для входящих сообщений от других пользователей это значение обновлять не следует, даже если их бусты изменились.

#### Автоперевод в канале

Достигнув как минимум уровня бустов, указанного в [параметре конфигурации `channel_autotranslation_level_min`](/api/config/#channel-autotranslation-level-min), каналы получают возможность включить [автоперевод для всех пользователей »](/api/translation/#autotranslation-for-channels).

#### Смена акцентного цвета сообщений

Достигнув как минимум уровня бустов, указанного в поле `channel_min_level` конструктора [help.peerColorOption](/constructor/help.peerColorOption/) для выбранной палитры, каналы (и только они) получают возможность менять свою [акцентную палитру сообщений »](/api/colors/).

#### Смена акцентного эмодзи сообщений

Достигнув как минимум уровня бустов, указанного в [параметре конфигурации `channel_bg_icon_level_min`](/api/config/#channel-bg-icon-level-min), каналы (и только они) получают возможность менять эмодзи, используемый в [акцентной палитре сообщений »](/api/colors/).

#### Смена акцентного цвета и эмодзи профиля

Достигнув как минимум уровня бустов, указанного в параметрах конфигурации [`channel_profile_bg_icon_level_min` »](/api/config/#channel-profile-bg-icon-level-min)/[`group_profile_bg_icon_level_min` »](/api/config/#group-profile-bg-icon-level-min), и уровня бустов, указанного в поле `channel_min_level`/`group_min_level` конструктора [help.peerColorOption](/constructor/help.peerColorOption/) для выбранной палитры, каналы и супергруппы получают возможность менять эмодзи и цвет, используемые в [акцентной палитре профиля »](/api/colors/).

#### Установка обоев

Достигнув как минимум уровня бустов, указанного в параметрах конфигурации [`channel_wallpaper_level_min` »](/api/config/#channel-wallpaper-level-min)/[`group_wallpaper_level_min` »](/api/config/#group-wallpaper-level-min), каналы и супергруппы получают возможность задать [заливочные обои канала или супергруппы, подробности здесь »](/api/wallpapers/#channel-and-supergroup-wallpapers).  
Достигнув как минимум уровня бустов, указанного в параметрах конфигурации [`channel_custom_wallpaper_level_min` »](/api/config/#channel-custom-wallpaper-level-min)/[`group_custom_wallpaper_level_min` »](/api/config/#group-custom-wallpaper-level-min), каналы и супергруппы получают возможность задать любые пользовательские [обои](/api/wallpapers/), а не только [заливочные обои канала или супергруппы, подробности здесь »](/api/wallpapers/).

#### Установка пользовательского эмодзи-статуса

Достигнув как минимум уровня бустов, указанного в параметрах конфигурации [`channel_emoji_status_level_min` »](/api/config/#channel-emoji-status-level-min)/[`group_emoji_status_level_min` »](/api/config/#group-emoji-status-level-min), каналы и супергруппы получают возможность менять свой [эмодзи-статус »](/api/emoji-status/).

#### Обход медленного режима и ограничений чата

```
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

---functions---

channels.setBoostsToUnblockRestrictions#ad399cee channel:InputChannel boosts:int = Updates;
```

[@term:slow mode] Администраторы супергруппы, обладающие [правом ban\_users »](/constructor/chatAdminRights/), могут разрешить пользователям, отдавшим группе определённое количество бустов, обходить [медленный режим »](/method/channels.toggleSlowMode/) (`slow mode` — ограничение, при котором участник может отправлять сообщения не чаще заданного интервала) и [другие »](/api/rights/#default-rights) ограничения супергруппы; делается это методом [channels.setBoostsToUnblockRestrictions](/method/channels.setBoostsToUnblockRestrictions/).

Требуемое количество бустов указывается в параметре `boosts` (от 1 до 8; значение 0 отключает возможность) и возвращается в поле [channelFull](/constructor/channelFull/).`boosts_unrestrict`.

#### Установка набора пользовательских эмодзи для супергрупп

```
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

channelAdminLogEventActionChangeEmojiStickerSet#46d840ab prev_stickerset:InputStickerSet new_stickerset:InputStickerSet = ChannelAdminLogEventAction;

---functions---

channels.setEmojiStickers#3cd930b7 channel:InputChannel stickerset:InputStickerSet = Bool;
```

[@term:custom emoji stickerset] Достигнув как минимум уровня бустов, указанного в [параметре конфигурации `group_emoji_stickers_level_min` »](/api/config/#group-emoji-stickers-level-min), супергруппы получают возможность привязать [набор пользовательских эмодзи »](/api/custom-emoji/) (`custom emoji stickerset` — набор стикеров, которые используются как эмодзи внутри сообщений), доступный всем участникам группы (в том числе тем, у кого нет подписки [Premium](/api/premium/)!) для сообщений, отправляемых в этой группе.

Эта возможность — аналог функции набора стикеров супергруппы, доступной через [channels.setStickers](/method/channels.setStickers/), но для наборов пользовательских эмодзи.

Вызовите [channels.setEmojiStickers](/method/channels.setEmojiStickers/), чтобы выбрать набор пользовательских эмодзи, привязываемый к супергруппе; он будет доступен пользователям в поле [channelFull](/constructor/channelFull/).`emojiset`, и при выборе пользовательского эмодзи ему следует отдавать предпочтение. После вызова этого метода в [журнал действий администраторов](/api/recent-actions/) попадёт событие [channelAdminLogEventActionChangeEmojiStickerSet](/constructor/channelAdminLogEventActionChangeEmojiStickerSet/).

#### Неограниченная расшифровка голосовых сообщений в супергруппах

Достигнув как минимум уровня бустов, указанного в [параметре конфигурации `group_transcribe_level_min` »](/api/config/#group-transcribe-level-min), участники супергруппы без подписки [Premium](/api/premium/) получают возможность [расшифровывать любое голосовое сообщение](/api/transcribe/), не расходуя свою бесплатную квоту на расшифровку.

#### Отключение рекламы в канале

```
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

---functions---

channels.restrictSponsoredMessages#9ae91519 channel:InputChannel restricted:Bool = Updates;
```

[@term:sponsored messages] Достигнув как минимум уровня бустов, указанного в [параметре конфигурации `channel_restrict_sponsored_level_min` »](/api/config/#channel-restrict-sponsored-level-min), владельцы канала могут отключить в нём рекламу (`sponsored messages` — рекламные сообщения, которые Telegram сам показывает в каналах) для всех пользователей с помощью метода [channels.restrictSponsoredMessages](/method/channels.restrictSponsoredMessages/).

Если реклама в канале отключена, будет установлен флаг [channelFull](/constructor/channelFull/).`restricted_sponsored` (виден только владельцам).
