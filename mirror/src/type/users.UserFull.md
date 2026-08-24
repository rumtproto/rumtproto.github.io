---
title: "users.UserFull"
original: "https://core.telegram.org/type/users.UserFull"
section: ref
description: "Full user information, with attached context peers for reactions"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"users.UserFull","url":"/type/users.UserFull/"}]
layout: layout.njk
---

# users.UserFull

Full user information, with attached context peers for reactions

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/users.userFull/">users.userFull</a>#3b6d152e full_user:<a href="/type/UserFull/">UserFull</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/users.UserFull/" class="current_page_link">users.UserFull</a>;

---functions---

<a href="/method/users.getFullUser/">users.getFullUser</a>#b60f5918 id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/users.UserFull/" class="current_page_link">users.UserFull</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/users.userFull/">users.userFull</a></td><td>Full user information</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/users.getFullUser/">users.getFullUser</a></td><td>Returns extended user info by ID.</td></tr></tbody></table>
