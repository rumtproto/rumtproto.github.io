---
title: "phoneCallProtocol"
original: "https://core.telegram.org/constructor/phoneCallProtocol"
section: ref
description: "Protocol info for the VoIP library, see here » for details on how to populate it."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phoneCallProtocol","url":"/constructor/phoneCallProtocol/"}]
layout: layout.njk
---

# phoneCallProtocol

Protocol info for the VoIP library, see [here »](/api/calls/#populating-phonecallprotocol) for details on how to populate it.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phoneCallProtocol/" class="current_page_link">phoneCallProtocol</a>#fc878fc8 flags:<a href="/type/%23/">#</a> udp_p2p:flags.0?true udp_reflector:flags.1?true min_layer:<a href="/type/int/">int</a> max_layer:<a href="/type/int/">int</a> library_versions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; = <a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>udp_p2p</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to allow P2P connection to the other participant</td></tr><tr><td><strong>udp_reflector</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether to allow connection to the other participants through the reflector servers</td></tr><tr><td><strong>min_layer</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Minimum layer for remote libtgvoip</td></tr><tr><td><strong>max_layer</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum layer for remote libtgvoip</td></tr><tr><td><strong>library_versions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>When using <a href="/method/phone.requestCall/">phone.requestCall</a> and <a href="/method/phone.acceptCall/">phone.acceptCall</a>, specify all library versions supported by the client.<br>The server will merge and choose the best library version supported by both peers, returning only the best value in the result of the callee's <a href="/method/phone.acceptCall/">phone.acceptCall</a> and in the <a href="/constructor/phoneCallAccepted/">phoneCallAccepted</a> update received by the caller.</td></tr></tbody></table>

### Type

[PhoneCallProtocol](/type/PhoneCallProtocol/)

### Related pages

#### [phone.requestCall](/method/phone.requestCall/)

Start a telegram phone call, see [here »](/api/calls/#one-to-one-calls) for more info on the full flow.

#### [phone.acceptCall](/method/phone.acceptCall/)

Accept incoming call, see [here »](/api/calls/#one-to-one-calls) for more info on the full flow.

#### [phoneCallAccepted](/constructor/phoneCallAccepted/)

An accepted phone call, see [here »](/api/calls/) for more info on the full flow.

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
