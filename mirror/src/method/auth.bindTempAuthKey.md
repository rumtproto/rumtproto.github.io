---
title: "auth.bindTempAuthKey"
original: "https://core.telegram.org/method/auth.bindTempAuthKey"
section: ref
description: "Binds a temporary authorization key temp_auth_key_id to the permanent authorization key perm_auth_key_id."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.bindTempAuthKey","url":"/method/auth.bindTempAuthKey/"}]
layout: layout.njk
---

# auth.bindTempAuthKey

Binds a temporary authorization key `temp_auth_key_id` to the permanent authorization key `perm_auth_key_id`.

For more information, see [Perfect Forward Secrecy](/api/pfs/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/auth.bindTempAuthKey/" class="current_page_link">auth.bindTempAuthKey</a>#cdd42a05 perm_auth_key_id:<a href="/type/long/">long</a> nonce:<a href="/type/long/">long</a> expires_at:<a href="/type/int/">int</a> encrypted_message:<a href="/type/bytes/">bytes</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>perm_auth_key_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Permanent auth_key_id to bind to</td></tr><tr><td><strong>nonce</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random long from <a href="#binding-message-contents">Binding message contents</a></td></tr><tr><td><strong>expires_at</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Unix timestamp to invalidate temporary key, see <a href="#binding-message-contents">Binding message contents</a></td></tr><tr><td><strong>encrypted_message</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>See <a href="#generating-encrypted-message">Generating encrypted_message</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Generating encrypted\_message

The client begins by creating a special binding message:

### Binding message contents

```
bind_auth_key_inner#75a3f765 nonce:long temp_auth_key_id:long perm_auth_key_id:long temp_session_id:long expires_at:int = BindAuthKeyInner;
```

<table class="table"><thead><tr><th scope="col"></th><th scope="col"></th><th scope="col"></th></tr></thead><tbody><tr><td><strong>nonce</strong></td><td><a href="/type/long/">long</a></td><td>Random long</td></tr><tr><td><strong>temp_auth_key_id</strong></td><td><a href="/type/long/">long</a></td><td>Temporary auth_key_id</td></tr><tr><td><strong>perm_auth_key_id</strong></td><td><a href="/type/long/">long</a></td><td>Permanent auth_key_id to bind to</td></tr><tr><td><strong>temp_session_id</strong></td><td><a href="/type/long/">long</a></td><td>Session id, which will be used to invoke <strong>auth.bindTempAuthKey</strong> method</td></tr><tr><td><strong>expires_at</strong></td><td><a href="/type/int/">int</a></td><td>Unix timestamp to invalidate temporary key</td></tr></tbody></table>

### Encrypting the binding message

This binding message is encrypted in [the usual way, but with MTProto v1](/mtproto/description/) using the `perm_auth_key`. In other words, one has to prepend `random:int128` (it replaces the customary `session_id:long` and `salt:long` that are irrelevant in this case), then append the same `msg_id` that will be used for the request, a `seqno` equal to zero, and the correct `msg_len` (40 bytes in this case); after that, one computes the `msg_key:int128` as SHA1 of the resulting string, appends padding necessary for a 16-byte alignment, encrypts the resulting string using the key derived from `perm_auth_key` and `msg_key`, and prepends `perm_auth_key_id` and `msg_key` to the encrypted data as usual.

### Binding

Once **encrypted\_message** is ready, an **auth.bindTempAuthKey** request is sent to the server using `temp_auth_key` and `temp_session_id`. Don't forget to [rewrite client info](/api/invoking/#saving-client-info) using [initConnection](/method/initConnection/) when the binding is completed.

### Both users and bots can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ENCRYPTED_MESSAGE_INVALID</td><td>Encrypted message invalid.</td></tr><tr><td>400</td><td>EXPIRES_AT_INVALID</td><td>The specified <code>expires_at</code> timestamp is invalid.</td></tr><tr><td>400</td><td>TEMP_AUTH_KEY_ALREADY_BOUND</td><td>The passed temporary key is already bound to another <strong>perm_auth_key_id</strong>.</td></tr><tr><td>400</td><td>TEMP_AUTH_KEY_EMPTY</td><td>No temporary auth key provided.</td></tr></tbody></table>

### Related pages

#### [Perfect Forward Secrecy](/api/pfs/)

Binding temporary authorization key to permanent ones.

#### [long](/type/long/)

A basic bare type, elements of which correspond to two-element sequences, representing 64-bit signed numbers (little-endian).

#### [int](/type/int/)

A basic bare type, the values of which correspond to single-element sequences, i.e. numbers from -2^31 to 2^31-1 which in this case represent themselves.

#### ﻿[Mobile Protocol: Detailed Description](/mtproto/description/)

A description of MTProto 2.0, used by major Telegram clients as of version 4.6.

#### [Calling API Methods](/api/invoking/)

Additional options for calling methods.

#### [initConnection](/method/initConnection/)

Initialize connection
