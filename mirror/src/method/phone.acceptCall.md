---
title: "phone.acceptCall"
original: "https://core.telegram.org/method/phone.acceptCall"
section: ref
description: "Accept incoming call, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.acceptCall","url":"/method/phone.acceptCall/"}]
layout: layout.njk
---

# phone.acceptCall

Accept incoming call, see [here »](/api/calls/#one-to-one-calls) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.phoneCall/">phone.phoneCall</a>#ec82e140 phone_call:<a href="/type/PhoneCall/">PhoneCall</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/phone.PhoneCall/">phone.PhoneCall</a>;
---functions---
<a href="/method/phone.acceptCall/" class="current_page_link">phone.acceptCall</a>#3bd2b4a0 peer:<a href="/type/InputPhoneCall/">InputPhoneCall</a> g_b:<a href="/type/bytes/">bytes</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> = <a href="/type/phone.PhoneCall/">phone.PhoneCall</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall/">InputPhoneCall</a></td><td>The call to accept</td></tr><tr><td><strong>g_b</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><a href="/api/end-to-end/voice-calls/">Parameter for E2E encryption key exchange »</a></td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a></td><td>Phone call settings</td></tr></tbody></table>

### Result

[phone.PhoneCall](/type/phone.PhoneCall/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CALL_ALREADY_ACCEPTED</td><td>The call was already accepted.</td></tr><tr><td>400</td><td>CALL_ALREADY_DECLINED</td><td>The call was already declined.</td></tr><tr><td>500</td><td>CALL_OCCUPY_FAILED</td><td>The call failed because the user is already making another call.</td></tr><tr><td>400</td><td>CALL_PEER_INVALID</td><td>The provided call peer object is invalid.</td></tr><tr><td>406</td><td>CALL_PROTOCOL_COMPAT_LAYER_INVALID</td><td>The other side of the call does not support any of the VoIP protocols supported by the local client, as specified by the <code>protocol.layer</code> and <code>protocol.library_versions</code> fields.</td></tr><tr><td>400</td><td>CALL_PROTOCOL_FLAGS_INVALID</td><td>Call protocol flags invalid.</td></tr><tr><td>400</td><td>CALL_PROTOCOL_LAYER_INVALID</td><td>The specified protocol layer version range is invalid.</td></tr></tbody></table>

### Related pages

#### [End-to-End Encrypted Voice Calls](/api/end-to-end/voice-calls/)

Deprecated description of encryption in voice calls as implemented in Telegram apps older than version 7.0.

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
