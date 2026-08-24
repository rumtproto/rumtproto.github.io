---
title: "updatePeerWallpaper"
original: "https://core.telegram.org/constructor/updatePeerWallpaper"
section: ref
description: "The wallpaper » of a given peer has changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePeerWallpaper","url":"/constructor/updatePeerWallpaper/"}]
layout: layout.njk
---

# updatePeerWallpaper

The [wallpaper »](/api/wallpapers/) of a given peer has changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatePeerWallpaper/" class="current_page_link">updatePeerWallpaper</a>#ae3f101d flags:<a href="/type/%23/">#</a> wallpaper_overridden:flags.1?true peer:<a href="/type/Peer/">Peer</a> wallpaper:flags.0?<a href="/type/WallPaper/">WallPaper</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>wallpaper_overridden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the other user has chosen a custom wallpaper for us using <a href="/method/messages.setChatWallPaper/">messages.setChatWallPaper</a> and the <code>for_both</code> flag, see <a href="/api/wallpapers/#installing-wallpapers-in-a-specific-chat-or-channel">here »</a> for more info.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The peer where the wallpaper has changed.</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/WallPaper/">WallPaper</a></td><td>The new wallpaper, if none the wallpaper was removed and the default wallpaper should be used.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Set a custom [wallpaper »](/api/wallpapers/) in a specific private chat with another user.

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
