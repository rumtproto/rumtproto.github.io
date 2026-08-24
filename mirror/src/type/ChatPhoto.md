---
title: "ChatPhoto"
original: "https://core.telegram.org/type/ChatPhoto"
section: ref
description: "Object defines a group profile photo."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChatPhoto","url":"/type/ChatPhoto/"}]
layout: layout.njk
---

# ChatPhoto

Object defines a group profile photo.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatPhotoEmpty/">chatPhotoEmpty</a>#37c1011c = <a href="/type/ChatPhoto/" class="current_page_link">ChatPhoto</a>;
<a href="/constructor/chatPhoto/">chatPhoto</a>#1c6e1c11 flags:<a href="/type/%23/">#</a> has_video:flags.0?true photo_id:<a href="/type/long/">long</a> stripped_thumb:flags.1?<a href="/type/bytes/">bytes</a> dc_id:<a href="/type/int/">int</a> = <a href="/type/ChatPhoto/" class="current_page_link">ChatPhoto</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatPhotoEmpty/">chatPhotoEmpty</a></td><td>Group photo is not set.</td></tr><tr><td><a href="/constructor/chatPhoto/">chatPhoto</a></td><td>Group profile photo.</td></tr></tbody></table>
