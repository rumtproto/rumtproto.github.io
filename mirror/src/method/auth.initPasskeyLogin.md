---
title: "auth.initPasskeyLogin"
original: "https://core.telegram.org/method/auth.initPasskeyLogin"
section: ref
description: "Initialize login with a passkey over an unauthenticated connection, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.initPasskeyLogin","url":"/method/auth.initPasskeyLogin/"}]
layout: layout.njk
---

# auth.initPasskeyLogin

Initialize login with a passkey over an unauthenticated connection, see [here »](/api/passkeys/#logging-in-with-a-passkey) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.passkeyLoginOptions/">auth.passkeyLoginOptions</a>#e2037789 options:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/auth.PasskeyLoginOptions/">auth.PasskeyLoginOptions</a>;
---functions---
<a href="/method/auth.initPasskeyLogin/" class="current_page_link">auth.initPasskeyLogin</a>#518ad0b7 api_id:<a href="/type/int/">int</a> api_hash:<a href="/type/string/">string</a> = <a href="/type/auth.PasskeyLoginOptions/">auth.PasskeyLoginOptions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Application identifier (see <a href="https://core.telegram.org/myapp">App configuration</a>)</td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Application identifier hash (see <a href="https://core.telegram.org/myapp">App configuration</a>)</td></tr></tbody></table>

### Result

[auth.PasskeyLoginOptions](/type/auth.PasskeyLoginOptions/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>API_ID_INVALID</td><td>API ID invalid.</td></tr><tr><td>500</td><td>AUTH_RESTART</td><td>Restart the authorization process.</td></tr></tbody></table>

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
