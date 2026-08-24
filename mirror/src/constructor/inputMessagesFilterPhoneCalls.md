---
title: "inputMessagesFilterPhoneCalls"
original: "https://core.telegram.org/constructor/inputMessagesFilterPhoneCalls"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMessagesFilterPhoneCalls","url":"/constructor/inputMessagesFilterPhoneCalls/"}]
layout: layout.njk
---

# inputMessagesFilterPhoneCalls

Return only phone calls

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMessagesFilterPhoneCalls/" class="current_page_link">inputMessagesFilterPhoneCalls</a>#80c99768 flags:<a href="/type/%23/">#</a> missed:flags.0?true = <a href="/type/MessagesFilter/">MessagesFilter</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>missed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Return only missed phone calls</td></tr></tbody></table>

### Type

[MessagesFilter](/type/MessagesFilter/)
