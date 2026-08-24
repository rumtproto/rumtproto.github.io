---
title: "account.getAuthorizationForm"
original: "https://core.telegram.org/method/account.getAuthorizationForm"
section: ref
description: "Returns a Telegram Passport authorization form for sharing data with a service"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getAuthorizationForm","url":"/method/account.getAuthorizationForm/"}]
layout: layout.njk
---

# account.getAuthorizationForm

Returns a Telegram Passport authorization form for sharing data with a service

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.authorizationForm/">account.authorizationForm</a>#ad2e1cd8 flags:<a href="/type/%23/">#</a> required_types:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureRequiredType/">SecureRequiredType</a>&gt; values:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValue/">SecureValue</a>&gt; errors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValueError/">SecureValueError</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; privacy_policy_url:flags.0?<a href="/type/string/">string</a> = <a href="/type/account.AuthorizationForm/">account.AuthorizationForm</a>;
---functions---
<a href="/method/account.getAuthorizationForm/" class="current_page_link">account.getAuthorizationForm</a>#a929597a bot_id:<a href="/type/long/">long</a> scope:<a href="/type/string/">string</a> public_key:<a href="/type/string/">string</a> = <a href="/type/account.AuthorizationForm/">account.AuthorizationForm</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User identifier of the service's bot</td></tr><tr><td><strong>scope</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Telegram Passport element types requested by the service</td></tr><tr><td><strong>public_key</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Service's public key</td></tr></tbody></table>

### Result

[account.AuthorizationForm](/type/account.AuthorizationForm/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>PUBLIC_KEY_REQUIRED</td><td>A public key is required.</td></tr></tbody></table>
