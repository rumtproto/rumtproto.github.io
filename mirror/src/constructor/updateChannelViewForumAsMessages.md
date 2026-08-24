---
title: "updateChannelViewForumAsMessages"
original: "https://core.telegram.org/constructor/updateChannelViewForumAsMessages"
section: ref
description: "Users may also choose to display messages from all topics as if they were sent to a normal group, using a \"View as messages\" setting in the local client."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChannelViewForumAsMessages","url":"/constructor/updateChannelViewForumAsMessages/"}]
layout: layout.njk
---

# updateChannelViewForumAsMessages

Users may also choose to display messages from all topics as if they were sent to a normal group, using a "View as messages" setting in the local client.  
This setting only affects the current account, and is synced to other logged in sessions using the [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/) method; invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChannelViewForumAsMessages/" class="current_page_link">updateChannelViewForumAsMessages</a>#7b68920 channel_id:<a href="/type/long/">long</a> enabled:<a href="/type/Bool/">Bool</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The forum ID</td></tr><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>The new value of the toggle.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/)

Users may also choose to display messages from all topics of a [forum](/api/forum/) as if they were sent to a normal group, using a "View as messages" setting in the local client: this setting only affects the current account, and is synced to other logged in sessions using this method.

Invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](/api/channel/#channels), [supergroup](/api/channel/#supergroups) or [gigagroup](/api/channel/#gigagroups).

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [dialog](/constructor/dialog/)

Chat

#### [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/)

Users may also choose to display messages from all topics as if they were sent to a normal group, using a "View as messages" setting in the local client.  
This setting only affects the current account, and is synced to other logged in sessions using the [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/) method; invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).
