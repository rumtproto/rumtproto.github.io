---
title: "botCommandScopePeerUser"
original: "https://core.telegram.org/constructor/botCommandScopePeerUser"
section: ref
description: "The specified bot commands will be valid only for a specific user in the specified group or supergroup."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botCommandScopePeerUser","url":"/constructor/botCommandScopePeerUser/"}]
layout: layout.njk
---

# botCommandScopePeerUser

The specified bot commands will be valid only for a specific user in the specified [group or supergroup](/api/channel/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botCommandScopePeerUser/" class="current_page_link">botCommandScopePeerUser</a>#a1321f3 peer:<a href="/type/InputPeer/">InputPeer</a> user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/BotCommandScope/">BotCommandScope</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The chat</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user</td></tr></tbody></table>

### Type

[BotCommandScope](/type/BotCommandScope/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
