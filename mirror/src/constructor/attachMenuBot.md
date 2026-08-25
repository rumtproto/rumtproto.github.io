---
title: "attachMenuBot"
original: "https://core.telegram.org/constructor/attachMenuBot"
section: ref
description: "Represents a bot mini app that can be launched from the attachment/side menu »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"attachMenuBot","url":"/constructor/attachMenuBot/"}]
layout: layout.njk
---

# attachMenuBot

Represents a [bot mini app that can be launched from the attachment/side menu »](/api/bots/attach/)

At least one of the `show_in_attach_menu` or the `show_in_side_menu` flags will always be set.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/attachMenuBot/" class="current_page_link">attachMenuBot</a>#d90d8dfe flags:<a href="/type/%23/">#</a> inactive:flags.0?true has_settings:flags.1?true request_write_access:flags.2?true show_in_attach_menu:flags.3?true show_in_side_menu:flags.4?true side_menu_disclaimer_needed:flags.5?true bot_id:<a href="/type/long/">long</a> short_name:<a href="/type/string/">string</a> peer_types:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AttachMenuPeerType/">AttachMenuPeerType</a>&gt; icons:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AttachMenuBotIcon/">AttachMenuBotIcon</a>&gt; = <a href="/type/AttachMenuBot/">AttachMenuBot</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>inactive</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, before launching the mini app the client should ask the user to add the mini app to the attachment/side menu, and only if the user accepts, after invoking <a href="/method/messages.toggleBotInAttachMenu/">messages.toggleBotInAttachMenu</a> the app should be opened.</td></tr><tr><td><strong>has_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Deprecated flag, can be ignored.</td></tr><tr><td><strong>request_write_access</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether the bot would like to send messages to the user.</td></tr><tr><td><strong>show_in_attach_menu</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether, when installed, an attachment menu entry should be shown for the Mini App.</td></tr><tr><td><strong>show_in_side_menu</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether, when installed, an entry in the main view side menu should be shown for the Mini App.</td></tr><tr><td><strong>side_menu_disclaimer_needed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>If <code>inactive</code> if set and the user hasn't previously accepted the third-party mini apps <a href="/tos/mini-apps/">Terms of Service</a> for this bot, when showing the mini app installation prompt, an additional mandatory checkbox to accept the <a href="/tos/mini-apps/">mini apps TOS</a> and a disclaimer indicating that this Mini App is not affiliated to Telegram should be shown.</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Bot ID</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Attachment menu item name</td></tr><tr><td><strong>peer_types</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AttachMenuPeerType/">AttachMenuPeerType</a>&gt;</td><td>List of dialog types where this attachment menu entry should be shown</td></tr><tr><td><strong>icons</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AttachMenuBotIcon/">AttachMenuBotIcon</a>&gt;</td><td>List of platform-specific static icons and animations to use for the attachment menu button</td></tr></tbody></table>

### Type

[AttachMenuBot](/type/AttachMenuBot/)

### Related pages

#### [messages.toggleBotInAttachMenu](/method/messages.toggleBotInAttachMenu/)

Enable or disable [web bot attachment menu »](/api/bots/attach/)

#### [Bot attachment menu and side menu entries](/api/bots/attach/)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
