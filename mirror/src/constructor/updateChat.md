---
title: "updateChat"
original: "https://core.telegram.org/constructor/updateChat"
section: ref
description: "Chat (chat and/or chatFull) information was updated."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChat","url":"/constructor/updateChat/"}]
layout: layout.njk
---

# updateChat

Chat ([chat](/constructor/chat/) and/or [chatFull](/constructor/chatFull/)) information was updated.

This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will **always** come bundled with the updated [chat](/constructor/chat/), that should be applied [as usual »](/api/peers/), **without** re-fetching the info manually.

However, full peer information will not come bundled in updates, so the full peer cache ([chatFull](/constructor/chatFull/)) must be invalidated for `chat_id` when receiving this update.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChat/" class="current_page_link">updateChat</a>#f89a6a4e chat_id:<a href="/type/long/">long</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Chat ID</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [chat](/constructor/chat/)

Info about a group.

When updating the [local peer database](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L5679) for an implementation of the logic to use when updating the [local chat peer database](/api/peers/).

#### [chatFull](/constructor/chatFull/)

Full info about a [basic group](/api/channel/#basic-groups).

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Updates](/constructor/updates/)

Full constructor of updates

#### [updatesCombined](/constructor/updatesCombined/)

Constructor for a group of updates.

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
