---
title: "Authorization"
original: "https://core.telegram.org/type/Authorization"
section: ref
description: "Represents a logged-in session"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Authorization","url":"/type/Authorization/"}]
layout: layout.njk
---

# Authorization

Represents a logged-in session

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/authorization/">authorization</a>#ad01d61d flags:<a href="/type/%23/">#</a> current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:<a href="/type/long/">long</a> device_model:<a href="/type/string/">string</a> platform:<a href="/type/string/">string</a> system_version:<a href="/type/string/">string</a> api_id:<a href="/type/int/">int</a> app_name:<a href="/type/string/">string</a> app_version:<a href="/type/string/">string</a> date_created:<a href="/type/int/">int</a> date_active:<a href="/type/int/">int</a> ip:<a href="/type/string/">string</a> country:<a href="/type/string/">string</a> region:<a href="/type/string/">string</a> = <a href="/type/Authorization/" class="current_page_link">Authorization</a>;

---functions---

<a href="/method/auth.acceptLoginToken/">auth.acceptLoginToken</a>#e894ad4d token:<a href="/type/bytes/">bytes</a> = <a href="/type/Authorization/" class="current_page_link">Authorization</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/authorization/">authorization</a></td><td>Logged-in session</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/auth.acceptLoginToken/">auth.acceptLoginToken</a></td><td>Accept QR code login token, logging in the app that generated it.<br><br>Returns info about the new session.<br><br>For more info, see <a href="/api/qr-login/">login via QR code</a>.</td></tr></tbody></table>
