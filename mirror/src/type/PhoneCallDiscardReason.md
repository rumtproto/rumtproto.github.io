---
title: "PhoneCallDiscardReason"
original: "https://core.telegram.org/type/PhoneCallDiscardReason"
section: ref
description: "Why was the phone call discarded?"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PhoneCallDiscardReason","url":"/type/PhoneCallDiscardReason/"}]
layout: layout.njk
---

# PhoneCallDiscardReason

Why was the phone call discarded?

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phoneCallDiscardReasonMissed/">phoneCallDiscardReasonMissed</a>#85e42301 = <a href="/type/PhoneCallDiscardReason/" class="current_page_link">PhoneCallDiscardReason</a>;
<a href="/constructor/phoneCallDiscardReasonDisconnect/">phoneCallDiscardReasonDisconnect</a>#e095c1a0 = <a href="/type/PhoneCallDiscardReason/" class="current_page_link">PhoneCallDiscardReason</a>;
<a href="/constructor/phoneCallDiscardReasonHangup/">phoneCallDiscardReasonHangup</a>#57adc690 = <a href="/type/PhoneCallDiscardReason/" class="current_page_link">PhoneCallDiscardReason</a>;
<a href="/constructor/phoneCallDiscardReasonBusy/">phoneCallDiscardReasonBusy</a>#faf7e8c9 = <a href="/type/PhoneCallDiscardReason/" class="current_page_link">PhoneCallDiscardReason</a>;
<a href="/constructor/phoneCallDiscardReasonMigrateConferenceCall/">phoneCallDiscardReasonMigrateConferenceCall</a>#9fbbf1f7 slug:<a href="/type/string/">string</a> = <a href="/type/PhoneCallDiscardReason/" class="current_page_link">PhoneCallDiscardReason</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phoneCallDiscardReasonMissed/">phoneCallDiscardReasonMissed</a></td><td>The phone call was missed, see <a href="/api/calls/">here »</a> for more info.</td></tr><tr><td><a href="/constructor/phoneCallDiscardReasonDisconnect/">phoneCallDiscardReasonDisconnect</a></td><td>The phone call was disconnected, see <a href="/api/calls/">here »</a> for more info.</td></tr><tr><td><a href="/constructor/phoneCallDiscardReasonHangup/">phoneCallDiscardReasonHangup</a></td><td>The phone call was ended normally, see <a href="/api/calls/">here »</a> for more info.</td></tr><tr><td><a href="/constructor/phoneCallDiscardReasonBusy/">phoneCallDiscardReasonBusy</a></td><td>The phone call was discarded because the user is busy in another call, see <a href="/api/calls/">here »</a> for more info.</td></tr><tr><td><a href="/constructor/phoneCallDiscardReasonMigrateConferenceCall/">phoneCallDiscardReasonMigrateConferenceCall</a></td><td>This phone call was migrated to a <a href="/api/end-to-end/group-calls/">conference call</a>.</td></tr></tbody></table>
