---
title: "messageActionPhoneCall"
original: "https://core.telegram.org/constructor/messageActionPhoneCall"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionPhoneCall","url":"/constructor/messageActionPhoneCall/"}]
layout: layout.njk
---

# messageActionPhoneCall

A phone call

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionPhoneCall/" class="current_page_link">messageActionPhoneCall</a>#80e11a7f flags:<a href="/type/%23/">#</a> video:flags.2?true call_id:<a href="/type/long/">long</a> reason:flags.0?<a href="/type/PhoneCallDiscardReason/">PhoneCallDiscardReason</a> duration:flags.1?<a href="/type/int/">int</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Is this a video call?</td></tr><tr><td><strong>call_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Call ID</td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/PhoneCallDiscardReason/">PhoneCallDiscardReason</a></td><td>If the call has ended, the reason why it ended</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Duration of the call in seconds</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)
