---
title: "dialogFolder"
original: "https://core.telegram.org/constructor/dialogFolder"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"dialogFolder","url":"/constructor/dialogFolder/"}]
layout: layout.njk
---

# dialogFolder

Dialog in folder

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/dialogFolder/" class="current_page_link">dialogFolder</a>#71bd134c flags:<a href="/type/%23/">#</a> pinned:flags.2?true folder:<a href="/type/Folder/">Folder</a> peer:<a href="/type/Peer/">Peer</a> top_message:<a href="/type/int/">int</a> unread_muted_peers_count:<a href="/type/int/">int</a> unread_unmuted_peers_count:<a href="/type/int/">int</a> unread_muted_messages_count:<a href="/type/int/">int</a> unread_unmuted_messages_count:<a href="/type/int/">int</a> = <a href="/type/Dialog/">Dialog</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Is this folder pinned</td></tr><tr><td><strong>folder</strong></td><td style="text-align: center;"><a href="/type/Folder/">Folder</a></td><td>The folder</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer in folder</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Latest message ID of dialog</td></tr><tr><td><strong>unread_muted_peers_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread muted peers in folder</td></tr><tr><td><strong>unread_unmuted_peers_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread unmuted peers in folder</td></tr><tr><td><strong>unread_muted_messages_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread messages from muted peers in folder</td></tr><tr><td><strong>unread_unmuted_messages_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread messages from unmuted peers in folder</td></tr></tbody></table>

### Type

[Dialog](/type/Dialog/)
