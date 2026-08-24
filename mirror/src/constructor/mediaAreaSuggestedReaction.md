---
title: "mediaAreaSuggestedReaction"
original: "https://core.telegram.org/constructor/mediaAreaSuggestedReaction"
section: ref
description: "Represents a reaction bubble."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"mediaAreaSuggestedReaction","url":"/constructor/mediaAreaSuggestedReaction/"}]
layout: layout.njk
---

# mediaAreaSuggestedReaction

Represents a reaction bubble.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/mediaAreaSuggestedReaction/" class="current_page_link">mediaAreaSuggestedReaction</a>#14455871 flags:<a href="/type/%23/">#</a> dark:flags.0?true flipped:flags.1?true coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> reaction:<a href="/type/Reaction/">Reaction</a> = <a href="/type/MediaArea/">MediaArea</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the reaction bubble has a dark background.</td></tr><tr><td><strong>flipped</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the reaction bubble is mirrored (see <a href="/api/stories/#reactions">here »</a> for more info).</td></tr><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a></td><td>The coordinates of the media area corresponding to the reaction button.</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction/">Reaction</a></td><td>The reaction that should be sent when this area is clicked.</td></tr></tbody></table>

### Type

[MediaArea](/type/MediaArea/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
