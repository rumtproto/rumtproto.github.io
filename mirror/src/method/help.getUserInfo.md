---
title: "help.getUserInfo"
original: "https://core.telegram.org/method/help.getUserInfo"
section: ref
description: "Can only be used by TSF members to obtain internal information."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getUserInfo","url":"/method/help.getUserInfo/"}]
layout: layout.njk
---

# help.getUserInfo

Can only be used by TSF members to obtain internal information.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.userInfoEmpty/">help.userInfoEmpty</a>#f3ae2eed = <a href="/type/help.UserInfo/">help.UserInfo</a>;
<a href="/constructor/help.userInfo/">help.userInfo</a>#1eb3758 message:<a href="/type/string/">string</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; author:<a href="/type/string/">string</a> date:<a href="/type/int/">int</a> = <a href="/type/help.UserInfo/">help.UserInfo</a>;
---functions---
<a href="/method/help.getUserInfo/" class="current_page_link">help.getUserInfo</a>#38a08d3 user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/help.UserInfo/">help.UserInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>User ID</td></tr></tbody></table>

### Result

[help.UserInfo](/type/help.UserInfo/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>USER_INVALID</td><td>Invalid user provided.</td></tr></tbody></table>
