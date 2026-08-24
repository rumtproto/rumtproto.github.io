---
title: "messages.checkHistoryImportPeer"
original: "https://core.telegram.org/method/messages.checkHistoryImportPeer"
section: ref
description: "Check whether chat history exported from another chat app can be imported into a specific Telegram chat, click here for more info »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.checkHistoryImportPeer","url":"/method/messages.checkHistoryImportPeer/"}]
layout: layout.njk
---

# messages.checkHistoryImportPeer

Check whether chat history exported from another chat app can be [imported into a specific Telegram chat, click here for more info »](/api/import/).

If the check succeeds, and no RPC errors are returned, a [messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/) constructor will be returned, with a confirmation text to be shown to the user, before actually initializing the import.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.checkedHistoryImportPeer/">messages.checkedHistoryImportPeer</a>#a24de717 confirm_text:<a href="/type/string/">string</a> = <a href="/type/messages.CheckedHistoryImportPeer/">messages.CheckedHistoryImportPeer</a>;
---functions---
<a href="/method/messages.checkHistoryImportPeer/" class="current_page_link">messages.checkHistoryImportPeer</a>#5dc60f03 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/messages.CheckedHistoryImportPeer/">messages.CheckedHistoryImportPeer</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The chat where we want to <a href="/api/import/">import history »</a>.</td></tr></tbody></table>

### Result

[messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>USER_NOT_MUTUAL_CONTACT</td><td>The provided user is not a mutual contact.</td></tr></tbody></table>

### Related pages

#### [Imported messages](/api/import/)

Telegram allows importing messages and media from foreign chat apps.

#### [messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/)

Contains a confirmation text to be shown to the user, upon [importing chat history, click here for more info »](/api/import/).
