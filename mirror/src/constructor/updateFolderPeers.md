---
title: "updateFolderPeers"
original: "https://core.telegram.org/constructor/updateFolderPeers"
section: ref
description: "The peer list of a peer folder was updated"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateFolderPeers","url":"/constructor/updateFolderPeers/"}]
layout: layout.njk
---

# updateFolderPeers

The peer list of a [peer folder](/api/folders/#peer-folders) was updated

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateFolderPeers/" class="current_page_link">updateFolderPeers</a>#19360dc0 folder_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/FolderPeer/">FolderPeer</a>&gt; pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>folder_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/FolderPeer/">FolderPeer</a>&gt;</td><td>New peer list</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Event count after generation</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Number of events that were generated</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
