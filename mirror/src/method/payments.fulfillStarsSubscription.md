---
title: "payments.fulfillStarsSubscription"
original: "https://core.telegram.org/method/payments.fulfillStarsSubscription"
section: ref
description: "Re-join a private channel associated to an active Telegram Star subscription »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.fulfillStarsSubscription","url":"/method/payments.fulfillStarsSubscription/"}]
layout: layout.njk
---

# payments.fulfillStarsSubscription

Re-join a private channel associated to an active [Telegram Star subscription »](/api/invites/#paid-invite-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/payments.fulfillStarsSubscription/" class="current_page_link">payments.fulfillStarsSubscription</a>#cc5bebb3 peer:<a href="/type/InputPeer/">InputPeer</a> subscription_id:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Always pass <a href="/constructor/inputPeerSelf/">inputPeerSelf</a>.</td></tr><tr><td><strong>subscription_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>ID of the subscription.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
