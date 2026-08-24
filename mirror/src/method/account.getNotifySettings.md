---
title: "account.getNotifySettings"
original: "https://core.telegram.org/method/account.getNotifySettings"
section: ref
description: "Gets current notification settings for a given user/group, from all users/all groups."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getNotifySettings","url":"/method/account.getNotifySettings/"}]
layout: layout.njk
---

# account.getNotifySettings

Gets current notification settings for a given user/group, from all users/all groups.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/peerNotifySettings/">peerNotifySettings</a>#99622c0c flags:<a href="/type/%23/">#</a> show_previews:flags.0?<a href="/type/Bool/">Bool</a> silent:flags.1?<a href="/type/Bool/">Bool</a> mute_until:flags.2?<a href="/type/int/">int</a> ios_sound:flags.3?<a href="/type/NotificationSound/">NotificationSound</a> android_sound:flags.4?<a href="/type/NotificationSound/">NotificationSound</a> other_sound:flags.5?<a href="/type/NotificationSound/">NotificationSound</a> stories_muted:flags.6?<a href="/type/Bool/">Bool</a> stories_hide_sender:flags.7?<a href="/type/Bool/">Bool</a> stories_ios_sound:flags.8?<a href="/type/NotificationSound/">NotificationSound</a> stories_android_sound:flags.9?<a href="/type/NotificationSound/">NotificationSound</a> stories_other_sound:flags.10?<a href="/type/NotificationSound/">NotificationSound</a> = <a href="/type/PeerNotifySettings/">PeerNotifySettings</a>;
---functions---
<a href="/method/account.getNotifySettings/" class="current_page_link">account.getNotifySettings</a>#12b3ad31 peer:<a href="/type/InputNotifyPeer/">InputNotifyPeer</a> = <a href="/type/PeerNotifySettings/">PeerNotifySettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputNotifyPeer/">InputNotifyPeer</a></td><td>Notification source</td></tr></tbody></table>

### Result

[PeerNotifySettings](/type/PeerNotifySettings/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
