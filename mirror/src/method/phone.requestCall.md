---
title: "phone.requestCall"
original: "https://core.telegram.org/method/phone.requestCall"
section: ref
description: "Start a telegram phone call, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.requestCall","url":"/method/phone.requestCall/"}]
layout: layout.njk
---

# phone.requestCall

Start a telegram phone call, see [here »](/api/calls/#one-to-one-calls) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.phoneCall/">phone.phoneCall</a>#ec82e140 phone_call:<a href="/type/PhoneCall/">PhoneCall</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/phone.PhoneCall/">phone.PhoneCall</a>;
---functions---
<a href="/method/phone.requestCall/" class="current_page_link">phone.requestCall</a>#42ff96ed flags:<a href="/type/%23/">#</a> video:flags.0?true user_id:<a href="/type/InputUser/">InputUser</a> random_id:<a href="/type/int/">int</a> g_a_hash:<a href="/type/bytes/">bytes</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> = <a href="/type/phone.PhoneCall/">phone.PhoneCall</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to start a video call</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Destination of the phone call</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Random ID to avoid resending the same object. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>g_a_hash</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><a href="/api/end-to-end/voice-calls/">Parameter for E2E encryption key exchange »</a></td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a></td><td>Phone call settings</td></tr></tbody></table>

### Result

[phone.PhoneCall](/type/phone.PhoneCall/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CALL_PROTOCOL_FLAGS_INVALID</td><td>Call protocol flags invalid.</td></tr><tr><td>400</td><td>CALL_PROTOCOL_LAYER_INVALID</td><td>The specified protocol layer version range is invalid.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>PARTICIPANT_VERSION_OUTDATED</td><td>The other participant does not use an up to date telegram client with support for calls.</td></tr><tr><td>500</td><td>RANDOM_ID_DUPLICATE</td><td>You provided a random ID that was already used.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>You were blocked by this user.</td></tr><tr><td>403</td><td>USER_PRIVACY_RESTRICTED</td><td>The user's privacy settings do not allow you to do this.</td></tr></tbody></table>

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [End-to-End Encrypted Voice Calls](/api/end-to-end/voice-calls/)

Deprecated description of encryption in voice calls as implemented in Telegram apps older than version 7.0.

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
