---
title: "messages.initHistoryImport"
original: "https://core.telegram.org/method/messages.initHistoryImport"
section: ref
description: "Import chat history from a foreign chat app into a specific Telegram chat, click here for more info about imported chats »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.initHistoryImport","url":"/method/messages.initHistoryImport/"}]
layout: layout.njk
---

# messages.initHistoryImport

Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](/api/import/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.historyImport/">messages.historyImport</a>#1662af0b id:<a href="/type/long/">long</a> = <a href="/type/messages.HistoryImport/">messages.HistoryImport</a>;
---functions---
<a href="/method/messages.initHistoryImport/" class="current_page_link">messages.initHistoryImport</a>#34090c3b peer:<a href="/type/InputPeer/">InputPeer</a> file:<a href="/type/InputFile/">InputFile</a> media_count:<a href="/type/int/">int</a> = <a href="/type/messages.HistoryImport/">messages.HistoryImport</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The Telegram chat where the <a href="/api/import/">history should be imported</a>.</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile/">InputFile</a></td><td>File with messages to import.</td></tr><tr><td><strong>media_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of media files associated with the chat that will be uploaded using <a href="/method/messages.uploadImportedMedia/">messages.uploadImportedMedia</a>.</td></tr></tbody></table>

### Result

[messages.HistoryImport](/type/messages.HistoryImport/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>IMPORT_FILE_INVALID</td><td>The specified chat export file is invalid.</td></tr><tr><td>400</td><td>IMPORT_FORMAT_DATE_INVALID</td><td>The date specified in the import file is invalid.</td></tr><tr><td>400</td><td>IMPORT_FORMAT_UNRECOGNIZED</td><td>The specified chat export file was exported from an unsupported chat app.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>406</td><td>PREVIOUS_CHAT_IMPORT_ACTIVE_WAIT_%dMIN</td><td>Import for this chat is already in progress, wait %d minutes before starting a new one.</td></tr><tr><td>400</td><td>USER_NOT_MUTUAL_CONTACT</td><td>The provided user is not a mutual contact.</td></tr></tbody></table>

### Related pages

#### [Imported messages](/api/import/)

Telegram allows importing messages and media from foreign chat apps.

#### [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/)

Upload a media file associated with an [imported chat, click here for more info »](/api/import/).
