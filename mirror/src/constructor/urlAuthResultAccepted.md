---
title: "urlAuthResultAccepted"
original: "https://core.telegram.org/constructor/urlAuthResultAccepted"
section: ref
description: "Details about an accepted authorization request, for more info click here »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"urlAuthResultAccepted","url":"/constructor/urlAuthResultAccepted/"}]
layout: layout.njk
---

# urlAuthResultAccepted

Details about an accepted authorization request, for more info [click here »](/api/url-authorization/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/urlAuthResultAccepted/" class="current_page_link">urlAuthResultAccepted</a>#623a8fa0 flags:<a href="/type/%23/">#</a> url:flags.0?<a href="/type/string/">string</a> = <a href="/type/UrlAuthResult/">UrlAuthResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>If present, the URL to open in the external browser (may use a custom scheme for direct switching to another app); if absent, the login succeeded and clients should simply show a confirmation toast.<br>Always set for <a href="/api/url-authorization/#bot-button-url-authorization">bot button URL authorization</a> and <a href="/api/url-authorization/#link-url-authorization">link URL authorization</a>.</td></tr></tbody></table>

### Type

[UrlAuthResult](/type/UrlAuthResult/)

### Related pages

#### [Seamless Telegram Login](/api/url-authorization/)

Handle Seamless Telegram Login URL authorization requests.
