---
title: "users.setSecureValueErrors"
original: "https://core.telegram.org/method/users.setSecureValueErrors"
section: ref
description: "Notify the user that the sent passport data contains some errors The user will not be able to re-submit their Passport data to you until the errors are fixed (the contents of the…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"users.setSecureValueErrors","url":"/method/users.setSecureValueErrors/"}]
layout: layout.njk
---

# users.setSecureValueErrors

Notify the user that the sent [passport](/passport/) data contains some errors The user will not be able to re-submit their Passport data to you until the errors are fixed (the contents of the field for which you returned the error must change).

Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/users.setSecureValueErrors/" class="current_page_link">users.setSecureValueErrors</a>#90c894b5 id:<a href="/type/InputUser/">InputUser</a> errors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValueError/">SecureValueError</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user</td></tr><tr><td><strong>errors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValueError/">SecureValueError</a>&gt;</td><td>Errors</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>DATA_HASH_SIZE_INVALID</td><td>The size of the specified secureValueErrorData.data_hash is invalid.</td></tr><tr><td>400</td><td>HASH_SIZE_INVALID</td><td>The size of the specified secureValueError.hash is invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Passport Manual](/passport/)

Telegram Passport, a unified authorization method for services that require personal identification.
