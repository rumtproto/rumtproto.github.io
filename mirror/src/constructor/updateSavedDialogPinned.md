---
title: "updateSavedDialogPinned"
original: "https://core.telegram.org/constructor/updateSavedDialogPinned"
section: ref
description: "A saved message dialog was pinned/unpinned"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateSavedDialogPinned","url":"/constructor/updateSavedDialogPinned/"}]
layout: layout.njk
---

# updateSavedDialogPinned

A [saved message dialog](/api/saved-messages/) was pinned/unpinned

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateSavedDialogPinned/" class="current_page_link">updateSavedDialogPinned</a>#aeaf9e74 flags:<a href="/type/%23/">#</a> pinned:flags.0?true peer:<a href="/type/DialogPeer/">DialogPeer</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the dialog was pinned</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/DialogPeer/">DialogPeer</a></td><td>The dialog</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
