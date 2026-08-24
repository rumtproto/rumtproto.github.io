---
title: "UserProfilePhoto"
original: "https://core.telegram.org/type/UserProfilePhoto"
section: ref
description: "Object contains info on the user's profile photo."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"UserProfilePhoto","url":"/type/UserProfilePhoto/"}]
layout: layout.njk
---

# UserProfilePhoto

Object contains info on the user's profile photo.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/userProfilePhotoEmpty/">userProfilePhotoEmpty</a>#4f11bae1 = <a href="/type/UserProfilePhoto/" class="current_page_link">UserProfilePhoto</a>;
<a href="/constructor/userProfilePhoto/">userProfilePhoto</a>#82d1f706 flags:<a href="/type/%23/">#</a> has_video:flags.0?true personal:flags.2?true photo_id:<a href="/type/long/">long</a> stripped_thumb:flags.1?<a href="/type/bytes/">bytes</a> dc_id:<a href="/type/int/">int</a> = <a href="/type/UserProfilePhoto/" class="current_page_link">UserProfilePhoto</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/userProfilePhotoEmpty/">userProfilePhotoEmpty</a></td><td>Profile photo has not been set, or was hidden.</td></tr><tr><td><a href="/constructor/userProfilePhoto/">userProfilePhoto</a></td><td>User profile photo.</td></tr></tbody></table>
