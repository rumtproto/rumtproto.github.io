---
title: "ChatBannedRights"
original: "https://core.telegram.org/type/ChatBannedRights"
section: ref
description: "Represents the rights of a normal user in a supergroup/channel/chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChatBannedRights","url":"/type/ChatBannedRights/"}]
layout: layout.njk
---

# ChatBannedRights

Represents the rights of a normal user in a [supergroup/channel/chat](/api/channel/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatBannedRights/">chatBannedRights</a>#9f120418 flags:<a href="/type/%23/">#</a> view_messages:flags.0?true send_messages:flags.1?true send_media:flags.2?true send_stickers:flags.3?true send_gifs:flags.4?true send_games:flags.5?true send_inline:flags.6?true embed_links:flags.7?true send_polls:flags.8?true change_info:flags.10?true invite_users:flags.15?true pin_messages:flags.17?true manage_topics:flags.18?true send_photos:flags.19?true send_videos:flags.20?true send_roundvideos:flags.21?true send_audios:flags.22?true send_voices:flags.23?true send_docs:flags.24?true send_plain:flags.25?true edit_rank:flags.26?true until_date:<a href="/type/int/">int</a> = <a href="/type/ChatBannedRights/" class="current_page_link">ChatBannedRights</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatBannedRights/">chatBannedRights</a></td><td>Represents the rights of a normal user in a <a href="/api/channel/">supergroup/channel/chat</a>. In this case, the flags are inverted: if set, a flag <strong>does not allow</strong> a user to do X.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
