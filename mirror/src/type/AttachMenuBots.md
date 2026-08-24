---
title: "AttachMenuBots"
original: "https://core.telegram.org/type/AttachMenuBots"
section: ref
description: "Represents a list of bot mini apps that can be launched from the attachment menu »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"AttachMenuBots","url":"/type/AttachMenuBots/"}]
layout: layout.njk
---

# AttachMenuBots

Represents a list of [bot mini apps that can be launched from the attachment menu »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/attachMenuBotsNotModified/">attachMenuBotsNotModified</a>#f1d88a5c = <a href="/type/AttachMenuBots/" class="current_page_link">AttachMenuBots</a>;
<a href="/constructor/attachMenuBots/">attachMenuBots</a>#3c4301c0 hash:<a href="/type/long/">long</a> bots:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AttachMenuBot/">AttachMenuBot</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/AttachMenuBots/" class="current_page_link">AttachMenuBots</a>;

---functions---

<a href="/method/messages.getAttachMenuBots/">messages.getAttachMenuBots</a>#16fcc2cb hash:<a href="/type/long/">long</a> = <a href="/type/AttachMenuBots/" class="current_page_link">AttachMenuBots</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/attachMenuBotsNotModified/">attachMenuBotsNotModified</a></td><td>The list of bot mini apps hasn't changed</td></tr><tr><td><a href="/constructor/attachMenuBots/">attachMenuBots</a></td><td>Represents a list of <a href="/api/bots/attach/">bot mini apps that can be launched from the attachment menu »</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getAttachMenuBots/">messages.getAttachMenuBots</a></td><td>Returns installed attachment menu <a href="/api/bots/attach/">bot mini apps »</a></td></tr></tbody></table>

### Related pages

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
