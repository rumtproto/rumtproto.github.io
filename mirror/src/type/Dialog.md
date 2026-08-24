---
title: "Dialog"
original: "https://core.telegram.org/type/Dialog"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Dialog","url":"/type/Dialog/"}]
layout: layout.njk
---

# Dialog

Chat info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/dialog/">dialog</a>#d58a08c6 flags:<a href="/type/%23/">#</a> pinned:flags.2?true unread_mark:flags.3?true view_forum_as_messages:flags.6?true peer:<a href="/type/Peer/">Peer</a> top_message:<a href="/type/int/">int</a> read_inbox_max_id:<a href="/type/int/">int</a> read_outbox_max_id:<a href="/type/int/">int</a> unread_count:<a href="/type/int/">int</a> unread_mentions_count:<a href="/type/int/">int</a> unread_reactions_count:<a href="/type/int/">int</a> notify_settings:<a href="/type/PeerNotifySettings/">PeerNotifySettings</a> pts:flags.0?<a href="/type/int/">int</a> draft:flags.1?<a href="/type/DraftMessage/">DraftMessage</a> folder_id:flags.4?<a href="/type/int/">int</a> ttl_period:flags.5?<a href="/type/int/">int</a> = <a href="/type/Dialog/" class="current_page_link">Dialog</a>;
<a href="/constructor/dialogFolder/">dialogFolder</a>#71bd134c flags:<a href="/type/%23/">#</a> pinned:flags.2?true folder:<a href="/type/Folder/">Folder</a> peer:<a href="/type/Peer/">Peer</a> top_message:<a href="/type/int/">int</a> unread_muted_peers_count:<a href="/type/int/">int</a> unread_unmuted_peers_count:<a href="/type/int/">int</a> unread_muted_messages_count:<a href="/type/int/">int</a> unread_unmuted_messages_count:<a href="/type/int/">int</a> = <a href="/type/Dialog/" class="current_page_link">Dialog</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/dialog/">dialog</a></td><td>Chat</td></tr><tr><td><a href="/constructor/dialogFolder/">dialogFolder</a></td><td>Dialog in folder</td></tr></tbody></table>
