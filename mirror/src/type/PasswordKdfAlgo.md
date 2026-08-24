---
title: "PasswordKdfAlgo"
original: "https://core.telegram.org/type/PasswordKdfAlgo"
section: ref
description: "Key derivation function to use when generating the password hash for SRP two-factor authorization"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PasswordKdfAlgo","url":"/type/PasswordKdfAlgo/"}]
layout: layout.njk
---

# PasswordKdfAlgo

Key derivation function to use when generating the [password hash for SRP two-factor authorization](/api/srp/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/passwordKdfAlgoUnknown/">passwordKdfAlgoUnknown</a>#d45ab096 = <a href="/type/PasswordKdfAlgo/" class="current_page_link">PasswordKdfAlgo</a>;
<a href="/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow/">passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow</a>#3a912d4a salt1:<a href="/type/bytes/">bytes</a> salt2:<a href="/type/bytes/">bytes</a> g:<a href="/type/int/">int</a> p:<a href="/type/bytes/">bytes</a> = <a href="/type/PasswordKdfAlgo/" class="current_page_link">PasswordKdfAlgo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/passwordKdfAlgoUnknown/">passwordKdfAlgoUnknown</a></td><td>Unknown KDF (most likely, the client is outdated and does not support the specified KDF algorithm)</td></tr><tr><td><a href="/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow/">passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow</a></td><td>This key derivation algorithm defines that <a href="/api/srp/">SRP 2FA login</a> must be used</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
