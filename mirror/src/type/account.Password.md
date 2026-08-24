---
title: "account.Password"
original: "https://core.telegram.org/type/account.Password"
section: ref
description: "Configuration for two-factor authorization"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.Password","url":"/type/account.Password/"}]
layout: layout.njk
---

# account.Password

Configuration for two-factor authorization

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.password/">account.password</a>#957b50fb flags:<a href="/type/%23/">#</a> has_recovery:flags.0?true has_secure_values:flags.1?true has_password:flags.2?true current_algo:flags.2?<a href="/type/PasswordKdfAlgo/">PasswordKdfAlgo</a> srp_B:flags.2?<a href="/type/bytes/">bytes</a> srp_id:flags.2?<a href="/type/long/">long</a> hint:flags.3?<a href="/type/string/">string</a> email_unconfirmed_pattern:flags.4?<a href="/type/string/">string</a> new_algo:<a href="/type/PasswordKdfAlgo/">PasswordKdfAlgo</a> new_secure_algo:<a href="/type/SecurePasswordKdfAlgo/">SecurePasswordKdfAlgo</a> secure_random:<a href="/type/bytes/">bytes</a> pending_reset_date:flags.5?<a href="/type/int/">int</a> login_email_pattern:flags.6?<a href="/type/string/">string</a> = <a href="/type/account.Password/" class="current_page_link">account.Password</a>;

---functions---

<a href="/method/account.getPassword/">account.getPassword</a>#548a30f5 = <a href="/type/account.Password/" class="current_page_link">account.Password</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.password/">account.password</a></td><td>Configuration for two-factor authorization</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getPassword/">account.getPassword</a></td><td>Obtain configuration for two-factor authorization with password</td></tr></tbody></table>
