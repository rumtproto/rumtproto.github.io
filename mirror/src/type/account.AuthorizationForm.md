---
title: "Account.AuthorizationForm"
original: "https://core.telegram.org/type/account.AuthorizationForm"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Account.AuthorizationForm","url":"/type/account.AuthorizationForm/"}]
layout: layout.njk
---

# Account.AuthorizationForm

Authorization form

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.authorizationForm/">account.authorizationForm</a>#ad2e1cd8 flags:<a href="/type/%23/">#</a> required_types:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureRequiredType/">SecureRequiredType</a>&gt; values:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValue/">SecureValue</a>&gt; errors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValueError/">SecureValueError</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; privacy_policy_url:flags.0?<a href="/type/string/">string</a> = <a href="/type/account.AuthorizationForm/" class="current_page_link">account.AuthorizationForm</a>;

---functions---

<a href="/method/account.getAuthorizationForm/">account.getAuthorizationForm</a>#a929597a bot_id:<a href="/type/long/">long</a> scope:<a href="/type/string/">string</a> public_key:<a href="/type/string/">string</a> = <a href="/type/account.AuthorizationForm/" class="current_page_link">account.AuthorizationForm</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.authorizationForm/">account.authorizationForm</a></td><td><a href="https://core.telegram.org/passport">Telegram Passport</a> authorization form</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getAuthorizationForm/">account.getAuthorizationForm</a></td><td>Returns a Telegram Passport authorization form for sharing data with a service</td></tr></tbody></table>
