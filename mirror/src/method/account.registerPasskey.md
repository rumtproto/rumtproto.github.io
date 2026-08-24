---
title: "account.registerPasskey"
original: "https://core.telegram.org/method/account.registerPasskey"
section: ref
description: "Complete passkey registration for the current account, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.registerPasskey","url":"/method/account.registerPasskey/"}]
layout: layout.njk
---

# account.registerPasskey

Complete passkey registration for the current account, see [here »](/api/passkeys/#creating-a-passkey) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/passkey/">passkey</a>#98613ebf flags:<a href="/type/%23/">#</a> id:<a href="/type/string/">string</a> name:<a href="/type/string/">string</a> date:<a href="/type/int/">int</a> software_emoji_id:flags.0?<a href="/type/long/">long</a> last_usage_date:flags.1?<a href="/type/int/">int</a> = <a href="/type/Passkey/">Passkey</a>;
---functions---
<a href="/method/account.registerPasskey/" class="current_page_link">account.registerPasskey</a>#55b41fd6 credential:<a href="/type/InputPasskeyCredential/">InputPasskeyCredential</a> = <a href="/type/Passkey/">Passkey</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>credential</strong></td><td style="text-align: center;"><a href="/type/InputPasskeyCredential/">InputPasskeyCredential</a></td><td>Registration result.</td></tr></tbody></table>

### Result

[Passkey](/type/Passkey/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CREDENTIAL_INVALID</td><td>The specified credential is invalid.</td></tr><tr><td>400</td><td>PASSKEY_ORIGIN_MISMATCH</td><td>Third-party clients currently don't support passkeys even when changing the origin.</td></tr></tbody></table>

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
