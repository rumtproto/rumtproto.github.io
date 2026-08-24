---
title: "Help.DeepLinkInfo"
original: "https://core.telegram.org/type/help.DeepLinkInfo"
section: ref
description: "Contains information about an unsupported deep link »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Help.DeepLinkInfo","url":"/type/help.DeepLinkInfo/"}]
layout: layout.njk
---

# Help.DeepLinkInfo

Contains information about an unsupported [deep link »](/api/links/#unsupported-links)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.deepLinkInfoEmpty/">help.deepLinkInfoEmpty</a>#66afa166 = <a href="/type/help.DeepLinkInfo/" class="current_page_link">help.DeepLinkInfo</a>;
<a href="/constructor/help.deepLinkInfo/">help.deepLinkInfo</a>#6a4ee832 flags:<a href="/type/%23/">#</a> update_app:flags.0?true message:<a href="/type/string/">string</a> entities:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/help.DeepLinkInfo/" class="current_page_link">help.DeepLinkInfo</a>;

---functions---

<a href="/method/help.getDeepLinkInfo/">help.getDeepLinkInfo</a>#3fedc75f path:<a href="/type/string/">string</a> = <a href="/type/help.DeepLinkInfo/" class="current_page_link">help.DeepLinkInfo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.deepLinkInfoEmpty/">help.deepLinkInfoEmpty</a></td><td>Deep link info empty</td></tr><tr><td><a href="/constructor/help.deepLinkInfo/">help.deepLinkInfo</a></td><td>Deep link info, see <a href="/api/links/#unsupported-links">the here for more details</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getDeepLinkInfo/">help.getDeepLinkInfo</a></td><td>Get info about an unsupported deep link, see <a href="/api/links/#unsupported-links">here for more info »</a>.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
