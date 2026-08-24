---
title: "account.sentEmailCode"
original: "https://core.telegram.org/constructor/account.sentEmailCode"
section: ref
description: "Some methods require the client to verify if the data obtained from an external source matches a certain pattern."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.sentEmailCode","url":"/constructor/account.sentEmailCode/"}]
layout: layout.njk
---

# account.sentEmailCode

The sent email code

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.sentEmailCode/" class="current_page_link">account.sentEmailCode</a>#811f854f email_pattern:<a href="/type/string/">string</a> length:<a href="/type/int/">int</a> = <a href="/type/account.SentEmailCode/">account.SentEmailCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>email_pattern</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The email (to which the code was sent) must match this <a href="/api/pattern/">pattern</a></td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The length of the verification code</td></tr></tbody></table>

### Type

[account.SentEmailCode](/type/account.SentEmailCode/)

### Related pages

#### [Pattern matching](/api/pattern/)

Some methods require the client to verify if the data obtained from an external source matches a certain pattern.
