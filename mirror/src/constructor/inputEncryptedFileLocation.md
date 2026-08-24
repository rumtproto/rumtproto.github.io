---
title: "inputEncryptedFileLocation"
original: "https://core.telegram.org/constructor/inputEncryptedFileLocation"
section: ref
description: "Location of encrypted secret chat file."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputEncryptedFileLocation","url":"/constructor/inputEncryptedFileLocation/"}]
layout: layout.njk
---

# inputEncryptedFileLocation

Location of encrypted secret chat file.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputEncryptedFileLocation/" class="current_page_link">inputEncryptedFileLocation</a>#f5235d55 id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputFileLocation/">InputFileLocation</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>File ID, <strong>id</strong> parameter value from <a href="/constructor/encryptedFile/">encryptedFile</a></td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Checksum, <strong>access_hash</strong> parameter value from <a href="/constructor/encryptedFile/">encryptedFile</a></td></tr></tbody></table>

### Type

[InputFileLocation](/type/InputFileLocation/)

### Related pages

#### [encryptedFile](/constructor/encryptedFile/)

Encrypted file.
