---
title: "photos.Photo"
original: "https://core.telegram.org/type/photos.Photo"
section: ref
description: "Photo with auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"photos.Photo","url":"/type/photos.Photo/"}]
layout: layout.njk
---

# photos.Photo

Photo with auxiliary data.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/photos.photo/">photos.photo</a>#20212ca8 photo:<a href="/type/Photo/">Photo</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/photos.Photo/" class="current_page_link">photos.Photo</a>;

---functions---

<a href="/method/photos.updateProfilePhoto/">photos.updateProfilePhoto</a>#9e82039 flags:<a href="/type/%23/">#</a> fallback:flags.0?true bot:flags.1?<a href="/type/InputUser/">InputUser</a> id:<a href="/type/InputPhoto/">InputPhoto</a> = <a href="/type/photos.Photo/" class="current_page_link">photos.Photo</a>;
<a href="/method/photos.uploadProfilePhoto/">photos.uploadProfilePhoto</a>#388a3b5 flags:<a href="/type/%23/">#</a> fallback:flags.3?true bot:flags.5?<a href="/type/InputUser/">InputUser</a> file:flags.0?<a href="/type/InputFile/">InputFile</a> video:flags.1?<a href="/type/InputFile/">InputFile</a> video_start_ts:flags.2?<a href="/type/double/">double</a> video_emoji_markup:flags.4?<a href="/type/VideoSize/">VideoSize</a> = <a href="/type/photos.Photo/" class="current_page_link">photos.Photo</a>;
<a href="/method/photos.uploadContactProfilePhoto/">photos.uploadContactProfilePhoto</a>#e14c4a71 flags:<a href="/type/%23/">#</a> suggest:flags.3?true save:flags.4?true user_id:<a href="/type/InputUser/">InputUser</a> file:flags.0?<a href="/type/InputFile/">InputFile</a> video:flags.1?<a href="/type/InputFile/">InputFile</a> video_start_ts:flags.2?<a href="/type/double/">double</a> video_emoji_markup:flags.5?<a href="/type/VideoSize/">VideoSize</a> = <a href="/type/photos.Photo/" class="current_page_link">photos.Photo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/photos.photo/">photos.photo</a></td><td>Photo with auxiliary data.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/photos.updateProfilePhoto/">photos.updateProfilePhoto</a></td><td>Installs a previously uploaded photo as a profile photo.</td></tr><tr><td><a href="/method/photos.uploadProfilePhoto/">photos.uploadProfilePhoto</a></td><td>Updates current user profile photo.<br><br>The <code>file</code>, <code>video</code> and <code>video_emoji_markup</code> flags are mutually exclusive.</td></tr><tr><td><a href="/method/photos.uploadContactProfilePhoto/">photos.uploadContactProfilePhoto</a></td><td>Upload a custom profile picture for a contact, or suggest a new profile picture to a contact.<br><br>The <code>file</code>, <code>video</code> and <code>video_emoji_markup</code> flags are mutually exclusive.</td></tr></tbody></table>
