---
title: "account.updatePasswordSettings"
original: "https://core.telegram.org/method/account.updatePasswordSettings"
section: ref
description: "How to login to a user's account if they have enabled 2FA, how to change password."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updatePasswordSettings","url":"/method/account.updatePasswordSettings/"}]
layout: layout.njk
---

# account.updatePasswordSettings

Set a new 2FA password

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.updatePasswordSettings/" class="current_page_link">account.updatePasswordSettings</a>#a59b102f password:<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a> new_settings:<a href="/type/account.PasswordInputSettings/">account.PasswordInputSettings</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a></td><td>The old password (see <a href="/api/srp/">SRP</a>)</td></tr><tr><td><strong>new_settings</strong></td><td style="text-align: center;"><a href="/type/account.PasswordInputSettings/">account.PasswordInputSettings</a></td><td>The new password (see <a href="/api/srp/">SRP</a>)</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_INVALID</td><td>The specified email is invalid.</td></tr><tr><td>400</td><td>EMAIL_UNCONFIRMED</td><td>Email unconfirmed.</td></tr><tr><td>400</td><td>EMAIL_UNCONFIRMED_%d</td><td>The provided email isn't confirmed, %d is the length of the verification code that was just sent to the email: use <a href="/method/account.verifyEmail/">account.verifyEmail</a> to enter the received verification code and enable the recovery email.</td></tr><tr><td>400</td><td>NEW_SALT_INVALID</td><td>The new salt is invalid.</td></tr><tr><td>400</td><td>NEW_SETTINGS_EMPTY</td><td>No password is set on the current account, and no new password was specified in <code>new_settings</code>.</td></tr><tr><td>400</td><td>NEW_SETTINGS_INVALID</td><td>The new password settings are invalid.</td></tr><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>The provided password hash is invalid.</td></tr><tr><td>400</td><td>SRP_ID_INVALID</td><td>Invalid SRP ID provided.</td></tr><tr><td>400</td><td>SRP_PASSWORD_CHANGED</td><td>Password has changed.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [account.verifyEmail](/method/account.verifyEmail/)

Verify an email address.
