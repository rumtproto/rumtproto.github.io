---
title: "help.getPromoData"
original: "https://core.telegram.org/method/help.getPromoData"
section: ref
description: "Returns a set of useful suggestions and PSA/MTProxy sponsored peers, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getPromoData","url":"/method/help.getPromoData/"}]
layout: layout.njk
---

# help.getPromoData

Returns a set of useful suggestions and PSA/MTProxy sponsored peers, see [here »](/api/config/#suggestions) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.promoDataEmpty/">help.promoDataEmpty</a>#98f6ac75 expires:<a href="/type/int/">int</a> = <a href="/type/help.PromoData/">help.PromoData</a>;
<a href="/constructor/help.promoData/">help.promoData</a>#8a4d87a flags:<a href="/type/%23/">#</a> proxy:flags.0?true expires:<a href="/type/int/">int</a> peer:flags.3?<a href="/type/Peer/">Peer</a> psa_type:flags.1?<a href="/type/string/">string</a> psa_message:flags.2?<a href="/type/string/">string</a> pending_suggestions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; dismissed_suggestions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; custom_pending_suggestion:flags.4?<a href="/type/PendingSuggestion/">PendingSuggestion</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/help.PromoData/">help.PromoData</a>;
---functions---
<a href="/method/help.getPromoData/" class="current_page_link">help.getPromoData</a>#c0977421 = <a href="/type/help.PromoData/">help.PromoData</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[help.PromoData](/type/help.PromoData/)

### Only users can use this method

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
