---
title: "decryptedMessageMediaPhoto"
original: "https://core.telegram.org/constructor/decryptedMessageMediaPhoto"
section: ref
description: "Photo attached to an encrypted message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageMediaPhoto","url":"/constructor/decryptedMessageMediaPhoto/"}]
layout: layout.njk
---

# decryptedMessageMediaPhoto

Photo attached to an encrypted message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===8===
<a href="/constructor/decryptedMessageMediaPhoto/" class="current_page_link">decryptedMessageMediaPhoto</a>#32798a8c thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;

===45===
<a href="/constructor/decryptedMessageMediaPhoto/" class="current_page_link">decryptedMessageMediaPhoto</a>#f1fa8d78 thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> caption:<a href="/type/string/">string</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Content of thumbnail file (JPEGfile, quality 55, set in a square 90x90)</td></tr><tr><td><strong>thumb_w</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Thumbnail width</td></tr><tr><td><strong>thumb_h</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Thumbnail height</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Photo width</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Photo height</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Size of the photo in bytes</td></tr><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Key to decrypt an attached file with a full version</td></tr><tr><td><strong>iv</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Initialization vector</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Caption</td></tr></tbody></table>

### Type

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
