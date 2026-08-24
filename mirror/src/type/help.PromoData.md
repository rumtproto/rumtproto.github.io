---
title: "help.PromoData"
original: "https://core.telegram.org/type/help.PromoData"
section: ref
description: "Info about pinned MTProxy or Public Service Announcement peers."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.PromoData","url":"/type/help.PromoData/"}]
layout: layout.njk
---

# help.PromoData

Info about pinned MTProxy or Public Service Announcement peers.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.promoDataEmpty/">help.promoDataEmpty</a>#98f6ac75 expires:<a href="/type/int/">int</a> = <a href="/type/help.PromoData/" class="current_page_link">help.PromoData</a>;
<a href="/constructor/help.promoData/">help.promoData</a>#8a4d87a flags:<a href="/type/%23/">#</a> proxy:flags.0?true expires:<a href="/type/int/">int</a> peer:flags.3?<a href="/type/Peer/">Peer</a> psa_type:flags.1?<a href="/type/string/">string</a> psa_message:flags.2?<a href="/type/string/">string</a> pending_suggestions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; dismissed_suggestions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; custom_pending_suggestion:flags.4?<a href="/type/PendingSuggestion/">PendingSuggestion</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/help.PromoData/" class="current_page_link">help.PromoData</a>;

---functions---

<a href="/method/help.getPromoData/">help.getPromoData</a>#c0977421 = <a href="/type/help.PromoData/" class="current_page_link">help.PromoData</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.promoDataEmpty/">help.promoDataEmpty</a></td><td>No PSA/MTProxy info is available</td></tr><tr><td><a href="/constructor/help.promoData/">help.promoData</a></td><td>A set of useful suggestions and a PSA/MTProxy sponsored peer, see <a href="/api/config/#suggestions">here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getPromoData/">help.getPromoData</a></td><td>Returns a set of useful suggestions and PSA/MTProxy sponsored peers, see <a href="/api/config/#suggestions">here »</a> for more info.</td></tr></tbody></table>
