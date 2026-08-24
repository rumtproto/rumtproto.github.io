---
title: "account.PasswordSettings"
original: "https://core.telegram.org/type/account.PasswordSettings"
section: ref
description: "Private info associated to the password info (recovery email, telegram passport info & so on)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.PasswordSettings","url":"/type/account.PasswordSettings/"}]
layout: layout.njk
---

# account.PasswordSettings

Private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.passwordSettings/">account.passwordSettings</a>#9a5c33e5 flags:<a href="/type/%23/">#</a> email:flags.0?<a href="/type/string/">string</a> secure_settings:flags.1?<a href="/type/SecureSecretSettings/">SecureSecretSettings</a> = <a href="/type/account.PasswordSettings/" class="current_page_link">account.PasswordSettings</a>;

---functions---

<a href="/method/account.getPasswordSettings/">account.getPasswordSettings</a>#9cd4eaf9 password:<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a> = <a href="/type/account.PasswordSettings/" class="current_page_link">account.PasswordSettings</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.passwordSettings/">account.passwordSettings</a></td><td>Private info associated to the password info (recovery email, telegram <a href="https://core.telegram.org/passport">passport</a> info &amp; so on)</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getPasswordSettings/">account.getPasswordSettings</a></td><td>Get private info associated to the password info (recovery email, telegram <a href="https://core.telegram.org/passport">passport</a> info &amp; so on)</td></tr></tbody></table>

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
