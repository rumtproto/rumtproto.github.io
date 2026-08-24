---
title: "phoneConnectionWebrtc"
original: "https://core.telegram.org/constructor/phoneConnectionWebrtc"
section: ref
description: "WebRTC connection parameters for a phone call."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phoneConnectionWebrtc","url":"/constructor/phoneConnectionWebrtc/"}]
layout: layout.njk
---

# phoneConnectionWebrtc

WebRTC connection parameters for a [phone call](/api/calls/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phoneConnectionWebrtc/" class="current_page_link">phoneConnectionWebrtc</a>#635fe375 flags:<a href="/type/%23/">#</a> turn:flags.0?true stun:flags.1?true id:<a href="/type/long/">long</a> ip:<a href="/type/string/">string</a> ipv6:<a href="/type/string/">string</a> port:<a href="/type/int/">int</a> username:<a href="/type/string/">string</a> password:<a href="/type/string/">string</a> = <a href="/type/PhoneConnection/">PhoneConnection</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>turn</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this is a TURN endpoint</td></tr><tr><td><strong>stun</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this is a STUN endpoint</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Endpoint ID</td></tr><tr><td><strong>ip</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>IP address</td></tr><tr><td><strong>ipv6</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>IPv6 address</td></tr><tr><td><strong>port</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Port</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Username</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Password</td></tr></tbody></table>

### Type

[PhoneConnection](/type/PhoneConnection/)

### Related pages

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
