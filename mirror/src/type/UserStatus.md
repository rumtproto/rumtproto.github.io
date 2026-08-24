---
title: "UserStatus"
original: "https://core.telegram.org/type/UserStatus"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"UserStatus","url":"/type/UserStatus/"}]
layout: layout.njk
---

# UserStatus

User online status

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/userStatusEmpty/">userStatusEmpty</a>#9d05049 = <a href="/type/UserStatus/" class="current_page_link">UserStatus</a>;
<a href="/constructor/userStatusOnline/">userStatusOnline</a>#edb93949 expires:<a href="/type/int/">int</a> = <a href="/type/UserStatus/" class="current_page_link">UserStatus</a>;
<a href="/constructor/userStatusOffline/">userStatusOffline</a>#8c703f was_online:<a href="/type/int/">int</a> = <a href="/type/UserStatus/" class="current_page_link">UserStatus</a>;
<a href="/constructor/userStatusRecently/">userStatusRecently</a>#7b197dc8 flags:<a href="/type/%23/">#</a> by_me:flags.0?true = <a href="/type/UserStatus/" class="current_page_link">UserStatus</a>;
<a href="/constructor/userStatusLastWeek/">userStatusLastWeek</a>#541a1d1a flags:<a href="/type/%23/">#</a> by_me:flags.0?true = <a href="/type/UserStatus/" class="current_page_link">UserStatus</a>;
<a href="/constructor/userStatusLastMonth/">userStatusLastMonth</a>#65899777 flags:<a href="/type/%23/">#</a> by_me:flags.0?true = <a href="/type/UserStatus/" class="current_page_link">UserStatus</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/userStatusEmpty/">userStatusEmpty</a></td><td>User status has not been set yet.</td></tr><tr><td><a href="/constructor/userStatusOnline/">userStatusOnline</a></td><td>Online status of the user.</td></tr><tr><td><a href="/constructor/userStatusOffline/">userStatusOffline</a></td><td>The user's offline status.</td></tr><tr><td><a href="/constructor/userStatusRecently/">userStatusRecently</a></td><td>Online status: last seen recently</td></tr><tr><td><a href="/constructor/userStatusLastWeek/">userStatusLastWeek</a></td><td>Online status: last seen last week</td></tr><tr><td><a href="/constructor/userStatusLastMonth/">userStatusLastMonth</a></td><td>Online status: last seen last month</td></tr></tbody></table>
