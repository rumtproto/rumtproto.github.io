---
title: "config (конструктор)"
original: "https://core.telegram.org/constructor/config"
section: ref
kind: constructor
layout: layout.njk
---

# config

*Конструктор из схемы TL.*

> Current configuration

## Определение TL

```
config#cc1a241e flags:# default_p2p_contacts:flags.3?true preload_featured_stickers:flags.4?true revoke_pm_inbox:flags.6?true blocked_mode:flags.8?true force_try_ipv6:flags.14?true date:int expires:int test_mode:Bool this_dc:int dc_options:Vector<DcOption> dc_txt_domain_name:string chat_size_max:int megagroup_size_max:int forwarded_count_max:int online_update_period_ms:int offline_blur_timeout_ms:int offline_idle_timeout_ms:int online_cloud_timeout_ms:int notify_cloud_delay_ms:int notify_default_delay_ms:int push_chat_period_ms:int push_chat_limit:int edit_time_limit:int revoke_time_limit:int revoke_pm_time_limit:int rating_e_decay:int stickers_recent_limit:int channels_read_media_period:int tmp_sessions:flags.0?int call_receive_timeout_ms:int call_ring_timeout_ms:int call_connect_timeout_ms:int call_packet_timeout_ms:int me_url_prefix:string autoupdate_url_prefix:flags.7?string gif_search_username:flags.9?string venue_search_username:flags.10?string img_search_username:flags.11?string static_maps_provider:flags.12?string caption_length_max:int message_length_max:int webfile_dc_id:int suggested_lang_code:flags.2?string lang_pack_version:flags.2?int base_lang_pack_version:flags.2?int reactions_default:flags.15?Reaction autologin_token:flags.16?string = Config;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| default_p2p_contacts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether the client should use P2P by default for phone calls with contacts |
| preload_featured_stickers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether the client should preload featured stickers |
| revoke_pm_inbox | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether incoming private messages can be deleted for both participants |
| blocked_mode | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Indicates that telegram is probably censored by governments/ISPs in the current region |
| force_try_ipv6 | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | Whether to forcefully connect using IPv6 [dcOptions](/type/DcOption/), even if the client knows that IPv4 is available. |
| date | [int](/type/int/) | Current date at the server |
| expires | [int](/type/int/) | Expiration date of this config: when it expires it'll have to be refetched using [help.getConfig](/method/help.getConfig/) |
| test_mode | [Bool](/type/Bool/) | Whether we're connected to the test DCs |
| this_dc | [int](/type/int/) | ID of the DC that returned the reply |
| dc_options | [Vector](https://core.telegram.org/type/Vector%20t)<[DcOption](/type/DcOption/)> | DC IP list |
| dc_txt_domain_name | [string](/type/string/) | Domain name for fetching encrypted DC list from DNS TXT record |
| chat_size_max | [int](/type/int/) | Maximum member count for normal [groups](https://core.telegram.org/api/channel) |
| megagroup_size_max | [int](/type/int/) | Maximum member count for [supergroups](https://core.telegram.org/api/channel) |
| forwarded_count_max | [int](/type/int/) | Maximum number of messages that can be forwarded at once using [messages.forwardMessages](/method/messages.forwardMessages/). |
| online_update_period_ms | [int](/type/int/) | The client should [update its online status](/method/account.updateStatus/) every N milliseconds |
| offline_blur_timeout_ms | [int](/type/int/) | Delay before offline status needs to be sent to the server |
| offline_idle_timeout_ms | [int](/type/int/) | Time without any user activity after which it should be treated offline |
| online_cloud_timeout_ms | [int](/type/int/) | If we are offline, but were online from some other client in last online_cloud_timeout_ms milliseconds after we had gone offline, then delay offline notification for notify_cloud_delay_ms milliseconds. |
| notify_cloud_delay_ms | [int](/type/int/) | If we are offline, but online from some other client then delay sending the offline notification for notify_cloud_delay_ms milliseconds. |
| notify_default_delay_ms | [int](/type/int/) | If some other client is online, then delay notification for notification_default_delay_ms milliseconds |
| push_chat_period_ms | [int](/type/int/) | Not for client use |
| push_chat_limit | [int](/type/int/) | Not for client use |
| edit_time_limit | [int](/type/int/) | Only messages with age (in seconds) smaller than the one specified in this field can be edited |
| revoke_time_limit | [int](/type/int/) | Only channel/supergroup messages with age smaller than the specified can be deleted |
| revoke_pm_time_limit | [int](/type/int/) | Only private messages with age smaller than the specified can be deleted |
| rating_e_decay | [int](/type/int/) | Exponential decay rate for computing [top peer rating](https://core.telegram.org/api/top-rating) |
| stickers_recent_limit | [int](/type/int/) | Maximum number of recent stickers |
| channels_read_media_period | [int](/type/int/) | Indicates that round videos (video notes) and voice messages sent in channels and older than the specified period must be marked as read |
| tmp_sessions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Number of [parallel sessions](https://core.telegram.org/api/datacenter#parallel-sessions) the client may open to the main connection of its home DC to increase throughput; if absent or ≤ 1, a single main session must be used |
| call_receive_timeout_ms | [int](/type/int/) | Maximum allowed outgoing ring time in VoIP calls: if the user we're calling doesn't reply within the specified time (in milliseconds), we should hang up the call |
| call_ring_timeout_ms | [int](/type/int/) | Maximum allowed incoming ring time in VoIP calls: if the current user doesn't reply within the specified time (in milliseconds), the call will be automatically refused |
| call_connect_timeout_ms | [int](/type/int/) | VoIP connection timeout: if the instance of libtgvoip on the other side of the call doesn't connect to our instance of libtgvoip within the specified time (in milliseconds), the call must be aborted |
| call_packet_timeout_ms | [int](/type/int/) | If during a VoIP call a packet isn't received for the specified period of time, the call must be aborted |
| me_url_prefix | [string](/type/string/) | The domain to use to parse [deep links »](https://core.telegram.org/api/links). |
| autoupdate_url_prefix | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[string](/type/string/) | URL to use to auto-update the current app |
| gif_search_username | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[string](/type/string/) | Username of the bot to use to search for GIFs |
| venue_search_username | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[string](/type/string/) | Username of the bot to use to search for venues |
| img_search_username | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[string](/type/string/) | Username of the bot to use for image search |
| static_maps_provider | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[string](/type/string/) | ID of the map provider to use for venues |
| caption_length_max | [int](/type/int/) | Maximum length of caption (length in utf8 codepoints) |
| message_length_max | [int](/type/int/) | Maximum length of messages (length in utf8 codepoints) |
| webfile_dc_id | [int](/type/int/) | DC ID to use to download [webfiles](https://core.telegram.org/api/files/#downloading-webfiles) |
| suggested_lang_code | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Suggested language code |
| lang_pack_version | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Language pack version |
| base_lang_pack_version | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Basic language pack version |
| reactions_default | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[Reaction](/type/Reaction/) | Default [message reaction](https://core.telegram.org/api/reactions) |
| autologin_token | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[string](/type/string/) | Autologin token, [click here for more info on URL authorization »](https://core.telegram.org/api/url-authorization#link-url-authorization). |

## Тип

[Config](/type/Config/)

## Related pages

#### [DcOption](/type/DcOption/)

Information for connection to data center.

#### [help.getConfig](/method/help.getConfig/)

Returns current configuration, including data center configuration.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [messages.forwardMessages](/method/messages.forwardMessages/)

Forwards messages by their IDs.

#### [account.updateStatus](/method/account.updateStatus/)

Updates online user status.

#### [Top peer rating](https://core.telegram.org/api/top-rating)

If enabled, the rating of top peers indicates the relevance of a frequently used peer in a certain category (frequently messaged users, frequently used bots, inline bots, frequently visited channels and so on).

#### [Working with Different Data Centers](https://core.telegram.org/api/datacenter)

How to connect to the closest DC access point for faster interaction with the API, and things to watch out for when developing a client.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Seamless Telegram Login](https://core.telegram.org/api/url-authorization)

Handle Seamless Telegram Login URL authorization requests.
