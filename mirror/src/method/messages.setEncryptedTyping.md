---
title: "messages.setEncryptedTyping"
original: "https://core.telegram.org/method/messages.setEncryptedTyping"
section: ref
description: "Send typing event by the current user to a secret chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.setEncryptedTyping","url":"/method/messages.setEncryptedTyping/"}]
layout: layout.njk
---

# messages.setEncryptedTyping

Send typing event by the current user to a secret chat.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.setEncryptedTyping/" class="current_page_link">messages.setEncryptedTyping</a>#791451ed peer:<a href="/type/InputEncryptedChat/">InputEncryptedChat</a> typing:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat/">InputEncryptedChat</a></td><td>Secret chat ID</td></tr><tr><td><strong>typing</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Typing.<br><strong>Possible values</strong>:<br><a href="/constructor/boolTrue/">(boolTrue)</a>, if the user started typing and more than <strong>5 seconds</strong> have passed since the last request<br><a href="/constructor/boolFalse/">(boolFalse)</a>, if the user stopped typing</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr></tbody></table>

### Related pages

#### [boolTrue](/constructor/boolTrue/)

The constructor can be interpreted as a **boolean**`true` value.

#### [boolFalse](/constructor/boolFalse/)

Constructor may be interpreted as a **boolean**`false` value.
