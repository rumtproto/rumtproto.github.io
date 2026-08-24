---
title: "phone.saveDefaultGroupCallJoinAs"
original: "https://core.telegram.org/method/phone.saveDefaultGroupCallJoinAs"
section: ref
description: "Set the default peer used to join a video chat/livestream » associated with a specific dialog."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.saveDefaultGroupCallJoinAs","url":"/method/phone.saveDefaultGroupCallJoinAs/"}]
layout: layout.njk
---

# phone.saveDefaultGroupCallJoinAs

Set the default peer used to join a [video chat/livestream »](/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels) associated with a specific dialog.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/phone.saveDefaultGroupCallJoinAs/" class="current_page_link">phone.saveDefaultGroupCallJoinAs</a>#575e1f8c peer:<a href="/type/InputPeer/">InputPeer</a> join_as:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Basic group, supergroup or channel whose video chat/livestream default should be changed</td></tr><tr><td><strong>join_as</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Eligible peer to use by default when joining the dialog's video chats/livestreams, selected from <a href="/method/phone.getGroupCallJoinAs/">phone.getGroupCallJoinAs</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>JOIN_AS_PEER_INVALID</td><td>The specified peer cannot be used to join a group call.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [phone.getGroupCallJoinAs](/method/phone.getGroupCallJoinAs/)

Get a list of peers that can be used to join a [video chat or livestream »](/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels), presenting yourself as a specific user/channel.

This method cannot be used for live stories or conference calls. To comment or react in a live story as another peer, use [channels.getSendAs](/method/channels.getSendAs/) with `for_live_stories` set and pass one of the returned peers to [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/).`send_as`.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
