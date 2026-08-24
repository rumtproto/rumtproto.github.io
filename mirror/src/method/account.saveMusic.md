---
title: "account.saveMusic"
original: "https://core.telegram.org/method/account.saveMusic"
section: ref
description: "Adds or removes a song from the current user's profile see here » for more info on the music tab of the profile page."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.saveMusic","url":"/method/account.saveMusic/"}]
layout: layout.njk
---

# account.saveMusic

Adds or removes a song from the current user's profile [see here »](/api/profile/#music) for more info on the music tab of the profile page.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.saveMusic/" class="current_page_link">account.saveMusic</a>#b26732a9 flags:<a href="/type/%23/">#</a> unsave:flags.0?true id:<a href="/type/InputDocument/">InputDocument</a> after_id:flags.1?<a href="/type/InputDocument/">InputDocument</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, removes the song.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument/">InputDocument</a></td><td>The song to add or remove; can be an already added song when reordering songs with <code>after_id</code>. Adding an already added song will never re-add it, only move it to the top of the song list (or after the song passed in <code>after_id</code>).</td></tr><tr><td><strong>after_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputDocument/">InputDocument</a></td><td>If set, the song will be added after the passed song (must be already pinned on the profile).</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>DOCUMENT_INVALID</td><td>The specified document is invalid.</td></tr></tbody></table>

### Related pages

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
