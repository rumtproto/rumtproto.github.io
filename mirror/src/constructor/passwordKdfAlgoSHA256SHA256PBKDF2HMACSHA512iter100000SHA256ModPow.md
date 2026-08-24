---
title: "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow"
original: "https://core.telegram.org/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow"
section: ref
description: "This key derivation algorithm defines that SRP 2FA login must be used"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"passwordKdfAlgoSHA256SHA256PBKDF2HMACSH…","url":"/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow/"}]
layout: layout.njk
---

# passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow

This key derivation algorithm defines that [SRP 2FA login](/api/srp/) must be used

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow/" class="current_page_link">passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow</a>#3a912d4a salt1:<a href="/type/bytes/">bytes</a> salt2:<a href="/type/bytes/">bytes</a> g:<a href="/type/int/">int</a> p:<a href="/type/bytes/">bytes</a> = <a href="/type/PasswordKdfAlgo/">PasswordKdfAlgo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>salt1</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>One of two salts used by the derivation function (see <a href="/api/srp/">SRP 2FA login</a>)</td></tr><tr><td><strong>salt2</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>One of two salts used by the derivation function (see <a href="/api/srp/">SRP 2FA login</a>)</td></tr><tr><td><strong>g</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Base (see <a href="/api/srp/">SRP 2FA login</a>)</td></tr><tr><td><strong>p</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>2048-bit modulus (see <a href="/api/srp/">SRP 2FA login</a>)</td></tr></tbody></table>

### Type

[PasswordKdfAlgo](/type/PasswordKdfAlgo/)

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
