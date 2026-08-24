---
title: "account.saveAutoSaveSettings"
original: "https://core.telegram.org/method/account.saveAutoSaveSettings"
section: ref
description: "How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.saveAutoSaveSettings","url":"/method/account.saveAutoSaveSettings/"}]
layout: layout.njk
---

# account.saveAutoSaveSettings

Modify autosave settings

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.saveAutoSaveSettings/" class="current_page_link">account.saveAutoSaveSettings</a>#d69b8361 flags:<a href="/type/%23/">#</a> users:flags.0?true chats:flags.1?true broadcasts:flags.2?true peer:flags.3?<a href="/type/InputPeer/">InputPeer</a> settings:<a href="/type/AutoSaveSettings/">AutoSaveSettings</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the new settings should affect all private chats</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the new settings should affect all groups</td></tr><tr><td><strong>broadcasts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether the new settings should affect all <a href="/api/channel/">channels</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/InputPeer/">InputPeer</a></td><td>Whether the new settings should affect a specific peer</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/AutoSaveSettings/">AutoSaveSettings</a></td><td>The new autosave settings</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
