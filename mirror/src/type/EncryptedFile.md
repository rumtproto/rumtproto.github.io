---
title: "EncryptedFile"
original: "https://core.telegram.org/type/EncryptedFile"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EncryptedFile","url":"/type/EncryptedFile/"}]
layout: layout.njk
---

# EncryptedFile

Seta an encrypted file.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/encryptedFileEmpty/">encryptedFileEmpty</a>#c21f497e = <a href="/type/EncryptedFile/" class="current_page_link">EncryptedFile</a>;
<a href="/constructor/encryptedFile/">encryptedFile</a>#a8008cd8 id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> size:<a href="/type/long/">long</a> dc_id:<a href="/type/int/">int</a> key_fingerprint:<a href="/type/int/">int</a> = <a href="/type/EncryptedFile/" class="current_page_link">EncryptedFile</a>;

---functions---

<a href="/method/messages.uploadEncryptedFile/">messages.uploadEncryptedFile</a>#5057c497 peer:<a href="/type/InputEncryptedChat/">InputEncryptedChat</a> file:<a href="/type/InputEncryptedFile/">InputEncryptedFile</a> = <a href="/type/EncryptedFile/" class="current_page_link">EncryptedFile</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/encryptedFileEmpty/">encryptedFileEmpty</a></td><td>Empty constructor, non-existing file.</td></tr><tr><td><a href="/constructor/encryptedFile/">encryptedFile</a></td><td>Encrypted file.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.uploadEncryptedFile/">messages.uploadEncryptedFile</a></td><td>Upload encrypted file and associate it to a secret chat (without actually sending it to the chat).</td></tr></tbody></table>
