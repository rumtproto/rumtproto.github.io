---
title: "messages.CheckedHistoryImportPeer"
original: "https://core.telegram.org/type/messages.CheckedHistoryImportPeer"
section: ref
description: "Contains a confirmation text to be shown to the user, upon importing chat history, click here for more info »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.CheckedHistoryImportPeer","url":"/type/messages.CheckedHistoryImportPeer/"}]
layout: layout.njk
---

# messages.CheckedHistoryImportPeer

Contains a confirmation text to be shown to the user, upon [importing chat history, click here for more info »](/api/import/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.checkedHistoryImportPeer/">messages.checkedHistoryImportPeer</a>#a24de717 confirm_text:<a href="/type/string/">string</a> = <a href="/type/messages.CheckedHistoryImportPeer/" class="current_page_link">messages.CheckedHistoryImportPeer</a>;

---functions---

<a href="/method/messages.checkHistoryImportPeer/">messages.checkHistoryImportPeer</a>#5dc60f03 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/messages.CheckedHistoryImportPeer/" class="current_page_link">messages.CheckedHistoryImportPeer</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.checkedHistoryImportPeer/">messages.checkedHistoryImportPeer</a></td><td>Contains a confirmation text to be shown to the user, upon <a href="/api/import/">importing chat history, click here for more info »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.checkHistoryImportPeer/">messages.checkHistoryImportPeer</a></td><td>Check whether chat history exported from another chat app can be <a href="/api/import/">imported into a specific Telegram chat, click here for more info »</a>.<br><br>If the check succeeds, and no RPC errors are returned, a <a href="/type/messages.CheckedHistoryImportPeer/">messages.CheckedHistoryImportPeer</a> constructor will be returned, with a confirmation text to be shown to the user, before actually initializing the import.</td></tr></tbody></table>

### Related pages

#### [Imported messages](/api/import/)

Telegram allows importing messages and media from foreign chat apps.
