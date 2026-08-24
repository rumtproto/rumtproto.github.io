---
title: "Messages.AffectedMessages"
original: "https://core.telegram.org/type/messages.AffectedMessages"
section: ref
description: "Messages affected by changes"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.AffectedMessages","url":"/type/messages.AffectedMessages/"}]
layout: layout.njk
---

# Messages.AffectedMessages

Messages affected by changes

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.affectedMessages/">messages.affectedMessages</a>#84d19185 pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/messages.AffectedMessages/" class="current_page_link">messages.AffectedMessages</a>;

---functions---

<a href="/method/messages.readHistory/">messages.readHistory</a>#e306d3a peer:<a href="/type/InputPeer/">InputPeer</a> max_id:<a href="/type/int/">int</a> = <a href="/type/messages.AffectedMessages/" class="current_page_link">messages.AffectedMessages</a>;
<a href="/method/messages.deleteMessages/">messages.deleteMessages</a>#e58e95d2 flags:<a href="/type/%23/">#</a> revoke:flags.0?true id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.AffectedMessages/" class="current_page_link">messages.AffectedMessages</a>;
<a href="/method/messages.readMessageContents/">messages.readMessageContents</a>#36a73f77 id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.AffectedMessages/" class="current_page_link">messages.AffectedMessages</a>;

<a href="/method/channels.deleteMessages/">channels.deleteMessages</a>#84c1fd4e channel:<a href="/type/InputChannel/">InputChannel</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.AffectedMessages/" class="current_page_link">messages.AffectedMessages</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.affectedMessages/">messages.affectedMessages</a></td><td>Events affected by operation</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.readHistory/">messages.readHistory</a></td><td>Marks message history as read.</td></tr><tr><td><a href="/method/messages.deleteMessages/">messages.deleteMessages</a></td><td>Deletes messages by their identifiers.</td></tr><tr><td><a href="/method/messages.readMessageContents/">messages.readMessageContents</a></td><td>Notifies the sender about the recipient having listened a voice message or watched a video, emitting an <a href="/constructor/updateReadMessagesContents/">updateReadMessagesContents</a>.</td></tr><tr><td><a href="/method/channels.deleteMessages/">channels.deleteMessages</a></td><td>Delete messages in a <a href="/api/channel/">channel/supergroup</a></td></tr></tbody></table>
