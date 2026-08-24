---
title: "InputEncryptedFile"
original: "https://core.telegram.org/type/InputEncryptedFile"
section: ref
description: "Object sets encrypted file for attachment"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputEncryptedFile","url":"/type/InputEncryptedFile/"}]
layout: layout.njk
---

# InputEncryptedFile

Object sets encrypted file for attachment

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputEncryptedFileEmpty/">inputEncryptedFileEmpty</a>#1837c364 = <a href="/type/InputEncryptedFile/" class="current_page_link">InputEncryptedFile</a>;
<a href="/constructor/inputEncryptedFileUploaded/">inputEncryptedFileUploaded</a>#64bd0306 id:<a href="/type/long/">long</a> parts:<a href="/type/int/">int</a> md5_checksum:<a href="/type/string/">string</a> key_fingerprint:<a href="/type/int/">int</a> = <a href="/type/InputEncryptedFile/" class="current_page_link">InputEncryptedFile</a>;
<a href="/constructor/inputEncryptedFile/">inputEncryptedFile</a>#5a17b5e5 id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputEncryptedFile/" class="current_page_link">InputEncryptedFile</a>;
<a href="/constructor/inputEncryptedFileBigUploaded/">inputEncryptedFileBigUploaded</a>#2dc173c8 id:<a href="/type/long/">long</a> parts:<a href="/type/int/">int</a> key_fingerprint:<a href="/type/int/">int</a> = <a href="/type/InputEncryptedFile/" class="current_page_link">InputEncryptedFile</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputEncryptedFileEmpty/">inputEncryptedFileEmpty</a></td><td>Empty constructor.</td></tr><tr><td><a href="/constructor/inputEncryptedFileUploaded/">inputEncryptedFileUploaded</a></td><td>Sets new encrypted file saved by parts using upload.saveFilePart method.</td></tr><tr><td><a href="/constructor/inputEncryptedFile/">inputEncryptedFile</a></td><td>Sets forwarded encrypted file for attachment.</td></tr><tr><td><a href="/constructor/inputEncryptedFileBigUploaded/">inputEncryptedFileBigUploaded</a></td><td>Assigns a new big encrypted file (over 10 MB in size), saved in parts using the method <a href="/method/upload.saveBigFilePart/">upload.saveBigFilePart</a>.</td></tr></tbody></table>
