---
title: "Реакции на сообщения"
original: "https://core.telegram.org/api/reactions"
section: api
description: "Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации."
layout: layout.njk
---

# Реакции на сообщения

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.

### Реакция на сообщение

```
reactionEmoji#1b2286b8 emoticon:string = Reaction;
reactionCustomEmoji#8935fc73 document_id:long = Reaction;
reactionPaid#523da4eb = Reaction;

reactionCount#a3d1cb80 flags:# chosen_order:flags.0?int reaction:Reaction count:int = ReactionCount;

messagePeerReaction#8c79b63c flags:# big:flags.0?true unread:flags.1?true my:flags.2?true peer_id:Peer date:int reaction:Reaction = MessagePeerReaction;

messageReactions#0a339f0b flags:# min:flags.0?true can_see_list:flags.2?true reactions_as_tags:flags.3?true results:Vector<ReactionCount> recent_reactions:flags.1?Vector<MessagePeerReaction> top_reactors:flags.4?Vector<MessageReactor> = MessageReactions;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;

updateMessageReactions#1e297bfa flags:# peer:Peer msg_id:int top_msg_id:flags.0?int saved_peer_id:flags.1?Peer reactions:MessageReactions = Update;

messages.messageReactionsList#31bd492d flags:# count:int reactions:Vector<MessagePeerReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.MessageReactionsList;

---functions---

messages.sendReaction#d30d78d4 flags:# big:flags.1?true add_to_recent:flags.2?true peer:InputPeer msg_id:int reaction:flags.0?Vector<Reaction> = Updates;
messages.getMessagesReactions#8bba90e6 peer:InputPeer id:Vector<int> = Updates;
messages.getMessageReactionsList#461b3f48 flags:# peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = messages.MessageReactionsList;

messages.getUnreadReactions#bd7f90ac flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.readReactions#9ec44f93 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;

messages.reportReaction#3f64c076 peer:InputPeer id:int reaction_peer:InputPeer = Bool;
```

