---
title: "PhoneCallProtocol"
original: "https://core.telegram.org/type/PhoneCallProtocol"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PhoneCallProtocol","url":"/type/PhoneCallProtocol/"}]
layout: layout.njk
---

# PhoneCallProtocol

Phone call protocol

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phoneCallProtocol/">phoneCallProtocol</a>#fc878fc8 flags:<a href="/type/%23/">#</a> udp_p2p:flags.0?true udp_reflector:flags.1?true min_layer:<a href="/type/int/">int</a> max_layer:<a href="/type/int/">int</a> library_versions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; = <a href="/type/PhoneCallProtocol/" class="current_page_link">PhoneCallProtocol</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phoneCallProtocol/">phoneCallProtocol</a></td><td>Protocol info for the VoIP library, see <a href="/api/calls/#populating-phonecallprotocol">here »</a> for details on how to populate it.</td></tr></tbody></table>
