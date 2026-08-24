---
title: "Конфигурация клиента"
original: "https://core.telegram.org/api/config"
section: api
description: "У MTProto API есть несколько наборов параметров конфигурации, которые можно получить соответствующими методами."
layout: layout.njk
---

# Конфигурация клиента

У MTProto API есть несколько наборов параметров конфигурации, которые можно получить соответствующими методами.

### Машиночитаемый индекс конфигурации

[@term:layer] В отличие от клиентских и MTProto-параметров конфигурации, описанных ниже (они запрашиваются во время работы методами [help.getAppConfig](/method/help.getAppConfig/) и [help.getConfig](/method/help.getConfig/)), API опирается также на ряд **констант API** — наборов идентификаторов и перечисляемых значений, которые **не** возвращаются ни методом [help.getAppConfig](/method/help.getAppConfig/), ни методом [help.getConfig](/method/help.getConfig/), а вместо этого зашиты в официальные клиенты и меняются от слоя к слою (`layer` — версия схемы, задающая текущий набор конструкторов и методов).

Сюда относятся, например, имена ключей клиентской конфигурации, [возможности и лимиты Premium](/api/premium/), [бизнес-возможности](/api/business/), предлагаемые действия, [входящие веб-события](/api/web-events/), значения типа конструктора [webPage](/constructor/webPage/) и многое другое. Поскольку эти константы привязаны к схеме, любое их изменение фиксируется в списках изменений по слоям на [странице слоёв »](/api/layers/).

Для программного доступа сводный машиночитаемый индекс текущего слоя API публикуется по постоянной ссылке [/api/config.json](/api/config.json/).

[@term:endpoint] Этот адрес (endpoint) отдаёт единственный JSON-объект, каждый ключ верхнего уровня которого содержит в виде обычного JSON соответствующий набор данных последнего слоя:

-   `layer` — номер текущего [слоя API »](/api/layers/), к которому относятся все перечисленные ниже наборы данных.
-   `constants` — сводные **константы API**, описанные в этой статье; их структура разобрана ниже.
-   `push`, `push_arguments` — схемы [сервисных сообщений push-уведомлений »](/api/push-updates/) и аргументы их локализации.

Обязательно учитывайте также следующие файлы конфигурации, которые **не** входят в `config.json` и доступны отдельно:

