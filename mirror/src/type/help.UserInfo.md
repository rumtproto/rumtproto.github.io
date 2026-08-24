---
title: "Help.UserInfo"
original: "https://core.telegram.org/type/help.UserInfo"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Help.UserInfo","url":"/type/help.UserInfo/"}]
layout: layout.njk
---

# Help.UserInfo

User info

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.userInfoEmpty/">help.userInfoEmpty</a>#f3ae2eed = <a href="/type/help.UserInfo/" class="current_page_link">help.UserInfo</a>;
<a href="/constructor/help.userInfo/">help.userInfo</a>#1eb3758 message:<a href="/type/string/">string</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; author:<a href="/type/string/">string</a> date:<a href="/type/int/">int</a> = <a href="/type/help.UserInfo/" class="current_page_link">help.UserInfo</a>;

---functions---

<a href="/method/help.getUserInfo/">help.getUserInfo</a>#38a08d3 user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/help.UserInfo/" class="current_page_link">help.UserInfo</a>;
<a href="/method/help.editUserInfo/">help.editUserInfo</a>#66b91b70 user_id:<a href="/type/InputUser/">InputUser</a> message:<a href="/type/string/">string</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/help.UserInfo/" class="current_page_link">help.UserInfo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.userInfoEmpty/">help.userInfoEmpty</a></td><td>Internal use</td></tr><tr><td><a href="/constructor/help.userInfo/">help.userInfo</a></td><td>Internal use</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getUserInfo/">help.getUserInfo</a></td><td>Can only be used by TSF members to obtain internal information.</td></tr><tr><td><a href="/method/help.editUserInfo/">help.editUserInfo</a></td><td>Internal use</td></tr></tbody></table>
