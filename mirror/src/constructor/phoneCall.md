---
title: "phoneCall"
original: "https://core.telegram.org/constructor/phoneCall"
section: ref
description: "Phone call, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phoneCall","url":"/constructor/phoneCall/"}]
layout: layout.njk
---

# phoneCall

Phone call, see [here »](/api/calls/) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phoneCall/" class="current_page_link">phoneCall</a>#30535af5 flags:<a href="/type/%23/">#</a> p2p_allowed:flags.5?true video:flags.6?true conference_supported:flags.8?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> g_a_or_b:<a href="/type/bytes/">bytes</a> key_fingerprint:<a href="/type/long/">long</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> connections:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhoneConnection/">PhoneConnection</a>&gt; start_date:<a href="/type/int/">int</a> custom_parameters:flags.7?<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/PhoneCall/">PhoneCall</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>p2p_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether P2P connection to the other peer is allowed</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether this is a video call</td></tr><tr><td><strong>conference_supported</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>If set, the other party supports <a href="/api/calls/#migrating-to-a-conference-call">migrating the call to a conference call »</a>; clients should only offer the migrate/"Add participants" option in the call UI when this flag is set.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Call ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of creation of the call</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User ID of the creator of the call</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User ID of the other participant in the call</td></tr><tr><td><strong>g_a_or_b</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><a href="/api/end-to-end/voice-calls/">Parameter for key exchange</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/end-to-end/voice-calls/">Key fingerprint</a></td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a></td><td>Call protocol info to be passed to libtgvoip</td></tr><tr><td><strong>connections</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhoneConnection/">PhoneConnection</a>&gt;</td><td>List of endpoints the user can connect to exchange call data</td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the call actually started</td></tr><tr><td><strong>custom_parameters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/DataJSON/">DataJSON</a></td><td>Custom JSON-encoded call parameters to be passed to tgcalls.</td></tr></tbody></table>

### Type

[PhoneCall](/type/PhoneCall/)

### Related pages

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.

#### [End-to-End Encrypted Voice Calls](/api/end-to-end/voice-calls/)

Deprecated description of encryption in voice calls as implemented in Telegram apps older than version 7.0.
