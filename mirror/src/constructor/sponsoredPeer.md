---
title: "sponsoredPeer"
original: "https://core.telegram.org/constructor/sponsoredPeer"
section: ref
description: "Mark a specific sponsored message » as read"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"sponsoredPeer","url":"/constructor/sponsoredPeer/"}]
layout: layout.njk
---

# sponsoredPeer

A sponsored peer.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/sponsoredPeer/" class="current_page_link">sponsoredPeer</a>#c69708d3 flags:<a href="/type/%23/">#</a> random_id:<a href="/type/bytes/">bytes</a> peer:<a href="/type/Peer/">Peer</a> sponsor_info:flags.0?<a href="/type/string/">string</a> additional_info:flags.1?<a href="/type/string/">string</a> = <a href="/type/SponsoredPeer/">SponsoredPeer</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>ID of the sponsored peer, to be passed to <a href="/method/messages.viewSponsoredMessage/">messages.viewSponsoredMessage</a>, <a href="/method/messages.clickSponsoredMessage/">messages.clickSponsoredMessage</a> or <a href="/method/messages.reportSponsoredMessage/">messages.reportSponsoredMessage</a> (the same methods used for <a href="/api/sponsored-messages/">sponsored messages &amp;raquo</a>). See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The sponsored peer.</td></tr><tr><td><strong>sponsor_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>If set, contains additional information about the sponsor to be shown along with the peer.</td></tr><tr><td><strong>additional_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>If set, contains additional information about the sponsored message to be shown along with the peer.</td></tr></tbody></table>

### Type

[SponsoredPeer](/type/SponsoredPeer/)

### Related pages

#### [messages.viewSponsoredMessage](/method/messages.viewSponsoredMessage/)

Mark a specific [sponsored message »](/api/sponsored-messages/) as read

#### [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/)

Informs the server that the user has interacted with a sponsored message in [one of the ways listed here »](/api/sponsored-messages/#clicking-on-sponsored-messages).

#### [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/)

Report a [sponsored message »](/api/sponsored-messages/), see [here »](/api/sponsored-messages/#reporting-sponsored-messages) for more info on the full flow.

#### [Sponsored messages](/api/sponsored-messages/)

How clients should fetch, display and interact with sponsored messages.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
