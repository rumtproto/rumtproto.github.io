---
title: "inputEncryptedFile"
original: "https://core.telegram.org/constructor/inputEncryptedFile"
section: ref
description: "Sets forwarded encrypted file for attachment."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputEncryptedFile","url":"/constructor/inputEncryptedFile/"}]
layout: layout.njk
---

# inputEncryptedFile

Sets forwarded encrypted file for attachment.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputEncryptedFile/" class="current_page_link">inputEncryptedFile</a>#5a17b5e5 id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputEncryptedFile/">InputEncryptedFile</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>File ID, value of <strong>id</strong> parameter from <a href="/constructor/encryptedFile/">encryptedFile</a></td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Checking sum, value of <strong>access_hash</strong> parameter from <a href="/constructor/encryptedFile/">encryptedFile</a></td></tr></tbody></table>

### Type

[InputEncryptedFile](/type/InputEncryptedFile/)

### Related pages

#### [encryptedFile](/constructor/encryptedFile/)

Encrypted file.
