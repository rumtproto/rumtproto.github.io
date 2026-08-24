---
title: "updatePinnedSavedDialogs"
original: "https://core.telegram.org/constructor/updatePinnedSavedDialogs"
section: ref
description: "Pinned saved dialogs » were updated"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePinnedSavedDialogs","url":"/constructor/updatePinnedSavedDialogs/"}]
layout: layout.njk
---

# updatePinnedSavedDialogs

[Pinned saved dialogs »](/api/saved-messages/) were updated

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatePinnedSavedDialogs/" class="current_page_link">updatePinnedSavedDialogs</a>#686c85a6 flags:<a href="/type/%23/">#</a> order:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DialogPeer/">DialogPeer</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DialogPeer/">DialogPeer</a>&gt;</td><td>New order of pinned saved dialogs</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
