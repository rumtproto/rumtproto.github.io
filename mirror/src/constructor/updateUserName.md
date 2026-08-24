---
title: "updateUserName"
original: "https://core.telegram.org/constructor/updateUserName"
section: ref
description: "Changes the user's first name, last name and username."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateUserName","url":"/constructor/updateUserName/"}]
layout: layout.njk
---

# updateUserName

Changes the user's first name, last name and username.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateUserName/" class="current_page_link">updateUserName</a>#a7848924 user_id:<a href="/type/long/">long</a> first_name:<a href="/type/string/">string</a> last_name:<a href="/type/string/">string</a> usernames:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Username/">Username</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User identifier</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>New first name. Corresponds to the new value of <strong>real_first_name</strong> field of the <a href="/constructor/userFull/">userFull</a> constructor.</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>New last name. Corresponds to the new value of <strong>real_last_name</strong> field of the <a href="/constructor/userFull/">userFull</a> constructor.</td></tr><tr><td><strong>usernames</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Username/">Username</a>&gt;</td><td>Usernames.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [userFull](/constructor/userFull/)

Extended user info

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).
