---
title: "account.finishTakeoutSession"
original: "https://core.telegram.org/method/account.finishTakeoutSession"
section: ref
description: "Terminate a takeout session, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.finishTakeoutSession","url":"/method/account.finishTakeoutSession/"}]
layout: layout.njk
---

# account.finishTakeoutSession

Terminate a [takeout session, see here » for more info](/api/takeout/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.finishTakeoutSession/" class="current_page_link">account.finishTakeoutSession</a>#1d2652ee flags:<a href="/type/%23/">#</a> success:flags.0?true = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>success</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Data exported successfully</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>TAKEOUT_REQUIRED</td><td>A <a href="/api/takeout/">takeout</a> session needs to be initialized first, <a href="/api/takeout/">see here » for more info</a>.</td></tr></tbody></table>

### Related pages

#### [Takeout API](/api/takeout/)

Telegram's API allows users to export all of their information through the takeout API.
