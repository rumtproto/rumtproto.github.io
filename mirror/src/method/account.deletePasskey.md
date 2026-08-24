---
title: "account.deletePasskey"
original: "https://core.telegram.org/method/account.deletePasskey"
section: ref
description: "Delete a passkey associated to the current account, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.deletePasskey","url":"/method/account.deletePasskey/"}]
layout: layout.njk
---

# account.deletePasskey

Delete a passkey associated to the current account, see [here »](/api/passkeys/#delete-passkeys) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.deletePasskey/" class="current_page_link">account.deletePasskey</a>#f5b5563f id:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Identifier of the passkey to delete, taken from <a href="/constructor/passkey/">passkey</a>.<code>id</code>, usually obtained using <a href="/method/account.getPasskeys/">account.getPasskeys</a>.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [passkey](/constructor/passkey/)

Human-readable info about a passkey associated to an account, returned when [creating a passkey »](/api/passkeys/#creating-a-passkey) or [listing passkeys »](/api/passkeys/#list-passkeys).

#### [account.getPasskeys](/method/account.getPasskeys/)

List the passkeys associated to the current account that can be used to log in, see [here »](/api/passkeys/#list-passkeys) for more info on passkeys.

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
