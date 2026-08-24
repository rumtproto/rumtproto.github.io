---
title: "savedDialog"
original: "https://core.telegram.org/constructor/savedDialog"
section: ref
description: "Represents a saved dialog »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"savedDialog","url":"/constructor/savedDialog/"}]
layout: layout.njk
---

# savedDialog

Represents a [saved dialog »](/api/saved-messages/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/savedDialog/" class="current_page_link">savedDialog</a>#bd87cb6c flags:<a href="/type/%23/">#</a> pinned:flags.2?true peer:<a href="/type/Peer/">Peer</a> top_message:<a href="/type/int/">int</a> = <a href="/type/SavedDialog/">SavedDialog</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Is the dialog pinned</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The dialog</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The latest message ID</td></tr></tbody></table>

### Type

[SavedDialog](/type/SavedDialog/)

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
