---
title: "Групповые звонки"
original: "https://core.telegram.org/api/group-calls"
section: api
description: "Telegram поддерживает групповые звонки."
layout: layout.njk
---

# Групповые звонки

Telegram поддерживает групповые звонки.

На этой странице описаны методы API для работы с групповыми звонками.

### Типы групповых звонков

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;
groupCallDiscarded#7780bcb4 id:long access_hash:long duration:int = GroupCall;
```

Любой групповой звонок представлен конструктором [groupCall](/constructor/groupCall/), а после завершения — конструктором [groupCallDiscarded](/constructor/groupCallDiscarded/).

Групповые звонки делятся на следующие категории:

-   [Видеочаты и трансляции](#video-chats-livestreams)
-   [Живые истории](#live-stories)
-   [Конференции](#conference-calls)

Видеочаты, трансляции и живые истории могут также воспроизводить медиаданные в [режиме потока »](#stream-mode), когда клиент скачивает фрагменты медиапотока вместо того, чтобы поддерживать живое WebRTC-соединение. Это происходит либо автоматически — когда сервер ради масштабируемости переводит большую аудиторию с WebRTC на скачивание, — либо когда звонок работает в [режиме RTMP »](#creating-and-publishing-an-rtmp-livestream), при котором всё медиа звонка публикует по RTMP одно внешнее приложение.

#### Видеочаты и трансляции

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;

inputGroupCall#d8aa840f id:long access_hash:long = InputGroupCall;

messageActionGroupCall#7a0d7f42 flags:# call:InputGroupCall duration:flags.0?int = MessageAction;
messageActionGroupCallScheduled#b3a07661 call:InputGroupCall schedule_date:int = MessageAction;

updateGroupCall#9d2216e0 flags:# live_story:flags.2?true peer:flags.1?Peer call:GroupCall = Update;
updateGroupCallParticipants#f2ebdb4e call:InputGroupCall participants:Vector<GroupCallParticipant> version:int = Update;

chatFull#2633421b flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions reactions_limit:flags.20?int = ChatFull;

channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

---functions---

phone.createGroupCall#48cdc6d8 flags:# rtmp_stream:flags.2?true peer:InputPeer random_id:int title:flags.0?string schedule_date:flags.1?int = Updates;
phone.editGroupCallTitle#1ca6ac0a call:InputGroupCall title:string = Updates;
phone.toggleGroupCallRecord#f128c708 flags:# start:flags.0?true video:flags.2?true call:InputGroupCall title:flags.1?string video_portrait:flags.2?Bool = Updates;

phone.inviteToGroupCall#7b393160 call:InputGroupCall users:Vector<InputUser> = Updates;
phone.exportGroupCallInvite#e6aa647f flags:# can_self_unmute:flags.0?true call:InputGroupCall = phone.ExportedGroupCallInvite;

phone.toggleGroupCallStartSubscription#219c34e6 call:InputGroupCall subscribed:Bool = Updates;

phone.startScheduledGroupCall#5680e342 call:InputGroupCall = Updates;

phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;
```

