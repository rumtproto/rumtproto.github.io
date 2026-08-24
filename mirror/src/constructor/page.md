---
title: "page"
original: "https://core.telegram.org/constructor/page"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"page","url":"/constructor/page/"}]
layout: layout.njk
---

# page

[Instant view](https://instantview.telegram.org) page

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/page/" class="current_page_link">page</a>#98657f0d flags:<a href="/type/%23/">#</a> part:flags.0?true rtl:flags.1?true v2:flags.2?true url:<a href="/type/string/">string</a> blocks:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PageBlock/">PageBlock</a>&gt; photos:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Photo/">Photo</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; views:flags.3?<a href="/type/int/">int</a> = <a href="/type/Page/">Page</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>part</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Indicates that not full page preview is available to the client and it will need to fetch full Instant View from the server using <a href="/method/messages.getWebPagePreview/">messages.getWebPagePreview</a>.</td></tr><tr><td><strong>rtl</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the page contains RTL text</td></tr><tr><td><strong>v2</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this is an <a href="https://instantview.telegram.org/docs#what-39s-new-in-2-0">IV v2</a> page</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Original page HTTP URL</td></tr><tr><td><strong>blocks</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PageBlock/">PageBlock</a>&gt;</td><td>Page elements (like with HTML elements, only as TL constructors)</td></tr><tr><td><strong>photos</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Photo/">Photo</a>&gt;</td><td>Photos in page</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt;</td><td>Media in page</td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>View count</td></tr></tbody></table>

### Type

[Page](/type/Page/)

### Related pages

#### [messages.getWebPagePreview](/method/messages.getWebPagePreview/)

Get preview of webpage
