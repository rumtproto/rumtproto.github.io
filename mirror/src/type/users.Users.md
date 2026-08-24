---
title: "users.Users"
original: "https://core.telegram.org/type/users.Users"
section: ref
description: "Describes a list of users (or bots)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"users.Users","url":"/type/users.Users/"}]
layout: layout.njk
---

# users.Users

Describes a list of users (or bots).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/users.users/">users.users</a>#62d706b8 users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/users.Users/" class="current_page_link">users.Users</a>;
<a href="/constructor/users.usersSlice/">users.usersSlice</a>#315a4974 count:<a href="/type/int/">int</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/users.Users/" class="current_page_link">users.Users</a>;

---functions---

<a href="/method/bots.getBotRecommendations/">bots.getBotRecommendations</a>#a1b70815 bot:<a href="/type/InputUser/">InputUser</a> = <a href="/type/users.Users/" class="current_page_link">users.Users</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/users.users/">users.users</a></td><td>Describes a list of users (or bots).</td></tr><tr><td><a href="/constructor/users.usersSlice/">users.usersSlice</a></td><td>Describes a partial list of users.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.getBotRecommendations/">bots.getBotRecommendations</a></td><td>Obtain a list of similarly themed bots, selected based on similarities in their subscriber bases, see <a href="/api/recommend/">here »</a> for more info.</td></tr></tbody></table>
