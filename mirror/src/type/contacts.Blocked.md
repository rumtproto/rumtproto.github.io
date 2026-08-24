---
title: "contacts.Blocked"
original: "https://core.telegram.org/type/contacts.Blocked"
section: ref
description: "Info on users from the current user's black list."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.Blocked","url":"/type/contacts.Blocked/"}]
layout: layout.njk
---

# contacts.Blocked

Info on users from the current user's black list.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.blocked/">contacts.blocked</a>#ade1591 blocked:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PeerBlocked/">PeerBlocked</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.Blocked/" class="current_page_link">contacts.Blocked</a>;
<a href="/constructor/contacts.blockedSlice/">contacts.blockedSlice</a>#e1664194 count:<a href="/type/int/">int</a> blocked:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PeerBlocked/">PeerBlocked</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.Blocked/" class="current_page_link">contacts.Blocked</a>;

---functions---

<a href="/method/contacts.getBlocked/">contacts.getBlocked</a>#9a868f80 flags:<a href="/type/%23/">#</a> my_stories_from:flags.0?true offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/contacts.Blocked/" class="current_page_link">contacts.Blocked</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.blocked/">contacts.blocked</a></td><td>Full list of blocked users.</td></tr><tr><td><a href="/constructor/contacts.blockedSlice/">contacts.blockedSlice</a></td><td>Incomplete list of blocked users.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.getBlocked/">contacts.getBlocked</a></td><td>Returns the list of blocked users.</td></tr></tbody></table>
