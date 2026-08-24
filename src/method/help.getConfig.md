---
title: "help.getConfig"
original: "https://core.telegram.org/method/help.getConfig"
section: ref
kind: method
description: "Возвращает текущую конфигурацию, включая конфигурацию дата-центров."
layout: layout.njk
---

# help.getConfig

Возвращает текущую конфигурацию, включая конфигурацию дата-центров.

```
config#cc1a241e flags:# default_p2p_contacts:flags.3?true preload_featured_stickers:flags.4?true revoke_pm_inbox:flags.6?true blocked_mode:flags.8?true force_try_ipv6:flags.14?true date:int expires:int test_mode:Bool this_dc:int dc_options:Vector<DcOption> dc_txt_domain_name:string chat_size_max:int megagroup_size_max:int forwarded_count_max:int online_update_period_ms:int offline_blur_timeout_ms:int offline_idle_timeout_ms:int online_cloud_timeout_ms:int notify_cloud_delay_ms:int notify_default_delay_ms:int push_chat_period_ms:int push_chat_limit:int edit_time_limit:int revoke_time_limit:int revoke_pm_time_limit:int rating_e_decay:int stickers_recent_limit:int channels_read_media_period:int tmp_sessions:flags.0?int call_receive_timeout_ms:int call_ring_timeout_ms:int call_connect_timeout_ms:int call_packet_timeout_ms:int me_url_prefix:string autoupdate_url_prefix:flags.7?string gif_search_username:flags.9?string venue_search_username:flags.10?string img_search_username:flags.11?string static_maps_provider:flags.12?string caption_length_max:int message_length_max:int webfile_dc_id:int suggested_lang_code:flags.2?string lang_pack_version:flags.2?int base_lang_pack_version:flags.2?int reactions_default:flags.15?Reaction autologin_token:flags.16?string = Config;
---functions---
help.getConfig#c4f9186b = Config;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[Config](/type/Config/)

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CONNECTION_API_ID_INVALID</td><td>Указанный идентификатор API недействителен.</td></tr><tr><td>400</td><td>CONNECTION_APP_VERSION_EMPTY</td><td>Версия приложения пуста.</td></tr><tr><td>400</td><td>CONNECTION_LAYER_INVALID</td><td>Недействительный слой.</td></tr><tr><td>400</td><td>DATA_INVALID</td><td>Зашифрованные данные недействительны.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>Указанное имя пользователя недействительно.</td></tr><tr><td>403</td><td>USER_PRIVACY_RESTRICTED</td><td>Настройки приватности пользователя не позволяют вам это сделать.</td></tr></tbody></table>
