---
title: "account.authorizationForm"
original: "https://core.telegram.org/constructor/account.authorizationForm"
section: ref
description: "Telegram Passport authorization form"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.authorizationForm","url":"/constructor/account.authorizationForm/"}]
layout: layout.njk
---

# account.authorizationForm

[Telegram Passport](https://core.telegram.org/passport) authorization form

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.authorizationForm/" class="current_page_link">account.authorizationForm</a>#ad2e1cd8 flags:<a href="/type/%23/">#</a> required_types:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureRequiredType/">SecureRequiredType</a>&gt; values:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValue/">SecureValue</a>&gt; errors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValueError/">SecureValueError</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; privacy_policy_url:flags.0?<a href="/type/string/">string</a> = <a href="/type/account.AuthorizationForm/">account.AuthorizationForm</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>required_types</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureRequiredType/">SecureRequiredType</a>&gt;</td><td>Required <a href="https://core.telegram.org/passport">Telegram Passport</a> documents</td></tr><tr><td><strong>values</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValue/">SecureValue</a>&gt;</td><td>Already submitted <a href="https://core.telegram.org/passport">Telegram Passport</a> documents</td></tr><tr><td><strong>errors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValueError/">SecureValueError</a>&gt;</td><td><a href="https://core.telegram.org/passport">Telegram Passport</a> errors</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Info about the bot to which the form will be submitted</td></tr><tr><td><strong>privacy_policy_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>URL of the service's privacy policy</td></tr></tbody></table>

### Type

[account.AuthorizationForm](/type/account.AuthorizationForm/)

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
