---
title: "account.initPasskeyRegistration"
original: "https://core.telegram.org/method/account.initPasskeyRegistration"
section: ref
description: "Initialize passkey registration for the current account, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.initPasskeyRegistration","url":"/method/account.initPasskeyRegistration/"}]
layout: layout.njk
---

# account.initPasskeyRegistration

Initialize passkey registration for the current account, see [here »](/api/passkeys/#creating-a-passkey) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.passkeyRegistrationOptions/">account.passkeyRegistrationOptions</a>#e16b5ce1 options:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/account.PasskeyRegistrationOptions/">account.PasskeyRegistrationOptions</a>;
---functions---
<a href="/method/account.initPasskeyRegistration/" class="current_page_link">account.initPasskeyRegistration</a>#429547e8 = <a href="/type/account.PasskeyRegistrationOptions/">account.PasskeyRegistrationOptions</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[account.PasskeyRegistrationOptions](/type/account.PasskeyRegistrationOptions/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>ACCESS_DENIED</td><td>The account was deactivated, or is a bot/service account.</td></tr><tr><td>406</td><td>FRESH_RESET_AUTHORISATION_FORBIDDEN</td><td>You can't logout other sessions if less than 24 hours have passed since you logged on the current session.</td></tr></tbody></table>

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
