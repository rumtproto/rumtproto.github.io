---
title: "phone.saveDefaultSendAs"
original: "https://core.telegram.org/method/phone.saveDefaultSendAs"
section: ref
description: "Save the default peer displayed as the author of live story comments and reactions, see in-call messages »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.saveDefaultSendAs","url":"/method/phone.saveDefaultSendAs/"}]
layout: layout.njk
---

# phone.saveDefaultSendAs

Save the default peer displayed as the author of live story comments and reactions, see [in-call messages »](/api/group-calls/#in-call-messages).

It cannot be used for normal video chats/livestreams, where in-call messages are sent as the peer used to join the call (`join_as`).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/phone.saveDefaultSendAs/" class="current_page_link">phone.saveDefaultSendAs</a>#4167add1 call:<a href="/type/InputGroupCall/">InputGroupCall</a> send_as:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Live story group call</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer to display as the author of subsequent comments and reactions</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
