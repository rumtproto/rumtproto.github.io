---
title: "InputChatPhoto"
original: "https://core.telegram.org/type/InputChatPhoto"
section: ref
description: "Defines a new group profile photo."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputChatPhoto","url":"/type/InputChatPhoto/"}]
layout: layout.njk
---

# InputChatPhoto

Defines a new group profile photo.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputChatPhotoEmpty/">inputChatPhotoEmpty</a>#1ca48f57 = <a href="/type/InputChatPhoto/" class="current_page_link">InputChatPhoto</a>;
<a href="/constructor/inputChatUploadedPhoto/">inputChatUploadedPhoto</a>#bdcdaec0 flags:<a href="/type/%23/">#</a> file:flags.0?<a href="/type/InputFile/">InputFile</a> video:flags.1?<a href="/type/InputFile/">InputFile</a> video_start_ts:flags.2?<a href="/type/double/">double</a> video_emoji_markup:flags.3?<a href="/type/VideoSize/">VideoSize</a> = <a href="/type/InputChatPhoto/" class="current_page_link">InputChatPhoto</a>;
<a href="/constructor/inputChatPhoto/">inputChatPhoto</a>#8953ad37 id:<a href="/type/InputPhoto/">InputPhoto</a> = <a href="/type/InputChatPhoto/" class="current_page_link">InputChatPhoto</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputChatPhotoEmpty/">inputChatPhotoEmpty</a></td><td>Empty constructor, remove group photo.</td></tr><tr><td><a href="/constructor/inputChatUploadedPhoto/">inputChatUploadedPhoto</a></td><td>New photo to be set as group profile photo.<br><br>The <code>file</code>, <code>video</code> and <code>video_emoji_markup</code> flags are mutually exclusive.</td></tr><tr><td><a href="/constructor/inputChatPhoto/">inputChatPhoto</a></td><td>Existing photo to be set as a chat profile photo.</td></tr></tbody></table>
