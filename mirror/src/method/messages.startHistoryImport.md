---
title: "messages.startHistoryImport"
original: "https://core.telegram.org/method/messages.startHistoryImport"
section: ref
description: "Complete the history import process, importing all messages into the chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.startHistoryImport","url":"/method/messages.startHistoryImport/"}]
layout: layout.njk
---

# messages.startHistoryImport

Complete the [history import process](/api/import/), importing all messages into the chat.  
To be called only after initializing the import with [messages.initHistoryImport](/method/messages.initHistoryImport/) and uploading all files using [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.startHistoryImport/" class="current_page_link">messages.startHistoryImport</a>#b43df344 peer:<a href="/type/InputPeer/">InputPeer</a> import_id:<a href="/type/long/">long</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The Telegram chat where the messages should be <a href="/api/import/">imported, click here for more info »</a></td></tr><tr><td><strong>import_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Identifier of a history import session, returned by <a href="/method/messages.initHistoryImport/">messages.initHistoryImport</a>.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>IMPORT_ID_INVALID</td><td>The specified import ID is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Imported messages](/api/import/)

Telegram allows importing messages and media from foreign chat apps.

#### [messages.initHistoryImport](/method/messages.initHistoryImport/)

Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](/api/import/).

#### [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/)

Upload a media file associated with an [imported chat, click here for more info »](/api/import/).
