---
title: "PhoneConnection"
original: "https://core.telegram.org/type/PhoneConnection"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PhoneConnection","url":"/type/PhoneConnection/"}]
layout: layout.njk
---

# PhoneConnection

Phone call connection

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phoneConnection/">phoneConnection</a>#9cc123c7 flags:<a href="/type/%23/">#</a> tcp:flags.0?true id:<a href="/type/long/">long</a> ip:<a href="/type/string/">string</a> ipv6:<a href="/type/string/">string</a> port:<a href="/type/int/">int</a> peer_tag:<a href="/type/bytes/">bytes</a> = <a href="/type/PhoneConnection/" class="current_page_link">PhoneConnection</a>;
<a href="/constructor/phoneConnectionWebrtc/">phoneConnectionWebrtc</a>#635fe375 flags:<a href="/type/%23/">#</a> turn:flags.0?true stun:flags.1?true id:<a href="/type/long/">long</a> ip:<a href="/type/string/">string</a> ipv6:<a href="/type/string/">string</a> port:<a href="/type/int/">int</a> username:<a href="/type/string/">string</a> password:<a href="/type/string/">string</a> = <a href="/type/PhoneConnection/" class="current_page_link">PhoneConnection</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phoneConnection/">phoneConnection</a></td><td>DEPRECATED (libtgvoip): Identifies an endpoint that can be used to connect to the other user in a phone call</td></tr><tr><td><a href="/constructor/phoneConnectionWebrtc/">phoneConnectionWebrtc</a></td><td>WebRTC connection parameters for a <a href="/api/calls/">phone call</a>.</td></tr></tbody></table>
