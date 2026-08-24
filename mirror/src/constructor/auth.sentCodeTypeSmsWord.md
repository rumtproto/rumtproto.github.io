---
title: "auth.sentCodeTypeSmsWord"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeSmsWord"
section: ref
description: "The code was sent via SMS as a secret word, starting with the letter specified in beginning"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.sentCodeTypeSmsWord","url":"/constructor/auth.sentCodeTypeSmsWord/"}]
layout: layout.njk
---

# auth.sentCodeTypeSmsWord

The code was sent via SMS as a secret word, starting with the letter specified in `beginning`

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCodeTypeSmsWord/" class="current_page_link">auth.sentCodeTypeSmsWord</a>#a416ac81 flags:<a href="/type/%23/">#</a> beginning:flags.0?<a href="/type/string/">string</a> = <a href="/type/auth.SentCodeType/">auth.SentCodeType</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>beginning</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>If set, the secret word in the sent SMS (which may contain multiple words) starts with this letter.</td></tr></tbody></table>

### Type

[auth.SentCodeType](/type/auth.SentCodeType/)
