---
title: "InputPaymentCredentials"
original: "https://core.telegram.org/type/InputPaymentCredentials"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputPaymentCredentials","url":"/type/InputPaymentCredentials/"}]
layout: layout.njk
---

# InputPaymentCredentials

Payment credentials

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPaymentCredentialsSaved/">inputPaymentCredentialsSaved</a>#c10eb2cf id:<a href="/type/string/">string</a> tmp_password:<a href="/type/bytes/">bytes</a> = <a href="/type/InputPaymentCredentials/" class="current_page_link">InputPaymentCredentials</a>;
<a href="/constructor/inputPaymentCredentials/">inputPaymentCredentials</a>#3417d728 flags:<a href="/type/%23/">#</a> save:flags.0?true data:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/InputPaymentCredentials/" class="current_page_link">InputPaymentCredentials</a>;
<a href="/constructor/inputPaymentCredentialsApplePay/">inputPaymentCredentialsApplePay</a>#aa1c39f payment_data:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/InputPaymentCredentials/" class="current_page_link">InputPaymentCredentials</a>;
<a href="/constructor/inputPaymentCredentialsGooglePay/">inputPaymentCredentialsGooglePay</a>#8ac32801 payment_token:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/InputPaymentCredentials/" class="current_page_link">InputPaymentCredentials</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputPaymentCredentialsSaved/">inputPaymentCredentialsSaved</a></td><td>Saved payment credentials</td></tr><tr><td><a href="/constructor/inputPaymentCredentials/">inputPaymentCredentials</a></td><td>Payment credentials</td></tr><tr><td><a href="/constructor/inputPaymentCredentialsApplePay/">inputPaymentCredentialsApplePay</a></td><td>Apple pay payment credentials</td></tr><tr><td><a href="/constructor/inputPaymentCredentialsGooglePay/">inputPaymentCredentialsGooglePay</a></td><td>Google Pay payment credentials</td></tr></tbody></table>
