---
title: "auth.sentCodeTypeFragmentSms"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms"
section: ref
description: "The code was delivered via fragment.com."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.sentCodeTypeFragmentSms","url":"/constructor/auth.sentCodeTypeFragmentSms/"}]
layout: layout.njk
---

# auth.sentCodeTypeFragmentSms

The code was delivered via [fragment.com](https://fragment.com).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCodeTypeFragmentSms/" class="current_page_link">auth.sentCodeTypeFragmentSms</a>#d9565c39 url:<a href="/type/string/">string</a> length:<a href="/type/int/">int</a> = <a href="/type/auth.SentCodeType/">auth.SentCodeType</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Open the specified URL to log into <a href="https://fragment.com">fragment.com</a> with the wallet that owns the specified phone number and view the code.</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of the delivered code.</td></tr></tbody></table>

### Type

[auth.SentCodeType](/type/auth.SentCodeType/)
