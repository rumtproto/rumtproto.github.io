---
title: "Phone.PhoneCall"
original: "https://core.telegram.org/type/phone.PhoneCall"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Phone.PhoneCall","url":"/type/phone.PhoneCall/"}]
layout: layout.njk
---

# Phone.PhoneCall

Phone call

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.phoneCall/">phone.phoneCall</a>#ec82e140 phone_call:<a href="/type/PhoneCall/">PhoneCall</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/phone.PhoneCall/" class="current_page_link">phone.PhoneCall</a>;

---functions---

<a href="/method/phone.requestCall/">phone.requestCall</a>#42ff96ed flags:<a href="/type/%23/">#</a> video:flags.0?true user_id:<a href="/type/InputUser/">InputUser</a> random_id:<a href="/type/int/">int</a> g_a_hash:<a href="/type/bytes/">bytes</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> = <a href="/type/phone.PhoneCall/" class="current_page_link">phone.PhoneCall</a>;
<a href="/method/phone.acceptCall/">phone.acceptCall</a>#3bd2b4a0 peer:<a href="/type/InputPhoneCall/">InputPhoneCall</a> g_b:<a href="/type/bytes/">bytes</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> = <a href="/type/phone.PhoneCall/" class="current_page_link">phone.PhoneCall</a>;
<a href="/method/phone.confirmCall/">phone.confirmCall</a>#2efe1722 peer:<a href="/type/InputPhoneCall/">InputPhoneCall</a> g_a:<a href="/type/bytes/">bytes</a> key_fingerprint:<a href="/type/long/">long</a> protocol:<a href="/type/PhoneCallProtocol/">PhoneCallProtocol</a> = <a href="/type/phone.PhoneCall/" class="current_page_link">phone.PhoneCall</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.phoneCall/">phone.phoneCall</a></td><td>A VoIP phone call</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.requestCall/">phone.requestCall</a></td><td>Start a telegram phone call, see <a href="/api/calls/#one-to-one-calls">here »</a> for more info on the full flow.</td></tr><tr><td><a href="/method/phone.acceptCall/">phone.acceptCall</a></td><td>Accept incoming call, see <a href="/api/calls/#one-to-one-calls">here »</a> for more info on the full flow.</td></tr><tr><td><a href="/method/phone.confirmCall/">phone.confirmCall</a></td><td><a href="/api/end-to-end/voice-calls/">Complete phone call E2E encryption key exchange »</a>, see <a href="/api/calls/#one-to-one-calls">here »</a> for more info on the full flow.</td></tr></tbody></table>
