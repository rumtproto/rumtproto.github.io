---
title: "inputEncryptedFileUploaded"
original: "https://core.telegram.org/constructor/inputEncryptedFileUploaded"
section: ref
description: "Sets new encrypted file saved by parts using upload.saveFilePart method."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputEncryptedFileUploaded","url":"/constructor/inputEncryptedFileUploaded/"}]
layout: layout.njk
---

# inputEncryptedFileUploaded

Sets new encrypted file saved by parts using upload.saveFilePart method.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputEncryptedFileUploaded/" class="current_page_link">inputEncryptedFileUploaded</a>#64bd0306 id:<a href="/type/long/">long</a> parts:<a href="/type/int/">int</a> md5_checksum:<a href="/type/string/">string</a> key_fingerprint:<a href="/type/int/">int</a> = <a href="/type/InputEncryptedFile/">InputEncryptedFile</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random file ID created by client</td></tr><tr><td><strong>parts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of saved parts</td></tr><tr><td><strong>md5_checksum</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>In case <a href="https://en.wikipedia.org/wiki/MD5">md5-HASH</a> of the (already encrypted) file was transmitted, file content will be checked prior to use</td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>32-bit fingerprint of the key used to encrypt a file</td></tr></tbody></table>

### Type

[InputEncryptedFile](/type/InputEncryptedFile/)
