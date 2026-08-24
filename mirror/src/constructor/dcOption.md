---
title: "dcOption"
original: "https://core.telegram.org/constructor/dcOption"
section: ref
description: "How to transfer large data batches correctly."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"dcOption","url":"/constructor/dcOption/"}]
layout: layout.njk
---

# dcOption

Data center

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/dcOption/" class="current_page_link">dcOption</a>#18b7a10d flags:<a href="/type/%23/">#</a> ipv6:flags.0?true media_only:flags.1?true tcpo_only:flags.2?true cdn:flags.3?true static:flags.4?true this_port_only:flags.5?true id:<a href="/type/int/">int</a> ip_address:<a href="/type/string/">string</a> port:<a href="/type/int/">int</a> secret:flags.10?<a href="/type/bytes/">bytes</a> = <a href="/type/DcOption/">DcOption</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>ipv6</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the specified IP is an IPv6 address</td></tr><tr><td><strong>media_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this DC should only be used to <a href="/api/files/">download or upload files</a></td></tr><tr><td><strong>tcpo_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this DC only supports connection with <a href="/mtproto/mtproto-transports/#transport-obfuscation">transport obfuscation</a></td></tr><tr><td><strong>cdn</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this is a <a href="https://core.telegram.org/cdn">CDN DC</a>.</td></tr><tr><td><strong>static</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>If set, this IP should be used when connecting through a proxy</td></tr><tr><td><strong>this_port_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>If set, clients must connect using only the specified port, without trying any other port.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>DC ID</td></tr><tr><td><strong>ip_address</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>IP address of DC</td></tr><tr><td><strong>port</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Port</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/bytes/">bytes</a></td><td>If the <code>tcpo_only</code> flag is set, specifies the secret to use when connecting using <a href="/mtproto/mtproto-transports/#transport-obfuscation">transport obfuscation</a></td></tr></tbody></table>

### Type

[DcOption](/type/DcOption/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [MTProto transports](/mtproto/mtproto-transports/)

The list of MTProto transport protocols used to wrap payloads.

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
