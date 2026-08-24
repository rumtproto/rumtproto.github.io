---
title: "Contacts.ResolvedPeer"
original: "https://core.telegram.org/type/contacts.ResolvedPeer"
section: ref
description: "Peer returned after resolving a @username"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Contacts.ResolvedPeer","url":"/type/contacts.ResolvedPeer/"}]
layout: layout.njk
---

# Contacts.ResolvedPeer

Peer returned after resolving a `@username`

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.resolvedPeer/">contacts.resolvedPeer</a>#7f077ad9 peer:<a href="/type/Peer/">Peer</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.ResolvedPeer/" class="current_page_link">contacts.ResolvedPeer</a>;

---functions---

<a href="/method/contacts.resolveUsername/">contacts.resolveUsername</a>#725afbbc flags:<a href="/type/%23/">#</a> username:<a href="/type/string/">string</a> referer:flags.0?<a href="/type/string/">string</a> = <a href="/type/contacts.ResolvedPeer/" class="current_page_link">contacts.ResolvedPeer</a>;
<a href="/method/contacts.resolvePhone/">contacts.resolvePhone</a>#8af94344 phone:<a href="/type/string/">string</a> = <a href="/type/contacts.ResolvedPeer/" class="current_page_link">contacts.ResolvedPeer</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.resolvedPeer/">contacts.resolvedPeer</a></td><td>Resolved peer</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.resolveUsername/">contacts.resolveUsername</a></td><td>Resolve a @username to get peer info</td></tr><tr><td><a href="/method/contacts.resolvePhone/">contacts.resolvePhone</a></td><td>Resolve a phone number to get user info, if their privacy settings allow it.<br><br>Make sure to implement client-side ratelimiting/debounce for this method, allowing at most 1 call every 3 seconds.</td></tr></tbody></table>
