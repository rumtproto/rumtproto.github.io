---
title: "messages.searchCounter"
original: "https://core.telegram.org/constructor/messages.searchCounter"
section: ref
description: "Indicates how many results would be found by a messages.search call with the same parameters"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.searchCounter","url":"/constructor/messages.searchCounter/"}]
layout: layout.njk
---

# messages.searchCounter

Indicates how many results would be found by a [messages.search](/method/messages.search/) call with the same parameters

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.searchCounter/" class="current_page_link">messages.searchCounter</a>#e844ebff flags:<a href="/type/%23/">#</a> inexact:flags.1?true filter:<a href="/type/MessagesFilter/">MessagesFilter</a> count:<a href="/type/int/">int</a> = <a href="/type/messages.SearchCounter/">messages.SearchCounter</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>inexact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, the results may be inexact</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/MessagesFilter/">MessagesFilter</a></td><td>Provided message filter</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of results that were found server-side</td></tr></tbody></table>

### Type

[messages.SearchCounter](/type/messages.SearchCounter/)

### Related pages

#### [messages.search](/method/messages.search/)

Search for messages.
