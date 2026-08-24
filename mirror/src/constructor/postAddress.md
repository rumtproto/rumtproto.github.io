---
title: "postAddress"
original: "https://core.telegram.org/constructor/postAddress"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"postAddress","url":"/constructor/postAddress/"}]
layout: layout.njk
---

# postAddress

Shipping address

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/postAddress/" class="current_page_link">postAddress</a>#1e8caaeb street_line1:<a href="/type/string/">string</a> street_line2:<a href="/type/string/">string</a> city:<a href="/type/string/">string</a> state:<a href="/type/string/">string</a> country_iso2:<a href="/type/string/">string</a> post_code:<a href="/type/string/">string</a> = <a href="/type/PostAddress/">PostAddress</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>street_line1</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>First line for the address</td></tr><tr><td><strong>street_line2</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Second line for the address</td></tr><tr><td><strong>city</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>City</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>State, if applicable (empty otherwise)</td></tr><tr><td><strong>country_iso2</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>ISO 3166-1 alpha-2 country code</td></tr><tr><td><strong>post_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Address post code</td></tr></tbody></table>

### Type

[PostAddress](/type/PostAddress/)
