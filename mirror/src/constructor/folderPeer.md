---
title: "folderPeer"
original: "https://core.telegram.org/constructor/folderPeer"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"folderPeer","url":"/constructor/folderPeer/"}]
layout: layout.njk
---

# folderPeer

Peer in a folder

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/folderPeer/" class="current_page_link">folderPeer</a>#e9baa668 peer:<a href="/type/Peer/">Peer</a> folder_id:<a href="/type/int/">int</a> = <a href="/type/FolderPeer/">FolderPeer</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Folder peer info</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr></tbody></table>

### Type

[FolderPeer](/type/FolderPeer/)

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
