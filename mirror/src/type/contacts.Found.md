---
title: "contacts.Found"
original: "https://core.telegram.org/type/contacts.Found"
section: ref
description: "Object contains info on users found by name substring and auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.Found","url":"/type/contacts.Found/"}]
layout: layout.njk
---

# contacts.Found

Object contains info on users found by name substring and auxiliary data.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.found/">contacts.found</a>#b3134d9d my_results:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; results:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.Found/" class="current_page_link">contacts.Found</a>;

---functions---

<a href="/method/contacts.search/">contacts.search</a>#11f812d8 q:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/contacts.Found/" class="current_page_link">contacts.Found</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.found/">contacts.found</a></td><td>Users found by name substring and auxiliary data.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.search/">contacts.search</a></td><td>Returns users found by username substring.</td></tr></tbody></table>
