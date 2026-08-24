---
title: "account.updateNotifySettings"
original: "https://core.telegram.org/method/account.updateNotifySettings"
section: ref
description: "Edits notification settings from a given user/group, from all users/all groups."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateNotifySettings","url":"/method/account.updateNotifySettings/"}]
layout: layout.njk
---

# account.updateNotifySettings

Edits notification settings from a given user/group, from all users/all groups.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.updateNotifySettings/" class="current_page_link">account.updateNotifySettings</a>#84be5b93 peer:<a href="/type/InputNotifyPeer/">InputNotifyPeer</a> settings:<a href="/type/InputPeerNotifySettings/">InputPeerNotifySettings</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputNotifyPeer/">InputNotifyPeer</a></td><td>Notification source</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/InputPeerNotifySettings/">InputPeerNotifySettings</a></td><td>Notification settings</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>SETTINGS_INVALID</td><td>Invalid settings were provided.</td></tr></tbody></table>
