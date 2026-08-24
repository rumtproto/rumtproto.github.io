---
title: "phoneCallWaiting"
original: "https://core.telegram.org/constructor/phoneCallWaiting"
section: ref
description: "Incoming phone call, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phoneCallWaiting","url":"/constructor/phoneCallWaiting/"}]
layout: layout.njk
---

# phoneCallWaiting

Incoming phone call, see [here »](/api/calls/) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phoneCallWaiting/" class="current_page_link">phoneCallWaiting</a>#c5226f17 flags:<a href="/type/%23/">#</a> video:flags.6?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> receive_date:flags.0?<a href="/type/int/">int</a> = <a href="/type/PhoneCall/">PhoneCall</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Is this a video call</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Call ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Admin ID</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Participant ID</td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a></td><td>Phone call protocol info</td></tr><tr><td><strong>receive_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>When was the phone call received</td></tr></tbody></table>

### Type

[PhoneCall](/type/PhoneCall/)

### Related pages

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
