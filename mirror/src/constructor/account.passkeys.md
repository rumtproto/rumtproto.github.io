---
title: "account.passkeys"
original: "https://core.telegram.org/constructor/account.passkeys"
section: ref
description: "List of passkeys » associated to the current account."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.passkeys","url":"/constructor/account.passkeys/"}]
layout: layout.njk
---

# account.passkeys

List of [passkeys »](/api/passkeys/#list-passkeys) associated to the current account.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.passkeys/" class="current_page_link">account.passkeys</a>#f8e0aa1c passkeys:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Passkey/">Passkey</a>&gt; = <a href="/type/account.Passkeys/">account.Passkeys</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>passkeys</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Passkey/">Passkey</a>&gt;</td><td>List of passkeys that can be used to log into the current account</td></tr></tbody></table>

### Type

[account.Passkeys](/type/account.Passkeys/)

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
