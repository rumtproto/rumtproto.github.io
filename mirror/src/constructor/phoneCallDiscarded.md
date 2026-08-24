---
title: "phoneCallDiscarded"
original: "https://core.telegram.org/constructor/phoneCallDiscarded"
section: ref
description: "Indicates a discarded phone call, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phoneCallDiscarded","url":"/constructor/phoneCallDiscarded/"}]
layout: layout.njk
---

# phoneCallDiscarded

Indicates a discarded phone call, see [here »](/api/calls/) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phoneCallDiscarded/" class="current_page_link">phoneCallDiscarded</a>#50ca4de1 flags:<a href="/type/%23/">#</a> need_rating:flags.2?true need_debug:flags.3?true video:flags.6?true id:<a href="/type/long/">long</a> reason:flags.0?<a href="/type/PhoneCallDiscardReason/">PhoneCallDiscardReason</a> duration:flags.1?<a href="/type/int/">int</a> = <a href="/type/PhoneCall/">PhoneCall</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>need_rating</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether the server required the user to <a href="/method/phone.setCallRating/">rate</a> the call</td></tr><tr><td><strong>need_debug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether the server required the client to <a href="/method/phone.saveCallDebug/">send</a> the libtgvoip call debug data</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether the call was a video call</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Call ID</td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/PhoneCallDiscardReason/">PhoneCallDiscardReason</a></td><td>Why was the phone call discarded</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Duration of the phone call in seconds</td></tr></tbody></table>

### Type

[PhoneCall](/type/PhoneCall/)

### Related pages

#### [phone.setCallRating](/method/phone.setCallRating/)

Rate a call, returns info about the rating message sent to the official VoIP bot, see [here »](/api/calls/#call-rating) for more info on the full flow.

#### [phone.saveCallDebug](/method/phone.saveCallDebug/)

Send [phone call](/api/calls/#call-debug) debug data to server.

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
