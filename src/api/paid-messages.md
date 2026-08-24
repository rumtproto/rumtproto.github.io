---
title: "Платные сообщения"
original: "https://core.telegram.org/api/paid-messages"
section: api
description: "Telegram Stars можно использовать для оплаты отправки сообщений пользователям, супергруппам и каналам, у которых включены Star Messages »: такие пиры требуют оплату за каждое…"
layout: layout.njk
---

# Платные сообщения

[@term:peer] Telegram Stars можно использовать для оплаты отправки сообщений пользователям, супергруппам и каналам, у которых настроены [Star Messages »](https://telegram.org/blog/star-messages-gateway-2-0-and-more#stay-in-control-of-your-inbox-with-star-messages): такие пиры (`peer` — пир, то есть адресат: пользователь, чат или канал) требуют оплаты за каждое отправленное им сообщение.

### Включение и отключение платных сообщений

```
globalPrivacySettings#fe41b34f flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?long disallowed_gifts:flags.6?DisallowedGiftsSettings = GlobalPrivacySettings;

peerSettings#f47741f7 flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int business_bot_id:flags.13?long business_bot_manage_url:flags.13?string charge_paid_message_stars:flags.14?long registration_month:flags.15?string phone_country:flags.16?string name_change_date:flags.17?int photo_change_date:flags.18?int = PeerSettings;

inputPrivacyKeyNoPaidMessages#bdc597b4 = InputPrivacyKey;

privacyKeyNoPaidMessages#17d348d2 = PrivacyKey;

account.paidMessagesRevenue#1e109708 stars_amount:long = account.PaidMessagesRevenue;

messageActionPaidMessagesRefunded#ac1f1fcd count:int stars:long = MessageAction;

messageActionPaidMessagesPrice#84b88578 flags:# broadcast_messages_allowed:flags.0?true stars:long = MessageAction;

updateMonoForumNoPaidException#9f812b08 flags:# exception:flags.0?true channel_id:long saved_peer_id:Peer = Update;

---functions---

account.setGlobalPrivacySettings#1edaaac2 settings:GlobalPrivacySettings = GlobalPrivacySettings;
channels.updatePaidMessagesPrice#4b12327b flags:# broadcast_messages_allowed:flags.0?true channel:InputChannel send_paid_messages_stars:long = Updates;

account.toggleNoPaidMessagesException#fe2eda76 flags:# refund_charged:flags.0?true require_payment:flags.2?true parent_peer:flags.1?InputPeer user_id:InputUser = Bool;

messages.getPeerSettings#efd9a6a2 peer:InputPeer = messages.PeerSettings;

account.getPaidMessagesRevenue#19ba4a67 flags:# parent_peer:flags.0?InputPeer user_id:InputUser = account.PaidMessagesRevenue;
```

Количество звёзд, необходимое для отправки нам сообщений, задаётся так:

-   Для личных сообщений в наш адрес — в поле [globalPrivacySettings](/constructor/globalPrivacySettings/).`noncontact_peers_paid_stars` [глобальной настройки приватности](/api/privacy/#global-privacy-settings); переключить его можно, только если [stars\_paid\_messages\_available](/api/config/#stars-paid-messages-available) равно true и у текущего пользователя есть [подписка Premium](/api/premium/).
-   Для [супергрупп и прямых сообщений каналам](/api/channel/) — методом [channels.updatePaidMessagesPrice](/method/channels.updatePaidMessagesPrice/).  
    При выборе цены для [прямых сообщений каналу](/api/monoforum/) интерфейсу следует показывать в качестве начального значения по умолчанию [stars\_paid\_messages\_channel\_amount\_default »](/api/config/#stars-paid-messages-channel-amount-default).

Максимально допустимое количество звёзд указано в [stars\_paid\_message\_amount\_max »](/api/config/#stars-paid-message-amount-max).

После включения платных сообщений платить за отправку нам сообщения не придётся только следующим пользователям:

-   Для личных сообщений:

    -   Пользователям из нашего списка контактов
    -   Пользователям, которым мы написали первыми
    -   Пользователям, которых мы явно освободили от оплаты через [настройку приватности »](/api/privacy/) [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/) со значением [inputPrivacyValueAllowUsers](/constructor/inputPrivacyValueAllowUsers/).  
        Обратите внимание: с помощью [inputPrivacyValueAllowChatParticipants](/constructor/inputPrivacyValueAllowChatParticipants/) можно также освободить от оплаты всех пользователей, которые впервые пишут нам через одно из наших сообщений в чате (реализовано через [min-конструкторы »](/api/min/)).
    -   Пользователям, которых мы явно освободили от оплаты методом [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/): это просто другой способ изменить список разрешений приватности [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/) для отдельных пиров, не запрашивая текущий список целиком.  
        Учтите, что этот метод может только добавлять пользователей в список разрешений [inputPrivacyValueAllowUsers](/constructor/inputPrivacyValueAllowUsers/), но не удалять их оттуда.

    У всех пользователей, обязанных платить за отправку нам личных сообщений, будет установлен флаг [peerSettings](/constructor/peerSettings/).`charge_paid_message_stars` — _только для нас_ — с требуемым количеством звёзд.

-   Для супергрупп:

    -   Администраторам, и только если установлен флаг [channelFull](/constructor/channelFull/).`paid_messages_available`.
-   [@term:monoforum] Для [прямых сообщений каналу, то есть монофорумов »](/api/monoforum/) — монофорум — это служебный чат-спутник канала, куда подписчики пишут каналу лично:

    -   Пользователям, которых мы явно освободили от оплаты методом [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/) с полем `parent_peer`, равным ID монофорума.  
        У освобождённых пользователей будет установлен флаг [monoForumDialog](/constructor/monoForumDialog/).`nopaid_messages_exception`, а изменения породят обновление [updateMonoForumNoPaidException](/constructor/updateMonoForumNoPaidException/) для остальных администраторов монофорума и для других сессий текущего авторизованного администратора монофорума.  
        Учтите, что в отличие от случая с пользователями, при работе с монофорумами этот метод может как добавлять пользователей в список разрешений, так и удалять их из него.

Включение, отключение или изменение цены платных сообщений порождает сервисное сообщение [messageActionPaidMessagesPrice](/constructor/messageActionPaidMessagesPrice/) в соответствующем личном чате, супергруппе или канале (в последнем случае — для прямых сообщений в связанном монофоруме).

Количество полученных звёзд равно отправленному количеству, умноженному на [stars\_paid\_message\_commission\_permille »](/api/config/#stars-paid-message-commission-permille) и делённому на 1000.

Метод [account.getPaidMessagesRevenue](/method/account.getPaidMessagesRevenue/) позволяет получить суммарное количество невозвращённых Telegram Stars, которые пользователь потратил на отправку нам сообщений — напрямую или через канал, в зависимости от значения `parent_peer`.

При вызове [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/) можно установить флаг `refund_charged`, чтобы вернуть все ещё не возвращённые звёзды, которые пользователь уже заплатил нам за отправку сообщений (напрямую или через монофорум; точное количество можно узнать методом [account.getPaidMessagesRevenue](/method/account.getPaidMessagesRevenue/)): это породит сервисное сообщение [messageActionPaidMessagesRefunded](/constructor/messageActionPaidMessagesRefunded/).

### Отправка платных сообщений

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;
userFull#6cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

---functions---

users.getRequirementsToContact#d89a83a3 id:Vector<InputUser> = Vector<RequirementToContact>;

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMedia#330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.forwardMessages#13704a7c flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
messages.sendInlineBotResult#c0cf7646 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to:flags.0?InputReplyTo random_id:long query_id:long id:string schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut allow_paid_stars:flags.21?long = Updates;
messages.sendMultiMedia#1bf89d74 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
```

[@term:allow_paid_stars] Любой, кто хочет отправить сообщение пиру, у которого [настроены платные сообщения, »](#toggling-paid-messages), обязан заплатить требуемую сумму в [Telegram Stars »](/api/stars/), указав её в параметре `allow_paid_stars` (сумма звёзд, которую отправитель согласен списать) метода [messages.sendMessage](/method/messages.sendMessage/) и всех остальных методов, используемых для отправки или пересылки сообщений.

Чтобы узнать, требует ли пир оплаты за приём сообщений, проверьте наличие следующих флагов:

-   [user](/constructor/user/).`send_paid_messages_stars` — для пользователей
-   [channel](/constructor/channel/).`send_paid_messages_stars` — для монофорумов (только для ID самого монофорума, но не для ID связанного канала)

В этих флагах содержится количество [Stars](/api/stars/), которое нужно заплатить за отправку сообщения такому пиру.

Учтите, однако, что перечисленные выше флаги не показывают, были ли мы явно освобождены от оплаты [по одной из причин, указанных выше »](#toggling-paid-messages): эти сведения содержатся в:

-   [userFull](/constructor/userFull/).`send_paid_messages_stars` — для пользователей
-   [channelFull](/constructor/channelFull/).`send_paid_messages_stars` — для монофорумов (как для ID монофорума, так и для ID связанного канала)

В этих флагах содержится количество [Stars](/api/stars/), которое нужно заплатить за отправку сообщения такому пиру, либо `0` (при этом флаг установлен), если мы освобождены от оплаты; для пиров, не требующих оплаты за приём сообщений, этот флаг не устанавливается.

Если конструкторы [userFull](/constructor/userFull/)/[channelFull](/constructor/channelFull/) ещё не закешированы, запрашивать их следует только при выполнении обоих условий:

-   установлен [user](/constructor/user/).`send_paid_messages_stars`/[channel](/constructor/channel/).`send_paid_messages_stars`, И
-   клиент сейчас показывает панель ввода сообщения в личном чате с пользователем либо в прямых сообщениях указанному монофоруму, или другой элемент интерфейса, связанный с отправкой сообщения пиру.

Если клиенту нужно получить флаг `send_paid_messages_stars` сразу для нескольких пользователей — например, при отображении списка чатов в интерфейсе «Поделиться» (чтобы показать значок валюты рядом с аватаром каждого пользователя, требующего оплаты, вместе с поясняющей подсказкой), — вместо этого можно вызвать метод [users.getRequirementsToContact](/method/users.getRequirementsToContact/), передав список пользователей, видимых в интерфейсе в данный момент; метод вернёт список условий (в том числе [requirementToContactPaidMessages](/constructor/requirementToContactPaidMessages/) со значением флага); для монофорумов этот метод неприменим — для них следует, как обычно, использовать [channels.getFullChannel](/method/channels.getFullChannel/) (если данные ещё не закешированы).

Учтите, что [users.getRequirementsToContact](/method/users.getRequirementsToContact/) следует вызывать только для тех пользователей, чья полная информация ([userFull](/constructor/userFull/)/[channelFull](/constructor/channelFull/)) ещё не закеширована, поскольку при наличии всех упомянутых сведений то же самое вычисляется локально.  
Кроме того, он неприменим к супергруппам и монофорумам — для них вместо этого запрашивайте полную информацию [channelFull](/constructor/channelFull/) (если она не закеширована; как вариант, чтобы не делать слишком много запросов, можно просто обрабатывать ошибку `ALLOW_PAYMENT_REQUIRED_%d`, которая возникнет при отправке сообщений в платный монофорум без оплаты).

Если платные сообщения включены, но флаг не установлен, либо если переданная в `allow_paid_stars` сумма меньше требуемой (например, требуемая сумма изменилась, а обновление об этом ещё не получено), то при попытке отправить сообщение будет возвращена ошибка RPC `ALLOW_PAYMENT_REQUIRED_%d` с кодом 403, где `%d` указывает правильную требуемую сумму в звёздах.  
Кроме того, если переданная в `allow_paid_stars` сумма больше фактически требуемой (снова — если требуемая сумма недавно изменилась), спишется только фактически требуемое количество звёзд (или ни одной звезды, если платные сообщения были отключены).

Количество звёзд, **уплаченное отправителем** (то есть не полученная сумма — флаг будет одинаковым и для отправителя, и для получателя независимо от [stars\_paid\_message\_commission\_permille »](/api/config/#stars-paid-message-commission-permille)), указывается во флаге [message](/constructor/message/).`paid_message_stars`.
