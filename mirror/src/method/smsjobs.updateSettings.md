---
title: "smsjobs.updateSettings"
original: "https://core.telegram.org/method/smsjobs.updateSettings"
section: ref
description: "Update SMS job settings (official clients only)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"smsjobs.updateSettings","url":"/method/smsjobs.updateSettings/"}]
layout: layout.njk
---

# smsjobs.updateSettings

Update SMS job settings (official clients only).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/smsjobs.updateSettings/" class="current_page_link">smsjobs.updateSettings</a>#93fa0bf flags:<a href="/type/%23/">#</a> allow_international:flags.0?true = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>allow_international</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Allow international numbers?</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>NOT_JOINED</td><td>The current user hasn't joined the Peer-to-Peer Login Program.</td></tr></tbody></table>
