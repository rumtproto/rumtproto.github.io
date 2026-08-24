---
title: "help.promoData"
original: "https://core.telegram.org/constructor/help.promoData"
section: ref
description: "A set of useful suggestions and a PSA/MTProxy sponsored peer, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.promoData","url":"/constructor/help.promoData/"}]
layout: layout.njk
---

# help.promoData

A set of useful suggestions and a PSA/MTProxy sponsored peer, see [here »](/api/config/#suggestions) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.promoData/" class="current_page_link">help.promoData</a>#8a4d87a flags:<a href="/type/%23/">#</a> proxy:flags.0?true expires:<a href="/type/int/">int</a> peer:flags.3?<a href="/type/Peer/">Peer</a> psa_type:flags.1?<a href="/type/string/">string</a> psa_message:flags.2?<a href="/type/string/">string</a> pending_suggestions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; dismissed_suggestions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; custom_pending_suggestion:flags.4?<a href="/type/PendingSuggestion/">PendingSuggestion</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/help.PromoData/">help.PromoData</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>proxy</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Set when connecting using an MTProxy that has configured an associated peer (that will be passed in <code>peer</code>, i.e. the channel that sponsored the MTProxy) that should be pinned on top of the chat list.</td></tr><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Unixtime when to re-invoke <a href="/method/help.getPromoData/">help.getPromoData</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Peer/">Peer</a></td><td>MTProxy/PSA peer</td></tr><tr><td><strong>psa_type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>For Public Service Announcement <code>peer</code>s, indicates the type of the PSA.</td></tr><tr><td><strong>psa_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>For Public Service Announcement <code>peer</code>s, contains the PSA itself.</td></tr><tr><td><strong>pending_suggestions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>Contains a list of <a href="/api/config/#basic-suggestions">pending suggestions »</a>.</td></tr><tr><td><strong>dismissed_suggestions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>Contains a list of <a href="/api/config/#inverted-suggestions">inverted suggestions »</a>.</td></tr><tr><td><strong>custom_pending_suggestion</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/PendingSuggestion/">PendingSuggestion</a></td><td>Contains a list of <a href="/api/config/#custom-suggestions">custom pending suggestions »</a>.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chat info</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>User info</td></tr></tbody></table>

### Type

[help.PromoData](/type/help.PromoData/)

### Related pages

#### [help.getPromoData](/method/help.getPromoData/)

Returns a set of useful suggestions and PSA/MTProxy sponsored peers, see [here »](/api/config/#suggestions) for more info.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
