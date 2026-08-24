---
title: "Passkey"
original: "https://core.telegram.org/type/Passkey"
section: ref
description: "Human-readable info about a passkey associated to an account, returned when creating a passkey » or listing passkeys »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Passkey","url":"/type/Passkey/"}]
layout: layout.njk
---

# Passkey

Human-readable info about a passkey associated to an account, returned when [creating a passkey »](/api/passkeys/#creating-a-passkey) or [listing passkeys »](/api/passkeys/#list-passkeys).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/passkey/">passkey</a>#98613ebf flags:<a href="/type/%23/">#</a> id:<a href="/type/string/">string</a> name:<a href="/type/string/">string</a> date:<a href="/type/int/">int</a> software_emoji_id:flags.0?<a href="/type/long/">long</a> last_usage_date:flags.1?<a href="/type/int/">int</a> = <a href="/type/Passkey/" class="current_page_link">Passkey</a>;

---functions---

<a href="/method/account.registerPasskey/">account.registerPasskey</a>#55b41fd6 credential:<a href="/type/InputPasskeyCredential/">InputPasskeyCredential</a> = <a href="/type/Passkey/" class="current_page_link">Passkey</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/passkey/">passkey</a></td><td>Human-readable info about a passkey associated to an account, returned when <a href="/api/passkeys/#creating-a-passkey">creating a passkey »</a> or <a href="/api/passkeys/#list-passkeys">listing passkeys »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.registerPasskey/">account.registerPasskey</a></td><td>Complete passkey registration for the current account, see <a href="/api/passkeys/#creating-a-passkey">here »</a> for more info on the full flow.</td></tr></tbody></table>

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
