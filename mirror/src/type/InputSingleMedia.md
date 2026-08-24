---
title: "InputSingleMedia"
original: "https://core.telegram.org/type/InputSingleMedia"
section: ref
description: "A single media in an album or grouped media sent with messages.sendMultiMedia."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputSingleMedia","url":"/type/InputSingleMedia/"}]
layout: layout.njk
---

# InputSingleMedia

A single media in an [album or grouped media](/api/files/#albums-grouped-media) sent with [messages.sendMultiMedia](/method/messages.sendMultiMedia/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputSingleMedia/">inputSingleMedia</a>#1cc6e91f flags:<a href="/type/%23/">#</a> media:<a href="/type/InputMedia/">InputMedia</a> random_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> entities:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/InputSingleMedia/" class="current_page_link">InputSingleMedia</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputSingleMedia/">inputSingleMedia</a></td><td>A single media in an <a href="/api/files/#albums-grouped-media">album or grouped media</a> sent with <a href="/method/messages.sendMultiMedia/">messages.sendMultiMedia</a>.</td></tr></tbody></table>

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [messages.sendMultiMedia](/method/messages.sendMultiMedia/)

Send an [album or grouped media](/api/files/#albums-grouped-media)
