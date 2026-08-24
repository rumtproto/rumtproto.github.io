---
title: "account.registerDevice"
original: "https://core.telegram.org/method/account.registerDevice"
section: ref
description: "Register device to receive PUSH notifications"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.registerDevice","url":"/method/account.registerDevice/"}]
layout: layout.njk
---

# account.registerDevice

Register device to receive [PUSH notifications](/api/push-updates/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.registerDevice/" class="current_page_link">account.registerDevice</a>#ec86017a flags:<a href="/type/%23/">#</a> no_muted:flags.0?true token_type:<a href="/type/int/">int</a> token:<a href="/type/string/">string</a> app_sandbox:<a href="/type/Bool/">Bool</a> secret:<a href="/type/bytes/">bytes</a> other_uids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>no_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Avoid receiving (silent and invisible background) notifications. Useful to save battery.</td></tr><tr><td><strong>token_type</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Device token type, see <a href="/api/push-updates/#subscribing-to-notifications">PUSH updates</a> for the possible values.</td></tr><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Device token, see <a href="/api/push-updates/#subscribing-to-notifications">PUSH updates</a> for the possible values.</td></tr><tr><td><strong>app_sandbox</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>If <a href="/constructor/boolTrue/">(boolTrue)</a> is transmitted, a sandbox-certificate will be used during transmission.</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>For FCM and APNS VoIP, optional encryption key used to encrypt push notifications</td></tr><tr><td><strong>other_uids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>List of user identifiers of other users currently using the client</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>TOKEN_EMPTY</td><td>The specified token is empty.</td></tr><tr><td>400</td><td>TOKEN_INVALID</td><td>The provided token is invalid.</td></tr><tr><td>400</td><td>TOKEN_TYPE_INVALID</td><td>The specified token type is invalid.</td></tr><tr><td>400</td><td>WEBPUSH_AUTH_INVALID</td><td>The specified web push authentication secret is invalid.</td></tr><tr><td>400</td><td>WEBPUSH_KEY_INVALID</td><td>The specified web push elliptic curve Diffie-Hellman public key is invalid.</td></tr><tr><td>400</td><td>WEBPUSH_TOKEN_INVALID</td><td>The specified web push token is invalid.</td></tr></tbody></table>

### Related pages

#### [Handling PUSH-notifications](/api/push-updates/)

How to subscribe to and handle PUSH notifications

#### [boolTrue](/constructor/boolTrue/)

The constructor can be interpreted as a **boolean**`true` value.
