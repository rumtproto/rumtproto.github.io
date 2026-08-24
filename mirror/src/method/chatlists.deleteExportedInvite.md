---
title: "chatlists.deleteExportedInvite"
original: "https://core.telegram.org/method/chatlists.deleteExportedInvite"
section: ref
description: "Delete a previously created chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"chatlists.deleteExportedInvite","url":"/method/chatlists.deleteExportedInvite/"}]
layout: layout.njk
---

# chatlists.deleteExportedInvite

Delete a previously created [chat folder deep link »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/chatlists.deleteExportedInvite/" class="current_page_link">chatlists.deleteExportedInvite</a>#719c5c5e chatlist:<a href="/type/InputChatlist/">InputChatlist</a> slug:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist/">InputChatlist</a></td><td>The related folder</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><code>slug</code> obtained from the <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FILTER_ID_INVALID</td><td>The specified filter ID is invalid.</td></tr><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>The specified filter cannot be used in this context.</td></tr><tr><td>400</td><td>INVITE_SLUG_EXPIRED</td><td>The specified chat folder link has expired.</td></tr><tr><td>400</td><td>INVITE_SLUG_INVALID</td><td>The specified invitation slug is invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
