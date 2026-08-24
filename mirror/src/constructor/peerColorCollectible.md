---
title: "peerColorCollectible"
original: "https://core.telegram.org/constructor/peerColorCollectible"
section: ref
description: "Represents a color palette » associated to a collectible gift », see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"peerColorCollectible","url":"/constructor/peerColorCollectible/"}]
layout: layout.njk
---

# peerColorCollectible

Represents a [color palette »](/api/colors/) associated to a [collectible gift »](/api/gifts/#collectible-gifts), see [here »](/api/colors/#collectible-gift-palettes) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/peerColorCollectible/" class="current_page_link">peerColorCollectible</a>#b9c0639a flags:<a href="/type/%23/">#</a> collectible_id:<a href="/type/long/">long</a> gift_emoji_id:<a href="/type/long/">long</a> background_emoji_id:<a href="/type/long/">long</a> accent_color:<a href="/type/int/">int</a> colors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; dark_accent_color:flags.0?<a href="/type/int/">int</a> dark_colors:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/PeerColor/">PeerColor</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>collectible_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr><tr><td><strong>gift_emoji_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/custom-emoji/">Custom emoji ID »</a> of the collectible gift: a single copy of this custom emoji should be displayed as-is (without recoloring it, unlike for <code>background_emoji_id</code>) in the top-right corner of the palette.</td></tr><tr><td><strong>background_emoji_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/custom-emoji/">Custom emoji ID »</a> used to generate the pattern.</td></tr><tr><td><strong>accent_color</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Accent color in RGB24 format, used for reply backgrounds and the user's name in messages.</td></tr><tr><td><strong>colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>1-3 RGB24 colors to be used in the reply strip.</td></tr><tr><td><strong>dark_accent_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Accent color in RGB24 format, used for reply backgrounds and the user's name in messages in dark mode (fallback to <code>accent_color</code> if absent).</td></tr><tr><td><strong>dark_colors</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>1-3 RGB24 colors to be used in the reply strip in dark mode (fallback to <code>colors</code> if absent).</td></tr></tbody></table>

### Type

[PeerColor](/type/PeerColor/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
