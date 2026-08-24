---
title: "Config"
original: "https://core.telegram.org/type/Config"
section: ref
description: "Object contains info on API configuring parameters."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Config","url":"/type/Config/"}]
layout: layout.njk
---

# Config

Object contains info on API configuring parameters.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/config/">config</a>#cc1a241e flags:<a href="/type/%23/">#</a> default_p2p_contacts:flags.3?true preload_featured_stickers:flags.4?true revoke_pm_inbox:flags.6?true blocked_mode:flags.8?true force_try_ipv6:flags.14?true date:<a href="/type/int/">int</a> expires:<a href="/type/int/">int</a> test_mode:<a href="/type/Bool/">Bool</a> this_dc:<a href="/type/int/">int</a> dc_options:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DcOption/">DcOption</a>&gt; dc_txt_domain_name:<a href="/type/string/">string</a> chat_size_max:<a href="/type/int/">int</a> megagroup_size_max:<a href="/type/int/">int</a> forwarded_count_max:<a href="/type/int/">int</a> online_update_period_ms:<a href="/type/int/">int</a> offline_blur_timeout_ms:<a href="/type/int/">int</a> offline_idle_timeout_ms:<a href="/type/int/">int</a> online_cloud_timeout_ms:<a href="/type/int/">int</a> notify_cloud_delay_ms:<a href="/type/int/">int</a> notify_default_delay_ms:<a href="/type/int/">int</a> push_chat_period_ms:<a href="/type/int/">int</a> push_chat_limit:<a href="/type/int/">int</a> edit_time_limit:<a href="/type/int/">int</a> revoke_time_limit:<a href="/type/int/">int</a> revoke_pm_time_limit:<a href="/type/int/">int</a> rating_e_decay:<a href="/type/int/">int</a> stickers_recent_limit:<a href="/type/int/">int</a> channels_read_media_period:<a href="/type/int/">int</a> tmp_sessions:flags.0?<a href="/type/int/">int</a> call_receive_timeout_ms:<a href="/type/int/">int</a> call_ring_timeout_ms:<a href="/type/int/">int</a> call_connect_timeout_ms:<a href="/type/int/">int</a> call_packet_timeout_ms:<a href="/type/int/">int</a> me_url_prefix:<a href="/type/string/">string</a> autoupdate_url_prefix:flags.7?<a href="/type/string/">string</a> gif_search_username:flags.9?<a href="/type/string/">string</a> venue_search_username:flags.10?<a href="/type/string/">string</a> img_search_username:flags.11?<a href="/type/string/">string</a> static_maps_provider:flags.12?<a href="/type/string/">string</a> caption_length_max:<a href="/type/int/">int</a> message_length_max:<a href="/type/int/">int</a> webfile_dc_id:<a href="/type/int/">int</a> suggested_lang_code:flags.2?<a href="/type/string/">string</a> lang_pack_version:flags.2?<a href="/type/int/">int</a> base_lang_pack_version:flags.2?<a href="/type/int/">int</a> reactions_default:flags.15?<a href="/type/Reaction/">Reaction</a> autologin_token:flags.16?<a href="/type/string/">string</a> = <a href="/type/Config/" class="current_page_link">Config</a>;

---functions---

<a href="/method/help.getConfig/">help.getConfig</a>#c4f9186b = <a href="/type/Config/" class="current_page_link">Config</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/config/">config</a></td><td>Current configuration</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getConfig/">help.getConfig</a></td><td>Returns current configuration, including data center configuration.</td></tr></tbody></table>
