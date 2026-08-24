---
title: "messages.getAttachMenuBot"
original: "https://core.telegram.org/method/messages.getAttachMenuBot"
section: ref
description: "Returns attachment menu entry for a bot mini app that can be launched from the attachment menu »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getAttachMenuBot","url":"/method/messages.getAttachMenuBot/"}]
layout: layout.njk
---

# messages.getAttachMenuBot

Returns attachment menu entry for a [bot mini app that can be launched from the attachment menu »](/api/bots/attach/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/attachMenuBotsBot/">attachMenuBotsBot</a>#93bf667f bot:<a href="/type/AttachMenuBot/">AttachMenuBot</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/AttachMenuBotsBot/">AttachMenuBotsBot</a>;
---functions---
<a href="/method/messages.getAttachMenuBot/" class="current_page_link">messages.getAttachMenuBot</a>#77216192 bot:<a href="/type/InputUser/">InputUser</a> = <a href="/type/AttachMenuBotsBot/">AttachMenuBotsBot</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Bot ID</td></tr></tbody></table>

### Result

[AttachMenuBotsBot](/type/AttachMenuBotsBot/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [Bot attachment menu and side menu entries](/api/bots/attach/)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
