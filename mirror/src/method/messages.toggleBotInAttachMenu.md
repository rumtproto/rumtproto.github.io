---
title: "messages.toggleBotInAttachMenu"
original: "https://core.telegram.org/method/messages.toggleBotInAttachMenu"
section: ref
description: "Enable or disable web bot attachment menu »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.toggleBotInAttachMenu","url":"/method/messages.toggleBotInAttachMenu/"}]
layout: layout.njk
---

# messages.toggleBotInAttachMenu

Enable or disable [web bot attachment menu »](/api/bots/attach/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.toggleBotInAttachMenu/" class="current_page_link">messages.toggleBotInAttachMenu</a>#69f59d69 flags:<a href="/type/%23/">#</a> write_allowed:flags.0?true bot:<a href="/type/InputUser/">InputUser</a> enabled:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>write_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the user authorizes the bot to write messages to them, if requested by <a href="/constructor/attachMenuBot/">attachMenuBot</a>.<code>request_write_access</code></td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Bot ID</td></tr><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Toggle</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [attachMenuBot](/constructor/attachMenuBot/)

Represents a [bot mini app that can be launched from the attachment/side menu »](/api/bots/attach/)

At least one of the `show_in_attach_menu` or the `show_in_side_menu` flags will always be set.

#### [Bot attachment menu and side menu entries](/api/bots/attach/)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
