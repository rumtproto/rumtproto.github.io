---
title: "SecurePasswordKdfAlgo"
original: "https://core.telegram.org/type/SecurePasswordKdfAlgo"
section: ref
description: "KDF algorithm to use for computing telegram passport hash"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SecurePasswordKdfAlgo","url":"/type/SecurePasswordKdfAlgo/"}]
layout: layout.njk
---

# SecurePasswordKdfAlgo

KDF algorithm to use for computing telegram [passport](https://core.telegram.org/passport) hash

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/securePasswordKdfAlgoUnknown/">securePasswordKdfAlgoUnknown</a>#4a8537 = <a href="/type/SecurePasswordKdfAlgo/" class="current_page_link">SecurePasswordKdfAlgo</a>;
<a href="/constructor/securePasswordKdfAlgoPBKDF2HMACSHA512iter100000/">securePasswordKdfAlgoPBKDF2HMACSHA512iter100000</a>#bbf2dda0 salt:<a href="/type/bytes/">bytes</a> = <a href="/type/SecurePasswordKdfAlgo/" class="current_page_link">SecurePasswordKdfAlgo</a>;
<a href="/constructor/securePasswordKdfAlgoSHA512/">securePasswordKdfAlgoSHA512</a>#86471d92 salt:<a href="/type/bytes/">bytes</a> = <a href="/type/SecurePasswordKdfAlgo/" class="current_page_link">SecurePasswordKdfAlgo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/securePasswordKdfAlgoUnknown/">securePasswordKdfAlgoUnknown</a></td><td>Unknown KDF algo (most likely the client has to be updated)</td></tr><tr><td><a href="/constructor/securePasswordKdfAlgoPBKDF2HMACSHA512iter100000/">securePasswordKdfAlgoPBKDF2HMACSHA512iter100000</a></td><td>PBKDF2 with SHA512 and 100000 iterations KDF algo</td></tr><tr><td><a href="/constructor/securePasswordKdfAlgoSHA512/">securePasswordKdfAlgoSHA512</a></td><td>SHA512 KDF algo</td></tr></tbody></table>

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
