---
title: "phoneConnection"
original: "https://core.telegram.org/constructor/phoneConnection"
section: ref
description: "DEPRECATED (libtgvoip): Identifies an endpoint that can be used to connect to the other user in a phone call"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phoneConnection","url":"/constructor/phoneConnection/"}]
layout: layout.njk
---

# phoneConnection

DEPRECATED (libtgvoip): Identifies an endpoint that can be used to connect to the other user in a phone call

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phoneConnection/" class="current_page_link">phoneConnection</a>#9cc123c7 flags:<a href="/type/%23/">#</a> tcp:flags.0?true id:<a href="/type/long/">long</a> ip:<a href="/type/string/">string</a> ipv6:<a href="/type/string/">string</a> port:<a href="/type/int/">int</a> peer_tag:<a href="/type/bytes/">bytes</a> = <a href="/type/PhoneConnection/">PhoneConnection</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>tcp</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether TCP should be used</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Endpoint ID</td></tr><tr><td><strong>ip</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>IP address of endpoint</td></tr><tr><td><strong>ipv6</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>IPv6 address of endpoint</td></tr><tr><td><strong>port</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Port ID</td></tr><tr><td><strong>peer_tag</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Our peer tag</td></tr></tbody></table>

### Type

[PhoneConnection](/type/PhoneConnection/)
