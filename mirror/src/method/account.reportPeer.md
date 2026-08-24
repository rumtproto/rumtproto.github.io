---
title: "account.reportPeer"
original: "https://core.telegram.org/method/account.reportPeer"
section: ref
description: "Report a peer for violation of telegram's Terms of Service"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.reportPeer","url":"/method/account.reportPeer/"}]
layout: layout.njk
---

# account.reportPeer

Report a peer for violation of telegram's Terms of Service

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.reportPeer/" class="current_page_link">account.reportPeer</a>#c5ba3d86 peer:<a href="/type/InputPeer/">InputPeer</a> reason:<a href="/type/ReportReason/">ReportReason</a> message:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer to report</td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/type/ReportReason/">ReportReason</a></td><td>The reason why this peer is being reported</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Comment for report moderation</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
