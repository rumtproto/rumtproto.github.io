---
title: "AttachMenuBot"
original: "https://core.telegram.org/type/AttachMenuBot"
section: ref
description: "Represents a bot mini app that can be launched from the attachment menu »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"AttachMenuBot","url":"/type/AttachMenuBot/"}]
layout: layout.njk
---

# AttachMenuBot

Represents a [bot mini app that can be launched from the attachment menu »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/attachMenuBot/">attachMenuBot</a>#d90d8dfe flags:<a href="/type/%23/">#</a> inactive:flags.0?true has_settings:flags.1?true request_write_access:flags.2?true show_in_attach_menu:flags.3?true show_in_side_menu:flags.4?true side_menu_disclaimer_needed:flags.5?true bot_id:<a href="/type/long/">long</a> short_name:<a href="/type/string/">string</a> peer_types:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AttachMenuPeerType/">AttachMenuPeerType</a>&gt; icons:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AttachMenuBotIcon/">AttachMenuBotIcon</a>&gt; = <a href="/type/AttachMenuBot/" class="current_page_link">AttachMenuBot</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/attachMenuBot/">attachMenuBot</a></td><td>Represents a <a href="/api/bots/attach/">bot mini app that can be launched from the attachment/side menu »</a><br><br>At least one of the <code>show_in_attach_menu</code> or the <code>show_in_side_menu</code> flags will always be set.</td></tr></tbody></table>

### Related pages

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
