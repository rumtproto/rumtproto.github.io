---
title: "Перевод сообщений"
original: "https://core.telegram.org/api/translation"
section: api
description: "Telegram позволяет переводить сообщения в чатах: пользователи Telegram Premium могут даже включить перевод переписки в реальном времени."
layout: layout.njk
---

# Перевод сообщений

Telegram позволяет переводить сообщения в чатах: пользователи [Telegram Premium](/api/premium/) могут даже включить перевод переписки в реальном времени.

```
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;

messages.translateResult#33db32f8 result:Vector<TextWithEntities> = messages.TranslatedText;


---functions---

messages.translateText#a5eec345 flags:# peer:flags.0?InputPeer id:flags.0?Vector<int> text:flags.1?Vector<TextWithEntities> to_lang:string tone:flags.2?string = messages.TranslatedText;
```

[@term:peer] Метод [messages.translateText](/method/messages.translateText/) позволяет перевести список сообщений из чата (для этого заполняются флаги `peer` — пир, то есть собеседник, группа или канал, — и `id`) либо произвольный список сообщений (для этого заполняется флаг `text`, например при переводе статей Instant View).

[@term:message entity] Метод возвращает вектор конструкторов [textWithEntities](/constructor/textWithEntities/), содержащих переведённый текст и — только для пользователей [Telegram Premium](/api/premium/) — соответствующие [сущности оформления](/api/entities/) (`message entity` — разметка вроде выделения или ссылки, привязанная к диапазону символов): то есть правильно пересчитанные для переведённого сообщения сущности **жирного** шрифта, _курсива_ и ссылок, которые соответствуют тем же сущностям в исходном сообщении.

### Перевод в реальном времени

```
userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

chatFull#2633421b flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions reactions_limit:flags.20?int = ChatFull;

channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

---functions---

messages.togglePeerTranslations#e47cb579 flags:# disabled:flags.0?true peer:InputPeer = Bool;
```

[@term:translations_disabled] Пользователи [Telegram Premium](/api/premium/) также могут включить перевод переписки в реальном времени.  
Если в текущей учётной записи есть подписка Premium и флаг `translations_disabled` (признак того, что пользователь отказался от автоперевода в этом чате) в конструкторах [userFull](/constructor/userFull/), [chatFull](/constructor/chatFull/), [channelFull](/constructor/channelFull/) **не** установлен, клиенту следует применять локальную модель распознавания языка ко всем сообщениям, приходящим из личных чатов (кроме секретных), обычных чатов и каналов, и если:

-   модель распознавания языка была применена не менее чем к 8 сообщениям в чате,
-   **и** язык был успешно определён не менее чем у 35 % обработанных сообщений,
-   **и** не менее 65 % сообщений с успешно определённым языком написаны на иностранном языке (то есть на языке, который не совпадает ни с языком системы, ни с языком интерфейса Telegram и который пользователь явно не исключил из перевода),
-   **то** пользователю следует показать всплывающее окно с предложением включить перевод переписки в реальном времени либо запретить перевод обнаруженного языка (обнаруженным считается язык, который чаще всего встречается среди всех обработанных сообщений).

Если пользователь закрывает окно с предложением автоперевода, вызовите [messages.togglePeerTranslations](/method/messages.togglePeerTranslations/) с установленным флагом `disabled`: это установит флаг `translations_disabled` в соответствующем конструкторе полной информации и тем самым сообщит остальным сессиям, что показывать предложение автоперевода не нужно.

Если пользователь включает автоперевод, сохраните эту настройку локально и вызывайте [messages.translateText](/method/messages.translateText/) для каждого полученного сообщения, желательно объединяя запросы в пакеты и указывая сразу несколько идентификаторов сообщений в `id`.

### Автоперевод для каналов

```
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

channelAdminLogEventActionToggleAutotranslation#c517f77e new_value:Bool = ChannelAdminLogEventAction;

---functions---

channels.toggleAutotranslation#167fc0a1 channel:InputChannel enabled:Bool = Updates;
```

[@term:boost] Достигнув [уровня буста »](/api/boost/) (`boost` — голос, который подписчик отдаёт каналу, повышая его уровень), указанного в [параметре клиентской конфигурации channel\_autotranslation\_level\_min »](/api/config/#channel-autotranslation-level-min), канал может включить автоперевод всех сообщений для всех пользователей (в том числе не имеющих подписки Premium), вызвав [channels.toggleAutotranslation](/method/channels.toggleAutotranslation/): при этом в [журнал администратора](/api/recent-actions/) будет добавлено событие [channelAdminLogEventActionToggleAutotranslation](/constructor/channelAdminLogEventActionToggleAutotranslation/).

У каналов с включённым автопереводом будет установлен флаг [channel](/constructor/channel/).`autotranslation`.