Пользователи могут отреагировать на сообщение одной или несколькими реакциями с помощью метода [messages.sendReaction](/method/messages.sendReaction/); реагировать можно и на [сервисные сообщения »](/constructor/messageService/), у которых выставлен флаг `reactions_are_possible`.  
После отправки реакции для неё будет заполнено поле `chosen_order` в конструкторе [reactionCount](/constructor/reactionCount/) (внутри [messageReactions](/constructor/messageReactions/)). Целочисленное значение показывает, когда реакция была добавлена: чем больше значение, тем новее реакция; используйте его, чтобы правильно упорядочить вектор `messages.sendReaction:reaction` при добавлении новых реакций.  
Реакции следует отправлять **по возрастанию** (новые реакции — в конце вектора `messages.sendReaction:reaction`), а при добавлении новых реакций к тому же сообщению более старые реакции следует удалять, чтобы общее число отправленных реакций не превышало [reactions\_user\_max\_default](/api/config/#reactions-user-max-default)/[reactions\_user\_max\_premium](/api/config/#reactions-user-max-premium).  
Поле конфигурации [reactions\_uniq\_max](/api/config/#reactions-uniq-max) задаёт, кроме того, максимальное число уникальных реакций, которые можно добавить к сообщению: например, если реакций <img class="emoji" src="https://telegram.org/img/emoji/40/F09F918D.png" width="20" height="20" alt="👍"> 2000, реакций пользовательским эмодзи <img class="emoji" src="https://telegram.org/img/emoji/40/F09F9881.png" width="20" height="20" alt="😁"> 1000, а reactions\_uniq\_max = 2, то добавить реакцию <img class="emoji" src="https://telegram.org/img/emoji/40/F09F918E.png" width="20" height="20" alt="👎"> уже нельзя: это подняло бы число уникальных реакций до 3 > 2.

Чаты и каналы также могут задать собственный лимит уникальных реакций; эта информация доступна пользователям в полях [channelFull](/constructor/channelFull/).`reactions_limit` и [chatFull](/constructor/chatFull/).`reactions_limit`.

Дополнительно можно выставить флаг `big`, чтобы реакция была показана крупнее.  
Передайте [reactionEmoji](/constructor/reactionEmoji/), чтобы отреагировать обычным эмодзи, и [reactionCustomEmoji](/constructor/reactionCustomEmoji/) — чтобы отреагировать [пользовательским эмодзи](/api/custom-emoji/).  
Авторы сообщений получат обновление [updateMessageReactions](/constructor/updateMessageReactions/), когда пользователь реагирует на их сообщение, — если это включено, как описано [здесь »](#notifications-about-reactions).

Метод [messages.getMessagesReactions](/method/messages.getMessagesReactions/) позволяет получить полный список реакций для одного или нескольких сообщений.  
Приложениям следует раз в 15–30 секунд коротким опросом обновлять реакции видимых сообщений (отправленных не самим пользователем), но только если поле `message.reactions` заполнено.

[@term:peer] В группах метод [messages.getMessageReactionsList](/method/messages.getMessageReactionsList/) позволяет получить список реакций вместе с отправителем каждой из них.  
В группах метод [messages.reportReaction](/method/messages.reportReaction/) позволяет пожаловаться на конкретную реакцию [пользовательским эмодзи](/api/custom-emoji/), указав `peer` — пир, то есть пользователя, чат или канал, — а также `id` сообщения и пользователя, отправившего реакцию (`reaction_peer`).

Метод [messages.getUnreadReactions](/method/messages.getUnreadReactions/) используется для получения сообщений с непрочитанными реакциями.  
Метод [messages.readReactions](/method/messages.readReactions/) отмечает все реакции в определённом чате как прочитанные.

Для [сохранённых сообщений](/api/saved-messages/), если у [messageReactions](/constructor/messageReactions/) выставлен флаг `reactions_as_tags` либо если реакций нет вовсе, все текущие и будущие реакции следует трактовать как [теги сообщений, подробнее см. здесь »](/api/saved-messages/#tags).

### Платные реакции

```
reactionPaid#523da4eb = Reaction;

---functions---

messages.setChatAvailableReactions#864b2581 flags:# peer:InputPeer available_reactions:ChatReactions reactions_limit:flags.0?int paid_enabled:flags.1?Bool = Updates;

messages.sendPaidReaction#58bbcb50 flags:# peer:InputPeer msg_id:int count:int random_id:long private:flags.0?PaidReactionPrivacy = Updates;
```

Платные реакции (они же звёздные реакции) можно отправлять на посты каналов, вызывая [messages.sendPaidReaction](/method/messages.sendPaidReaction/): это переведёт `count` Telegram Stars на баланс канала и увеличит на `count` счётчик звёздной реакции с типом [reactionPaid](/constructor/reactionPaid/).

**Примечание**: аргумент `random_id` метода [messages.sendPaidReaction](/method/messages.sendPaidReaction/) **обязан** быть 64-битным целым, у которого младшие 32 бита случайны, а старшие 32 бита **равны текущему unixtime**, то есть `uint64_t random_id = (time() << 32) | ((uint64_t)random_uint32_t())`: это отличается от формата `random_id` во всех остальных методах API, где используются просто 64 случайных бита.

Чтобы включить платные реакции, администраторы канала должны вызвать [messages.setChatAvailableReactions](/method/messages.setChatAvailableReactions/), передав [boolTrue](/constructor/boolTrue/) в `paid_enabled` и ранее настроенный набор реакций в `available_reactions` (поле `reactions_limit` можно опустить: если флаг не передан, сохранится ранее заданное значение).

Пользователи могут определить, поддерживает ли канал платные реакции, проверив значение флага [channelFull](/constructor/channelFull/).`paid_reactions_available`.

Максимальное число платных реакций, которые можно отправить на один пост, задаётся значением клиентской конфигурации [stars\_paid\_reaction\_amount\_max »](/api/config/#stars-paid-reaction-amount-max).

#### Приватность платных реакций

```
paidReactionPrivacyDefault#206ad49e = PaidReactionPrivacy;
paidReactionPrivacyAnonymous#1f0c1ad9 = PaidReactionPrivacy;
paidReactionPrivacyPeer#dc6cfcf0 peer:InputPeer = PaidReactionPrivacy;

updatePaidReactionPrivacy#8b725fce private:PaidReactionPrivacy = Update;

updateMessageReactions#1e297bfa flags:# peer:Peer msg_id:int top_msg_id:flags.0?int saved_peer_id:flags.1?Peer reactions:MessageReactions = Update;

messageReactions#0a339f0b flags:# min:flags.0?true can_see_list:flags.2?true reactions_as_tags:flags.3?true results:Vector<ReactionCount> recent_reactions:flags.1?Vector<MessagePeerReaction> top_reactors:flags.4?Vector<MessageReactor> = MessageReactions;

messageReactor#4ba3a95a flags:# top:flags.0?true my:flags.1?true anonymous:flags.2?true peer_id:flags.3?Peer count:int = MessageReactor;

channels.sendAsPeers#f496b0c6 peers:Vector<SendAsPeer> chats:Vector<Chat> users:Vector<User> = channels.SendAsPeers;

---functions---

messages.getPaidReactionPrivacy#472455aa = Updates;

messages.sendPaidReaction#58bbcb50 flags:# peer:InputPeer msg_id:int count:int random_id:long private:flags.0?PaidReactionPrivacy = Updates;

messages.togglePaidReactionPrivacy#435885b5 peer:InputPeer msg_id:int private:PaidReactionPrivacy = Bool;

messages.getMessagesReactions#8bba90e6 peer:InputPeer id:Vector<int> = Updates;

channels.getSendAs#e785a43f flags:# for_paid_reactions:flags.0?true for_live_stories:flags.1?true peer:InputPeer = channels.SendAsPeers;
```

У каждого поста со звёздными реакциями есть таблица лидеров с ведущими отправителями, но пользователи, которым важна приватность, могут не попадать в неё — для этого достаточно указать подходящий объект [PaidReactionPrivacy](/type/PaidReactionPrivacy/); если объект не передан, применяется настройка приватности реакций по умолчанию, которая хранится на сервере и синхронизируется с клиентами через [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) (подробнее ниже).

Реакцию можно отправить и от имени принадлежащего вам канала; вызовите [channels.getSendAs](/method/channels.getSendAs/) с флагом `for_paid_reactions`, чтобы получить список каналов, от имени которых разрешено отправлять реакции.

Чтобы изменить приватность уже отправленных платных реакций, вызовите [messages.togglePaidReactionPrivacy](/method/messages.togglePaidReactionPrivacy/), передав идентификатор сообщения, канал и желаемую настройку приватности.

Явное указание собственной настройки приватности реакций, а также изменение приватности уже отправленных реакций обновляет хранящуюся на сервере настройку по умолчанию: если новое значение отличается от старого, будет отправлено обновление [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/).  
Клиентам следует вызывать [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/) при запуске, чтобы получить текущую настройку приватности реакций по умолчанию (поскольку обновление [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) отправляется только сессиям, находящимся в сети в этот момент, и не может быть получено через getDifference при старте клиента).

Чтобы получить таблицу лидеров по платным реакциям, вызовите [messages.getMessagesReactions](/method/messages.getMessagesReactions/): в возвращённом конструкторе [updateMessageReactions](/constructor/updateMessageReactions/) будет вектор `top_reactors` из объектов [messageReactor](/constructor/messageReactor/), содержащий таблицу лидеров платных реакций для этого сообщения.

### Реакция на историю

Подробнее о том, как отреагировать на историю, см. [здесь »](/api/stories/#reactions).

### Удаление реакций участника

```
---functions---

messages.deleteParticipantReaction#e3b7f82c peer:InputPeer msg_id:int participant:InputPeer = Updates;
messages.deleteParticipantReactions#a0b80cf8 peer:InputPeer participant:InputPeer = Bool;
```

Администраторы группы или канала могут модерировать реакции, оставленные конкретным участником.

Метод [messages.deleteParticipantReaction](/method/messages.deleteParticipantReaction/) удаляет все реакции, оставленные пиром `participant` под одним сообщением (оно задаётся полем `msg_id`) в пире `peer`.

Метод [messages.deleteParticipantReactions](/method/messages.deleteParticipantReactions/) удаляет все реакции, оставленные пиром `participant` под всеми сообщениями в пире `peer`.

### Уведомления о реакциях

```
reactionNotificationsFromContacts#bac3a61a = ReactionNotificationsFrom;
reactionNotificationsFromAll#4b9e22a0 = ReactionNotificationsFrom;

reactionsNotifySettings#71e4ea58 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom poll_votes_notify_from:flags.2?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;

updateNewStoryReaction#1824e40b story_id:int peer:Peer reaction:Reaction = Update;
updateMessageReactions#1e297bfa flags:# peer:Peer msg_id:int top_msg_id:flags.0?int saved_peer_id:flags.1?Peer reactions:MessageReactions = Update;

---functions---

account.setReactionsNotifySettings#316ce548 settings:ReactionsNotifySettings = ReactionsNotifySettings;
account.getReactionsNotifySettings#06dd654c = ReactionsNotifySettings;
```

Пользователи могут выбрать, получать ли уведомления о реакциях на свои сообщения и истории от любых пользователей, только от контактов, либо полностью отключить такие уведомления.

Эти настройки уведомлений о реакциях можно изменить методом [account.setReactionsNotifySettings](/method/account.setReactionsNotifySettings/) и получить методом [account.getReactionsNotifySettings](/method/account.getReactionsNotifySettings/).

Для реакций можно также задать собственный [звук уведомления »](/api/ringtones/) — в поле `sound` конструктора [reactionsNotifySettings](/constructor/reactionsNotifySettings/).

Если `show_previews=false`, [push-уведомления »](/api/push-updates/) о реакциях на сообщения и истории будут приходить только с типом `REACT_HIDDEN`/`REACT_STORY_HIDDEN` — без каких-либо сведений об истории, на которую отреагировали, и о самой реакции.

### Анимированные обычные эмодзи

```
reactionEmoji#1b2286b8 emoticon:string = Reaction;

availableReaction#c077ec01 flags:# inactive:flags.0?true premium:flags.2?true reaction:string title:string static_icon:Document appear_animation:Document select_animation:Document activate_animation:Document effect_animation:Document around_animation:flags.1?Document center_icon:flags.1?Document = AvailableReaction;

messages.availableReactionsNotModified#9f071957 = messages.AvailableReactions;
messages.availableReactions#768e3aad hash:int reactions:Vector<AvailableReaction> = messages.AvailableReactions;

inputStickerSetEmojiGenericAnimations#04c4d4ce = InputStickerSet;

---functions---

messages.getAvailableReactions#18dea0ac hash:int = messages.AvailableReactions;
```

Метод [messages.getAvailableReactions](/method/messages.getAvailableReactions/) позволяет получить список анимаций, которые проигрываются при реакции обычным эмодзи [reactionEmoji](/constructor/reactionEmoji/).  
Возвращаемый вектор конструкторов [availableReaction](/constructor/availableReaction/) содержит несколько полей с [анимированными стикерами](/api/stickers/) в формате lottie и с обычными изображениями; их следует разместить, показать и проиграть в интерфейсе должным образом, как описано на [странице конструктора »](/constructor/availableReaction/).

Пользователи могут реагировать и [пользовательскими эмодзи »](/api/custom-emoji/); в этом случае поля `appear_animation` и `select_animation` совпадают с самим пользовательским эмодзи, который можно получить [как описано здесь »](/api/custom-emoji/).  
Для пользовательских эмодзи поле `effect_animation` обязано совпадать с полем `effect_animation` связанного с ним обычного эмодзи: если для обычного эмодзи, связанного с пользовательским, анимации эффекта нет, следует проиграть случайный [анимированный стикер](/api/stickers/) из набора [inputStickerSetEmojiGenericAnimations](/constructor/inputStickerSetEmojiGenericAnimations/), полученного методом [messages.getStickerSet](/method/messages.getStickerSet/), как описано [здесь »](/api/stickers/#stickersets).

### Доступные реакции в группе или канале

```
reactionEmoji#1b2286b8 emoticon:string = Reaction;
reactionCustomEmoji#8935fc73 document_id:long = Reaction;

chatReactionsNone#eafc32bc = ChatReactions;
chatReactionsAll#52928bca flags:# allow_custom:flags.0?true = ChatReactions;
chatReactionsSome#661d4037 reactions:Vector<Reaction> = ChatReactions;

chatFull#2633421b flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions reactions_limit:flags.20?int = ChatFull;
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

channelAdminLogEventActionChangeAvailableReactions#be4e0ef8 prev_value:ChatReactions new_value:ChatReactions = ChannelAdminLogEventAction;

---functions---

messages.setChatAvailableReactions#864b2581 flags:# peer:InputPeer available_reactions:ChatReactions reactions_limit:flags.0?int paid_enabled:flags.1?Bool = Updates;
```

Администраторы чатов и каналов могут воспользоваться методом [messages.setChatAvailableReactions](/method/messages.setChatAvailableReactions/), чтобы ограничить набор реакций, доступных в чате или канале; список возможных значений настройки приведён [здесь »](/type/ChatReactions/).  
Заданный конструктор [ChatReactions](/type/ChatReactions/) пользователи затем могут получить методом [messages.getFullChat](/method/messages.getFullChat/) — он содержится в поле `available_reactions` возвращаемого конструктора с полной информацией.

Необязательное поле `reactions_limit` позволяет задать собственный предел числа уникальных реакций (то есть настраиваемый вариант [appConfig.reactions\_uniq\_max](/api/config/#reactions-uniq-max)); это поле и остальные сведения, заданные методом, становятся доступны пользователям в [channelFull](/constructor/channelFull/) и [chatFull](/constructor/chatFull/).

Поле конфигурации [reactions\_in\_chat\_max](/api/config/#reactions-in-chat-max) задаёт максимальное количество реакций, которое можно указать в [chatReactionsSome](/constructor/chatReactionsSome/).

### Недавние реакции

```
reactionEmoji#1b2286b8 emoticon:string = Reaction;
reactionCustomEmoji#8935fc73 document_id:long = Reaction;

messages.reactionsNotModified#b06fdbdf = messages.Reactions;
messages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;

updateRecentReactions#6f7863f4 = Update;

---functions---

messages.getRecentReactions#39461db2 limit:int hash:long = messages.Reactions;
messages.clearRecentReactions#9dfeefb4 = Bool;

messages.sendReaction#d30d78d4 flags:# big:flags.1?true add_to_recent:flags.2?true peer:InputPeer msg_id:int reaction:flags.0?Vector<Reaction> = Updates;
```

Список недавно использованных реакций можно получить методом [messages.getRecentReactions](/method/messages.getRecentReactions/), а очистить — методом [messages.clearRecentReactions](/method/messages.clearRecentReactions/).

Флаг `add_to_recent` метода [messages.sendReaction](/method/messages.sendReaction/) должен быть установлен тогда и только тогда, когда:

-   Пользователь реагирует на сообщение через расширенное меню реакций (а не нажатием на пузырёк уже поставленной реакции)
-   Пользователь не поставил [платную реакцию](#paid-reactions)

Установка флага `add_to_recent` в методе [messages.sendReaction](/method/messages.sendReaction/) обновляет список недавних реакций, что вызывает обновление [updateRecentReactions](/constructor/updateRecentReactions/) в остальных авторизованных сессиях.

Получив [updateRecentReactions](/constructor/updateRecentReactions/), клиентам следует вызвать [messages.getRecentReactions](/method/messages.getRecentReactions/), чтобы обновить локально закешированный список.

[@term:hash] Клиент, вызвавший [messages.sendReaction](/method/messages.sendReaction/), обновления [updateRecentReactions](/constructor/updateRecentReactions/) не получит: в этом случае он может либо вручную вызывать [messages.getRecentReactions](/method/messages.getRecentReactions/) при каждой отправке реакции с флагом `add_to_recent`, либо, чтобы избежать лишнего запроса, обновлять локальный список самостоятельно, заново вычисляя `hash` (хеш выборки — контрольное значение, по которому сервер понимает, изменился ли список) по следующему алгоритму:

```
reactions.prepend(new_reaction)

string remove_emoji_selectors(string emoji) {
  string str;
  for (i = 0; i < len(emoji); i++) {
    if (i + 3 <= len(emoji) && emoji[i] == '\xEF' && emoji[i + 1] == '\xB8' && emoji[i + 2] == '\x8F') {
      // skip \uFE0F
      i += 2;
    } else {
      str += emoji[i];
    }
  }
  return str;
}

// Take the char at the specified offset, zero-pad it to a 32-bit integer.  
uint32 get_char(string str, int offset) {
    uint8 char = str[offset];
    return (uint32) char;
}

vector<uint64> hash_ints = [];
foreach (reactions as reaction) {
  if reaction instanceof reactionEmoji {
    string emoji = remove_emoji_selectors(reaction.emoticon);
    // Binary md5 hash, not hex
    string hash = md5(emoji);

    hash_ints.append(0);

    // First cast to signed int32, then signed int64, then unsigned 64-bit integer.
    // In other words, cast to a signed int, sign-extend to 64-bit, 
    // then cast back to an unsigned integer.  
    //
    hash_ints.append((uint64) ((int64) (
        (int32)(
            (
                get_char(hash, 0) << 24
            ) + (
                get_char(hash, 1) << 16
            ) + (
                get_char(hash, 2) << 8
            ) + get_char(hash, 3)
        )
    )));
  } else if reaction instanceof reactionCustomEmoji {
    hash_ints.append(reaction.document_id >> 32)
    hash_ints.append(reaction.document_id & 0xFFFFFFFF)
  }
} 
```

Полученный список 64-битных целых чисел затем передаётся [обычному алгоритму хеширования](/api/offsets/#hash-generation).

### Рекомендуемые реакции

```
reactionEmoji#1b2286b8 emoticon:string = Reaction;
reactionCustomEmoji#8935fc73 document_id:long = Reaction;

messages.reactionsNotModified#b06fdbdf = messages.Reactions;
messages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;

---functions---

messages.getTopReactions#bb8125ba limit:int hash:long = messages.Reactions;
```

Список рекомендуемых реакций-эмодзи и реакций из [пользовательских эмодзи](/api/custom-emoji/) можно получить методом [messages.getTopReactions](/method/messages.getTopReactions/).

### Установка реакции по умолчанию

```
reactionEmoji#1b2286b8 emoticon:string = Reaction;
reactionCustomEmoji#8935fc73 document_id:long = Reaction;

config#cc1a241e flags:# default_p2p_contacts:flags.3?true preload_featured_stickers:flags.4?true revoke_pm_inbox:flags.6?true blocked_mode:flags.8?true force_try_ipv6:flags.14?true date:int expires:int test_mode:Bool this_dc:int dc_options:Vector<DcOption> dc_txt_domain_name:string chat_size_max:int megagroup_size_max:int forwarded_count_max:int online_update_period_ms:int offline_blur_timeout_ms:int offline_idle_timeout_ms:int online_cloud_timeout_ms:int notify_cloud_delay_ms:int notify_default_delay_ms:int push_chat_period_ms:int push_chat_limit:int edit_time_limit:int revoke_time_limit:int revoke_pm_time_limit:int rating_e_decay:int stickers_recent_limit:int channels_read_media_period:int tmp_sessions:flags.0?int call_receive_timeout_ms:int call_ring_timeout_ms:int call_connect_timeout_ms:int call_packet_timeout_ms:int me_url_prefix:string autoupdate_url_prefix:flags.7?string gif_search_username:flags.9?string venue_search_username:flags.10?string img_search_username:flags.11?string static_maps_provider:flags.12?string caption_length_max:int message_length_max:int webfile_dc_id:int suggested_lang_code:flags.2?string lang_pack_version:flags.2?int base_lang_pack_version:flags.2?int reactions_default:flags.15?Reaction autologin_token:flags.16?string = Config;

updateConfig#a229dd06 = Update;

---functions---

messages.setDefaultReaction#4f47a016 reaction:Reaction = Bool;

help.getConfig#c4f9186b = Config;
```

[@term:quick reaction] Метод [messages.setDefaultReaction](/method/messages.setDefaultReaction/) позволяет изменить эмодзи-реакцию по умолчанию, которая используется в меню быстрой реакции (`quick reaction` — реакция, отправляемая одним нажатием, без выбора из полного списка).  
Это значение синхронизируется между устройствами через [updateConfig](/constructor/updateConfig/); получить его можно с помощью [help.getConfig](/method/help.getConfig/), поле `reactions_default`.
