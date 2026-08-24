---
title: "PhoneCall"
original: "https://core.telegram.org/type/PhoneCall"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PhoneCall","url":"/type/PhoneCall/"}]
layout: layout.njk
---

# PhoneCall

Phone call

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phoneCallEmpty/">phoneCallEmpty</a>#5366c915 id:<a href="/type/long/">long</a> = <a href="/type/PhoneCall/" class="current_page_link">PhoneCall</a>;
<a href="/constructor/phoneCallWaiting/">phoneCallWaiting</a>#c5226f17 flags:<a href="/type/%23/">#</a> video:flags.6?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> receive_date:flags.0?<a href="/type/int/">int</a> = <a href="/type/PhoneCall/" class="current_page_link">PhoneCall</a>;
<a href="/constructor/phoneCallRequested/">phoneCallRequested</a>#14b0ed0c flags:<a href="/type/%23/">#</a> video:flags.6?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> g_a_hash:<a href="/type/bytes/">bytes</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> = <a href="/type/PhoneCall/" class="current_page_link">PhoneCall</a>;
<a href="/constructor/phoneCallAccepted/">phoneCallAccepted</a>#3660c311 flags:<a href="/type/%23/">#</a> video:flags.6?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> g_b:<a href="/type/bytes/">bytes</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> = <a href="/type/PhoneCall/" class="current_page_link">PhoneCall</a>;
<a href="/constructor/phoneCall/">phoneCall</a>#30535af5 flags:<a href="/type/%23/">#</a> p2p_allowed:flags.5?true video:flags.6?true conference_supported:flags.8?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> g_a_or_b:<a href="/type/bytes/">bytes</a> key_fingerprint:<a href="/type/long/">long</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> connections:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhoneConnection/">PhoneConnection</a>&gt; start_date:<a href="/type/int/">int</a> custom_parameters:flags.7?<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/PhoneCall/" class="current_page_link">PhoneCall</a>;
<a href="/constructor/phoneCallDiscarded/">phoneCallDiscarded</a>#50ca4de1 flags:<a href="/type/%23/">#</a> need_rating:flags.2?true need_debug:flags.3?true video:flags.6?true id:<a href="/type/long/">long</a> reason:flags.0?<a href="/type/PhoneCallDiscardReason/">PhoneCallDiscardReason</a> duration:flags.1?<a href="/type/int/">int</a> = <a href="/type/PhoneCall/" class="current_page_link">PhoneCall</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phoneCallEmpty/">phoneCallEmpty</a></td><td>Empty constructor</td></tr><tr><td><a href="/constructor/phoneCallWaiting/">phoneCallWaiting</a></td><td>Incoming phone call, see <a href="/api/calls/">here »</a> for more info on the full flow.</td></tr><tr><td><a href="/constructor/phoneCallRequested/">phoneCallRequested</a></td><td>Requested phone call, see <a href="/api/calls/">here »</a> for more info on the full flow.</td></tr><tr><td><a href="/constructor/phoneCallAccepted/">phoneCallAccepted</a></td><td>An accepted phone call, see <a href="/api/calls/">here »</a> for more info on the full flow.</td></tr><tr><td><a href="/constructor/phoneCall/">phoneCall</a></td><td>Phone call, see <a href="/api/calls/">here »</a> for more info on the full flow.</td></tr><tr><td><a href="/constructor/phoneCallDiscarded/">phoneCallDiscarded</a></td><td>Indicates a discarded phone call, see <a href="/api/calls/">here »</a> for more info on the full flow.</td></tr></tbody></table>
