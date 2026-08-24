---
title: "Защита контента"
original: "https://core.telegram.org/api/content-protection"
section: api
description: "Пользователи и боты, желающие сохранить приватность своих сообщений, а также владельцы групп и каналов, желающие оставить свой контент доступным только участникам, могут включить…"
layout: layout.njk
---

# Защита контента

**Пользователи** и **боты**, желающие сохранить приватность своих сообщений, а также владельцы **групп** и **каналов**, желающие оставить свой контент доступным только участникам, могут включить **защиту контента**: она препятствует созданию скриншотов и копированию, отключает пересылку сообщений и ограничивает возможность сохранять медиафайлы из публикаций.

### Для групп и каналов

```
chat#41cbf256 flags:# creator:flags.0?true left:flags.2?true deactivated:flags.5?true call_active:flags.23?true call_not_empty:flags.24?true noforwards:flags.25?true id:long title:string photo:ChatPhoto participants_count:int date:int version:int migrated_to:flags.6?InputChannel admin_rights:flags.14?ChatAdminRights default_banned_rights:flags.18?ChatBannedRights = Chat;

channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

---functions---

messages.toggleNoForwards#b2081a35 flags:# peer:InputPeer enabled:Bool request_msg_id:flags.0?int = Updates;
```

Чтобы включить или отключить защиту контента в [обычной группе, супергруппе или канале](/api/channel/), достаточно вызвать [messages.toggleNoForwards](/method/messages.toggleNoForwards/), передав `true` или `false` в поле `enabled` (флаг `request_msg_id` не заполняйте — он нужен только при [защите личных чатов »](#for-users)).

Этот метод может вызвать только владелец группы или канала (то есть только пользователи, поскольку боты не могут владеть группами и каналами).

[@term:noforwards] У групп и каналов с включённой защитой контента выставляется флаг [chat](/constructor/chat/).`noforwards` или [channel](/constructor/channel/).`noforwards` — признак запрета на пересылку и копирование содержимого.

Учтите, что флаг [message](/constructor/message/).`noforwards` **не** выставляется для групп и каналов, где защита включена на уровне всей группы или канала: этот флаг доступен только [ботам »](#for-bots). Тем не менее все сообщения, полученные из защищённых групп и чатов, всё равно необходимо обрабатывать так, как если бы флаг [message](/constructor/message/).`noforwards` был выставлен (то есть пересылка, скачивание, копирование и снимки экрана должны быть запрещены).

Попытка переслать сообщения из защищённого чата или канала приведёт к RPC-ошибке `CHAT_FORWARDS_RESTRICTED`.

### Для ботов

```
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

---functions---

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMedia#330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
// All other message sending methods also have the `noforwards` flag
```

Боты могут отправлять отдельные защищённые сообщения в любой личный чат, группу или канал независимо от того, включена ли защита на уровне всего чата: для этого достаточно выставить флаг `noforwards` в методе [messages.sendMessage](/method/messages.sendMessage/) и во всех остальных методах отправки сообщений.

При этом у исходящих сообщений будет выставлен флаг [message](/constructor/message/).`noforwards`; для таких сообщений пересылка, скачивание, копирование и снимки экрана должны быть запрещены.

Попытка переслать защищённые сообщения приведёт к RPC-ошибке `CHAT_FORWARDS_RESTRICTED`.

### Для пользователей

```
userFull#6cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

messageActionNoForwardsToggle#bf7d6572 prev_value:Bool new_value:Bool = MessageAction;
messageActionNoForwardsRequest#3e2793ba flags:# expired:flags.0?true prev_value:Bool new_value:Bool = MessageAction;

---functions---

messages.toggleNoForwards#b2081a35 flags:# peer:InputPeer enabled:Bool request_msg_id:flags.0?int = Updates;
```

Чтобы включить или отключить защиту контента в личном чате, достаточно вызвать [messages.toggleNoForwards](/method/messages.toggleNoForwards/), передав `true` или `false` в поле `enabled`.

Этот метод могут вызывать только пользователи и только в личном чате с другим пользователем: личные чаты с ботами и официальными аккаунтами поддержки Telegram защитить нельзя.

Для защиты личных чатов требуется подписка [Telegram Premium](/api/premium/) ([идентификатор возможности pm\_noforwards »](/api/premium/#pm-noforwards)); [группы и каналы можно защитить и без подписки Premium](#for-groups-and-channels).

При включении или снятии защиты личного чата отправляется сервисное сообщение [messageActionNoForwardsToggle](/constructor/messageActionNoForwardsToggle/).

Это сервисное сообщение отправляется только в следующих случаях:

-   Состояние защиты действительно изменилось (то есть повторная защита уже защищённого чата или снятие защиты с незащищённого чата не порождают ни обновлений, ни RPC-ошибок), ЛИБО
-   Передан корректный `request_msg_id` — в этом случае [messageActionNoForwardsToggle](/constructor/messageActionNoForwardsToggle/) отправляется всегда, даже если состояние защиты не менялось (тогда `prev_value` и `new_value` будут равны текущему состоянию защиты); это нужно, чтобы пометить [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/) как прочитанный (см. ниже).

У личных чатов, где защиту контента включила наша сторона или собеседник, будет выставлен флаг [userFull](/constructor/userFull/).`noforwards_my_enabled`/`noforwards_peer_enabled` соответственно.  
Выставлен будет только один из двух флагов — в зависимости от того, кто первым запретил пересылку; если чат первым защитил собеседник, повторное включение защиты с нашей стороны не изменит значения флагов (и наоборот).

[@term:peer] Если выставлен флаг `noforwards_peer_enabled` (то есть чат защитил собеседник — пир (`peer`, вторая сторона диалога), а не мы), вызов [messages.toggleNoForwards](/method/messages.toggleNoForwards/) **не** снимет защиту с чата: вместо этого будет отправлено сервисное сообщение [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/), сообщающее собеседнику, что мы просим отключить защиту контента в этом чате.

Собеседник может принять или отклонить [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/), вызвав [messages.toggleNoForwards](/method/messages.toggleNoForwards/): в поле `enabled` передаётся `true`, чтобы отклонить запрос, и `false`, чтобы принять его, а в поле `request_msg_id` — идентификатор сервисного сообщения [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/). Последствия будут такими:

-   Будет отправлено новое сообщение [messageActionNoForwardsToggle](/constructor/messageActionNoForwardsToggle/) в ответ на [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/) (то есть в `reply_to` будет указан идентификатор сообщения [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/)).

    Как сказано выше, это сервисное сообщение отправляется всегда, даже если состояние защиты не изменилось (например, при повторной защите уже защищённого чата или снятии защиты с незащищённого чата нажатием кнопок принятия/отклонения на нескольких запросах в одном и том же чате) — это нужно, чтобы пометить [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/) как прочитанный.

    Учтите, что, например, если принять один запрос, а следующий отклонить, защита контента в чате сначала отключится, а затем включится снова.

-   Упомянутый [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/) автоматически станет просроченным: на сервере будет выставлен флаг [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/).`expired` (то есть обновлённое значение получат клиенты, запрашивающие историю сообщений или обновления). Попытка повторно использовать тот же `request_msg_id` приведёт к RPC-ошибке `REQUEST_MSG_EXPIRED`.

-   Учтите, что никакого обновления, явно выставляющего флаг [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/).`expired`, отправлено не будет, если исходное сообщение [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/) клиент уже получил через обновления: клиентам следует самостоятельно помечать локально закешированные сообщения [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/) как просроченные сразу же, как только придёт [messageActionNoForwardsToggle](/constructor/messageActionNoForwardsToggle/), отвечающий на этот запрос.

    Посторонние сообщения [messageActionNoForwardsToggle](/constructor/messageActionNoForwardsToggle/), которые ни на что не отвечают или отвечают на другие запросы, **не** должны помечать просроченными не связанные с ними ожидающие запросы.

    Ожидающие запросы также **не** становятся просроченными, если защиту отключает та сторона, которая её включила, не передав `request_msg_id`.

Ожидающие запросы автоматически становятся просроченными через [no\_forwards\_request\_expire\_period »](/api/config/#no-forwards-request-expire-period) секунд после отправки, если до этого их не приняли и не отклонили вручную.

Учтите, что флаг [message](/constructor/message/).`noforwards` для личных чатов с включённой защитой **не** выставляется, поскольку этот флаг доступен только [ботам »](#for-bots). Тем не менее все сообщения, полученные из защищённых личных чатов, всё равно необходимо обрабатывать так, как если бы флаг [message](/constructor/message/).`noforwards` был выставлен (то есть пересылка, скачивание, копирование и снимки экрана должны быть запрещены).

Попытка переслать сообщения из защищённого личного чата приведёт к RPC-ошибке `CHAT_FORWARDS_RESTRICTED`.

### Для историй

```
storyItem#16a4b93c flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> music:flags.20?Document = StoryItem;

---functions---

stories.sendStory#8f9e6898 flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> music:flags.9?InputDocument = Updates;
```

Защитить можно и [историю](/api/stories/) — для этого в методе [stories.sendStory](/method/stories.sendStory/) и в других связанных методах выставляется флаг `noforwards`.

В результате будет создан [storyItem](/constructor/storyItem/) с выставленным флагом `noforwards`: для таких историй пересылка, скачивание, копирование и снимки экрана должны быть запрещены.
