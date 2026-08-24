---
title: "Проверка возраста"
original: "https://core.telegram.org/api/age-verification"
section: api
description: "Законодательство некоторых стран требует проверки возраста для просмотра контента с возрастными ограничениями: Telegram реализует её через Main Mini App специального бота — Mini…"
layout: layout.njk
---

# Проверка возраста

[@term:Mini App] Законодательство некоторых стран требует проверки возраста для просмотра содержимого с возрастными ограничениями: Telegram реализует её через [Main Mini App](/api/bots/webapps/#main-mini-apps) специального бота — Mini App (веб-приложение, встроенное в клиент Telegram).

```
restrictionReason#d072acb4 platform:string reason:string text:string = RestrictionReason;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
```

Доступ к пользователям, чатам, каналам и отдельным сообщениям может быть ограничен на разных платформах и по разным причинам — всё это задаётся полем `restriction_reason`.

Чтобы понять, действует ли на нас хотя бы одна из причин ограничения, отфильтруйте массив [restrictionReason](/constructor/restrictionReason/) в поле `restriction_reason`, оставив **только** те причины, для которых выполнены **оба** условия:

1.  Для всех платформ, указанных в [restrictionReason](/constructor/restrictionReason/).`platform` (это поле содержит список из одной или нескольких платформ, слитых через разделитель `-`):
    -   [restrictionReason](/constructor/restrictionReason/).`platform` равно `all` (в этом случае платформа будет единственной), ЛИБО
    -   хотя бы одна платформа совпадает с текущей платформой (она жёстко зашита в клиенте исходя из платформы, на которой он работает, — `ios`, `android`, `wp` и т. д.), ЛИБО
    -   хотя бы одна платформа совпадает с одной из платформ, перечисленных в [параметре динамической конфигурации restriction\_add\_platforms »](/api/config/#restriction-add-platforms)
2.  [restrictionReason](/constructor/restrictionReason/).`reason` **не** входит в список причин, указанных в [параметре динамической конфигурации ignore\_restriction\_reasons »](/api/config/#ignore-restriction-reasons).

Далее, работая с полученным после фильтрации списком [restrictionReason](/constructor/restrictionReason/):

-   Если хотя бы одно из оставшихся после фильтрации значений [restrictionReason](/constructor/restrictionReason/).`reason` **не** равно `sensitive`, клиент обязан полностью закрыть доступ к содержимому и показать сообщение об ошибке из [restrictionReason](/constructor/restrictionReason/).`text`.

-   Иначе (причина `reason` будет только одна, и она равна `sensitive`):

    -   Если ключ клиентской конфигурации [need\_age\_video\_verification »](/api/config/#need-age-video-verification) не задан или равен `false`, проверка возраста отключена и содержимое можно открыть — при условии, что оно скрыто спойлером `18+`.

    -   Если ключ клиентской конфигурации [need\_age\_video\_verification »](/api/config/#need-age-video-verification) равен `true`, содержимое можно открыть только после проверки возраста через соответствующее Mini App (см. ниже); проверка запускается нажатием на спойлер `18+`.  
        Если проверка возраста пройдена успешно, содержимое можно открыть — при условии, что оно скрыто спойлером `18+`.

        По завершении проверки — независимо от того, пройдена она или нет, — Mini App отправит событие [web\_app\_verify\_age](/api/web-events/#web-app-verify-age) со сведениями об определённом возрасте, а сервер соответствующим образом изменит значение [need\_age\_video\_verification »](/api/config/#need-age-video-verification) (см. ниже).

        Для реализации проверки возраста используются следующие [параметры клиентской конфигурации »](/api/config/):

        -   [need\_age\_video\_verification »](/api/config/#need-age-video-verification) — указывает, требуется ли проверка возраста в текущей юрисдикции.  
            Этот флаг будет установлен в `false` и в том случае, когда текущая юрисдикция требует проверки возраста для содержимого с ограничениями, **и** при этом пользователь уже успешно прошёл её — на другом устройстве или на текущем.
        -   [verify\_age\_country »](/api/config/#verify-age-country) — уникальное название страны или региона, законодательство которого потребовало проверки возраста.
        -   [verify\_age\_min »](/api/config/#verify-age-min) — содержит минимальный возраст, необходимый для просмотра содержимого с пометкой `sensitive`
        -   [verify\_age\_bot\_username »](/api/config/#verify-age-bot-username) — содержит имя пользователя бота, чей [Main Mini App](/api/bots/webapps/#main-mini-apps) необходимо открыть, чтобы пройти проверку возраста.  
            **Примечание**: **только** на время проверки возраста все запросы разрешений, поступающие от этого Mini App (камера, микрофон и т. д.), следует удовлетворять безусловно, без участия пользователя (кроме случаев, когда его требует операционная система); воспроизведение видео и звука без участия пользователя также следует разрешать безусловно.  
            По завершении проверки — независимо от того, пройдена она или нет, — Mini App отправит событие [web\_app\_verify\_age](/api/web-events/#web-app-verify-age) со сведениями об определённом возрасте.
