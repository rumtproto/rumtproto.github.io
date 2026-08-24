---
title: "messages.discardEncryption"
original: "https://core.telegram.org/method/messages.discardEncryption"
section: ref
description: "Cancels a request for creation and/or delete info on secret chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.discardEncryption","url":"/method/messages.discardEncryption/"}]
layout: layout.njk
---

# messages.discardEncryption

Cancels a request for creation and/or delete info on secret chat.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.discardEncryption/" class="current_page_link">messages.discardEncryption</a>#f393aea0 flags:<a href="/type/%23/">#</a> delete_history:flags.0?true chat_id:<a href="/type/int/">int</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>delete_history</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to delete the entire chat history for the other user as well</td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Secret chat ID</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_EMPTY</td><td>The provided chat ID is empty.</td></tr><tr><td>400</td><td>ENCRYPTION_ALREADY_ACCEPTED</td><td>Secret chat already accepted.</td></tr><tr><td>400</td><td>ENCRYPTION_ALREADY_DECLINED</td><td>The secret chat was already declined.</td></tr><tr><td>400</td><td>ENCRYPTION_ID_INVALID</td><td>The provided secret chat ID is invalid.</td></tr></tbody></table>
