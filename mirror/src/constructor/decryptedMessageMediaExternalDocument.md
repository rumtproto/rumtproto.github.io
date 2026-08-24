---
title: "decryptedMessageMediaExternalDocument"
original: "https://core.telegram.org/constructor/decryptedMessageMediaExternalDocument"
section: ref
description: "Non-e2e documented forwarded from non-secret chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageMediaExternalDocument","url":"/constructor/decryptedMessageMediaExternalDocument/"}]
layout: layout.njk
---

# decryptedMessageMediaExternalDocument

Non-e2e documented forwarded from non-secret chat

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===23===
<a href="/constructor/decryptedMessageMediaExternalDocument/" class="current_page_link">decryptedMessageMediaExternalDocument</a>#fa95b0dd id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> size:<a href="/type/int/">int</a> thumb:<a href="/type/PhotoSize/">PhotoSize</a> dc_id:<a href="/type/int/">int</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Document ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>access hash</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Mime type</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Size</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/type/PhotoSize/">PhotoSize</a></td><td>Thumbnail</td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>DC ID</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt;</td><td>Attributes for media types</td></tr></tbody></table>

### Type

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