-   Полная база ошибок RPC в [/api/errors.json](/api/errors.json/), описанная [здесь »](/api/errors/#error-database).
-   [Схема TL »](/schema/) текущего слоя в [/schema/json](/schema/json/).
-   [Схема сквозного шифрования »](/schema/end-to-end/) в [/schema/end-to-end-json](/schema/end-to-end-json/).
-   [Схема сквозного шифрования групповых звонков »](/api/end-to-end/group-calls/).
-   Схемы и карта [базы ссылок на файлы »](/api/file-references/).

#### Константы API

Ключами объекта `constants` служат **глобально уникальные имена разделов** — понятные человеку идентификаторы для каждого списка констант API (например, `premium features`, `basic suggestions` или `webpage type`).

Каждое значение — объект, описывающий соответствующий раздел, с тремя ключами:

-   `description` — **понятное человеку описание** раздела в целом.
-   `type` — либо `map`, либо `list`; указывает структуру поля `entries` (см. ниже), чтобы потребитель мог различить эти две формы, не разбирая JSON-тип самого `entries`.
-   `entries` — список констант API в этом разделе; его форма соответствует значению `type`:
    -   если `type` равно `map` — **объект**, ключами которого служат **идентификаторы записей** (строковые константы, например `message_length_max`, `telegram_nft`, `double_limits__channels`), а значениями — **понятные человеку описания** соответствующих записей (строки в формате markdown).
    -   если `type` равно `list` — **массив** голых идентификаторов записей (просто строк); используется для разделов, записи которых не сопровождаются отдельными описаниями.

Например:

```
{
    "layer": 225,
    "constants": {
        "webpage type": {
            "description": "Web page type values from the [webPage](/constructor/webPage/) constructor.",
            "type": "map",
            "entries": {
                "telegram_nft": "Preview of a collectible gift link.",
                "video": "Preview of an external video."
            }
        },
        "settings paths": {
            "description": "In-app settings deep link paths openable via [settings deep links »](/api/links/#settings-links).",
            "type": "list",
            "entries": [
                "appearance",
                "appearance/themes",
                "appearance/wallpapers"
            ]
        }
    }
}
```

### Конфигурация MTProto

```
config#cc1a241e flags:# default_p2p_contacts:flags.3?true preload_featured_stickers:flags.4?true revoke_pm_inbox:flags.6?true blocked_mode:flags.8?true force_try_ipv6:flags.14?true date:int expires:int test_mode:Bool this_dc:int dc_options:Vector<DcOption> dc_txt_domain_name:string chat_size_max:int megagroup_size_max:int forwarded_count_max:int online_update_period_ms:int offline_blur_timeout_ms:int offline_idle_timeout_ms:int online_cloud_timeout_ms:int notify_cloud_delay_ms:int notify_default_delay_ms:int push_chat_period_ms:int push_chat_limit:int edit_time_limit:int revoke_time_limit:int revoke_pm_time_limit:int rating_e_decay:int stickers_recent_limit:int channels_read_media_period:int tmp_sessions:flags.0?int call_receive_timeout_ms:int call_ring_timeout_ms:int call_connect_timeout_ms:int call_packet_timeout_ms:int me_url_prefix:string autoupdate_url_prefix:flags.7?string gif_search_username:flags.9?string venue_search_username:flags.10?string img_search_username:flags.11?string static_maps_provider:flags.12?string caption_length_max:int message_length_max:int webfile_dc_id:int suggested_lang_code:flags.2?string lang_pack_version:flags.2?int base_lang_pack_version:flags.2?int reactions_default:flags.15?Reaction autologin_token:flags.16?string = Config;
nearestDc#8e1a1775 country:string this_dc:int nearest_dc:int = NearestDc;

updateConfig#a229dd06 = Update;

---functions---

help.getConfig#c4f9186b = Config;
help.getNearestDc#1fb33026 = NearestDc;
```

Огромный конструктор [config](/constructor/config/) содержит массу полезных сведений: от ограничений на размер чата и длину сообщения до настроек приватности, интервала и тайм-аута обновления статуса «в сети», конфигурации VoIP, имён инлайн-ботов по умолчанию для поиска GIF, картинок и мест, а также множество других глобальных и пользовательских данных; подробности — на [странице конструктора](/constructor/config/).

Конфигурацию следует принудительно обновлять сразу же по получении обновления [updateConfig](/constructor/updateConfig/).

### Клиентская конфигурация

```
jsonObjectValue#c0de1bd9 key:string value:JSONValue = JSONObjectValue;

jsonNull#3f6d7b68 = JSONValue;
jsonBool#c7345e6a value:Bool = JSONValue;
jsonNumber#2be0dfa4 value:double = JSONValue;
jsonString#b71e767a value:string = JSONValue;
jsonArray#f7444763 value:Vector<JSONValue> = JSONValue;
jsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue;

help.appConfigNotModified#7cde641d = help.AppConfig;
help.appConfig#dd18782e hash:int config:JSONValue = help.AppConfig;

updateConfig#a229dd06 = Update;

---functions---

help.getAppConfig#61e3f854 hash:int = help.AppConfig;
```

Метод [help.getAppConfig](/method/help.getAppConfig/) возвращает объект JSON с быстро меняющимися параметрами конфигурации, специфичными для клиента.  
Если [help.getConfig](/method/help.getConfig/) возвращает конфигурацию уровня MTProto — сведения об ограничениях на стороне сервера и прочую информацию, относящуюся к MTProto, — то [help.getAppConfig](/method/help.getAppConfig/) возвращает параметры конфигурации, полезные графическим клиентам Telegram.

[@term:hash] При первом вызове [help.getAppConfig](/method/help.getAppConfig/) передайте в поле `hash` значение `0`; в последующих вызовах используйте `hash` (хеш выборки — контрольное значение, по которому сервер определяет, изменились ли данные с прошлого запроса) из ранее полученного [help.appConfig](/constructor/help.appConfig/); если конфигурация не изменилась, вместо [help.appConfig](/constructor/help.appConfig/) будет возвращён [help.appConfigNotModified](/constructor/help.appConfigNotModified/).

Конфигурацию следует принудительно обновлять сразу же по получении обновления [updateConfig](/constructor/updateConfig/).

Если какой-либо из ключей конфигурации недоступен во время работы, обязано использоваться значение по умолчанию.  
В частности, соответствующее значение из объекта значений по умолчанию обязано использоваться, если вызов [help.getAppConfig](/method/help.getAppConfig/) завершился успешно, но нужного ключа нет в [help.appConfig](/constructor/help.appConfig/).`config`, либо если вызов [help.getAppConfig](/method/help.getAppConfig/) вернул ошибку RPC и закешированного значения нет.

Вот полный список значений по умолчанию, которые обязаны использоваться:

```
{
    "about_length_limit_default": 70,
    "about_length_limit_premium": 140,
    "aicompose_tone_examples_num": 3,
    "aicompose_tone_prompt_length_max": 1024,
    "aicompose_tone_saved_limit_default": 5,
    "aicompose_tone_saved_limit_premium": 20,
    "aicompose_tone_title_length_max": 12,
    "authorization_autoconfirm_period": 604800,
    "autoarchive_setting_available": true,
    "autologin_domains": [
        "instantview.telegram.org",
        "translations.telegram.org",
        "contest.dev",
        "contest.com",
        "bugs.telegram.org",
        "suggestions.telegram.org",
        "themes.telegram.org",
        "promote.telegram.org",
        "ads.telegram.org"
    ],
    "background_connection": true,
    "boosts_channel_level_max": 100,
    "boosts_per_sent_gift": 3,
    "bot_preview_medias_max": 12,
    "bot_verification_description_length_limit": 70,
    "bots_create_limit_default": 20,
    "bots_create_limit_premium": 40,
    "business_chat_links_limit": 100,
    "business_promo_order": [
        "business_location",
        "business_hours",
        "quick_replies",
        "greeting_message",
        "away_message",
        "business_links",
        "business_intro",
        "business_bots",
        "emoji_status",
        "folder_tags",
        "stories"
    ],
    "call_requests_disabled": false,
    "can_edit_factcheck": false,
    "caption_length_limit_default": 1024,
    "caption_length_limit_premium": 4096,
    "channel_autotranslation_level_min": 3,
    "channel_bg_icon_level_min": 4,
    "channel_custom_wallpaper_level_min": 10,
    "channel_emoji_status_level_min": 8,
    "channel_profile_bg_icon_level_min": 7,
    "channel_restrict_sponsored_level_min": 50,
    "channel_revenue_withdrawal_enabled": true,
    "channel_wallpaper_level_min": 9,
    "channels_limit_default": 500,
    "channels_limit_premium": 1000,
    "channels_public_limit_default": 10,
    "channels_public_limit_premium": 20,
    "chat_read_mark_expire_period": 604800,
    "chat_read_mark_size_threshold": 100,
    "chatlist_invites_limit_default": 3,
    "chatlist_invites_limit_premium": 100,
    "chatlist_update_period": 3600,
    "chatlists_joined_limit_default": 2,
    "chatlists_joined_limit_premium": 20,
    "conference_call_size_limit": 200,
    "contact_note_length_limit": 128,
    "default_emoji_statuses_stickerset_id": "773947703670341676",
    "dialog_filters_chats_limit_default": 100,
    "dialog_filters_chats_limit_premium": 200,
    "dialog_filters_enabled": true,
    "dialog_filters_limit_default": 10,
    "dialog_filters_limit_premium": 30,
    "dialog_filters_tooltip": false,
    "dialogs_folder_pinned_limit_default": 100,
    "dialogs_folder_pinned_limit_premium": 200,
    "dialogs_pinned_limit_default": 5,
    "dialogs_pinned_limit_premium": 10,
    "emojies_animated_zoom": 0.625,
    "emojies_send_dice": [
        "\ud83c\udfb2",
        "\ud83c\udfaf",
        "\ud83c\udfc0",
        "\u26bd",
        "\u26bd\ufe0f",
        "\ud83c\udfb0",
        "\ud83c\udfb3"
    ],
    "emojies_send_dice_success": {
        "\ud83c\udfaf": {
            "value": 6,
            "frame_start": 62
        },
        "\ud83c\udfc0": {
            "value": 5,
            "frame_start": 110
        },
        "\u26bd": {
            "value": 5,
            "frame_start": 110
        },
        "\u26bd\ufe0f": {
            "value": 5,
            "frame_start": 110
        },
        "\ud83c\udfb0": {
            "value": 64,
            "frame_start": 110
        },
        "\ud83c\udfb3": {
            "value": 6,
            "frame_start": 110
        }
    },
    "emojies_sounds": [],
    "factcheck_length_limit": 1024,
    "fragment_prefixes": [
        "888"
    ],
    "freeze_appeal_url": "",
    "freeze_since_date": 0,
    "freeze_until_date": 0,
    "gif_search_branding": "none",
    "gif_search_emojies": [
        "\ud83d\udc4d",
        "\ud83d\ude18",
        "\ud83d\ude0d",
        "\ud83d\ude21",
        "\ud83e\udd73",
        "\ud83d\ude02",
        "\ud83d\ude2e",
        "\ud83d\ude44",
        "\ud83d\ude0e",
        "\ud83d\udc4e"
    ],
    "giveaway_add_peers_max": 10,
    "giveaway_boosts_per_premium": 4,
    "giveaway_countries_max": 10,
    "giveaway_gifts_purchase_available": false,
    "giveaway_period_max": 2678400,
    "group_call_message_length_limit": 128,
    "group_call_message_ttl": 10,
    "group_custom_wallpaper_level_min": 10,
    "group_emoji_status_level_min": 8,
    "group_emoji_stickers_level_min": 4,
    "group_profile_bg_icon_level_min": 5,
    "group_transcribe_level_min": 6,
    "group_wallpaper_level_min": 9,
    "groupcall_video_participants_max": 1000,
    "hidden_members_group_size_min": 100,
    "ignore_restriction_reasons": [],
    "inapp_update_check_delay": 86400,
    "intro_description_length_limit": 70,
    "intro_title_length_limit": 32,
    "keep_alive_service": true,
    "large_queue_max_active_operations_count": 2,
    "message_animated_emoji_max": 100,
    "message_typing_draft_ttl": 30,
    "music_search_username": "ugcmusicbot",
    "need_age_video_verification": false,
    "new_noncontact_peers_require_premium_without_ownpremium": false,
    "no_forwards_request_expire_period": 86400,
    "passkeys_account_passkeys_max": 5,
    "phone_country_iso2": "",
    "pm_read_date_expire_period": 604800,
    "poll_answer_delete_period": 300,
    "poll_answers_max": 12,
    "poll_close_period_max": 2628000,
    "poll_countries_max": 12,
    "premium_bot_username": "PremiumBot",
    "premium_gift_attach_menu_icon": true,
    "premium_gift_text_field_icon": false,
    "premium_invoice_slug": "abc",
    "premium_manage_subscription_url": "https://t.me/premiumbot?start=status",
    "premium_promo_order": [
        "stories",
        "more_upload",
        "double_limits",
        "business",
        "last_seen",
        "voice_to_text",
        "faster_download",
        "translations",
        "animated_emoji",
        "emoji_status",
        "saved_tags",
        "peer_colors",
        "wallpapers",
        "profile_badge",
        "message_privacy",
        "pm_noforwards",
        "advanced_chat_management",
        "no_ads",
        "app_icons",
        "infinite_reactions",
        "animated_userpics",
        "premium_stickers",
        "effects",
        "ai_compose",
        "todo"
    ],
    "premium_purchase_blocked": false,
    "qr_login_camera": true,
    "qr_login_code": "primary",
    "quick_replies_limit": 100,
    "quick_reply_messages_limit": 20,
    "quote_length_max": 1024,
    "reactions_in_chat_max": 100,
    "reactions_uniq_max": 11,
    "reactions_user_max_default": 1,
    "reactions_user_max_premium": 3,
    "recommended_channels_limit_default": 10,
    "recommended_channels_limit_premium": 100,
    "restriction_add_platforms": [],
    "ringtone_duration_max": 5,
    "ringtone_saved_count_max": 100,
    "ringtone_size_max": 307200,
    "round_video_encoding": {
        "diameter": 384,
        "video_bitrate": 1000,
        "audio_bitrate": 64,
        "max_size": 12582912
    },
    "saved_dialogs_pinned_limit_default": 5,
    "saved_dialogs_pinned_limit_premium": 100,
    "saved_gifs_limit_default": 200,
    "saved_gifs_limit_premium": 400,
    "settings_display_passkeys": false,
    "small_queue_max_active_operations_count": 5,
    "sponsored_links_inapp_allow": false,
    "stargifts_blocked": true,
    "stargifts_collection_gifts_limit": 500,
    "stargifts_collections_limit": 10,
    "stargifts_convert_period_max": 604800,
    "stargifts_craft_attribute_permilles": [
        [
            100
        ],
        [
            80,
            400
        ],
        [
            70,
            350,
            700
        ],
        [
            60,
            300,
            600,
            1000
        ]
    ],
    "stargifts_message_length_max": 128,
    "stargifts_pinned_to_top_limit": 6,
    "starref_connect_allowed": false,
    "starref_max_commission_permille": 800,
    "starref_min_commission_permille": 1,
    "starref_program_allowed": false,
    "starref_start_param_prefixes": [
        "_tgr_"
    ],
    "stars_gifts_enabled": true,
    "stars_groupcall_message_amount_max": 35000,
    "stars_groupcall_message_limits": [
        {
            "stars": 10000,
            "pin_period": 3600,
            "text_length_max": 400,
            "emoji_max": 20,
            "color1": "5B6676",
            "color2": "7B899D",
            "color_bg": "252C36"
        },
        {
            "stars": 2000,
            "pin_period": 1800,
            "text_length_max": 280,
            "emoji_max": 10,
            "color1": "E14741",
            "color2": "E96139",
            "color_bg": "8B0503"
        },
        {
            "stars": 500,
            "pin_period": 900,
            "text_length_max": 200,
            "emoji_max": 7,
            "color1": "ED771E",
            "color2": "ED771E",
            "color_bg": "9B3100"
        },
        {
            "stars": 250,
            "pin_period": 600,
            "text_length_max": 150,
            "emoji_max": 4,
            "color1": "E29A09",
            "color2": "E29A09",
            "color_bg": "9A3E00"
        },
        {
            "stars": 100,
            "pin_period": 300,
            "text_length_max": 110,
            "emoji_max": 3,
            "color1": "40A920",
            "color2": "40A920",
            "color_bg": "176200"
        },
        {
            "stars": 50,
            "pin_period": 120,
            "text_length_max": 80,
            "emoji_max": 2,
            "color1": "46A3EB",
            "color2": "46A3EB",
            "color_bg": "00508E"
        },
        {
            "stars": 10,
            "pin_period": 60,
            "text_length_max": 60,
            "emoji_max": 1,
            "color1": "955CDB",
            "color2": "955CDB",
            "color_bg": "49079B"
        },
        {
            "stars": 0,
            "pin_period": 30,
            "text_length_max": 30,
            "emoji_max": 0,
            "color1": "955CDB",
            "color2": "955CDB",
            "color_bg": "49079B"
        }
    ],
    "stars_paid_message_amount_max": 35000,
    "stars_paid_message_commission_permille": 850,
    "stars_paid_messages_available": true,
    "stars_paid_messages_channel_amount_default": 10,
    "stars_paid_post_amount_max": 25000,
    "stars_paid_reaction_amount_max": 10000,
    "stars_purchase_blocked": true,
    "stars_rating_learnmore_url": "https://telegram.org/faq#q-what-does-profile-rating-mean",
    "stars_revenue_withdrawal_max": 25000000,
    "stars_revenue_withdrawal_min": 1000,
    "stars_stargift_resale_amount_max": 100000,
    "stars_stargift_resale_amount_min": 125,
    "stars_stargift_resale_commission_permille": 800,
    "stars_subscription_amount_max": 10000,
    "stars_suggested_post_age_min": 86400,
    "stars_suggested_post_amount_max": 100000,
    "stars_suggested_post_amount_min": 5,
    "stars_suggested_post_commission_permille": 850,
    "stars_suggested_post_future_max": 2678400,
    "stars_suggested_post_future_min": 300,
    "stars_usd_sell_rate_x1000": 1410,
    "stars_usd_withdraw_rate_x1000": 1300,
    "stickers_emoji_cache_time": 86400,
    "stickers_emoji_suggest_only_api": false,
    "stickers_faved_limit_default": 5,
    "stickers_faved_limit_premium": 10,
    "stickers_normal_by_emoji_per_premium_num": 3,
    "stickers_premium_by_emoji_num": 0,
    "stories_album_stories_limit": 1000,
    "stories_albums_limit": 100,
    "stories_area_url_max": 3,
    "stories_changelog_user_id": 777000,
    "stories_entities": "premium",
    "stories_pinned_to_top_count_max": 3,
    "stories_posting": "enabled",
    "stories_sent_monthly_limit_default": 10,
    "stories_sent_monthly_limit_premium": 3000,
    "stories_sent_weekly_limit_default": 3,
    "stories_sent_weekly_limit_premium": 700,
    "stories_stealth_cooldown_period": 10800,
    "stories_stealth_future_period": 1500,
    "stories_stealth_past_period": 300,
    "stories_suggested_reactions_limit_default": 1,
    "stories_suggested_reactions_limit_premium": 5,
    "stories_venue_search_username": "foursquare",
    "story_caption_length_limit_default": 200,
    "story_caption_length_limit_premium": 2048,
    "story_expiring_limit_default": 1,
    "story_expiring_limit_premium": 100,
    "story_viewers_expire_period": 86400,
    "story_weather_preload": false,
    "telegram_antispam_group_size_min": 200,
    "telegram_antispam_user_id": "5434988373",
    "todo_item_length_max": 200,
    "todo_items_max": 30,
    "todo_title_length_max": 255,
    "ton_blockchain_explorer_url": "https://tonviewer.com/",
    "ton_proxy_address": "magic.org",
    "ton_stargift_resale_amount_max": 100000000000000,
    "ton_stargift_resale_amount_min": 700,
    "ton_stargift_resale_commission_permille": 900,
    "ton_suggested_post_amount_max": 10000000000000,
    "ton_suggested_post_amount_min": 1,
    "ton_suggested_post_commission_permille": 850,
    "ton_topup_url": "https://fragment.com/ads/topup",
    "ton_usd_rate": 3,
    "topics_pinned_limit": 5,
    "transcribe_audio_trial_duration_max": 300,
    "transcribe_audio_trial_weekly_number": 0,
    "upload_max_fileparts_default": 4000,
    "upload_max_fileparts_premium": 8000,
    "upload_premium_speedup_download": 10,
    "upload_premium_speedup_notify_period": 3600,
    "upload_premium_speedup_upload": 10,
    "url_auth_domains": [
        "web.telegram.org",
        "web.t.me",
        "k.t.me",
        "z.t.me",
        "a.t.me"
    ],
    "verify_age_bot_username": "",
    "verify_age_country": "",
    "verify_age_min": 0,
    "video_ignore_alt_documents": false,
    "weather_search_username": "StoryWeatherBot",
    "web_app_allowed_protocols": [
        "http",
        "https"
    ],
    "whitelisted_bots": [],
    "whitelisted_domains": [
        "telegram.dog",
        "telegram.me",
        "telegram.org",
        "t.me",
        "telesco.pe",
        "fragment.com",
        "translations.telegram.org"
    ]
}
```

В результирующий JSON-объект входят следующие поля:

#### `weather_search_username`

Содержит username бота, у которого запрашивается текущая погода, для использования в [погодных медиа-областях, как описано здесь »](/api/stories/#weather). (строка)

#### `story_weather_preload`

Если значение истинно, клиентам следует предзагружать текущую погоду при запуске (а не только при создании [погодной медиа-области](/api/stories/#weather)), обращаясь к боту, указанному в [weather\_search\_username](#weather-search-username). (логическое значение)

#### `emojies_animated_zoom`

[Анимированные эмодзи](/api/animated-emojis/) и [анимированные кубики](/api/dice/) следует масштабировать с этим коэффициентом перед показом пользователю (число с плавающей точкой)

#### `keep_alive_service`

Следует ли клиентским приложениям запускать keepalive-службу, чтобы приложение продолжало работать и получать обновления даже после его закрытия (логическое значение)

#### `background_connection`

Следует ли клиентским приложениям устанавливать фоновое TCP-соединение для получения обновлений MTProto (логическое значение)

#### `emojies_send_dice`

Список поддерживаемых стикеров [анимированных кубиков](/api/dice/) (массив строк).

#### `emojies_send_dice_success`

Для эмодзи [анимированных кубиков](/api/dice/), отличных от базового <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB2.png" width="20" height="20" alt="🎲">, указывает выигрышное значение кубика и итоговый кадр анимированного стикера, на котором нужно показать фейерверк <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8E86.png" width="20" height="20" alt="🎆"> (объект, ключи которого — эмодзи, а значения — объекты с числовыми полями `value` и `frame_start`)

#### `emojies_sounds`

[@term:file_reference] Набор звуков, которые проигрываются при нажатии пользователем на указанный [анимированный эмодзи](/api/animated-emojis/); поле [ссылки на файл](/api/file-references/) (`file_reference` — выдаваемый сервером маркер, подтверждающий право на доступ к файлу) следует декодировать из base64 перед [скачиванием файла](/api/files/) (набор [идентификаторов файлов](/api/files/) ([inputDocument](/constructor/inputDocument/).id) со строковыми ключами-эмодзи)

Пример:

```
{
    "\ud83c\udf83": {
        "id": "4956223179606458539",
        "access_hash": "-2107001400913062971",
        "file_reference_base64": ""
    },
    "\u26b0": {
        "id": "4956223179606458540",
        "access_hash": "-1498869544183595185",
        "file_reference_base64": ""
    }
}
```

#### `gif_search_branding`

Указывает название сервиса, обеспечивающего поиск GIF через [gif\_search\_username](#mtproto-configuration) (строка)

#### `gif_search_emojies`

Указывает список эмодзи, которые следует предлагать в качестве поискового запроса на панели над полем поиска GIF (массив строк-эмодзи)

#### `stickers_emoji_suggest_only_api`

Указывает, что приложению не следует показывать [локальные подсказки стикеров »](/api/stickers/#sticker-suggestions) для эмодзи вообще, а нужно использовать только результат [messages.getStickers](/method/messages.getStickers/) (логическое значение)

#### `stickers_emoji_cache_time`

Указывает срок годности локального кеша [messages.getStickers](/method/messages.getStickers/); также учитывается при вычислении [хеша выборки](/api/offsets/#hash-generation) при вызове метода. (целое число)

#### `qr_login_camera`

Следует ли показывать в меню «Настройки → Устройства» пункт для сканирования [QR-кода для входа](/api/qr-login/) (логическое значение)

#### `qr_login_code`

Следует ли показывать на экране входа вариант [входа по QR-коду](/api/qr-login/), возможно, в качестве способа входа по умолчанию (строка: `disabled`, `primary` или `secondary`)

#### `dialog_filters_enabled`

Следует ли клиентам показывать пункт для управления [фильтрами диалогов, то есть папками](/api/folders/) (логическое значение)

#### `dialog_filters_tooltip`

Следует ли клиентам активно показывать всплывающую подсказку, предлагающую пользователю настроить [фильтры диалогов, то есть папки](/api/folders/); обычно это происходит, когда список чатов становится достаточно длинным и начинает загромождать экран. (логическое значение)

#### `autoarchive_setting_available`

_Могут_ ли клиенты вызывать [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/) с [`globalPrivacySettings.archive_and_mute_new_noncontact_peers = boolTrue`](/constructor/globalPrivacySettings/), чтобы автоматически архивировать новые входящие чаты не от контактов и отключать в них уведомления. (логическое значение)

#### `topics_pinned_limit`

Максимальное количество [тем](/api/forum/#forum-topics), которые можно закрепить в одном [форуме](/api/forum/). (целое число)

#### `telegram_antispam_user_id`

Идентификатор официального [встроенного антиспам-бота](/api/antispam/), который автоматически удаляет спам-сообщения, если он включён, как описано в [документации по встроенному антиспаму »](/api/antispam/).  
При получении списка администраторов супергруппы через [channels.getParticipants](/method/channels.getParticipants/), если в указанной супергруппе включена функция встроенного антиспама, бота следует вручную добавить в список администраторов, показываемый пользователю. (числовая строка, представляющая идентификатор пользователя/бота Telegram; её следует привести к int64)

#### `telegram_antispam_group_size_min`

Минимальное количество участников группы, необходимое для включения [функции встроенного антиспама](/api/antispam/). (целое число)

#### `fragment_prefixes`

Список префиксов телефонных номеров для анонимных номеров [Fragment](https://fragment.com). (массив строк).

#### `hidden_members_group_size_min`

Минимальное количество участников, необходимое для того, чтобы скрыть список участников супергруппы с помощью [channels.toggleParticipantsHidden](/method/channels.toggleParticipantsHidden/). (целое число)

#### `url_auth_domains`

Список доменов, поддерживающих автоматический вход с ручным подтверждением пользователя, [подробнее об авторизации по URL »](/api/url-authorization/#link-url-authorization). (массив строк)

#### `autologin_domains`

Список доменов Telegram, поддерживающих автоматический вход без подтверждения пользователя, [подробнее об авторизации по URL »](/api/url-authorization/#link-url-authorization). (массив строк)

#### `whitelisted_domains`

Список доменов Telegram, которые всегда можно открывать без дополнительного подтверждения пользователя при нажатии на внутренние ссылки приложения, URL которых показан не полностью (то есть на сущности [messageEntityTextUrl](/constructor/messageEntityTextUrl/)). (массив строк)

Учтите, что при первом открытии [прямых ссылок на Mini App](/api/links/#direct-mini-app-links) подтверждение у пользователя всё равно следует запрашивать, даже если домен содержащей их глубокой ссылки входит в белый список (то есть `t.me/<bot_username>/<short_name>?startapp=<start_parameter>`, где `t.me` входит в белый список).

Подтверждение следует запрашивать **всегда**, даже если [прямой Mini App](/api/links/#direct-mini-app-links) уже открывался ранее, если сама ссылка не видна (то есть текстовые ссылки [messageEntityTextUrl](/constructor/messageEntityTextUrl/), инлайн-кнопки и тому подобное).

#### `round_video_encoding`

Содержит набор рекомендуемых параметров кодека для круглых видео. (объект, как показано в примере)

#### `chat_read_mark_size_threshold`

Отметки о прочтении по каждому пользователю, получаемые через [messages.getMessageReadParticipants](/method/messages.getMessageReadParticipants/), доступны в группах, число участников которых меньше либо равно `chat_read_mark_size_threshold`. (целое число)

#### `chat_read_mark_expire_period`

Для защиты приватности пользователей отметки о прочтении в чатах хранятся лишь в течение `chat_read_mark_expire_period` секунд после отправки сообщения. (целое число)

#### `pm_read_date_expire_period`

Для защиты приватности пользователей отметки о прочтении в личных чатах хранятся лишь в течение `pm_read_date_expire_period` секунд после отправки сообщения. (целое число)

#### `groupcall_video_participants_max`

Максимальное количество участников группового звонка (в трансляциях число участников не ограничено — ∞) (целое число)

#### `reactions_uniq_max`

Максимальное количество уникальных реакций на одно сообщение: например, если поставлено 2000 реакций <img class="emoji" src="https://telegram.org/img/emoji/40/F09F918D.png" width="20" height="20" alt="👍"> и 1000 реакций пользовательским эмодзи <img class="emoji" src="https://telegram.org/img/emoji/40/F09F9881.png" width="20" height="20" alt="😁">, а reactions\_uniq\_max = 2, то добавить реакцию <img class="emoji" src="https://telegram.org/img/emoji/40/F09F918E.png" width="20" height="20" alt="👎"> уже нельзя, поскольку это подняло бы число уникальных реакций до 3 > 2. (целое число)

#### `reactions_in_chat_max`

Максимальное количество реакций, которые можно отметить как разрешённые в чате с помощью [chatReactionsSome](/constructor/chatReactionsSome/). (целое число)

#### `reactions_user_max_default`

Максимальное количество реакций, которые пользователь без подписки Premium может добавить к одному сообщению. (целое число)

#### `reactions_user_max_premium`

Максимальное количество реакций, которые пользователь с подпиской Premium может добавить к одному сообщению. (целое число)

#### `default_emoji_statuses_stickerset_id`

Идентификатор набора стикеров эмодзи-статусов по умолчанию. (целое число)  
Учтите, что этот набор стикеров можно получить с помощью [inputStickerSetEmojiDefaultStatuses](/constructor/inputStickerSetEmojiDefaultStatuses/).

#### `ringtone_duration_max`

Максимальная длительность в секундах [загружаемых звуков уведомлений »](/api/ringtones/) (целое число)

#### `ringtone_size_max`

Максимальный размер в байтах, который [загружаемые звуки уведомлений »](/api/ringtones/) могут иметь после конвертации

#### `ringtone_saved_count_max`

Максимальное количество [сохраняемых звуков уведомлений »](/api/ringtones/)

#### `message_animated_emoji_max`

Максимальное количество [пользовательских эмодзи](/api/custom-emoji/), которые могут присутствовать в сообщении. (целое число)

#### `stickers_premium_by_emoji_num`

Задаёт, сколько [Premium-стикеров](/api/premium/) показывать во всплывающем списке предлагаемых стикеров при вводе эмодзи в поле текста, см. [подробности в документации по стикерам](/api/stickers/#sticker-suggestions) (целое число)

#### `stickers_normal_by_emoji_per_premium_num`

Для [пользователей Premium](/api/premium/) — задаёт список предлагаемых стикеров, см. [подробности в документации по стикерам](/api/stickers/#sticker-suggestions) (целое число)

#### `premium_purchase_blocked`

Пользователь не может приобрести [Telegram Premium](/api/premium/). Приложение обязано также скрыть все возможности Premium, включая звёзды для других пользователей и прочее. (логическое значение)

#### `channels_limit_default`

Максимальное количество [каналов и супергрупп](/api/channel/), в которые может вступить пользователь без [Premium](/api/premium/) (целое число)

#### `channels_limit_premium`

Максимальное количество [каналов и супергрупп](/api/channel/), в которые может вступить пользователь с [Premium](/api/premium/) (целое число)

#### `saved_gifs_limit_default`

Максимальное количество GIF-файлов, которые может сохранить пользователь без [Premium](/api/premium/) (целое число)

#### `saved_gifs_limit_premium`

Максимальное количество GIF-файлов, которые может сохранить пользователь с [Premium](/api/premium/) (целое число)

#### `stickers_faved_limit_default`

Максимальное количество стикеров, которые пользователь без [Premium](/api/premium/) может [добавить в избранное »](/api/stickers/#favorite-stickersets) (целое число)

#### `stickers_faved_limit_premium`

Максимальное количество стикеров, которые пользователь с [Premium](/api/premium/) может [добавить в избранное »](/api/stickers/#favorite-stickersets) (целое число)

#### `dialog_filters_limit_default`

Максимальное количество [папок](/api/folders/), которые может создать пользователь без [Premium](/api/premium/) (целое число)

#### `dialog_filters_limit_premium`

Максимальное количество [папок](/api/folders/), которые может создать пользователь с [Premium](/api/premium/) (целое число)

#### `dialog_filters_chats_limit_default`

Максимальное количество чатов, которые пользователь без [Premium](/api/premium/) может добавить в [папку](/api/folders/) (целое число)

#### `dialog_filters_chats_limit_premium`

Максимальное количество чатов, которые пользователь с [Premium](/api/premium/) может добавить в [папку](/api/folders/) (целое число)

#### `dialogs_pinned_limit_default`

Максимальное количество чатов, которые может закрепить пользователь без [Premium](/api/premium/) (целое число)

#### `dialogs_pinned_limit_premium`

Максимальное количество чатов, которые может закрепить пользователь с [Premium](/api/premium/) (целое число)

#### `dialogs_folder_pinned_limit_default`

Максимальное количество чатов, которые пользователь без [Premium](/api/premium/) может закрепить в папке (целое число)

#### `dialogs_folder_pinned_limit_premium`

Максимальное количество чатов, которые пользователь с [Premium](/api/premium/) может закрепить в папке (целое число)

#### `channels_public_limit_default`

Максимальное количество публичных [каналов или супергрупп](/api/channel/), которые может создать пользователь без [Premium](/api/premium/) (целое число)

#### `channels_public_limit_premium`

Максимальное количество публичных [каналов или супергрупп](/api/channel/), которые может создать пользователь с [Premium](/api/premium/) (целое число)

#### `caption_length_limit_default`

Максимальная длина в UTF-8 подписей к медиа, отправляемых пользователями без [Premium](/api/premium/) (целое число)

#### `caption_length_limit_premium`

Максимальная длина в UTF-8 подписей к медиа, отправляемых пользователями с [Premium](/api/premium/) (целое число)

#### `upload_max_fileparts_default`

Максимальное количество частей файла, которое могут загрузить пользователи без [Premium](/api/premium/) (целое число; максимальный размер файла вычисляется умножением этого значения на `524288` — наибольший возможный размер части)

#### `upload_max_fileparts_premium`

Максимальное количество частей файла, которое могут загрузить пользователи с [Premium](/api/premium/) (целое число; максимальный размер файла вычисляется умножением этого значения на `524288` — наибольший возможный размер части)

#### `about_length_limit_default`

Максимальная длина в UTF-8 биографии пользователей без [Premium](/api/premium/) (целое число)

#### `about_length_limit_premium`

Максимальная длина в UTF-8 биографии пользователей с [Premium](/api/premium/) (целое число)

#### `premium_promo_order`

Массив строковых идентификаторов, задающий порядок возможностей [Telegram Premium](/api/premium/) во всплывающем окне рекламы Telegram Premium, [возможные значения см. здесь »](/api/premium/#telegram-premium-features)

#### `business_promo_order`

Массив строковых идентификаторов, задающий порядок возможностей [Telegram Business](/api/business/) во всплывающем окне рекламы Telegram Business, [возможные значения см. здесь »](/api/business/#business-features-promo-page)

#### `premium_bot_username`

Содержит имя пользователя официального бота [Telegram Premium](/api/premium/), через которого можно купить подписку [Telegram Premium](/api/premium/), [подробные инструкции см. здесь »](/api/premium/) (строка)

#### `premium_invoice_slug`

[@term:invoice slug] Содержит [invoice slug](/api/payments/) (краткий строковый идентификатор счёта), по которому можно купить подписку [Telegram Premium](/api/premium/), [подробные инструкции см. здесь »](/api/premium/) (строка)

#### `premium_gift_attach_menu_icon`

Следует ли показывать значок подарка в меню вложений в личных чатах с пользователями, предлагая текущему пользователю подарить собеседнику подписку [Telegram Premium](/api/premium/). (логическое значение)

#### `premium_gift_text_field_icon`

Следует ли показывать значок подарка в строке ввода текста в личных чатах с пользователями (то есть подобно значку `/` в чатах с ботами), предлагая текущему пользователю подарить собеседнику подписку [Telegram Premium](/api/premium/). Может быть истинным, только если `premium_gift_attach_menu_icon` тоже истинно. (логическое значение)

#### `chatlist_update_period`

[@term:deep link] Пользователи, импортировавшие папку по [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links) (`deep link` — ссылка, открывающая приложение сразу на нужном действии), должны получать добавления в эту папку вызовом [chatlists.getChatlistUpdates](/method/chatlists.getChatlistUpdates/) не чаще, чем раз в `chatlist_update_period` секунд. (целое число)

#### `chatlist_invites_limit_default`

Максимальное количество [глубоких ссылок на папку чатов »](/api/links/#chat-folder-links) в расчёте на одну папку, которое могут создать пользователи без [Premium](/api/premium/). (целое число)

#### `chatlist_invites_limit_premium`

Максимальное количество [глубоких ссылок на папку чатов »](/api/links/#chat-folder-links) в расчёте на одну папку, которое могут создать пользователи с [Premium](/api/premium/). (целое число)

#### `chatlists_joined_limit_default`

Максимальное количество [папок с общим доступом](/api/links/#chat-folder-links), которое могут иметь пользователи без [Premium](/api/premium/). (целое число)

#### `chatlists_joined_limit_premium`

Максимальное количество [папок с общим доступом](/api/links/#chat-folder-links), которое могут иметь пользователи с [Premium](/api/premium/). (целое число)

#### `small_queue_max_active_operations_count`

Нежёсткое ограничение, задающее максимальное количество файлов, которые следует скачивать параллельно с одного DC, для файлов меньше 20 МБ. (целое число)

#### `large_queue_max_active_operations_count`

Нежёсткое ограничение, задающее максимальное количество файлов, которые следует скачивать параллельно с одного DC, для файлов больше 20 МБ. (целое число)

#### `authorization_autoconfirm_period`

[@term:session] Через столько секунд после входа [неподтверждённая сессия »](/api/auth/#confirming-login) (`session` — сеанс работы конкретного устройства с аккаунтом) подтверждается автоматически. (целое число)

#### `story_viewers_expire_period`

Точный список пользователей, просмотревших историю, скрывается от её автора через столько секунд после истечения срока жизни истории. (целое число)

Это ограничение действует **только** для пользователей без [Premium](/api/premium/); пользователи с [Premium](/api/premium/) имеют доступ к списку просмотревших **всегда**.

#### `story_expiring_limit_default`

Максимальное количество активных [историй](/api/stories/) для пользователей без [Premium](/api/premium/) (целое число).

#### `story_expiring_limit_premium`

Максимальное количество активных [историй](/api/stories/) для пользователей с [Premium](/api/premium/) (целое число).

#### `story_caption_length_limit_premium`

Максимальная длина в UTF-8 подписей к историям для пользователей с [Premium](/api/premium/). (целое число)

#### `story_caption_length_limit_default`

Максимальная длина в UTF-8 подписей к историям для пользователей без [Premium](/api/premium/). (целое число)

#### `stories_posting`

Указывает, могут ли пользователи публиковать истории. (строка)

Одно из значений:

-   `enabled` — публиковать истории может любой пользователь.
-   `premium` — публиковать истории могут только пользователи с подпиской [Premium](/api/premium/).
-   `disabled` — пользователи не могут публиковать истории.

#### `stories_stealth_past_period`

Включение [режима невидимки для историй](/api/stories/#stealth-mode) с флагом `past` стирает просмотры всех историй, открытых за последние `stories_stealth_past_period` секунд. (целое число)

#### `stories_stealth_future_period`

Включение [режима невидимки для историй](/api/stories/#stealth-mode) с флагом `future` скрывает просмотры всех историй, открытых в течение следующих `stories_stealth_future_period` секунд. (целое число)

#### `stories_stealth_cooldown_period`

После включения [скрытого режима просмотра историй](/api/stories/#stealth-mode) должно пройти столько секунд, прежде чем пользователю будет позволено включить его снова. (целое число)

#### `stories_sent_weekly_limit_default`

Максимальное количество историй, которые за неделю может опубликовать пользователь без [Premium](/api/premium/). (целое число)

#### `stories_sent_weekly_limit_premium`

Максимальное количество историй, которые за неделю может опубликовать пользователь с [Premium](/api/premium/). (целое число)

#### `stories_sent_monthly_limit_default`

Максимальное количество историй, которые за месяц может опубликовать пользователь без [Premium](/api/premium/). (целое число)

#### `stories_sent_monthly_limit_premium`

Максимальное количество историй, которые за месяц может опубликовать пользователь с [Premium](/api/premium/). (целое число)

#### `stories_suggested_reactions_limit_default`

[@term:media area] Максимальное количество [медиа-областей с реакциями »](/api/stories/#media-areas) (`media area` — интерактивная область, накладываемая поверх истории), которые может добавить к истории пользователь без [Premium](/api/premium/). (целое число)

#### `stories_suggested_reactions_limit_premium`

Максимальное количество [медиа-областей с реакциями »](/api/stories/#media-areas), которые может добавить к истории пользователь с [Premium](/api/premium/). (целое число)

#### `stories_venue_search_username`

[@term:inline query] Имя пользователя инлайн-бота (бота, отвечающего на `inline query` — запрос, набираемый прямо в поле ввода), который используется для формирования меток заведений в историях; подробнее см. [здесь »](/api/stories/#location-tags). (строка)

#### `stories_changelog_user_id`

ID официального пользователя Telegram, который будет публиковать истории о новых возможностях Telegram: истории этого пользователя следует показывать в [панели активных или активных и скрытых историй](/api/stories/#watching-stories) так же, как для контактов, даже если пользователь был удалён из списка контактов. (целое число)

#### `stories_entities`

Могут ли [сущности оформления текста](/api/entities/) (`message entity`) и ссылки в подписях к историям использоваться всеми пользователями (`enabled`), только пользователями с [Premium](/api/premium/) (`premium`) или никем (`disabled`). (строка)

Это поле используется как при публикации историй — чтобы показать пользователю, может ли он применять сущности оформления, — так и при просмотре историй, чтобы скрывать сущности (на стороне клиента) в историях, опубликованных пользователями, у которых истекла подписка [Premium](/api/premium/) (если `stories_entities == "premium"`, а флаг `premium` конструктора [user](/constructor/user/) не установлен, либо если `stories_entities == "disabled"`).

#### `stories_area_url_max`

Максимальное количество [медиа-областей со ссылками »](/api/stories/#media-areas), которые можно добавить к публикуемой истории. (целое число)

#### `giveaway_gifts_purchase_available`

Может ли текущий пользователь запускать [розыгрыши](/api/giveaways/). (логическое значение)

#### `giveaway_add_peers_max`

Максимальное количество пользователей, которое можно указать при проведении [адресного розыгрыша](/api/giveaways/). (целое число)

#### `giveaway_countries_max`

Максимальное количество стран, которое можно указать при ограничении набора стран-участниц [розыгрыша](/api/giveaways/). (целое число)

#### `giveaway_boosts_per_premium`

Количество [бустов](/api/boost/), которые канал получит за каждого победителя [розыгрыша](/api/giveaways/). (целое число)

#### `giveaway_period_max`

Максимальная продолжительность [розыгрыша](/api/giveaways/) в секундах. (целое число)

#### `boosts_channel_level_max`

Максимальный [уровень бустов](/api/boost/) для каналов. (целое число)

#### `boosts_per_sent_gift`

Количество дополнительных [слотов бустов](/api/boost/), которые текущий пользователь получит при [дарении подписки Telegram Premium](/api/premium/#gifting-telegram-premium).

#### `transcribe_audio_trial_weekly_number`

Максимальное количество вызовов [распознавания речи »](/api/transcribe/) в неделю для пользователей без [Premium](/api/premium/). (целое число)

#### `transcribe_audio_trial_duration_max`

Максимально допустимая длительность медиафайла в секундах для [распознавания речи »](/api/transcribe/) у пользователей без [Premium](/api/premium/). (целое число)

#### `recommended_channels_limit_default`

Максимальное количество похожих каналов, которые метод [channels.getChannelRecommendations»](/method/channels.getChannelRecommendations/) может порекомендовать пользователям без [Premium](/api/premium/). (целое число)

#### `recommended_channels_limit_premium`

Максимальное количество похожих каналов, которые метод [channels.getChannelRecommendations»](/method/channels.getChannelRecommendations/) может порекомендовать пользователям с [Premium](/api/premium/). (целое число)

#### `quote_length_max`

Максимальная длина [цитируемого текста](/constructor/inputReplyToMessage/) в кодировке UTF-8. (целое число)

#### `channel_bg_icon_level_min`

По достижении как минимум этого [уровня бустов »](/api/boost/) каналы получают возможность менять [эмодзи акцентной палитры сообщений »](/api/colors/). (целое число)

#### `channel_profile_bg_icon_level_min`

По достижении как минимум этого [уровня бустов »](/api/boost/) и уровня бустов, указанного в поле `channel_min_level` конструктора [help.peerColorOption](/constructor/help.peerColorOption/) для выбранной палитры, каналы получают возможность менять эмодзи и цвет, используемые в [акцентной палитре профиля »](/api/colors/). (целое число)

#### `group_profile_bg_icon_level_min`

По достижении как минимум этого [уровня бустов](/api/boost/) и уровня бустов, указанного в поле `group_min_level` конструктора [help.peerColorOption](/constructor/help.peerColorOption/) для выбранной палитры, супергруппы получают возможность менять эмодзи и цвет, используемые в [акцентной палитре профиля »](/api/colors/). (целое число)

#### `channel_emoji_status_level_min`

По достижении как минимум этого [уровня бустов »](/api/boost/) каналы получают возможность менять свой [эмодзи-статус »](/api/emoji-status/). (целое число)

#### `group_emoji_status_level_min`

По достижении как минимум этого [уровня бустов »](/api/boost/) супергруппы получают возможность менять свой [эмодзи-статус »](/api/emoji-status/). (целое число)

#### `channel_wallpaper_level_min`

По достижении как минимум этого [уровня бустов »](/api/boost/) каналы получают возможность устанавливать [заливочный фон канала, подробнее см. здесь »](/api/wallpapers/#channel-and-supergroup-wallpapers). (целое число)

#### `group_wallpaper_level_min`

По достижении как минимум этого [уровня бустов »](/api/boost/) супергруппы получают возможность устанавливать [заливочный фон супергруппы, подробнее см. здесь »](/api/wallpapers/#channel-and-supergroup-wallpapers). (целое число)

#### `channel_custom_wallpaper_level_min`

По достижении как минимум этого [уровня бустов »](/api/boost/) каналы получают возможность устанавливать любой пользовательский [фон](/api/wallpapers/), а не только [заливочные фоны каналов, подробнее см. здесь »](/api/wallpapers/). (целое число)

#### `group_custom_wallpaper_level_min`

По достижении как минимум этого [уровня бустов »](/api/boost/) супергруппы получают возможность устанавливать любой пользовательский [фон](/api/wallpapers/), а не только [заливочные фоны супергрупп, подробнее см. здесь »](/api/wallpapers/). (целое число)

#### `group_transcribe_level_min`

По достижении как минимум этого [уровня бустов »](/api/boost/) пользователи без [Premium](/api/premium/) в супергруппе получают возможность [расшифровывать любое голосовое сообщение](/api/transcribe/), не расходуя свою бесплатную квоту на расшифровку. (целое число)

#### `group_emoji_stickers_level_min`

По достижении как минимум этого [уровня бустов »](/api/boost/) супергруппы получают возможность привязать [набор пользовательских эмодзи »](/api/custom-emoji/), который смогут использовать в сообщениях внутри группы все её участники (включая пользователей без [Premium](/api/premium/)!). (целое число)

#### `channel_restrict_sponsored_level_min`

По достижении как минимум этого [уровня бустов](/api/boost/) владельцы канала могут отключить рекламу в канале для всех пользователей с помощью метода [channels.restrictSponsoredMessages](/method/channels.restrictSponsoredMessages/). (целое число)

#### `saved_dialogs_pinned_limit_default`

Максимальное количество закреплённых диалогов в [избранных сообщениях](/api/saved-messages/) для пользователей без [Premium](/api/premium/). (целое число)

#### `saved_dialogs_pinned_limit_premium`

Максимальное количество закреплённых диалогов в [избранных сообщениях](/api/saved-messages/) для пользователей с [Premium](/api/premium/). (целое число)

#### `can_edit_factcheck`

Если значение истинно, текущий пользователь — независимый фактчекер и [может редактировать проверки фактов »](/api/factcheck/). (логическое значение)

#### `factcheck_length_limit`

Максимальная длина [проверок фактов »](/api/factcheck/) в кодировке UTF-8. (целое число)

#### `quick_replies_limit`

Максимальное количество [шаблонов быстрых ответов »](/api/business/#quick-reply-shortcuts), которые можно создать. (целое число)

#### `quick_reply_messages_limit`

Максимальное количество сообщений, которые можно добавить в [шаблон быстрого ответа »](/api/business/#quick-reply-shortcuts). (целое число)

#### `intro_title_length_limit`

Максимальная длина [заголовка бизнес-представления »](/constructor/businessIntro/) в кодировке UTF-8. (целое число)

#### `intro_description_length_limit`

Максимальная длина [описания бизнес-представления »](/constructor/businessIntro/) в кодировке UTF-8. (целое число)

#### `business_chat_links_limit`

Максимальное количество активных [бизнес-ссылок на чат](/api/business/#business-chat-links). (целое число)

#### `upload_premium_speedup_upload`

Указывает, во сколько раз быстрее загружаются файлы на сервер у [подписчиков Premium](/api/premium/); используется [так, как описано здесь »](/api/files/#uploading-files), в окне с предложением Premium, которое показывается при получении ошибок `FLOOD_WAIT_PREMIUM_X` во время отправки файлов. (целое число)

#### `upload_premium_speedup_download`

Указывает, во сколько раз быстрее скачиваются файлы у [подписчиков Premium](/api/premium/); используется [так, как описано здесь »](/api/files/#downloading-files), в окне с предложением Premium, которое показывается при получении ошибок `FLOOD_WAIT_PREMIUM_X` во время скачивания файлов. (целое число)

#### `upload_premium_speedup_notify_period`

Окно с предложением Premium, которое показывается при получении ошибок `FLOOD_WAIT_PREMIUM_X` во время отправки или скачивания файлов, следует показывать не чаще, чем раз в `upload_premium_speedup_notify_period` секунд. (целое число)

#### `stories_pinned_to_top_count_max`

Максимальное количество [историй, которые можно закрепить вверху профиля »](/api/stories/#pinned-or-archived-stories). (целое число)

#### `channel_revenue_withdrawal_enabled`

Если значение истинно, [вывод дохода от рекламы в каналах в текущем регионе разрешён](/api/revenue/); в противном случае все элементы интерфейса, связанные с доходом от рекламы, следует скрыть от пользователя. (логическое значение)

#### `stars_purchase_blocked`

Если значение ложно, [Telegram Stars можно использовать в текущем регионе](/api/stars/); в противном случае все элементы интерфейса, связанные со Stars, следует скрыть от пользователя. (логическое значение)

#### `stars_revenue_withdrawal_min`

Минимальная сумма [Telegram Stars](/api/stars/) на балансе канала или бота, при которой разрешён [вывод »](/api/stars/#withdrawing-revenue). (целое число)

#### `stars_paid_post_amount_max`

Максимальная цена в [Telegram Stars](/api/stars/) для публикуемого [платного медиа](/api/paid-media/). (целое число)

#### `stars_gifts_enabled`

[Возможность дарить Stars](/api/stars/#buying-or-gifting-stars) следует включать, только если этот флаг равен true. (логическое значение)

#### `bot_preview_medias_max`

Максимальное количество [превью главного mini app »](/api/bots/webapps/#main-mini-app-previews), которые можно добавить для одной локализации. (целое число)

#### `web_app_allowed_protocols`

Задаёт список разрешённых схем для URL, получаемых в [событиях web\_app\_open\_link](/api/web-events/#web-app-open-link). (массив строк)

#### `ton_proxy_address`

Задаёт доменное имя, которое следует использовать для безопасного открытия [TON-сайтов »](/api/links/#ton-sites). (строка)

#### `stars_subscription_amount_max`

Задаёт максимально допустимую цену в Stars для [подписки за Telegram Stars »](/api/stars/#star-subscriptions). (int)

#### `stars_usd_sell_rate_x1000`

Задаёт количество долларов США, необходимое для покупки тысячи [Telegram Stars](/api/stars/). (число с плавающей точкой)

#### `stars_usd_withdraw_rate_x1000`

Задаёт количество долларов США, которое будет получено при [выводе »](/api/stars/#withdrawing-revenue) тысячи [Telegram Stars](/api/stars/). (число с плавающей точкой)

#### `stars_paid_reaction_amount_max`

Максимальное количество [платных реакций](/api/reactions/#paid-reactions), которые можно отправить на пост. (целое число)

#### `stargifts_message_length_max`

Максимальная длина [сообщений при дарении подарков, подробнее см. здесь »](/api/gifts/). (целое число)

#### `stargifts_blocked`

Если значение истинно, [подарки »](/api/gifts/) обязаны быть отключены. (логическое значение)

#### `stargifts_convert_period_max`

[Подарок »](/api/gifts/) можно обменять обратно на [Telegram Stars](/api/stars/), только если он был получен менее `stargifts_convert_period_max` секунд назад. (целое число)

#### `video_ignore_alt_documents`

Если значение истинно, поле [messageMediaDocument](/constructor/messageMediaDocument/).`alt_documents` обязано игнорироваться. (логическое значение)

#### `starref_start_param_prefixes`

Префиксы стартового параметра для [реферальных программ в реферальных ссылках »](/api/links/#referral-links). (массив строк)

#### `starref_program_allowed`

Если значение ложно, текущий пользователь [не может создавать реферальные программы »](/api/bots/referrals/#creating-an-affiliate-program) для принадлежащих ему ботов. (логическое значение)

#### `starref_connect_allowed`

Если значение ложно, текущий пользователь [не может присоединяться к реферальным программам и становиться партнёром »](/api/bots/referrals/#becoming-an-affiliate). (логическое значение)

#### `starref_min_commission_permille`

Минимально допустимая партнёрская комиссия в промилле для [реферальных программ »](/api/bots/referrals/). (целое число)

#### `starref_max_commission_permille`

Максимально допустимая партнёрская комиссия в промилле для [реферальных программ »](/api/bots/referrals/). (целое число)

#### `inapp_update_check_delay`

Метод [help.getAppUpdate](/method/help.getAppUpdate/) следует вызывать раз в `inapp_update_check_delay` секунд, чтобы проверять наличие обновлений приложения. (целое число)

#### `premium_manage_subscription_url`

URL или глубокая ссылка, которую можно открыть для управления подпиской Premium. (строка)

#### `sponsored_links_inapp_allow`

Если значение истинно, ссылки из [рекламных сообщений](/api/sponsored-messages/), не являющиеся [глубокими ссылками или ссылками TON](/api/links/), обязаны открываться во встроенном браузере (если он есть); в противном случае они обязаны открываться в стандартном внешнем браузере. (логическое значение)

#### `ignore_restriction_reasons`

Массив строк с причинами ограничений, которые обязаны игнорироваться, если они встретились в поле [restrictionReason](/constructor/restrictionReason/).`reason`.

#### `restriction_add_platforms`

Массив строк с дополнительными идентификаторами платформ, которые обязаны учитываться при разборе [restrictionReason](/constructor/restrictionReason/).

#### `new_noncontact_peers_require_premium_without_ownpremium`

Если значение истинно, настройку [globalPrivacySettings](/constructor/globalPrivacySettings/).`new_noncontact_peers_require_premium` допускается включать даже при отсутствии аккаунта [Premium](/api/premium/); подробнее см. [здесь »](/api/privacy/#global-privacy-settings). (логическое значение)

#### `bot_verification_description_length_limit`

Максимальная длина в UTF-8 [полей описания при верификации ботом »](/api/bots/verification/). (целое число)

#### `channel_autotranslation_level_min`

Достигнув как минимум этого [уровня бустов »](/api/boost/), каналы получают возможность включить [автоперевод для всех пользователей »](/api/translation/#autotranslation-for-channels). (целое число)

#### `conference_call_size_limit`

Максимальное количество участников в [групповом звонке со сквозным шифрованием](/api/end-to-end/group-calls/).

#### `freeze_since_date`

Если поле задано и не равно нулю, оно указывает unixtime-момент, когда аккаунт был [заморожен](/api/auth/#frozen-accounts). (целое число)

#### `freeze_until_date`

Если поле задано и не равно нулю, оно указывает unixtime-момент, когда [замороженный](/api/auth/#frozen-accounts) аккаунт будет удалён, если только по адресу `freeze_appeal_url` не будет подана и удовлетворена апелляция. (целое число)

#### `freeze_appeal_url`

URL, который пользователь может открыть, чтобы подать апелляцию. (строка)

#### `poll_answers_max`

Максимальное допустимое количество [вариантов ответа в викторине](/api/poll/). (целое число)

#### `stargifts_pinned_to_top_limit`

Максимальное количество [подарков](/api/gifts/), которые [можно закрепить в профиле »](/api/gifts/#pinning-a-received-gift). (целое число)

#### `stars_paid_message_amount_max`

Задаёт максимальную цену [платных сообщений »](/api/paid-messages/). (целое число)

#### `stars_paid_message_commission_permille`

При отправке [платного сообщения](/api/paid-messages/) получатель получит количество Stars, равное цене сообщения, умноженной на `stars_paid_message_commission_permille` и делённой на 1000. (целое число)

#### `stars_paid_messages_available`

Задаёт, можно ли включить [платные сообщения »](/api/paid-messages/) для текущего пользователя. (bool)

#### `stars_paid_messages_channel_amount_default`

При выборе цены [платных личных сообщений в канал](/api/paid-messages/) интерфейс должен отображать [stars\_paid\_messages\_channel\_amount\_default](/api/config/#stars-paid-messages-channel-amount-default) как начальное значение по умолчанию.

#### `stars_revenue_withdrawal_max`

Максимальная сумма [Telegram Stars](/api/stars/), которую можно [вывести »](/api/stars/#withdrawing-revenue) с баланса канала или бота. (целое число)

#### `stars_stargift_resale_amount_max`

Максимальная цена, которую можно указать при [перепродаже коллекционных подарков »](/api/gifts/#reselling-collectible-gifts). (целое число)

#### `stars_stargift_resale_amount_min`

Минимальная цена, которую можно указать при [перепродаже коллекционных подарков »](/api/gifts/#reselling-collectible-gifts). (целое число)

#### `stars_stargift_resale_commission_permille`

При [перепродаже коллекционных подарков »](/api/gifts/#reselling-collectible-gifts) вы получите `resell_stars*stars_stargift_resale_commission_permille/1000` Stars. (целое число)

#### `stars_suggested_post_age_min`

[Предложенный пост](/api/suggested-posts/) обязан оставаться опубликованным в канале не менее указанного количества секунд, чтобы транзакция успешно завершилась. (целое число)

#### `stars_suggested_post_amount_max`

Максимальная цена в [Stars](/api/stars/) для [предложенного поста »](/api/suggested-posts/). (целое число)

#### `stars_suggested_post_amount_min`

Минимальная цена в [Stars](/api/stars/) для [предложенного поста »](/api/suggested-posts/). (целое число)

#### `stars_suggested_post_commission_permille`

При [предложении постов »](/api/suggested-posts/) канал получит `price*stars_suggested_post_commission_permille/1000` звёзд. (целое число)

#### `stars_suggested_post_future_max`

При [предложении постов с запланированным временем публикации »](/api/suggested-posts/) клиент вправе разрешить выбор дат не более чем на `stars_suggested_post_future_max` секунд вперёд. (целое число)

#### `stars_suggested_post_future_min`

При [предложении постов с запланированным временем публикации »](/api/suggested-posts/) клиент вправе разрешить выбор дат не менее чем на `stars_suggested_post_future_max` секунд вперёд. (целое число)

[@note] В оригинале в описании `stars_suggested_post_future_min` действительно упомянуто поле `stars_suggested_post_future_max` — это опечатка Telegram, сохранённая здесь дословно; по смыслу нижнюю границу задаёт `stars_suggested_post_future_min`. Такая же ошибка ниже у `ton_suggested_post_amount_min`, где описание начинается со слова «максимальная».

#### `todo_item_length_max`

Максимальная длина заголовка [пункта списка задач »](/api/todo/). (целое число)

#### `todo_items_max`

Максимальное количество [пунктов в списке задач »](/api/todo/). (целое число)

#### `todo_title_length_max`

Максимальная длина заголовка [списка задач »](/api/todo/). (целое число)

#### `ton_blockchain_explorer_url`

Содержит базовый URL обозревателя блокчейна, который следует подставлять перед адресами TON. (строка)

#### `ton_suggested_post_amount_max`

Максимальная цена в нанограммах для [предложенного поста »](/api/suggested-posts/). (целое число)

#### `ton_suggested_post_amount_min`

Максимальная цена в нанограммах для [предложенного поста »](/api/suggested-posts/). (целое число)

#### `ton_suggested_post_commission_permille`

При [предложении постов »](/api/suggested-posts/) с оплатой в граммах канал получит `price*ton_suggested_post_commission_permille/1000` нанограмм. (целое число)

#### `ton_topup_url`

URL, который следует открыть для пополнения текущего баланса TON. (строка)

#### `ton_usd_rate`

Текущий курс пересчёта TON в USD. (число с плавающей точкой)

#### `stargifts_collection_gifts_limit`

Максимальное количество подарков, которые можно добавить в [коллекцию подарков](/api/gifts/#gift-collections). (целое число)

#### `stargifts_collections_limit`

Максимальное количество [коллекций подарков](/api/gifts/#gift-collections), которые можно добавить в профиль. (целое число)

#### `stars_rating_learnmore_url`

URL, который пользователи могут открыть, чтобы получить дополнительные сведения о [звёздных рейтингах »](/api/stars/#star-rating). (строка)

#### `stories_album_stories_limit`

Максимальное количество историй, которые можно добавить в [альбом историй](/api/stories/#story-albums). (целое число)

#### `stories_albums_limit`

Максимальное количество [альбомов историй](/api/stories/#story-albums), которые можно добавить в профиль. (целое число)

#### `ton_stargift_resale_amount_max`

Максимальная цена в нанограммах, которую можно указать при [перепродаже коллекционных подарков »](/api/gifts/#reselling-collectible-gifts) за граммы. (целое число)

#### `ton_stargift_resale_amount_min`

Минимальная цена в нанограммах, которую можно указать при [перепродаже коллекционных подарков »](/api/gifts/#reselling-collectible-gifts) за граммы. (целое число)

#### `ton_stargift_resale_commission_permille`

При [перепродаже коллекционных подарков »](/api/gifts/#reselling-collectible-gifts) за граммы вы получите `price*ton_stargift_resale_commission_permille/1000` нанограмм. (целое число)

#### `need_age_video_verification`

Указывает, требуется ли в текущей юрисдикции [подтверждение возраста »](/api/age-verification/) для просмотра чувствительного контента.

Этот флаг также будет равен `false`, если текущая юрисдикция требует подтверждения возраста для контента с ограничениями, **и** пользователь успешно прошёл его на другом устройстве либо на текущем.

(логическое значение)

#### `verify_age_country`

Уникальное название страны или региона, законодательство которого потребовало [подтверждения возраста »](/api/age-verification/). (строка)

#### `verify_age_min`

Содержит минимальный возраст, необходимый для просмотра контента с пометкой `sensitive`, в контексте [подтверждения возраста »](/api/age-verification/). (целое число)

#### `verify_age_bot_username`

[@term:Main Mini App] Содержит имя пользователя бота, чьё [Main Mini App](/api/bots/webapps/#main-mini-apps) (главное Mini App бота — приложение, открываемое прямо из его профиля) необходимо открыть, чтобы пройти [подтверждение возраста »](/api/age-verification/). (строка)

#### `call_requests_disabled`

Если не задано или равно false, входящее [messageActionConferenceCall](/constructor/messageActionConferenceCall/), у которого флаги `missed` и `active` **не** установлены, должно вызывать звонок и экран входящего вызова — так же, как для обычных звонков один на один. (логическое значение)

#### `passkeys_account_passkeys_max`

[@term:passkey] Максимальное количество [ключей доступа »](/api/passkeys/) (`passkey` — криптографический ключ, заменяющий пароль при входе), которые можно привязать к одному аккаунту. (целое число)

#### `settings_display_passkeys`

[Поддержку ключей доступа »](/api/passkeys/) следует включать только в том случае, если этот ключ равен true. (bool)

#### `stars_groupcall_message_amount_max`

Максимальное количество [Telegram Stars](/api/stars/), которое можно заплатить за отправку одного текстового сообщения во время [группового звонка или прямой видеотрансляции »](/api/group-calls/). (целое число)

#### `stars_groupcall_message_limits`

[@term:tier] Задаёт уровни подсветки (`tier` — ценовая ступень оформления), применяемые к [платным сообщениям и комментариям, отправленным во время группового звонка или прямой видеотрансляции »](/api/group-calls/#paid-live-story-comments), в зависимости от количества [Telegram Stars](/api/stars/), пожертвованных вместе с сообщением.

Это JSON-массив объектов, каждый из которых описывает один уровень и содержит следующие ключи:

-   `stars` (длинное целое) — минимальное количество пожертвованных Stars, необходимое для достижения этого уровня.
-   `pin_period` (целое число) — сколько секунд сообщение этого уровня остаётся закреплённым или подсвеченным.
-   `text_length_max` (целое число) — максимальное количество символов UTF-8, допустимое в сообщении этого уровня.
-   `emoji_max` (целое число) — максимальное количество [пользовательских эмодзи](/api/custom-emoji/), допустимое в сообщении этого уровня.
-   `color1` (строка) — первый цвет, которым отображается текст сообщения, в виде шестизначной шестнадцатеричной строки RGB (например, `955CDB`).
-   `color2` (строка) — второй цвет, которым отображается текст сообщения, в виде шестизначной шестнадцатеричной строки RGB (например, `955CDB`).
-   `color2` (строка) — цвет фона, на котором отображается текст сообщения, в виде шестизначной шестнадцатеричной строки RGB.

Уровни отсортированы по возрастанию `stars`, а уровень со значением `stars`, равным `0`, описывает оформление бесплатных (неоплаченных) сообщений — клиентам следует считать, что такой уровень существует, и использовать значения по умолчанию, если массив его не содержит.  
Чтобы отобразить конкретное сообщение, клиент выбирает уровень с наибольшим порогом `stars`, который всё ещё не превышает сумму, пожертвованную вместе с сообщением ([groupCallMessage](/constructor/groupCallMessage/).`paid_message_stars`).

#### `whitelisted_bots`

Массив ID пользователей-ботов, которым официальные клиенты оказывают дополнительное доверие, обращаясь с ними как с ботами, которых пользователь уже явно открывал или добавил в [меню вложений](/api/bots/attach/). А именно, для бота из белого списка:

-   [Запрос подтверждения на запуск бота »](/api/bots/webapps/), который показывается перед открытием одного из его [Mini App](/api/bots/webapps/), пропускается — как если бы пользователь уже подтвердил открытие.
-   Его [Mini App](/api/bots/webapps/) вправе читать системный буфер обмена через событие [`web_app_read_text_from_clipboard` »](/api/web-events/#web-app-read-text-from-clipboard) — так же, как Mini App ботов из [меню вложений](/api/bots/attach/).

#### `stargifts_craft_attribute_permilles`

Вероятности сохранения атрибутов, используемые при отображении [интерфейса ковки коллекционных подарков »](/api/gifts/#crafting-collectible-gifts).  
Это массив из 4 массивов целых чисел; массив с индексом N содержит N+1 целых чисел, каждое из которых задаёт вероятность в промилле; подробнее см. [здесь »](/api/gifts/#crafting-collectible-gifts).

#### `no_forwards_request_expire_period`

Ожидающие [запросы на отключение защиты контента в личных чатах »](/api/content-protection/#for-users) автоматически истекают через [no\_forwards\_request\_expire\_period »](#no-forwards-request-expire-period) секунд после отправки, если до этого не будут вручную приняты или отклонены. (целое число)

#### `contact_note_length_limit`

Максимальная длина [приватных заметок о контакте »](/api/contacts/#private-notes-for-contacts). (целое число)

#### `group_call_message_length_limit`

Максимальная длина текстового сообщения, отправляемого во время [группового звонка или прямой видеотрансляции »](/api/group-calls/), в символах UTF-8. (целое число)

#### `group_call_message_ttl`

Количество секунд, в течение которых текстовое сообщение, отправленное во время [группового звонка или прямой видеотрансляции »](/api/group-calls/), остаётся на экране, прежде чем исчезнуть. (целое число)

#### `message_typing_draft_ttl`

[@term:live draft] Графическим клиентам следует автоматически удалять [живые черновики сообщений »](/api/bots/ai/#live-response-streaming) (`live draft` — постепенно дописываемый текст ответа, который приходит по мере генерации) через указанное число секунд после их получения либо при поступлении обычного сообщения в том же чате или теме форума бота — в зависимости от того, что произойдёт раньше. (целое число)

#### `bots_create_limit_default`

Максимальное количество [ботов](/api/bots/), которыми может владеть пользователь без [Premium](/api/premium/). (целое число)

#### `bots_create_limit_premium`

Максимальное количество [ботов](/api/bots/), которыми может владеть пользователь с [Premium](/api/premium/). (целое число)

#### `poll_answer_delete_period`

Для [опросов](/api/poll/), в которых пользователи могут добавлять свои варианты ответа, — период времени (в секундах), в течение которого добавивший вариант пользователь ещё может его удалить. (целое число)

#### `poll_close_period_max`

Максимальное допустимое значение (в секундах) для таймера автоматического закрытия [опроса](/api/poll/). (целое число)

#### `music_search_username`

Имя пользователя инлайн-бота, используемого для поиска музыки. (строка)

#### `aicompose_tone_examples_num`

Количество ознакомительных примеров, доступных для каждого [пользовательского тона AI-редактора »](/api/ai/#ai-compose-tones); их следует перебирать с помощью [aicompose.getToneExample](/method/aicompose.getToneExample/). (целое число)

#### `aicompose_tone_prompt_length_max`

Максимальная длина в UTF-8 поля `prompt` у [пользовательского тона AI-редактора »](/api/ai/#ai-compose-tones). (целое число)

#### `aicompose_tone_title_length_max`

Максимальная длина в UTF-8 поля `title` у [пользовательского тона AI-редактора »](/api/ai/#ai-compose-tones). (целое число)

#### `poll_countries_max`

Максимальное количество стран, которые можно выбрать при ограничении [опроса](/api/poll/) по стране. (целое число)

#### `aicompose_tone_saved_limit_default`

Максимальное количество [пользовательских тонов AI-редактора »](/api/ai/#ai-compose-tones), которые может установить пользователь без [Premium](/api/premium/). (целое число)

#### `aicompose_tone_saved_limit_premium`

Максимальное количество [пользовательских тонов AI-редактора »](/api/ai/#ai-compose-tones), которые может установить пользователь с [Premium](/api/premium/). (целое число)

#### `phone_country_iso2`

Двухбуквенный код страны текущего пользователя по стандарту [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), который сервер определяет по номеру телефона пользователя. Клиенты используют его, чтобы обеспечить работу [опросов с ограничением по странам »](/api/poll/#country-restricted-polls): пользователь может голосовать, только если этот код присутствует в списке [`countries_iso2`](/constructor/poll/) опроса. (строка)

### Предложения

```
help.promoData#08a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;

help.promoDataEmpty#98f6ac75 expires:int = help.PromoData;

---functions---

help.getPromoData#c0977421 = help.PromoData;
```

API может возвращать набор полезных предложений, а также сведения о социальной рекламе (PSA) и MTProxy для пользователей графических клиентов — с помощью метода [help.getPromoData](/method/help.getPromoData/).

Этот метод следует вызывать:

-   При запуске клиента
-   По истечении [help.PromoData](/type/help.PromoData/).`expires` секунд — и далее вплоть до завершения работы клиента.
-   Каждый раз при установлении нового соединения через MTProxy.

#### Сведения о социальной рекламе (PSA)

```
help.promoData#08a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;

help.promoDataEmpty#98f6ac75 expires:int = help.PromoData;

---functions---

help.getPromoData#c0977421 = help.PromoData;

help.hidePromoData#1e251c95 peer:InputPeer = Bool;
```

[@term:peer] Флаги `peer` (пир — собеседник: пользователь, чат или канал), `psa_type` (тип объявления) и `psa_message` (текст объявления) в конструкторе [help.promoData](/constructor/help.promoData/), возвращаемом методом [help.getPromoData](/method/help.getPromoData/), будут установлены все сразу для пиров социальной рекламы, которые следует закрепить вверху списка чатов.

В этом случае флаг `proxy` никогда не устанавливается.

Чтобы скрыть пир социальной рекламы из [help.promoData](/constructor/help.promoData/), вызовите [help.hidePromoData](/method/help.hidePromoData/).

#### Спонсор MTProxy

```
help.promoData#08a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;

help.promoDataEmpty#98f6ac75 expires:int = help.PromoData;

---functions---

help.getPromoData#c0977421 = help.PromoData;

help.hidePromoData#1e251c95 peer:InputPeer = Bool;
```

Флаги `peer` и `proxy` в конструкторе [help.promoData](/constructor/help.promoData/), возвращаемом методом [help.getPromoData](/method/help.getPromoData/), будут установлены все сразу при подключении через MTProxy, для которого задан связанный пир (то есть канал, спонсировавший этот MTProxy), — такой пир следует закрепить вверху списка чатов.

Чтобы скрыть пир MTProxy из [help.promoData](/constructor/help.promoData/), вызовите [help.hidePromoData](/method/help.hidePromoData/).

#### Базовые предложения

```
help.promoData#08a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;

help.promoDataEmpty#98f6ac75 expires:int = help.PromoData;

---functions---

help.getPromoData#c0977421 = help.PromoData;

help.dismissSuggestion#f50dbaa1 peer:InputPeer suggestion:string = Bool;
```

Поле `pending_suggestions` в конструкторе [help.promoData](/constructor/help.promoData/), возвращаемом методом [help.getPromoData](/method/help.getPromoData/), содержит список предложений, которые следует активно показывать пользователю в виде всплывающей подсказки.

Чтобы отклонить предложение, можно вызвать [help.dismissSuggestion](/method/help.dismissSuggestion/) (с `peer=`[inputPeerEmpty](/constructor/inputPeerEmpty/)) — после этого оно будет удалено из поля `pending_suggestions`.

Список возможных значений предложений:

##### `AUTOARCHIVE_POPULAR`

Пользователю _следует_ вызвать [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/) с [`globalPrivacySettings.archive_and_mute_new_noncontact_peers = boolTrue`](/constructor/globalPrivacySettings/), чтобы новые входящие чаты от не-контактов автоматически архивировались и для них отключались уведомления.

##### `VALIDATE_PASSWORD`

Пользователю следует убедиться, что он всё ещё помнит свой [пароль двухэтапной аутентификации](/api/srp/).

##### `VALIDATE_PHONE_NUMBER`

Пользователю следует проверить, верен ли его [номер телефона для авторизации](/api/auth/), и сменить номер, если доступа к нему больше нет.

##### `NEWCOMER_TICKS`

Показать пользователю подсказку о том, что означают одна и две галочки на отправленных сообщениях.

##### `SETUP_PASSWORD`

Показать пользователю подсказку с просьбой проверить, помнит ли он всё ещё свой [пароль двухфакторной аутентификации](/api/srp/)

##### `PREMIUM_ANNUAL`

Предлагает пользователю оформить подписку Telegram Premium (с годовой оплатой)

##### `PREMIUM_UPGRADE`

Предлагает пользователю перевести имеющуюся подписку Premium с ежемесячной оплаты на годовую

##### `PREMIUM_RESTORE`

Предлагает пользователю восстановить недавно истёкшую подписку Premium

##### `PREMIUM_CHRISTMAS`

Предлагает пользователю [подарить подписку Telegram Premium](/api/premium/#gifting-telegram-premium) друзьям на Рождество.

##### `PREMIUM_GRACE`

Предлагает пользователю продлить истекающую подписку Telegram Premium

##### `BIRTHDAY_SETUP`

Предлагает пользователю указать [дату рождения »](/api/profile/#birthday).

##### `STARS_SUBSCRIPTION_LOW_BALANCE`

Когда до конца оплаченного периода одной или нескольких активных подписок остаётся немного, а текущего [баланса Telegram Stars](/api/stars/) не хватает, чтобы автоматически продлить хотя бы одну из них, активируется это предложение: когда пользователь нажимает на него, клиент должен получить и показать список истекающих подписок, вызвав [payments.getStarsSubscriptions](/method/payments.getStarsSubscriptions/) с [inputPeerSelf](/constructor/inputPeerSelf/) в поле `peer` и установленным флагом `missing_balance`; возвращённые подписки можно продлить, [пополнив текущий баланс Telegram Stars](/api/stars/) как минимум на [payments.starsStatus](/constructor/payments.starsStatus/).`subscriptions_missing_balance` звёзд.

##### `USERPIC_SETUP`

Предлагает пользователю установить [фотографию профиля »](/api/files/#uploading-profile-or-chat-pictures).

##### `SETUP_LOGIN_EMAIL`

Предлагает пользователю задать [почту для входа »](/api/auth/#email-verification).

##### `SETUP_LOGIN_EMAIL_NOSKIP`

Требует от пользователя задать [почту для входа »](/api/auth/#email-verification): это предложение нельзя пропустить, и его следует показывать как полноэкранное окно без возможности закрытия, полностью блокирующее работу с приложением, пока почта для входа не будет настроена.

##### `SETUP_PASSKEY`

Предлагает пользователю настроить [passkey »](/api/passkeys/).

#### Пользовательские предложения

```
help.promoData#08a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;

pendingSuggestion#e7e82e12 suggestion:string title:TextWithEntities description:TextWithEntities url:string = PendingSuggestion;

---functions---

help.getPromoData#c0977421 = help.PromoData;

help.dismissSuggestion#f50dbaa1 peer:InputPeer suggestion:string = Bool;
```

Поле `custom_pending_suggestion` в конструкторе [help.promoData](/constructor/help.promoData/), который возвращает метод [help.getPromoData](/method/help.getPromoData/), содержит список _пользовательских_ предложений, которые следует активно показывать пользователю в виде всплывающей подсказки.

У пользовательских предложений уже заполнены поля `title` и `description`, есть `url`, который следует открыть при нажатии на предложение, а также поле `suggestion` с идентификатором: этот идентификатор нужно передавать в [help.dismissSuggestion](/method/help.dismissSuggestion/) (с `peer=`[inputPeerEmpty](/constructor/inputPeerEmpty/)), чтобы скрыть предложение, после чего оно исчезнет из поля `custom_pending_suggestion`.

Этим они отличаются от [базовых предложений »](#basic-suggestions), у которых фактически есть только идентификатор `suggestion`, а описание, заголовок и действие клиент должен подставить самостоятельно.

#### Инвертированные предложения

```
help.promoData#08a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;

help.promoDataEmpty#98f6ac75 expires:int = help.PromoData;

---functions---

help.getPromoData#c0977421 = help.PromoData;

help.dismissSuggestion#f50dbaa1 peer:InputPeer suggestion:string = Bool;
```

Такие предложения _включены по умолчанию_ и никогда не возвращаются в поле `pending_suggestions` метода [help.getPromoData](/method/help.getPromoData/).

[@note] «Инвертированные» здесь означает противоположную логику: базовое предложение показывается, только если сервер прислал его идентификатор, а инвертированное показывается всегда, пока пользователь его явно не скроет.

Скрыть их можно обычным вызовом [help.dismissSuggestion](/method/help.dismissSuggestion/), но, в отличие от [базовых предложений](#basic-suggestions) (с `peer=`[inputPeerEmpty](/constructor/inputPeerEmpty/)), после скрытия они появятся в поле `dismissed_suggestions` [объекта конфигурации клиента](#client-configuration).

Список инвертированных предложений:

##### `BIRTHDAY_CONTACTS_TODAY`

Если предложение не скрыто, клиенту следует показать всплывающую подсказку с рекомендацией подарить подписку Telegram Premium контактам, у которых сегодня [день рождения »](/api/profile/#birthday).

Это предложение можно скрыть вызовом [help.dismissSuggestion](/method/help.dismissSuggestion/), когда пользователь закрывает подсказку, но сервер скрывает его и автоматически — если пользователь дарит одну или несколько подписок Telegram Premium друзьям, чьи дни рождения приходятся на ближайшие или прошедшие 24 часа.

#### Предложения канала

```
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;

channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

---functions---

channels.getFullChannel#08736a09 channel:InputChannel = messages.ChatFull;
```

Некоторые подсказки, относящиеся к [каналам и супергруппам](/api/channel/), могут также содержаться в поле `pending_suggestions` конструктора [channelFull](/constructor/channelFull/), который возвращает метод [channels.getFullChannel](/method/channels.getFullChannel/).  
Ниже перечислены возможные подсказки:

##### `CONVERT_GIGAGROUP`

В [супергруппе](/api/channel/) слишком много участников: администратору следует вызвать [channels.convertToGigagroup](/method/channels.convertToGigagroup/), чтобы преобразовать её в гигагруппу.

#### Скрытие подсказок

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;

---functions---

help.dismissSuggestion#f50dbaa1 peer:InputPeer suggestion:string = Bool;
```

Скрыть подсказку позволяет метод [help.dismissSuggestion](/method/help.dismissSuggestion/).  
В поле `peer` передавайте [inputPeerEmpty](/constructor/inputPeerEmpty/) — для [базовых подсказок](#basic-suggestions) и [пользовательских подсказок](#custom-suggestions) — либо пир самого [канала или супергруппы](/api/channel/) для [подсказок канала](#channel-suggestions).

### Конфигурация, специфичная для приложения

```
help.appUpdate#ccbbce30 flags:# can_not_skip:flags.0?true id:int version:string text:string entities:Vector<MessageEntity> document:flags.1?Document url:flags.2?string sticker:flags.3?Document = help.AppUpdate;
help.noAppUpdate#c45a6536 = help.AppUpdate;

updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateServiceNotification#ebe46819 flags:# popup:flags.0?true invert_media:flags.2?true inbox_date:flags.1?int type:string message:string media:MessageMedia entities:Vector<MessageEntity> = Update;

help.inviteText#18cb9f78 message:string = help.InviteText;

---functions---

help.getAppUpdate#522d5a7d source:string = help.AppUpdate;

help.getInviteText#4d392343 = help.InviteText;
```

-   [help.getAppUpdate](/method/help.getAppUpdate/) — получить сведения об обновлении приложения; во вложенном документе может передаваться сам обновлённый двоичный файл приложения
-   [help.getInviteText](/method/help.getInviteText/) — возвращает локализованный текст приглашения, который можно отправить по SMS контактам, ещё не зарегистрированным в Telegram

### Условия использования

```
help.termsOfServiceUpdateEmpty#e3309f7f expires:int = help.TermsOfServiceUpdate;
help.termsOfServiceUpdate#28ecf961 expires:int terms_of_service:help.TermsOfService = help.TermsOfServiceUpdate;

help.termsOfService#780a0310 flags:# popup:flags.0?true id:DataJSON text:string entities:Vector<MessageEntity> min_age_confirm:flags.1?int = help.TermsOfService;

auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;

---functions---

help.getTermsOfServiceUpdate#2ca51fd1 = help.TermsOfServiceUpdate;
help.acceptTermsOfService#ee72f79a id:DataJSON = Bool;

auth.signIn#8d52a951 flags:# phone_number:string phone_code_hash:string phone_code:flags.0?string email_verification:flags.1?EmailVerification = auth.Authorization;

account.deleteAccount#a2c0cf74 flags:# reason:string password:flags.0?InputCheckPasswordSRP = Bool;
```

Эти методы служат для управления согласием пользователя с [условиями использования](https://telegram.org/tos) Telegram.

Как правило, прежде чем пользователь [зарегистрируется](/api/auth/#sign-in-sign-up) с помощью [auth.signUp](/method/auth.signUp/), приложению следует показать всплывающее окно (если у метода [help.termsOfService](/constructor/help.termsOfService/) установлен флаг `popup`) с просьбой принять условия использования Telegram; при отказе пользователя возвращают на начальную страницу процедуры входа.

При первичной регистрации конструктор [help.termsOfService](/constructor/help.termsOfService/) следует брать из конструктора [auth.authorizationSignUpRequired](/constructor/auth.authorizationSignUpRequired/), который возвращает [auth.signIn](/method/auth.signIn/).

После регистрации, а также при входе уже существующего пользователя приложение обязано вызвать [help.getTermsOfServiceUpdate](/method/help.getTermsOfServiceUpdate/), чтобы проверить, не изменились ли условия использования; этот вызов следует повторять по истечении `expires` секунд.  
Если обновление условий использования доступно, клиенту следует показать окно с запросом согласия; если пользователь согласился, клиент должен вызвать [help.acceptTermsOfService](/method/help.acceptTermsOfService/), передав [JSON-объект `id` из termsOfService](/constructor/help.termsOfService/); в случае отказа клиент обязан удалить аккаунт методом [account.deleteAccount](/method/account.deleteAccount/), указав в качестве причины (`reason`) строку `Decline ToS update`.

Примеры реализации: [android (регистрация)](https://github.com/DrKLO/Telegram/blob/68d51749c4fcbaffa584829f23936565df55e08b/TMessagesProj/src/main/java/org/telegram/ui/LoginActivity.java#L7757), [android (после входа)](https://github.com/DrKLO/Telegram/blob/eee720ef5e48e1c434f4c5a83698dc4ada34aaa9/TMessagesProj/src/main/java/org/telegram/ui/Components/TermsOfServiceView.java)

### Сведения о поддержке Telegram

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

help.support#17c6b5f6 phone_number:string user:User = help.Support;
help.supportName#8c05f1c9 name:string = help.SupportName;

---functions---

help.getSupport#9cdf08cd = help.Support;
help.getSupportName#d360e72c = help.SupportName;
```

Эти методы позволяют получить информацию о служебном пользователе поддержки Telegram, через которого пользователи могут обратиться за помощью и задать вопросы о приложении.

-   [help.getSupport](/method/help.getSupport/) — возвращает объект [user](/constructor/user/), который можно использовать для связи со службой поддержки.
-   [help.getSupportName](/method/help.getSupportName/) — возвращает локализованное название чата поддержки.

### Информация о странах и шаблоны телефонных номеров для входа

```
help.countryCode#4203c5ef flags:# country_code:string prefixes:flags.0?Vector<string> patterns:flags.1?Vector<string> = help.CountryCode;

help.country#c3878e23 flags:# hidden:flags.0?true iso2:string default_name:string name:flags.1?string country_codes:Vector<help.CountryCode> = help.Country;

help.countriesListNotModified#93cc1f32 = help.CountriesList;
help.countriesList#87d0759e countries:Vector<help.Country> hash:int = help.CountriesList;

---functions---
help.getCountriesList#735787a8 lang_code:string hash:int = help.CountriesList;
```

Метод [help.getCountriesList](/method/help.getCountriesList/) позволяет получить список локализованных названий всех доступных стран и шаблонов телефонных кодов для входа в аккаунт.

[@term:pattern] Шаблон телефонного кода (`pattern` — маска ввода, где каждый символ `X` обозначает одну цифру) следует применять при показе экрана [входа](/api/auth/), а также при смене номера телефона: например, значение шаблона `XXX XXX XXX` вместе с `country_code`, равным `+39`, означает, что поле номера при входе должно принимать разбитую пробелами запись вида `+39 123 456 789`.  
Кроме того, начало национальной части номера (`123 456 789`) должно совпадать с одним из значений `prefixes`, если они были возвращены.

Дополнительно [параметр клиентской конфигурации](/api/config/#client-configuration) `fragment_prefixes` содержит список префиксов анонимных номеров телефона [Fragment](https://fragment.com).
