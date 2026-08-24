---
title: "peerColor"
original: "https://core.telegram.org/constructor/peerColor"
section: ref
description: "Represents a color palette »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"peerColor","url":"/constructor/peerColor/"}]
layout: layout.njk
---

# peerColor

Represents a [color palette »](/api/colors/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/peerColor/" class="current_page_link">peerColor</a>#b54b5acf flags:<a href="/type/%23/">#</a> color:flags.0?<a href="/type/int/">int</a> background_emoji_id:flags.1?<a href="/type/long/">long</a> = <a href="/type/PeerColor/">PeerColor</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td><a href="/api/colors/">Color palette ID, see here »</a> for more info; if not set, the default palette should be used.</td></tr><tr><td><strong>background_emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/long/">long</a></td><td>Optional <a href="/api/custom-emoji/">custom emoji ID</a> used to generate the pattern.</td></tr></tbody></table>

### Type

[PeerColor](/type/PeerColor/)

### Related pages

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