Видеочат/трансляция — это групповой звонок, привязанный к конкретной [обычной группе »](/api/channel/#basic-groups), [супергруппе »](/api/channel/#supergroups) или [каналу »](/api/channel/#channels); создаётся методом [phone.createGroupCall](/method/phone.createGroupCall/) администраторами, обладающими [правом администратора manage\_call »](/constructor/chatAdminRights/).

Групповой звонок называется видеочатом, когда он привязан к обычной группе или супергруппе.  
Групповой звонок называется трансляцией, когда он привязан к каналу.

У обычной группы, супергруппы или канала может быть только один привязанный видеочат/трансляция: запуск нового завершает предыдущий.

Видеочаты и трансляции могут использовать обычную публикацию и воспроизведение через WebRTC либо [режим RTMP](#creating-and-publishing-an-rtmp-livestream), а для больших аудиторий воспроизведение может переключаться в [режим потока »](#stream-mode).

Только у видеочатов и трансляций есть редактируемое название (оно хранится в поле `title` конструктора [groupCall](/constructor/groupCall/)): администраторы могут изменить его методом [phone.editGroupCallTitle](/method/phone.editGroupCallTitle/).

Видеочаты и трансляции также поддерживают запись на стороне сервера. Администраторы могут запустить или остановить запись методом [phone.toggleGroupCallRecord](/method/phone.toggleGroupCallRecord/). После остановки записи она будет отправлена в «Избранное» администратора; поля `video` и `video_portrait` задают, записывать ли также видео и в какой ориентации.

В видеочатах и трансляциях можно включить [сообщения и реакции во время звонка »](#in-call-messages) — в том числе при использовании режима трансляции по RTMP.

Для работы с видеочатом или трансляцией используется конструктор [inputGroupCall](/constructor/inputGroupCall/): он всегда присутствует в [chatFull](/constructor/chatFull/)/[channelFull](/constructor/channelFull/) обычной группы, супергруппы или канала, если видеочат/трансляция сейчас активны или запланированы.

Тот же самый [inputGroupCall](/constructor/inputGroupCall/) содержится и в сервисных сообщениях [messageActionGroupCallScheduled](/constructor/messageActionGroupCallScheduled/), [messageActionGroupCall](/constructor/messageActionGroupCall/), которые отправляются в группу или канал, когда видеочат/трансляция планируется, начинается или завершается.

[@term:invite_hash] Для видеочатов и трансляций, привязанных к публичным группам или каналам, любой участник или подписчик может получить [глубокую ссылку на видеочат »](/api/links/#video-chat-livestream-links) методом [phone.exportGroupCallInvite](/method/phone.exportGroupCallInvite/). Только администраторы группового звонка вправе выставить флаг `can_self_unmute`, разрешающий пользователям, вошедшим по такой ссылке, говорить без отдельного запроса разрешения: в этом случае экспортируемая ссылка будет содержать ещё и `invite_hash` (хеш приглашения), который надо передать в [phone.joinGroupCall](/method/phone.joinGroupCall/) при входе в звонок, чтобы автоматически получить право говорить.

Метод [phone.exportGroupCallInvite](/method/phone.exportGroupCallInvite/) нельзя применять к видеочатам и трансляциям, привязанным к приватным группам или каналам. Вместо этого следует поделиться пригласительной ссылкой самой группы или канала.

Пользователя можно также пригласить в видеочат/трансляцию явно, методом [phone.inviteToGroupCall](/method/phone.inviteToGroupCall/): при этом в привязанную к звонку группу или канал отправляется сервисное сообщение [messageActionInviteToGroupCall](/constructor/messageActionInviteToGroupCall/), у которого поле `call` идентифицирует видеочат/трансляцию, а поле `users` содержит идентификаторы приглашённых пользователей.

Чтобы войти в видеочат/трансляцию, вызовите [phone.joinGroupCall](/method/phone.joinGroupCall/).

Обновления сведений о видеочате/трансляции доставляются конструкторами [updateGroupCall](/constructor/updateGroupCall/)/[updateGroupCallParticipants](/constructor/updateGroupCallParticipants/) всем участникам или подписчикам обычной группы, супергруппы либо канала, и обрабатывать их следует так, как описано [здесь »](#applying-group-call-updates).

При вызове [phone.createGroupCall](/method/phone.createGroupCall/) допускается дополнительно выставить следующие флаги:

-   `title` — задаёт произвольное название группового звонка; если не выставлен, используется название группы или канала

-   `schedule_date` — создаёт звонок, запланированный на указанную дату (не раньше чем через 10 секунд и не позже чем через 8 дней).

    Звонок при этом **не** начнётся в указанную дату автоматически: запланированный звонок надо запустить вручную, вызвав [phone.startScheduledGroupCall](/method/phone.startScheduledGroupCall/).

    Запланированный звонок можно запустить и раньше, и позже назначенной даты.

    Чтобы получить уведомление о начале запланированного видеочата/трансляции, вызовите [phone.toggleGroupCallStartSubscription](/method/phone.toggleGroupCallStartSubscription/).

    Метод [phone.toggleGroupCallStartSubscription](/method/phone.toggleGroupCallStartSubscription/) можно вызывать только для **запланированных видеочатов и трансляций** и только до того, как они начались.

    Уведомление придёт в [updateNewMessage](/constructor/updateNewMessage/) от пользователя сервисных уведомлений (ID `777000`).

#### Живые истории

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;

inputGroupCall#d8aa840f id:long access_hash:long = InputGroupCall;

messageMediaVideoStream#ca5cab89 flags:# rtmp_stream:flags.0?true call:InputGroupCall = MessageMedia;

messageMediaDocument#52d8ccd9 flags:# nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?Document alt_documents:flags.5?Vector<Document> video_cover:flags.9?Photo video_timestamp:flags.10?int ttl_seconds:flags.2?int = MessageMedia;

storyItem#16a4b93c flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> music:flags.20?Document = StoryItem;

groupCallDonor#ee430c85 flags:# top:flags.0?true my:flags.1?true peer_id:flags.3?Peer stars:long = GroupCallDonor;
phone.groupCallStars#9d1dbd26 total_stars:long top_donors:Vector<GroupCallDonor> chats:Vector<Chat> users:Vector<User> = phone.GroupCallStars;

updateGroupCall#9d2216e0 flags:# live_story:flags.2?true peer:flags.1?Peer call:GroupCall = Update;
updateGroupCallParticipants#f2ebdb4e call:InputGroupCall participants:Vector<GroupCallParticipant> version:int = Update;

---functions---

stories.startLive#d069ccde flags:# pinned:flags.2?true noforwards:flags.4?true rtmp_stream:flags.5?true peer:InputPeer caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long messages_enabled:flags.6?Bool send_paid_messages_stars:flags.7?long = Updates;

phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;
phone.getGroupCallStars#6f636302 call:InputGroupCall = phone.GroupCallStars;
phone.saveDefaultSendAs#4167add1 call:InputGroupCall send_as:InputPeer = Bool;
```

Живая история — это групповой звонок, привязанный к конкретной [истории »](/api/stories/#watching-stories) пользователя, [супергруппы »](/api/channel/#supergroups) или [канала »](/api/channel/#channels).

[@term:peer] У пира (`peer` — адресат: пользователь, группа или канал) может быть только одна активная привязанная живая история; создать её может сам пользователь либо администраторы супергруппы или канала, вызвав [stories.startLive](/method/stories.startLive/).

Клиентам следует запрещать пользователям и администраторам каналов создавать новую живую историю, если одна живая история уже активна: при попытке создать новую живую историю у пира, у которого она уже есть, будет возвращена ошибка RPC `STORY_LIVE_ALREADY_%d`, содержащая идентификатор текущей активной живой истории.

У супергруппы или канала могут одновременно быть и активная живая история, и активный видеочат/трансляция: главное отличие в том, что живые истории поддерживают ещё и комментарии с пожертвованиями и показываются в верхней панели списка диалогов у подписчиков.

Поскольку [обычные группы](/api/channel/#basic-groups) не могут публиковать истории, у них не может быть и привязанной живой истории.

Для работы с живой историей используется конструктор [inputGroupCall](/constructor/inputGroupCall/): он всегда присутствует в [messageMediaVideoStream](/constructor/messageMediaVideoStream/), который содержится в поле `media` конструктора [storyItem](/constructor/storyItem/) этой истории, если живая история сейчас активна.

Чтобы войти в живую историю, вызовите [phone.joinGroupCall](/method/phone.joinGroupCall/) — как и для всех остальных типов групповых звонков.

В живых историях пир `join_as` обязан всегда быть [inputPeerSelf](/constructor/inputPeerSelf/) (но пользователи по-прежнему могут [комментировать от имени принадлежащих им каналов, чтобы избежать деанонимизации »](#in-call-messages)).

У живой истории только один вещатель: аудио и видео публикует лишь тот участник, который ведёт живую историю; все остальные участники обязаны входить как слушатели, выставляя в [phone.joinGroupCall](/method/phone.joinGroupCall/) оба флага — `muted` и `video_stopped`.

Живые истории поддерживают [сообщения и реакции во время звонка »](#in-call-messages), включая [платные комментарии »](#paid-live-story-comments) и [платные пожертвования »](#paid-live-story-donations), и позволяют комментирующим выбрать пира, который будет показан в качестве автора.

Обновления сведений о живой истории доставляются конструкторами [updateGroupCall](/constructor/updateGroupCall/)/[updateGroupCallParticipants](/constructor/updateGroupCallParticipants/) всем подписчикам группы или канала, а для живых историй пользователей — всем контактам; обрабатывать их следует так, как описано [здесь »](#applying-group-call-updates).

Как только живая история завершится, [messageMediaVideoStream](/constructor/messageMediaVideoStream/) в поле `media` конструктора [storyItem](/constructor/storyItem/) этой истории будет заменён на [messageMediaDocument](/constructor/messageMediaDocument/) с видеозаписью истории.

#### Конференц-звонки

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;

inputGroupCallSlug#fe06823f slug:string = InputGroupCall;
inputGroupCallInviteMessage#8c10603f msg_id:int = InputGroupCall;

updateGroupCall#9d2216e0 flags:# live_story:flags.2?true peer:flags.1?Peer call:GroupCall = Update;
updateGroupCallParticipants#f2ebdb4e call:InputGroupCall participants:Vector<GroupCallParticipant> version:int = Update;
updateGroupCallChainBlocks#a477288f call:InputGroupCall sub_chain_id:int blocks:Vector<bytes> next_offset:int = Update;
updateGroupCallEncryptedMessage#c957a766 call:InputGroupCall from_id:Peer encrypted_message:bytes = Update;

messageActionConferenceCall#2ffe2f7a flags:# missed:flags.0?true active:flags.1?true video:flags.4?true call_id:long duration:flags.2?int other_participants:flags.3?Vector<Peer> = MessageAction;

---functions---

phone.createConferenceCall#7d0444bb flags:# muted:flags.0?true video_stopped:flags.2?true join:flags.3?true random_id:int public_key:flags.3?int256 block:flags.3?bytes params:flags.3?DataJSON = Updates;
phone.inviteConferenceCallParticipant#bcf22685 flags:# video:flags.0?true call:InputGroupCall user_id:InputUser = Updates;
phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;

phone.deleteConferenceCallParticipants#8ca60525 flags:# only_left:flags.0?true kick:flags.1?true call:InputGroupCall ids:Vector<long> block:bytes = Updates;
phone.declineConferenceCallInvite#3c479971 msg_id:int = Updates;
phone.sendGroupCallEncryptedMessage#e5afa56d call:InputGroupCall encrypted_message:bytes = Bool;
```

Конференц-звонок — это групповой звонок, **не** связанный ни с какой группой или каналом. Его поле [groupCall](/constructor/groupCall/).`invite_link` можно передать другим пользователям, чтобы они смогли присоединиться.

Кроме того, конференц-звонки защищены сквозным шифрованием на основе блокчейна; полное описание протокола сквозного шифрования и методов API для управления блокчейном конференц-звонка приведено [здесь »](/api/end-to-end/group-calls/#overview).

Чтобы создать конференцию, вызовите [phone.createConferenceCall](/method/phone.createConferenceCall/): метод вернёт [updateGroupCall](/constructor/updateGroupCall/) с конструктором [groupCall](/constructor/groupCall/), в котором будет и [глубокая ссылка на конференцию »](/api/links/#conference-links) (`invite_link`) — по ней другие пользователи смогут подключиться к звонку.

Если установлен флаг `join`, создатель тем же запросом сразу присоединяется к конференции: в `public_key` передаётся свежий открытый ключ E2E, в `block` — начальный блок `e2e.chain.block` для подцепочки 0, а в `params` — обычная полезная нагрузка присоединения от локального движка звонков.

Конференц-звонок создаётся и при [переводе идущего звонка один на один »](/api/calls/#migrating-to-a-conference-call) в конференцию: инициирующий клиент создаёт конференцию методом [phone.createConferenceCall](/method/phone.createConferenceCall/) (присоединяясь к ней с помощью флага `join`), а затем завершает звонок один на один с причиной [phoneCallDiscardReasonMigrateConferenceCall](/constructor/phoneCallDiscardReasonMigrateConferenceCall/), поле `slug` которой позволяет собеседнику войти во вновь созданную конференцию.

Приглашать пользователей в конференцию можно либо по ссылке, либо вызовом [phone.inviteConferenceCallParticipant](/method/phone.inviteConferenceCallParticipant/), передав в него [inputGroupCall](/constructor/inputGroupCall/), построенный из ранее полученного [groupCall](/constructor/groupCall/), и ID приглашаемого пользователя.

При использовании [phone.inviteConferenceCallParticipant](/method/phone.inviteConferenceCallParticipant/) пользователю-адресату придёт конструктор [messageActionConferenceCall](/constructor/messageActionConferenceCall/): если [ключ клиентской конфигурации call\_requests\_disabled »](/api/config/#call-requests-disabled) не установлен или равен `false`, входящий [messageActionConferenceCall](/constructor/messageActionConferenceCall/) с **не** установленными флагами `missed` и `active` должен вызывать звонок и показ экрана входящего вызова — так же, как для звонков один на один.

Чтобы отклонить входящее приглашение, вызовите [phone.declineConferenceCallInvite](/method/phone.declineConferenceCallInvite/), передав в `msg_id` идентификатор сервисного сообщения [messageActionConferenceCall](/constructor/messageActionConferenceCall/) с этим приглашением.

Возвращённые обновления изменят указанное сервисное сообщение [messageActionConferenceCall](/constructor/messageActionConferenceCall/): флаг `missed` будет установлен, а флаг `active` останется сброшенным, благодаря чему экран входящего вызова погаснет.

Для работы с конференц-звонком используйте один из следующих конструкторов типа [InputGroupCall](/type/InputGroupCall/):

-   [@term:access_hash] [inputGroupCall](/constructor/inputGroupCall/) — если групповой звонок создали мы сами и у нас уже есть поля `id` и `access_hash` конструктора [groupCall](/constructor/groupCall/) (`access_hash` — выдаваемый сервером идентификатор доступа, без которого объект нельзя использовать в запросах)
-   [inputGroupCallSlug](/constructor/inputGroupCallSlug/) — если у нас есть только [глубокая ссылка на конференцию »](/api/links/#conference-links)
-   [inputGroupCallInviteMessage](/constructor/inputGroupCallInviteMessage/) — если нас пригласили через [messageActionConferenceCall](/constructor/messageActionConferenceCall/): в `msg_id` следует указать ID сервисного сообщения [messageActionConferenceCall](/constructor/messageActionConferenceCall/) (пир указывать не нужно, поскольку [messageActionConferenceCall](/constructor/messageActionConferenceCall/) может прийти только в личных чатах, у которых общая последовательность идентификаторов)

Чтобы присоединиться к конференц-звонку, вызовите [phone.joinGroupCall](/method/phone.joinGroupCall/), как и для всех прочих типов групповых звонков, но со следующими отличиями:

-   `join_as` для конференц-звонков может быть равен **только** [inputPeerSelf](/constructor/inputPeerSelf/) (то есть присоединиться к конференц-звонку от имени принадлежащего вам канала нельзя).
-   В `public_key` необходимо передать ваш открытый ключ.
-   В `block` необходимо передать соответствующий [блок главной цепочки »](/api/end-to-end/group-calls/#block-structure).
-   В `params` необходимо передать полезную нагрузку присоединения от локального движка звонков — как и для остальных групповых звонков.

Чтобы присоединиться к звонку через [phone.joinGroupCall](/method/phone.joinGroupCall/), клиент обязан:

1.  Получить последний блок главной подцепочки методом [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) с параметрами `offset=-1`, `limit=1`, `sub_chain_id=0`
2.  Построить блок присоединения так, как описано [здесь »](/api/end-to-end/group-calls/#joining-a-call)
3.  Вызвать [phone.joinGroupCall](/method/phone.joinGroupCall/) с новым блоком и только что сгенерированным открытым ключом клиента; если вызов метода завершится RPC-ошибкой, начинающейся с `CONF_WRITE_CHAIN_INVALID`, вернуться к шагу 1 (состояние группового звонка изменилось, появился новый блок, и наш блок присоединения нужно построить заново — поверх нового блока)

Чтобы удалить участников конференции, вызовите [phone.deleteConferenceCallParticipants](/method/phone.deleteConferenceCallParticipants/), построив и передав необходимый E2E-блок удаления `block` и установив нужные флаги так, как описано [здесь »](/api/end-to-end/group-calls/#removing-a-participant).

Сообщения внутри конференции и [эмодзи-реакции »](/api/end-to-end/group-calls/#conference-in-call-reactions) также обязаны передаваться со сквозным шифрованием. Сериализуйте и зашифруйте их так, как описано [здесь »](/api/end-to-end/group-calls/#conference-in-call-messages), и отправляйте методом [phone.sendGroupCallEncryptedMessage](/method/phone.sendGroupCallEncryptedMessage/). Входящие зашифрованные сообщения и реакции доставляются в обновлениях [updateGroupCallEncryptedMessage](/constructor/updateGroupCallEncryptedMessage/) и должны расшифровываться локально.

Обновления сведений о конференции доставляются всем участникам через [updateGroupCall](/constructor/updateGroupCall/)/[updateGroupCallParticipants](/constructor/updateGroupCallParticipants/) и должны обрабатываться так, как описано [здесь »](#applying-group-call-updates).

Помимо этого, обновления о новых блоках блокчейна доставляются через [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/), и обрабатывать их следует иначе — так, как описано [здесь »](/api/end-to-end/group-calls/#handling-updates).

Пока клиент остаётся участником звонка, он **обязан также** опрашивать каждую подцепочку на предмет новых блоков методом [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) с `limit=50` и `offset`, равным высоте последнего принятого блока плюс `1`. В обычных условиях опрос выполняется каждые 5 секунд, а во время [проверки ключа »](/api/end-to-end/group-calls/#key-verification-and-emoji-generation) — каждую секунду.

### Получение информации о групповом звонке

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;

phone.groupCall#9e727aad call:GroupCall participants:Vector<GroupCallParticipant> participants_next_offset:string chats:Vector<Chat> users:Vector<User> = phone.GroupCall;

phone.groupParticipants#f47751b6 count:int participants:Vector<GroupCallParticipant> next_offset:string chats:Vector<Chat> users:Vector<User> version:int = phone.GroupParticipants;

---functions---

phone.getGroupCall#041845db call:InputGroupCall limit:int = phone.GroupCall;

phone.getGroupParticipants#c558d8ab call:InputGroupCall ids:Vector<InputPeer> sources:Vector<int> offset:string limit:int = phone.GroupParticipants;
```

Чтобы получить текущий активный [groupCall](/constructor/groupCall/) [любого типа](#group-call-types), вызовите [phone.getGroupCall](/method/phone.getGroupCall/), передав подходящий подтип [InputGroupCall](/type/InputGroupCall/) в соответствии с [типом звонка »](#group-call-types); этим же методом можно получить часть участников группы (максимальное число возвращаемых участников задаётся параметром `limit`, значение `0` означает, что число результатов определит сервер).

[@term:next_offset] Если число возвращённых участников меньше, чем [groupCall](/constructor/groupCall/).`participants_count`, остальных участников можно затем получить [постраничной выборкой](/api/offsets/) через [phone.getGroupParticipants](/method/phone.getGroupParticipants/): в `offset` передаётся сначала поле [phone.groupCall](/constructor/phone.groupCall/).`participants_next_offset`, возвращённое методом [phone.getGroupCall](/method/phone.getGroupCall/), а далее — поле [phone.groupParticipants](/constructor/phone.groupParticipants/).`next_offset` (курсор-строка, указывающая на место, с которого продолжится выборка), возвращаемое методом [phone.getGroupParticipants](/method/phone.getGroupParticipants/).

Учтите, что параметр `limit` метода [phone.getGroupCall](/method/phone.getGroupCall/) ведёт себя не так, как `limit` метода [phone.getGroupParticipants](/method/phone.getGroupParticipants/): каким бы ни было значение [phone.getGroupCall](/method/phone.getGroupCall/).`limit`, число возвращённых результатов всегда будет не меньше трёх, а если участников меньше трёх — не меньше их общего числа. При этом возвращаемое значение `participants_next_offset` всё равно будет корректно указывать на участника с номером `limit` (либо на последнего, если участников меньше), и выборка по этому смещению начнётся со следующего за ним участника.

Например, при пяти участниках (A..E) вызов [phone.getGroupCall](/method/phone.getGroupCall/) с `limit=1` вернёт участников A, B, C, однако передача возвращённого `participants_next_offset` в [phone.getGroupParticipants](/method/phone.getGroupParticipants/) с `limit=10` вернёт участников B, C, D, E.

Параметр же `limit` метода [phone.getGroupParticipants](/method/phone.getGroupParticipants/), напротив, работает обычным образом и действительно ограничивает число возвращаемых участников.

Кроме того, можно заполнить флаги `sources` или `ids` метода [phone.getGroupParticipants](/method/phone.getGroupParticipants/), чтобы получить сведения только об определённых пользователях — по их идентификаторам источников WebRTC или по идентификаторам пользователей Telegram.

Примечание: если результатов больше нет, [phone.getGroupParticipants](/method/phone.getGroupParticipants/) вернёт пустое значение `next_offset`; поэтому не передавайте `next_offset` из [phone.groupParticipants](/constructor/phone.groupParticipants/), если оно пустое, — иначе можно уйти в бесконечный цикл.

### Применение обновлений группового звонка

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;

groupCallParticipant#2a3dc7ac flags:# muted:flags.0?true left:flags.1?true can_self_unmute:flags.2?true just_joined:flags.4?true versioned:flags.5?true min:flags.8?true muted_by_you:flags.9?true volume_by_admin:flags.10?true self:flags.12?true video_joined:flags.15?true peer:Peer date:int active_date:flags.3?int source:int volume:flags.7?int about:flags.11?string raise_hand_rating:flags.13?long video:flags.6?GroupCallParticipantVideo presentation:flags.14?GroupCallParticipantVideo paid_stars_total:flags.16?long = GroupCallParticipant;

updateGroupCall#9d2216e0 flags:# live_story:flags.2?true peer:flags.1?Peer call:GroupCall = Update;

updateGroupCallParticipants#f2ebdb4e call:InputGroupCall participants:Vector<GroupCallParticipant> version:int = Update;
```

[@term:version] Все обновления, связанные с активными групповыми звонками, содержат ненулевое целочисленное поле `version` (номер ревизии — счётчик версии состояния звонка), которое следует использовать при применении обновления, сравнивая его с ненулевым полем `version` закешированного [groupCall](/constructor/groupCall/) (далее — `cached_version`).

Поле `version` конструктора [groupCall](/constructor/groupCall/) — это номер ревизии информации о групповом звонке (включая список участников звонка).

Логика применения [updateGroupCall](/constructor/updateGroupCall/) и [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/) немного различается.

Если во входящем [updateGroupCall](/constructor/updateGroupCall/) поле `call` содержит [groupCallDiscarded](/constructor/groupCallDiscarded/), значит звонок завершён: примените обновление немедленно и отбросьте закешированный список участников.

В противном случае [updateGroupCall](/constructor/updateGroupCall/).`call` — это активный [groupCall](/constructor/groupCall/). Извлеките из него `version` и следуйте такому алгоритму:

-   Если `version` меньше `cached_version+1`, пропустите обновление

-   [@term:min] Если `version` равно `cached_version+1`, примените обновление, заменив закешированный [groupCall](/constructor/groupCall/) на [groupCall](/constructor/groupCall/), пришедший в обновлении.  
    Учтите, что если установлен флаг [groupCall](/constructor/groupCall/).`min` (признак урезанного, неполного объекта), то **определённый набор** полей [groupCall](/constructor/groupCall/), перечисленных на [странице конструктора »](/constructor/groupCall/), **нельзя** применять поверх локально закешированной версии.

-   Если `version` больше `cached_version+1`, подождите до 1 секунды другого [updateGroupCall](/constructor/updateGroupCall/) для того же группового звонка, которое заполнит пропуск в последовательности `version`; если такое обновление не придёт вовремя, пропустите обновление, после чего сбросьте локальный кеш и заново загрузите информацию о звонке и список участников методом [phone.getGroupCall](/method/phone.getGroupCall/).

-   Если для этого чата нет локально закешированного [groupCall](/constructor/groupCall/), примените обновление, закешировав [groupCall](/constructor/groupCall/).  
    В этом случае **не** применяйте обновление, если установлен флаг [groupCall](/constructor/groupCall/).`min`.

Чтобы применить входящее [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/), извлеките `version` из [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/).`version` и следуйте такому алгоритму:

-   Если **хотя бы у одного** из конструкторов [groupCallParticipant](/constructor/groupCallParticipant/), содержащихся в обновлении, установлен флаг `versioned` И/ИЛИ `left` И/ИЛИ `just_joined`, выполните следующие шаги:
    -   Если `version` меньше `cached_version`, пропустите обновление
    -   Если `version` равно `cached_version`, примените обновление **только если это первое [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/), полученное для этого группового звонка**; о том, как его применять, см. ниже.
    -   Если `version` равно `cached_version+1`, примените обновление, обновив `version` локального [groupCall](/constructor/groupCall/) и обновив или заполнив информацию о [groupCallParticipant](/constructor/groupCallParticipant/).  
        Учтите, что если установлен флаг [groupCallParticipant](/constructor/groupCallParticipant/).`min`, то **определённый набор** полей [groupCallParticipant](/constructor/groupCallParticipant/), перечисленных на [странице конструктора »](/constructor/groupCallParticipant/), **нельзя** применять поверх локально закешированной версии.  
        Если установлен флаг [groupCallParticipant](/constructor/groupCallParticipant/).`left`, значит этот участник покинул звонок и локальный [groupCallParticipant](/constructor/groupCallParticipant/) следует удалить.
    -   Если `version` больше `cached_version+1`, подождите до 1 секунды другого [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/) для того же группового звонка, которое заполнит пропуск в последовательности `version`; если такое обновление не придёт вовремя, пропустите обновление, после чего сбросьте локальный кеш и заново загрузите информацию о звонке и список участников методом [phone.getGroupCall](/method/phone.getGroupCall/).
    -   Если для этого чата нет локально закешированного [groupCall](/constructor/groupCall/), пропустите обновление.
-   В противном случае примените обновление безусловно, независимо от значения `version`.

### Присоединение к групповому звонку от имени принадлежащих вам каналов

```
phone.joinAsPeers#afe5623f peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = phone.JoinAsPeers;

chatFull#2633421b flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions reactions_limit:flags.20?int = ChatFull;

channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;


---functions---

phone.getGroupCallJoinAs#ef7c213a peer:InputPeer = phone.JoinAsPeers;

phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;

phone.saveDefaultGroupCallJoinAs#575e1f8c peer:InputPeer join_as:InputPeer = Bool;
```

Только [видеочаты/трансляции »](#video-chats-livestreams) позволяют подключаться к групповому звонку от имени принадлежащего вам канала или — для [анонимных администраторов](/api/rights/#anonymous-admins) — от имени связанной группы. К [живым историям »](#live-stories) и [конференциям »](#conference-calls) обязательно подключаться с помощью [inputPeerSelf](/constructor/inputPeerSelf/).

Учтите, что пользователи, подключившиеся к трансляции, всё же могут [комментировать от имени принадлежащих им каналов, чтобы избежать деанонимизации »](#in-call-messages) — для этого используется немного другая последовательность действий.

Чтобы получить полный список пиров, от имени которых можно подключиться к видеочату/трансляции, вызовите [phone.getGroupCallJoinAs](/method/phone.getGroupCallJoinAs/), передав идентификатор канала/супергруппы/обычной группы, с которой связан звонок.

Любой из возвращённых пиров затем можно передать в флаге `join_as` метода [phone.joinGroupCall](/method/phone.joinGroupCall/) при подключении к групповому звонку: если `join_as` не заполнен, используется пир `join_as` по умолчанию для этого канала/группы.

Значение пира `join_as` по умолчанию для канала/группы доступно в полях [chatFull](/constructor/chatFull/).`groupcall_default_join_as`/[channelFull](/constructor/channelFull/).`groupcall_default_join_as`, если оно было явно изменено пользователем через вызов [phone.saveDefaultGroupCallJoinAs](/method/phone.saveDefaultGroupCallJoinAs/).

В противном случае, если [chatFull](/constructor/chatFull/).`groupcall_default_join_as`/[channelFull](/constructor/channelFull/).`groupcall_default_join_as` пусто и в [phone.joinGroupCall](/method/phone.joinGroupCall/).`join_as` не передано никакого значения, подключение к звонку выполняется от имени текущего пользователя.

### Поддержание соединений группового звонка

```
---functions---

phone.checkGroupCall#b59cf977 call:InputGroupCall sources:Vector<int> = Vector<int>;
```

[@term:SSRC] В режиме WebRTC каждый успешный вызов [phone.joinGroupCall](/method/phone.joinGroupCall/) и [phone.joinGroupCallPresentation](/method/phone.joinGroupCallPresentation/) регистрирует отдельное WebRTC-соединение, которое идентифицируется ненулевым аудио-SSRC (идентификатор источника потока в WebRTC), указанным в его полезной нагрузке подключения.

Если главное соединение WebRTC или соединение презентации разрывается, вызывайте [phone.checkGroupCall](/method/phone.checkGroupCall/) каждые 4 секунды — но только пока движок WebRTC пытается восстановить соединение (или соединения).

В [phone.checkGroupCall](/method/phone.checkGroupCall/).`sources` передайте идентификатор источника главного соединения, а если активно соединение презентации — то и его идентификатор источника.

Прекратите опрашивать [phone.checkGroupCall](/method/phone.checkGroupCall/), если соединение восстановлено или если клиент покинул звонок.

Метод возвращает то подмножество переданных источников, которое сервер по-прежнему считает подключённым к звонку.  
Обрабатывайте возвращённый вектор так:

-   Если главный источник присутствует, продолжайте попытки переподключить существующее главное соединение.
-   Если главный источник отсутствует, сформируйте новую полезную нагрузку подключения для главного соединения и снова вызовите [phone.joinGroupCall](/method/phone.joinGroupCall/). Любое активное соединение презентации также обязательно переподключить после того, как установлено новое главное соединение.
-   Если главный источник присутствует, а источник презентации отсутствует, сформируйте новую полезную нагрузку подключения для презентации и снова вызовите [phone.joinGroupCallPresentation](/method/phone.joinGroupCallPresentation/).

Если [phone.checkGroupCall](/method/phone.checkGroupCall/) возвращает ошибку RPC, сформируйте новую полезную нагрузку подключения для главного соединения и переподключите его.

### Управление активным групповым звонком

```
groupCallParticipant#2a3dc7ac flags:# muted:flags.0?true left:flags.1?true can_self_unmute:flags.2?true just_joined:flags.4?true versioned:flags.5?true min:flags.8?true muted_by_you:flags.9?true volume_by_admin:flags.10?true self:flags.12?true video_joined:flags.15?true peer:Peer date:int active_date:flags.3?int source:int volume:flags.7?int about:flags.11?string raise_hand_rating:flags.13?long video:flags.6?GroupCallParticipantVideo presentation:flags.14?GroupCallParticipantVideo paid_stars_total:flags.16?long = GroupCallParticipant;

updateGroupCallParticipants#f2ebdb4e call:InputGroupCall participants:Vector<GroupCallParticipant> version:int = Update;

---functions---

phone.editGroupCallParticipant#a5273abf flags:# call:InputGroupCall participant:InputPeer muted:flags.0?Bool volume:flags.1?int raise_hand:flags.2?Bool video_stopped:flags.3?Bool video_paused:flags.4?Bool presentation_paused:flags.5?Bool = Updates;

phone.leaveGroupCall#500377f9 call:InputGroupCall source:int = Updates;

phone.discardGroupCall#7a777135 call:InputGroupCall = Updates;

phone.toggleGroupCallSettings#974392f2 flags:# reset_invite_hash:flags.1?true call:InputGroupCall join_muted:flags.0?Bool messages_enabled:flags.2?Bool send_paid_messages_stars:flags.3?long = Updates;
```

[@term:flags] Используйте [phone.editGroupCallParticipant](/method/phone.editGroupCallParticipant/), чтобы изменить настройки участника. Заполняйте только те флаги (`flags` — битовая маска, определяющая, какие необязательные поля присутствуют в запросе), которые нужно изменить. Сервер разошлёт обновления [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/) с новым состоянием.

Метод [phone.editGroupCallParticipant](/method/phone.editGroupCallParticipant/) недоступен в живых историях (как в режиме RTMP, так и без него) и в RTMP-видеочатах/трансляциях, поскольку в групповых звонках этих типов передавать звук и видео может только один вещатель, а все остальные участники — слушатели.

-   `muted` отключает или включает микрофон текущего пользователя либо другого участника.

    Итоговые флаги [groupCallParticipant](/constructor/groupCallParticipant/).`muted` и `can_self_unmute` описывают состояние микрофона участника:

    -   Если `muted` установлен, а `can_self_unmute` не установлен, участнику принудительно отключили микрофон, и включить его самостоятельно он не может.
    -   Если установлены оба флага, `muted` и `can_self_unmute`, у участника отключён микрофон, но он может включить его самостоятельно.
    -   Если `muted` не установлен, микрофон участника включён.

    В видеочатах/трансляциях администраторы с [правом администратора manage\_call »](/constructor/chatAdminRights/) могут принудительно отключать микрофон рядовым участникам. Вызов [phone.editGroupCallParticipant](/method/phone.editGroupCallParticipant/) с `muted`, равным [boolFalse](/constructor/boolFalse/), для участника с принудительно отключённым микрофоном не включает микрофон сразу: он устанавливает `can_self_unmute`, позволяя участнику включить микрофон самому. Администраторы могут отключать микрофон и другим администраторам, но не могут делать это принудительно и не могут принудительно включать им микрофон: у администраторов с отключённым микрофоном флаг `can_self_unmute` сохраняется.

    То же справедливо и для конференций, с той разницей, что единственный возможный администратор там — создатель конференции.

    Без прав модерации вы можете отключать и включать микрофон только себе, причём включать — лишь при установленном `can_self_unmute`.

    Без прав модерации отключение микрофона другому участнику в интерфейсе должно затрагивать только локальное состояние.

-   `volume` изменяет громкость другого участника. Значение обязано находиться в диапазоне от `1` до `20000`, где `10000` соответствует громкости 100%, а `20000` — 200%. При наличии прав модерации (см. выше) новая громкость применяется и у остальных участников, использующих громкость по умолчанию; в противном случае она влияет только на локальное воспроизведение.

    Как и флаг `muted`, `volume` можно использовать в видеочатах/трансляциях и в конференциях.

-   `raise_hand` поднимает или опускает руку текущего пользователя, а также опускает руку другого участника, если у текущего пользователя есть права модерации.

    Это поле поддерживается только в видеочатах/трансляциях, но не в конференц-звонках.

-   `video_stopped` запускает или останавливает видеопоток текущего пользователя.

-   `video_paused` приостанавливает или возобновляет видеопоток текущего пользователя.

-   `presentation_paused` приостанавливает или возобновляет поток презентации текущего пользователя.

Для групповых звонков всех типов используйте [phone.leaveGroupCall](/method/phone.leaveGroupCall/), чтобы выйти, не завершая звонок для остальных участников, передав идентификатор источника главного потока.

Используйте [phone.discardGroupCall](/method/phone.discardGroupCall/), чтобы завершить звонок для всех; для видеочатов/трансляций и живых историй это требует соответствующего права администратора/создателя, а в конференциях сделать это может только создатель.

Администраторы могут вызвать [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/), чтобы изменить настройки, доступность которых зависит от типа группового звонка:

-   `reset_invite_hash` делает недействительными существующие ссылки для видеочатов/трансляций (как в режиме RTMP, так и без него) и конференций.
-   `join_muted` определяет, подключаются ли новые участники с отключённым микрофоном; изменить его можно только в видеочатах/трансляциях без RTMP.
-   `messages_enabled` включает или отключает наложение сообщений поверх звонка в видеочатах/трансляциях, конференциях и живых историях, независимо от того, используется ли режим RTMP-трансляции; эту настройку можно изменить, только если установлен флаг [groupCall](/constructor/groupCall/).`can_change_messages_enabled`.
-   `send_paid_messages_stars` изменяет минимальное пожертвование, необходимое для комментариев от всех пользователей, кроме владельца живой истории; доступно только в живых историях (как в режиме RTMP, так и без него).

### Сообщения во время звонка

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;

groupCallMessage#1a8afc7e flags:# from_admin:flags.1?true id:int from_id:Peer date:int message:TextWithEntities paid_message_stars:flags.0?long = GroupCallMessage;

updateGroupCallMessage#d8326f0d call:InputGroupCall message:GroupCallMessage = Update;
updateDeleteGroupCallMessages#3e85e92c call:InputGroupCall messages:Vector<int> = Update;

---functions---

phone.toggleGroupCallSettings#974392f2 flags:# reset_invite_hash:flags.1?true call:InputGroupCall join_muted:flags.0?Bool messages_enabled:flags.2?Bool send_paid_messages_stars:flags.3?long = Updates;
phone.sendGroupCallMessage#b1d11410 flags:# call:InputGroupCall random_id:long message:TextWithEntities allow_paid_stars:flags.0?long send_as:flags.1?InputPeer = Updates;
phone.saveDefaultSendAs#4167add1 call:InputGroupCall send_as:InputPeer = Bool;
phone.deleteGroupCallMessages#f64f54f7 flags:# report_spam:flags.0?true call:InputGroupCall messages:Vector<int> = Updates;
phone.deleteGroupCallParticipantMessages#1dbfeca0 flags:# report_spam:flags.0?true call:InputGroupCall participant:InputPeer = Updates;
```

Видеочаты/трансляции и живые истории позволяют отправлять сообщения в контексте группового звонка, независимо от того, используется ли режим RTMP-трансляции.

Эти сообщения **не** входят в обычную историю сообщений связанной обычной группы, супергруппы, канала или пользователя: они отправляются и доставляются с помощью методов и конструкторов API, описанных ниже.

В конференциях вместо этого используются [сообщения во время звонка со сквозным шифрованием](#conference-calls).

Если у конструктора [groupCall](/constructor/groupCall/) выставлен флаг `can_change_messages_enabled`, текущий пользователь может включать и отключать сообщения группового звонка, вызывая [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/) с параметром `messages_enabled`.

Если у конструктора [groupCall](/constructor/groupCall/) выставлен флаг `messages_enabled`, участники могут отправлять сообщения методом [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/):

Клиентам следует показывать участникам интерфейс сообщений во время звонка только тогда, когда у конструктора [groupCall](/constructor/groupCall/) выставлен флаг `messages_enabled`.  
На панели активного звонка следует отображать кнопку **Сообщение**: по нажатию открывается поле ввода прямо в звонке, а сообщения показываются поверх панели звонка.

Длина сообщения во время звонка не должна превышать [`group_call_message_length_limit` »](/api/config/#group-call-message-length-limit) символов UTF-8, а клиентам следует держать каждое сообщение на экране в течение [`group_call_message_ttl` »](/api/config/#group-call-message-ttl) секунд (отсчитывая от значения поля `date` конструктора [groupCallMessage](/constructor/groupCallMessage/)).

Для таких сообщений нет ни отдельной страницы чата, ни метода загрузки истории: они доставляются обновлениями [updateGroupCallMessage](/constructor/updateGroupCallMessage/).

В видеочатах/трансляциях и живых историях участники могут вызывать [phone.deleteGroupCallMessages](/method/phone.deleteGroupCallMessages/), чтобы удалить отдельные отправленные ими сообщения, а администраторы — чтобы удалить любое конкретное сообщение. Кроме того, администраторы могут вызвать [phone.deleteGroupCallParticipantMessages](/method/phone.deleteGroupCallParticipantMessages/), чтобы удалить все сообщения одного участника. Идентификаторы удалённых сообщений приходят в обновлениях [updateDeleteGroupCallMessages](/constructor/updateDeleteGroupCallMessages/). При модерации сообщений другого участника флаг `report_spam` дополнительно отправляет жалобу на удаляемые сообщения.

[@term:send_as] Отображаемого автора можно задать через поле `send_as` метода [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/) (пир, от имени которого отправляется сообщение) — но только при отправке сообщений и реакций в [живые истории »](#live-stories).

Чтобы получить пиры, которые можно передать в `send_as`, вызовите [channels.getSendAs](/method/channels.getSendAs/) с выставленным флагом `for_live_stories`.

Поле необязательное: если его не передать, сервер использует пир из поля `default_send_as` конструктора [groupCall](/constructor/groupCall/) (если оно задано, иначе берётся текущий пользователь). Клиенты могут сохранить другой выбранный пир методом [phone.saveDefaultSendAs](/method/phone.saveDefaultSendAs/).

Не заполняйте `send_as` для видеочатов/трансляций: в видеочате/трансляции сообщения можно отправлять только от того же пира `join_as`, с которым выполнено подключение к видеочату/трансляции.

#### Реакции во время звонка

Видеочаты/трансляции и живые истории поддерживают анимированные реакции-эмодзи, отправляемые методом [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/); в поле `message` передаётся следующее значение:

1.  Для реакции обычным эмодзи передайте в `message` только сам выбранный доступный эмодзи реакции, без сущностей оформления.
2.  Для реакции пользовательским эмодзи передайте в `message` запасной текстовый эмодзи этого пользовательского эмодзи и ровно одну сущность [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/), покрывающую весь текст.

Входящие реакции доставляются обычными обновлениями [updateGroupCallMessage](/constructor/updateGroupCallMessage/). Клиентам следует распознавать такие полезные нагрузки из одного эмодзи и отрисовывать их анимированным эффектом реакции, а не показывать как обычный текст.

В конференц-звонках используются такие же полезные нагрузки реакций-эмодзи, но их необходимо сериализовать и зашифровать сквозным шифрованием по [схеме реакций во время конференц-звонка »](/api/end-to-end/group-calls/#conference-in-call-reactions).

#### Платные комментарии к живым историям

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;
groupCallMessage#1a8afc7e flags:# from_admin:flags.1?true id:int from_id:Peer date:int message:TextWithEntities paid_message_stars:flags.0?long = GroupCallMessage;
groupCallDonor#ee430c85 flags:# top:flags.0?true my:flags.1?true peer_id:flags.3?Peer stars:long = GroupCallDonor;
phone.groupCallStars#9d1dbd26 total_stars:long top_donors:Vector<GroupCallDonor> chats:Vector<Chat> users:Vector<User> = phone.GroupCallStars;

---functions---

stories.startLive#d069ccde flags:# pinned:flags.2?true noforwards:flags.4?true rtmp_stream:flags.5?true peer:InputPeer caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long messages_enabled:flags.6?Bool send_paid_messages_stars:flags.7?long = Updates;

phone.toggleGroupCallSettings#974392f2 flags:# reset_invite_hash:flags.1?true call:InputGroupCall join_muted:flags.0?Bool messages_enabled:flags.2?Bool send_paid_messages_stars:flags.3?long = Updates;

phone.sendGroupCallMessage#b1d11410 flags:# call:InputGroupCall random_id:long message:TextWithEntities allow_paid_stars:flags.0?long send_as:flags.1?InputPeer = Updates;
phone.getGroupCallStars#6f636302 call:InputGroupCall = phone.GroupCallStars;
```

Прямые истории могут требовать от зрителей пожертвования в [Telegram Stars](/api/stars/), чтобы те могли оставлять комментарии.

Владелец живой истории задаёт минимальное пожертвование при запуске истории через [stories.startLive](/method/stories.startLive/).`send_paid_messages_stars` и может изменить его в любой момент, пока история идёт, с помощью [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/).`send_paid_messages_stars`.  
Текущий минимум всегда доступен в [groupCall](/constructor/groupCall/).`send_paid_messages_stars`; значение `0` (или отсутствие значения) означает, что комментарии бесплатны.  
Владелец всегда может комментировать бесплатно, независимо от текущего минимума.

Чтобы отправить платный комментарий, используйте обычную [последовательность отправки сообщений во время звонка](#in-call-messages) со следующими дополнениями:

1.  Дайте пользователю выбрать и подтвердить размер пожертвования. За исключением владельца (который обязан всегда жертвовать `0`), сумма должна быть **не меньше** текущего минимума в [groupCall](/constructor/groupCall/).`send_paid_messages_stars` и **не больше** [`stars_groupcall_message_amount_max` »](/api/config/#stars-groupcall-message-amount-max).
2.  Вызовите [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/), как описано в [родительском разделе](#in-call-messages), дополнительно передав подтверждённую сумму в `allow_paid_stars`.
3.  Примените возвращённое обновление [updateGroupCallMessage](/constructor/updateGroupCallMessage/): принятый комментарий несёт пожертвованную сумму в [groupCallMessage](/constructor/groupCallMessage/).`paid_message_stars`.

Чем крупнее пожертвование, тем заметнее выделяется комментарий: цвет его фона, время, в течение которого он остаётся закреплённым, а также максимально допустимое количество текста и пользовательских эмодзи — всё это определяется пожертвованной суммой согласно уровням, заданным в параметре конфигурации [`stars_groupcall_message_limits` »](/api/config/#stars-groupcall-message-limits).

Значение `allow_paid_stars` одновременно разрешает пожертвование и задаёт его размер, а баланс Stars пользователя списывается только в случае успешного выполнения запроса. Если средств недостаточно, [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/) возвращает RPC-ошибку `400 BALANCE_TOO_LOW`: предложите пользователю пополнить запас Stars и повторяйте запрос только после повторного подтверждения.

#### Платные пожертвования в живых историях

Прямые истории поддерживают также самостоятельные платные пожертвования, которые отправляются методом [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/), хотя и не содержат текстового сообщения:

1.  Дайте пользователю выбрать и подтвердить положительное количество Telegram Stars для пожертвования.
2.  Вызовите [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/), передав пустой [textWithEntities](/constructor/textWithEntities/) в `message`, выбранную сумму в `allow_paid_stars` и новый сгенерированный клиентом `random_id`. Как обычно, `send_as` необязателен.
3.  Примените возвращённые обновления обычным образом. Пожертвование доставляется участникам в виде [updateGroupCallMessage](/constructor/updateGroupCallMessage/), содержащего [groupCallMessage](/constructor/groupCallMessage/) с пустым полем `message` и пожертвованной суммой в `paid_message_stars`.

Самостоятельные платные пожертвования поддерживаются только живыми историями и отличаются от [эмодзи-реакций](#in-call-reactions). Используйте [phone.getGroupCallStars](/method/phone.getGroupCallStars/), чтобы получить общую сумму пожертвований живой истории и список крупнейших жертвователей.

### Презентации

```
updateGroupCallConnection#0b783982 flags:# presentation:flags.0?true params:DataJSON = Update;

---functions---

phone.joinGroupCallPresentation#cbea6bc4 call:InputGroupCall params:DataJSON = Updates;
phone.editGroupCallParticipant#a5273abf flags:# call:InputGroupCall participant:InputPeer muted:flags.0?Bool volume:flags.1?int raise_hand:flags.2?Bool video_stopped:flags.3?Bool video_paused:flags.4?Bool presentation_paused:flags.5?Bool = Updates;
phone.leaveGroupCallPresentation#1c50d144 call:InputGroupCall = Updates;
```

Презентации (потоки демонстрации экрана) поддерживаются в видеочатах/трансляциях без RTMP и в конференциях. Они не поддерживаются в живых историях и в видеочатах/трансляциях в режиме RTMP.

Пользователь должен сначала подключиться к звонку обычным образом методом [phone.joinGroupCall](/method/phone.joinGroupCall/). Затем создайте отдельный локальный экземпляр движка звонка для презентации и передайте его полезную нагрузку подключения в [phone.joinGroupCallPresentation](/method/phone.joinGroupCallPresentation/).

В результате будет получено обновление [updateGroupCallConnection](/constructor/updateGroupCallConnection/) с установленным флагом `presentation`, в поле `params` которого содержатся параметры подключения для экземпляра презентации.

Используйте [phone.editGroupCallParticipant](/method/phone.editGroupCallParticipant/).`presentation_paused`, чтобы приостановить или возобновить презентацию, и [phone.leaveGroupCallPresentation](/method/phone.leaveGroupCallPresentation/), чтобы остановить её, не покидая основной звонок.

### Режим потока

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;

messageMediaVideoStream#ca5cab89 flags:# rtmp_stream:flags.0?true call:InputGroupCall = MessageMedia;

inputGroupCallStream#0598a92a flags:# call:InputGroupCall time_ms:long scale:int video_channel:flags.0?int video_quality:flags.0?int = InputFileLocation;

groupCallStreamChannel#80eb48af channel:int scale:int last_timestamp_ms:long = GroupCallStreamChannel;
phone.groupCallStreamChannels#d0e482b2 channels:Vector<GroupCallStreamChannel> = phone.GroupCallStreamChannels;
phone.groupCallStreamRtmpUrl#2dbf3432 url:string key:string = phone.GroupCallStreamRtmpUrl;

updateGroupCallConnection#0b783982 flags:# presentation:flags.0?true params:DataJSON = Update;

---functions---

phone.createGroupCall#48cdc6d8 flags:# rtmp_stream:flags.2?true peer:InputPeer random_id:int title:flags.0?string schedule_date:flags.1?int = Updates;
stories.startLive#d069ccde flags:# pinned:flags.2?true noforwards:flags.4?true rtmp_stream:flags.5?true peer:InputPeer caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long messages_enabled:flags.6?Bool send_paid_messages_stars:flags.7?long = Updates;

phone.getGroupCallStreamRtmpUrl#5af4c73a flags:# live_story:flags.0?true peer:InputPeer revoke:Bool = phone.GroupCallStreamRtmpUrl;
phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;
phone.getGroupCallStreamChannels#1ab21940 call:InputGroupCall = phone.GroupCallStreamChannels;
upload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;
```

[@term:stream mode] Режим потока (`stream mode`, также известный как режим вещания) — это режим **воспроизведения** для [видеочатов/трансляций](#video-chats-livestreams) и [живых историй](#live-stories), в котором клиент получает медиаданные звонка, **скачивая фрагменты медиапотока** с медиа-DC, указанного в поле [groupCall](/constructor/groupCall/).`stream_dc_id`, а не обменивается ими по живому WebRTC-соединению. Это не отдельный [тип группового звонка](#group-call-types), и конференц-звонки его не поддерживают.

Звонок может перейти в режим потока двумя разными способами:

-   **Автоматическое масштабирование.** В обычном (не RTMP) видеочате/трансляции или живой истории участники передают и воспроизводят медиаданные по WebRTC, однако воспроизведение через WebRTC не масштабируется на очень большую аудиторию. Как только аудитория превышает заданный сервером порог, сервер прозрачно переводит **слушателей** (участников, которые не передают никаких медиаданных) с воспроизведения по WebRTC на скачивание фрагментов.

    Решение принимает **исключительно сервер**, отдельно по каждому слушателю: клиент просто [подключается к звонку обычным образом](#video-chats-livestreams) и полагается на решение сервера. На момент написания сервер переводит слушателей в режим потока, когда аудитория превышает примерно 30 участников для трансляций в каналах, 1000 участников для видеочатов в супергруппах и обычных группах либо 100 участников при подключении к [тестовому DC »](/api/datacenter/); эти пороги задаются сервером и могут измениться.

-   **Режим RTMP.** Кроме того, создатель звонка может явно выбрать режим RTMP при создании звонка, чтобы всё аудио и видео звонка передавало одно внешнее приложение по [протоколу RTMP](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol), вместо того чтобы участники передавали собственные медиаданные по WebRTC. В этом случае **все** клиенты воспроизводят звонок, скачивая фрагменты, независимо от размера аудитории.

    Звонок в режиме RTMP определяется по полю [groupCall](/constructor/groupCall/).`rtmp_stream` (а для живой истории — также по полю [messageMediaVideoStream](/constructor/messageMediaVideoStream/).`rtmp_stream`).

Механика скачивания фрагментов почти одинакова в обоих случаях; немногочисленные различия отмечены ниже, в разделе [скачивание фрагментов медиапотока »](#downloading-media-chunks).

#### Создание и вещание RTMP-трансляции

```
phone.groupCallStreamRtmpUrl#2dbf3432 url:string key:string = phone.GroupCallStreamRtmpUrl;

---functions---

phone.getGroupCallStreamRtmpUrl#5af4c73a flags:# live_story:flags.0?true peer:InputPeer revoke:Bool = phone.GroupCallStreamRtmpUrl;
phone.createGroupCall#48cdc6d8 flags:# rtmp_stream:flags.2?true peer:InputPeer random_id:int title:flags.0?string schedule_date:flags.1?int = Updates;
stories.startLive#d069ccde flags:# pinned:flags.2?true noforwards:flags.4?true rtmp_stream:flags.5?true peer:InputPeer caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long messages_enabled:flags.6?Bool send_paid_messages_stars:flags.7?long = Updates;
```

Этот подраздел относится только к **режиму RTMP**; у звонка, который перешёл в [режим потока](#stream-mode) сам по себе, нет адреса для вещания по RTMP, и его медиаданные передаются по WebRTC обычным образом.

Перед созданием звонка вызовите [phone.getGroupCallStreamRtmpUrl](/method/phone.getGroupCallStreamRtmpUrl/), чтобы получить URL RTMP-сервера и ключ потока для нужного пира. Устанавливайте `live_story` при подготовке живой истории с RTMP; при подготовке видеочата/трансляции оставляйте его незаполненным.

При последующих вызовах возвращаются те же учётные данные. Чтобы сделать предыдущий ключ потока недействительным и сгенерировать новый, установите `revoke` в [boolTrue](/constructor/boolTrue/). Ключ потока даёт право вести вещание, и его следует держать в секрете.

Создайте RTMP-видеочат/трансляцию методом [phone.createGroupCall](/method/phone.createGroupCall/) с установленным `rtmp_stream` либо создайте RTMP-живую историю методом [stories.startLive](/method/stories.startLive/) с установленным `rtmp_stream`. Видеочаты/трансляции можно также запланировать с помощью поля [phone.createGroupCall](/method/phone.createGroupCall/).`schedule_date`, следуя обычной [схеме работы с запланированным групповым звонком](#video-chats-livestreams).

После этого одно внешнее приложение для вещания может передавать медиаданные на полученный RTMP-адрес, используя полученный ключ потока. Аудио и видео звонка поставляет только этот единственный RTMP-вещатель; остальные участники не могут передавать дополнительные аудио- или видеопотоки. API-клиенты подключаются к групповому звонку лишь для того, чтобы смотреть или слушать транслируемый поток.

#### Определение режима потока

```
updateGroupCallConnection#0b783982 flags:# presentation:flags.0?true params:DataJSON = Update;

---functions---

phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;
```

Подключитесь к звонку методом [phone.joinGroupCall](/method/phone.joinGroupCall/), сформировав `params` так, как описано в документации метода.

Возвращённые [Updates](/type/Updates/) содержат [updateGroupCallConnection](/constructor/updateGroupCallConnection/), поле `params` которого описывает, каким образом подключившийся клиент должен получать медиаданные звонка. Разберите JSON-объект `params`, чтобы определить режим воспроизведения:

-   Обычное воспроизведение по WebRTC: `params` содержит привычную полезную нагрузку ответа на подключение tgcalls.
-   [Режим потока](#stream-mode): `params` равно `{"stream": true}`, **без** поля `rtmp` либо с полем `rtmp`, равным `false`.
-   [Режим RTMP](#creating-and-publishing-an-rtmp-livestream): `params` равно `{"stream": true, "rtmp": true}`.

Иными словами, клиент находится в режиме потока всякий раз, когда `params.stream` равно `true`; наличие `params.rtmp` дополнительно отличает режим RTMP от режима потока, включённого автоматическим масштабированием. Находясь в режиме потока, остановите локальный движок воспроизведения WebRTC (если он есть) и начните [скачивание фрагментов медиапотока »](#downloading-media-chunks). Поле [groupCall](/constructor/groupCall/).`stream_dc_id` задаёт медиа-DC для всех связанных с потоком запросов [upload.getFile](/method/upload.getFile/).

#### Скачивание фрагментов медиапотока

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;
inputGroupCallStream#0598a92a flags:# call:InputGroupCall time_ms:long scale:int video_channel:flags.0?int video_quality:flags.0?int = InputFileLocation;
groupCallStreamChannel#80eb48af channel:int scale:int last_timestamp_ms:long = GroupCallStreamChannel;
phone.groupCallStreamChannels#d0e482b2 channels:Vector<GroupCallStreamChannel> = phone.GroupCallStreamChannels;

---functions---

phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;
phone.getGroupCallStreamChannels#1ab21940 call:InputGroupCall = phone.GroupCallStreamChannels;
upload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;
```

Каждый медиафрагмент скачивается методом [upload.getFile](/method/upload.getFile/): в качестве `location` передаётся [inputGroupCallStream](/constructor/inputGroupCallStream/), а `limit = 1024*1024`; запрос отправляется в дата-центр, указанный в [groupCall](/constructor/groupCall/).`stream_dc_id`.

Конструктор [inputGroupCallStream](/constructor/inputGroupCallStream/) заполняется так:

-   `call` содержит поля `id` и `access_hash` соответствующего группового звонка, взятые из конструктора [groupCall](/constructor/groupCall/).
-   `time_ms` задаёт временную метку запрашиваемого фрагмента; для каждого следующего фрагмента её увеличивают на `segment_duration_ms`.
-   `scale` задаёт длительность сегмента, где `segment_duration_ms := 1000 >> scale`.
-   `video_channel` задаёт запрашиваемый видеоканал (см. разделы про конкретные режимы ниже). Чтобы получить звук, это поле опускают вместе с `video_quality`.
-   `video_quality` задаёт выбранное качество видео (0 — самое низкое, 1 — среднее, 2 — наилучшее).

Обработка ошибок одинакова независимо от того, каким образом звонок перешёл в режим потока:

-   Если [upload.getFile](/method/upload.getFile/) завершается ошибкой `TIME_TOO_BIG` или ошибкой ожидания из-за флуда, значит фрагмент ещё не доступен: следует подождать 100 миллисекунд (независимо от значения `FLOOD_WAIT_%d`) и повторить запрос того же фрагмента.
-   Если возвращается `GROUPCALL_JOIN_MISSING` или `GROUPCALL_FORBIDDEN`, нужно заново присоединиться к звонку через [phone.joinGroupCall](/method/phone.joinGroupCall/).
-   Ответ [upload.fileCdnRedirect](/constructor/upload.fileCdnRedirect/), как и любая другая ошибка RPC, означает, что поток необходимо пересинхронизировать: незавершённые фрагменты отбрасываются, и весь процесс запускается заново.

Способ, которым клиент получает начальную временную метку и перечисляет видеоканалы, различается у двух вариантов режима потока.

##### Режим RTMP

После присоединения к звонку следует вызвать [phone.getGroupCallStreamChannels](/method/phone.getGroupCallStreamChannels/) на медиа-DC, указанном в [groupCall](/constructor/groupCall/).`stream_dc_id` ([`requestCurrentTimeStart` »](https://github.com/telegramdesktop/tdesktop/blob/cb9750427f57e5518ddb8a0fda9f0bb2291c487f/Telegram/SourceFiles/calls/group/calls_group_call.cpp#L3327-L3369)). Возвращённые конструкторы [groupCallStreamChannel](/constructor/groupCallStreamChannel/) описывают доступную в данный момент трансляцию:

-   [@term:endpoint] `channel` — идентификатор канала трансляции. Все возвращённые значения `channel` используются как источники синтетической группы видеоисточников с адресом `unified` (endpoint — имя точки, через которую WebRTC отдаёт конкретный поток); при загрузке видеосегмента нужный канал передаётся в [inputGroupCallStream](/constructor/inputGroupCallStream/).`video_channel` (объединённое видео использует канал `1`).
-   `scale` **устарел** и игнорируется клиентами: вместо объявленного значения клиенты используют длительность медиасегмента, зашитую в [tgcalls](https://github.com/TelegramMessenger/tgcalls) и равную фиксированным 1000 миллисекундам (то есть `scale = 0`, см. [`_segmentDuration` »](https://github.com/TelegramMessenger/tgcalls/blob/616810f1539e3f5ee917fff42557c5eeb8b4be40/tgcalls/group/StreamingMediaContext.cpp#L1048-L1049)). Исторически это поле сообщало длительность сегмента трансляции, где `segment_duration_ms := 1000 >> scale`.
-   `last_timestamp_ms` указывает текущий конец доступной части трансляции.

Пока внешний вещатель не передаёт медиаданные, вектор `channels` может быть пустым: в этом случае следует повторить [phone.getGroupCallStreamChannels](/method/phone.getGroupCallStreamChannels/) через одну секунду ([обработка пустого списка](https://github.com/telegramdesktop/tdesktop/blob/cb9750427f57e5518ddb8a0fda9f0bb2291c487f/Telegram/SourceFiles/calls/group/calls_group_call.cpp#L3348-L3357), а затем повтор при `time_ms <= 0` в функции [`requestSegmentsIfNeeded` »](https://github.com/TelegramMessenger/tgcalls/blob/616810f1539e3f5ee917fff42557c5eeb8b4be40/tgcalls/group/StreamingMediaContext.cpp#L642-L664) из tgcalls). Как только получена пригодная начальная временная метка, опрашивать этот метод больше не нужно — до тех пор, пока фрагменты продолжают успешно загружаться.

Чтобы выбрать временную метку первого фрагмента, значение `last_timestamp_ms` округляют вниз до кратного длительности сегмента (упомянутых выше зашитых 1000 миллисекунд, а **не** устаревшего поля `scale`) и вычитают желаемый буфер воспроизведения. Например, для буфера в 2000 миллисекунд:

```
segment_duration_ms := 1000
time_ms := (last_timestamp_ms / segment_duration_ms * segment_duration_ms) - 2000
```

Если получившееся значение `time_ms` не положительно, следует повторить [phone.getGroupCallStreamChannels](/method/phone.getGroupCallStreamChannels/) через одну секунду.

В режиме RTMP звук и видео мультиплексированы в единый канал `unified`: загрузка фрагмента с `video_channel = 1` возвращает и звук, и видео этого сегмента. В tgcalls этот путь «объединённой трансляции» всегда запрашивает канал `1` в максимальном качестве и разделяет звуковую и видеодорожки внутри одной и той же скачанной части ([`requestSegmentsIfNeeded` »](https://github.com/TelegramMessenger/tgcalls/blob/616810f1539e3f5ee917fff42557c5eeb8b4be40/tgcalls/group/StreamingMediaContext.cpp#L902) и [декодирование объединённой части](https://github.com/TelegramMessenger/tgcalls/blob/616810f1539e3f5ee917fff42557c5eeb8b4be40/tgcalls/group/StreamingMediaContext.cpp#L925-L932)).

##### Режим потока с автоматическим масштабированием

Здесь [phone.getGroupCallStreamChannels](/method/phone.getGroupCallStreamChannels/) не используется. Текущая временная метка трансляции вместо этого вычисляется из приблизительного серверного времени, синхронизированного клиентом локально (того самого серверного времени, которое получают из последовательности идентификаторов сообщений MTProto, см. [`TimestampInMsFromMsgId` »](https://github.com/telegramdesktop/tdesktop/blob/cb9750427f57e5518ddb8a0fda9f0bb2291c487f/Telegram/SourceFiles/calls/group/calls_group_call.cpp#L75-L77) и [`approximateServerTimeInMs` »](https://github.com/telegramdesktop/tdesktop/blob/cb9750427f57e5518ddb8a0fda9f0bb2291c487f/Telegram/SourceFiles/calls/group/calls_group_call.cpp#L3379-L3382)): его округляют вниз до кратного длительности сегмента, вычитают желаемый буфер воспроизведения и дальше наращивают ([`requestSegmentsIfNeeded` »](https://github.com/TelegramMessenger/tgcalls/blob/616810f1539e3f5ee917fff42557c5eeb8b4be40/tgcalls/group/StreamingMediaContext.cpp#L643)). Длительность сегмента фиксирована и равна 1000 миллисекундам (то есть `scale = 0`), а буфер воспроизведения по умолчанию — 2000 миллисекунд ([`_segmentDuration`/`_segmentBufferDuration` »](https://github.com/TelegramMessenger/tgcalls/blob/616810f1539e3f5ee917fff42557c5eeb8b4be40/tgcalls/group/StreamingMediaContext.cpp#L1048-L1049)).

В отличие от режима RTMP, звук и видео каждого вещателя скачиваются **отдельными** фрагментами ([`beginPartTask` »](https://github.com/TelegramMessenger/tgcalls/blob/616810f1539e3f5ee917fff42557c5eeb8b4be40/tgcalls/group/StreamingMediaContext.cpp#L898-L902)):

-   Чтобы получить сведённый звук всего звонка, опускают и `video_channel`, и `video_quality` — в ответ приходит фрагмент только со звуком.
-   Чтобы получить видео конкретного вещателя, в `video_channel` указывают идентификатор канала этого вещателя (см. ниже), а в `video_quality` — желаемое качество.

Идентификаторы видеоканалов извлекаются из звуковых фрагментов: каждый фрагмент сведённого звука (в формате OGG) содержит отображение адресов (endpoint ID) вещателей в WebRTC на индексы каналов, нумеруемые с нуля; это отображение доступно через метаданные трансляции `ENDPOINTS` и `ACTIVE_MASK` ([`AudioStreamingPartInternal` »](https://github.com/TelegramMessenger/tgcalls/blob/616810f1539e3f5ee917fff42557c5eeb8b4be40/tgcalls/group/AudioStreamingPartInternal.cpp#L165-L189)). Чтобы воспроизвести видео определённого вещателя, нужно найти его endpoint ID в этом отображении и передать `mapping_index + 1` в [inputGroupCallStream](/constructor/inputGroupCallStream/).`video_channel` ([`requestSegmentsIfNeeded` »](https://github.com/TelegramMessenger/tgcalls/blob/616810f1539e3f5ee917fff42557c5eeb8b4be40/tgcalls/group/StreamingMediaContext.cpp#L698-L707)). Набор вещателей, чьё видео следует показывать (и с каким качеством), берётся из списка участников группового звонка — ровно так же, как в обычном видеочате на WebRTC.

Эталонная реализация: [tgcalls `StreamingMediaContext` »](https://github.com/TelegramMessenger/tgcalls/blob/616810f1539e3f5ee917fff42557c5eeb8b4be40/tgcalls/group/StreamingMediaContext.cpp), управляемая классом [`GroupCall` »](https://github.com/telegramdesktop/tdesktop/blob/cb9750427f57e5518ddb8a0fda9f0bb2291c487f/Telegram/SourceFiles/calls/group/calls_group_call.cpp) из tdesktop.
