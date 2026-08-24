---
title: "Auth.PasskeyLoginOptions"
original: "https://core.telegram.org/type/auth.PasskeyLoginOptions"
section: ref
description: "Passkey login options, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Auth.PasskeyLoginOptions","url":"/type/auth.PasskeyLoginOptions/"}]
layout: layout.njk
---

# Auth.PasskeyLoginOptions

Passkey login options, see [here »](/api/passkeys/#logging-in-with-a-passkey) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.passkeyLoginOptions/">auth.passkeyLoginOptions</a>#e2037789 options:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/auth.PasskeyLoginOptions/" class="current_page_link">auth.PasskeyLoginOptions</a>;

---functions---

<a href="/method/auth.initPasskeyLogin/">auth.initPasskeyLogin</a>#518ad0b7 api_id:<a href="/type/int/">int</a> api_hash:<a href="/type/string/">string</a> = <a href="/type/auth.PasskeyLoginOptions/" class="current_page_link">auth.PasskeyLoginOptions</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/auth.passkeyLoginOptions/">auth.passkeyLoginOptions</a></td><td>Passkey login options, see <a href="/api/passkeys/#logging-in-with-a-passkey">here »</a> for more info on the full flow.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/auth.initPasskeyLogin/">auth.initPasskeyLogin</a></td><td>Initialize login with a passkey over an unauthenticated connection, see <a href="/api/passkeys/#logging-in-with-a-passkey">here »</a> for more info.</td></tr></tbody></table>

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
