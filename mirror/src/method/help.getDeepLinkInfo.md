---
title: "help.getDeepLinkInfo"
original: "https://core.telegram.org/method/help.getDeepLinkInfo"
section: ref
description: "Get info about an unsupported deep link, see here for more info »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getDeepLinkInfo","url":"/method/help.getDeepLinkInfo/"}]
layout: layout.njk
---

# help.getDeepLinkInfo

Get info about an unsupported deep link, see [here for more info »](/api/links/#unsupported-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.deepLinkInfoEmpty/">help.deepLinkInfoEmpty</a>#66afa166 = <a href="/type/help.DeepLinkInfo/">help.DeepLinkInfo</a>;
<a href="/constructor/help.deepLinkInfo/">help.deepLinkInfo</a>#6a4ee832 flags:<a href="/type/%23/">#</a> update_app:flags.0?true message:<a href="/type/string/">string</a> entities:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/help.DeepLinkInfo/">help.DeepLinkInfo</a>;
---functions---
<a href="/method/help.getDeepLinkInfo/" class="current_page_link">help.getDeepLinkInfo</a>#3fedc75f path:<a href="/type/string/">string</a> = <a href="/type/help.DeepLinkInfo/">help.DeepLinkInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>path</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Path component of a <code>tg:</code> link</td></tr></tbody></table>

### Result

[help.DeepLinkInfo](/type/help.DeepLinkInfo/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
