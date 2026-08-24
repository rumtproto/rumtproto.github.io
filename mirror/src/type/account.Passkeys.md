---
title: "Account.Passkeys"
original: "https://core.telegram.org/type/account.Passkeys"
section: ref
description: "List of passkeys » associated to the current account."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Account.Passkeys","url":"/type/account.Passkeys/"}]
layout: layout.njk
---

# Account.Passkeys

List of [passkeys »](/api/passkeys/#list-passkeys) associated to the current account.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.passkeys/">account.passkeys</a>#f8e0aa1c passkeys:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Passkey/">Passkey</a>&gt; = <a href="/type/account.Passkeys/" class="current_page_link">account.Passkeys</a>;

---functions---

<a href="/method/account.getPasskeys/">account.getPasskeys</a>#ea1f0c52 = <a href="/type/account.Passkeys/" class="current_page_link">account.Passkeys</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.passkeys/">account.passkeys</a></td><td>List of <a href="/api/passkeys/#list-passkeys">passkeys »</a> associated to the current account.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getPasskeys/">account.getPasskeys</a></td><td>List the passkeys associated to the current account that can be used to log in, see <a href="/api/passkeys/#list-passkeys">here »</a> for more info on passkeys.</td></tr></tbody></table>

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
