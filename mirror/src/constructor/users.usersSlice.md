---
title: "users.usersSlice"
original: "https://core.telegram.org/constructor/users.usersSlice"
section: ref
description: "Describes a partial list of users."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"users.usersSlice","url":"/constructor/users.usersSlice/"}]
layout: layout.njk
---

# users.usersSlice

Describes a partial list of users.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/users.usersSlice/" class="current_page_link">users.usersSlice</a>#315a4974 count:<a href="/type/int/">int</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/users.Users/">users.Users</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of users (bigger than the users specified in <code>users</code>)</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Subset of users.</td></tr></tbody></table>

### Type

[users.Users](/type/users.Users/)
