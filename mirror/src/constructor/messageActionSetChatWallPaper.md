---
title: "messageActionSetChatWallPaper"
original: "https://core.telegram.org/constructor/messageActionSetChatWallPaper"
section: ref
description: "The wallpaper » of the current chat was changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionSetChatWallPaper","url":"/constructor/messageActionSetChatWallPaper/"}]
layout: layout.njk
---

# messageActionSetChatWallPaper

The [wallpaper »](/api/wallpapers/) of the current chat was changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionSetChatWallPaper/" class="current_page_link">messageActionSetChatWallPaper</a>#5060a3f4 flags:<a href="/type/%23/">#</a> same:flags.0?true for_both:flags.1?true wallpaper:<a href="/type/WallPaper/">WallPaper</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>same</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, indicates the user applied a <a href="/api/wallpapers/">wallpaper »</a> previously sent by the other user in a <a href="/constructor/messageActionSetChatWallPaper/">messageActionSetChatWallPaper</a> message.</td></tr><tr><td><strong>for_both</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, indicates the wallpaper was forcefully applied for both sides, without explicit confirmation from the other side.<br>If the message is incoming, and we did not like the new wallpaper the other user has chosen for us, we can re-set our previous wallpaper just on our side, by invoking <a href="/method/messages.setChatWallPaper/">messages.setChatWallPaper</a>, providing only the <code>revert</code> flag (and obviously the <code>peer</code> parameter).</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/type/WallPaper/">WallPaper</a></td><td>New <a href="/api/wallpapers/">wallpaper</a></td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/)

The [wallpaper »](/api/wallpapers/) of the current chat was changed.

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Set a custom [wallpaper »](/api/wallpapers/) in a specific private chat with another user.
