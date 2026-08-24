---
title: "auth.sentCodeTypeFlashCall"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeFlashCall"
section: ref
description: "The code will be sent via a flash phone call, that will be closed immediately. The phone code will then be the phone number itself, just make sure that the phone number matches…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.sentCodeTypeFlashCall","url":"/constructor/auth.sentCodeTypeFlashCall/"}]
layout: layout.njk
---

# auth.sentCodeTypeFlashCall

The code will be sent via a flash phone call, that will be closed immediately. The phone code will then be the phone number itself, just make sure that the phone number matches the specified pattern.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCodeTypeFlashCall/" class="current_page_link">auth.sentCodeTypeFlashCall</a>#ab03c6d9 pattern:<a href="/type/string/">string</a> = <a href="/type/auth.SentCodeType/">auth.SentCodeType</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>pattern</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/pattern/">pattern</a> to match</td></tr></tbody></table>

### Type

[auth.SentCodeType](/type/auth.SentCodeType/)

### Related pages

#### [Pattern matching](/api/pattern/)

Some methods require the client to verify if the data obtained from an external source matches a certain pattern.
