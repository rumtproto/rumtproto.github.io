---
title: "messages.clickSponsoredMessage"
original: "https://core.telegram.org/method/messages.clickSponsoredMessage"
section: ref
description: "Informs the server that the user has interacted with a sponsored message in one of the ways listed here »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.clickSponsoredMessage","url":"/method/messages.clickSponsoredMessage/"}]
layout: layout.njk
---

# messages.clickSponsoredMessage

Informs the server that the user has interacted with a sponsored message in [one of the ways listed here »](/api/sponsored-messages/#clicking-on-sponsored-messages).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.clickSponsoredMessage/" class="current_page_link">messages.clickSponsoredMessage</a>#8235057e flags:<a href="/type/%23/">#</a> media:flags.0?true fullscreen:flags.1?true random_id:<a href="/type/bytes/">bytes</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>The user clicked on the media</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>The user expanded the video to full screen, and then clicked on it.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>The ad's unique ID. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Sponsored messages](/api/sponsored-messages/)

How clients should fetch, display and interact with sponsored messages.
