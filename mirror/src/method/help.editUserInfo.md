---
title: "help.editUserInfo"
original: "https://core.telegram.org/method/help.editUserInfo"
section: ref
description: "How to create styled text with message entities"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.editUserInfo","url":"/method/help.editUserInfo/"}]
layout: layout.njk
---

# help.editUserInfo

Internal use

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.userInfoEmpty/">help.userInfoEmpty</a>#f3ae2eed = <a href="/type/help.UserInfo/">help.UserInfo</a>;
<a href="/constructor/help.userInfo/">help.userInfo</a>#1eb3758 message:<a href="/type/string/">string</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; author:<a href="/type/string/">string</a> date:<a href="/type/int/">int</a> = <a href="/type/help.UserInfo/">help.UserInfo</a>;
---functions---
<a href="/method/help.editUserInfo/" class="current_page_link">help.editUserInfo</a>#66b91b70 user_id:<a href="/type/InputUser/">InputUser</a> message:<a href="/type/string/">string</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/help.UserInfo/">help.UserInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>User</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Message</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr></tbody></table>

### Result

[help.UserInfo](/type/help.UserInfo/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>A specified <a href="/api/entities/#entity-length">entity offset or length</a> is invalid, see <a href="/api/entities/#entity-length">here&nbsp;»</a> for info on how to properly compute the entity offset/length.</td></tr><tr><td>403</td><td>USER_INVALID</td><td>Invalid user provided.</td></tr></tbody></table>

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
