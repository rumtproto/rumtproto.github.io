---
title: "messages.reportMessagesDelivery"
original: "https://core.telegram.org/method/messages.reportMessagesDelivery"
section: ref
description: "Used for Telegram Gateway verification messages »: indicate to the server that one or more messages were received by the client, if requested by the…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reportMessagesDelivery","url":"/method/messages.reportMessagesDelivery/"}]
layout: layout.njk
---

# messages.reportMessagesDelivery

Used for [Telegram Gateway verification messages »](/blog/star-messages-gateway-2-0-and-more/#save-even-more-on-user-verification): indicate to the server that one or more [message](/constructor/message/)s were received by the client, if requested by the [message](/constructor/message/).**report\_delivery\_until\_date** flag or the equivalent flag in [push notifications](/api/push-updates/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.reportMessagesDelivery/" class="current_page_link">messages.reportMessagesDelivery</a>#5a6d7395 flags:<a href="/type/%23/">#</a> push:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>push</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Must be set if the messages were received from a <a href="/api/push-updates/">push notification</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer where the messages were received.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>The IDs of the received messages.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Handling PUSH-notifications](/api/push-updates/)

How to subscribe to and handle PUSH notifications

#### [message](/constructor/message/)

A message
