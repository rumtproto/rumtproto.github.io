---
title: "account.getPasskeys"
original: "https://core.telegram.org/method/account.getPasskeys"
section: ref
description: "List the passkeys associated to the current account that can be used to log in, see here » for more info on passkeys."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getPasskeys","url":"/method/account.getPasskeys/"}]
layout: layout.njk
---

# account.getPasskeys

List the passkeys associated to the current account that can be used to log in, see [here »](/api/passkeys/#list-passkeys) for more info on passkeys.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.passkeys/">account.passkeys</a>#f8e0aa1c passkeys:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Passkey/">Passkey</a>&gt; = <a href="/type/account.Passkeys/">account.Passkeys</a>;
---functions---
<a href="/method/account.getPasskeys/" class="current_page_link">account.getPasskeys</a>#ea1f0c52 = <a href="/type/account.Passkeys/">account.Passkeys</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[account.Passkeys](/type/account.Passkeys/)

### Only users can use this method

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
