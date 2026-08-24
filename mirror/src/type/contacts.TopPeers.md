---
title: "Contacts.TopPeers"
original: "https://core.telegram.org/type/contacts.TopPeers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Contacts.TopPeers","url":"/type/contacts.TopPeers/"}]
layout: layout.njk
---

# Contacts.TopPeers

Top peers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.topPeersNotModified/">contacts.topPeersNotModified</a>#de266ef5 = <a href="/type/contacts.TopPeers/" class="current_page_link">contacts.TopPeers</a>;
<a href="/constructor/contacts.topPeers/">contacts.topPeers</a>#70b772a8 categories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TopPeerCategoryPeers/">TopPeerCategoryPeers</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.TopPeers/" class="current_page_link">contacts.TopPeers</a>;
<a href="/constructor/contacts.topPeersDisabled/">contacts.topPeersDisabled</a>#b52c939d = <a href="/type/contacts.TopPeers/" class="current_page_link">contacts.TopPeers</a>;

---functions---

<a href="/method/contacts.getTopPeers/">contacts.getTopPeers</a>#973478b6 flags:<a href="/type/%23/">#</a> correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/contacts.TopPeers/" class="current_page_link">contacts.TopPeers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.topPeersNotModified/">contacts.topPeersNotModified</a></td><td>Top peer info hasn't changed</td></tr><tr><td><a href="/constructor/contacts.topPeers/">contacts.topPeers</a></td><td>Top peers</td></tr><tr><td><a href="/constructor/contacts.topPeersDisabled/">contacts.topPeersDisabled</a></td><td>Top peers disabled</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.getTopPeers/">contacts.getTopPeers</a></td><td>Get most used peers</td></tr></tbody></table>
