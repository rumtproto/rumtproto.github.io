---
title: "phoneCallRequested"
original: "https://core.telegram.org/constructor/phoneCallRequested"
section: ref
description: "Requested phone call, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phoneCallRequested","url":"/constructor/phoneCallRequested/"}]
layout: layout.njk
---

# phoneCallRequested

Requested phone call, see [here »](/api/calls/) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phoneCallRequested/" class="current_page_link">phoneCallRequested</a>#14b0ed0c flags:<a href="/type/%23/">#</a> video:flags.6?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> g_a_hash:<a href="/type/bytes/">bytes</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> = <a href="/type/PhoneCall/">PhoneCall</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether this is a video call</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Phone call ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the phone call created</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the creator of the phone call</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the other participant of the phone call</td></tr><tr><td><strong>g_a_hash</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><a href="/api/end-to-end/voice-calls/">Parameter for key exchange</a></td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a></td><td>Call protocol info to be passed to libtgvoip</td></tr></tbody></table>

### Type

[PhoneCall](/type/PhoneCall/)

### Related pages

#### [End-to-End Encrypted Voice Calls](/api/end-to-end/voice-calls/)

Deprecated description of encryption in voice calls as implemented in Telegram apps older than version 7.0.

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
