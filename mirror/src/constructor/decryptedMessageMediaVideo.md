---
title: "decryptedMessageMediaVideo"
original: "https://core.telegram.org/constructor/decryptedMessageMediaVideo"
section: ref
description: "Video attached to an encrypted message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageMediaVideo","url":"/constructor/decryptedMessageMediaVideo/"}]
layout: layout.njk
---

# decryptedMessageMediaVideo

Video attached to an encrypted message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===8===
<a href="/constructor/decryptedMessageMediaVideo/" class="current_page_link">decryptedMessageMediaVideo</a>#4cee6ef3 thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> duration:<a href="/type/int/">int</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;

===17===
<a href="/constructor/decryptedMessageMediaVideo/" class="current_page_link">decryptedMessageMediaVideo</a>#524a415d thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> duration:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;

===45===
<a href="/constructor/decryptedMessageMediaVideo/" class="current_page_link">decryptedMessageMediaVideo</a>#970c8c0e thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> duration:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> caption:<a href="/type/string/">string</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Content of thumbnail file (JPEG file, quality 55, set in a square 90x90)</td></tr><tr><td><strong>thumb_w</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Thumbnail width</td></tr><tr><td><strong>thumb_h</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Thumbnail height</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration of video in seconds</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Image width</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Image height</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>File size</td></tr><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Key to decrypt the attached video file</td></tr><tr><td><strong>iv</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Initialization vector</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>MIME-type of the video file<br>Parameter added in Layer 17.</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Caption</td></tr></tbody></table>

### Type

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
