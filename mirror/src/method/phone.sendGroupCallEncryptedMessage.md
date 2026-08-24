---
title: "phone.sendGroupCallEncryptedMessage"
original: "https://core.telegram.org/method/phone.sendGroupCallEncryptedMessage"
section: ref
description: "Send an E2E-encrypted message or emoji reaction to all participants of a conference call. This method can only be used with conferences; see here » for the serialization and…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.sendGroupCallEncryptedMessage","url":"/method/phone.sendGroupCallEncryptedMessage/"}]
layout: layout.njk
---

# phone.sendGroupCallEncryptedMessage

Send an E2E-encrypted message or emoji reaction to all participants of a conference call. This method can only be used with conferences; see [here »](/api/end-to-end/group-calls/#conference-in-call-messages) for the serialization and encryption process.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/phone.sendGroupCallEncryptedMessage/" class="current_page_link">phone.sendGroupCallEncryptedMessage</a>#e5afa56d call:<a href="/type/InputGroupCall/">InputGroupCall</a> encrypted_message:<a href="/type/bytes/">bytes</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Conference call that should receive the encrypted message or reaction</td></tr><tr><td><strong>encrypted_message</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Complete encrypted message or reaction packet produced as specified <a href="/api/end-to-end/group-calls/#encrypting-and-sending-a-message">here »</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr></tbody></table>

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
