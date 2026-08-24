---
title: "SavedDialog"
original: "https://core.telegram.org/type/SavedDialog"
section: ref
description: "Represents a saved message dialog »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SavedDialog","url":"/type/SavedDialog/"}]
layout: layout.njk
---

# SavedDialog

Represents a [saved message dialog »](/api/saved-messages/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/savedDialog/">savedDialog</a>#bd87cb6c flags:<a href="/type/%23/">#</a> pinned:flags.2?true peer:<a href="/type/Peer/">Peer</a> top_message:<a href="/type/int/">int</a> = <a href="/type/SavedDialog/" class="current_page_link">SavedDialog</a>;
<a href="/constructor/monoForumDialog/">monoForumDialog</a>#64407ea7 flags:<a href="/type/%23/">#</a> unread_mark:flags.3?true nopaid_messages_exception:flags.4?true peer:<a href="/type/Peer/">Peer</a> top_message:<a href="/type/int/">int</a> read_inbox_max_id:<a href="/type/int/">int</a> read_outbox_max_id:<a href="/type/int/">int</a> unread_count:<a href="/type/int/">int</a> unread_reactions_count:<a href="/type/int/">int</a> draft:flags.1?<a href="/type/DraftMessage/">DraftMessage</a> = <a href="/type/SavedDialog/" class="current_page_link">SavedDialog</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/savedDialog/">savedDialog</a></td><td>Represents a <a href="/api/saved-messages/">saved dialog »</a>.</td></tr><tr><td><a href="/constructor/monoForumDialog/">monoForumDialog</a></td><td>Represents a <a href="/api/monoforum/">monoforum topic »</a>.</td></tr></tbody></table>

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
