---
title: "authorization"
original: "https://core.telegram.org/constructor/authorization"
section: ref
description: "How to register a user's phone to start using the API."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"authorization","url":"/constructor/authorization/"}]
layout: layout.njk
---

# authorization

Logged-in session

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/authorization/" class="current_page_link">authorization</a>#ad01d61d flags:<a href="/type/%23/">#</a> current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:<a href="/type/long/">long</a> device_model:<a href="/type/string/">string</a> platform:<a href="/type/string/">string</a> system_version:<a href="/type/string/">string</a> api_id:<a href="/type/int/">int</a> app_name:<a href="/type/string/">string</a> app_version:<a href="/type/string/">string</a> date_created:<a href="/type/int/">int</a> date_active:<a href="/type/int/">int</a> ip:<a href="/type/string/">string</a> country:<a href="/type/string/">string</a> region:<a href="/type/string/">string</a> = <a href="/type/Authorization/">Authorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>current</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this is the current session</td></tr><tr><td><strong>official_app</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the session is from an official app</td></tr><tr><td><strong>password_pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether the session is still waiting for a 2FA password</td></tr><tr><td><strong>encrypted_requests_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this session will accept encrypted chats</td></tr><tr><td><strong>call_requests_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether this session will accept phone calls</td></tr><tr><td><strong>unconfirmed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether the session is <a href="/api/auth/#confirming-login">unconfirmed, see here »</a> for more info.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Identifier</td></tr><tr><td><strong>device_model</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Device model</td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Platform</td></tr><tr><td><strong>system_version</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>System version</td></tr><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/obtaining_api_id/">API ID</a></td></tr><tr><td><strong>app_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>App name</td></tr><tr><td><strong>app_version</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>App version</td></tr><tr><td><strong>date_created</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the session created</td></tr><tr><td><strong>date_active</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the session last active</td></tr><tr><td><strong>ip</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Last known IP</td></tr><tr><td><strong>country</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Country determined from IP</td></tr><tr><td><strong>region</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Region determined from IP</td></tr></tbody></table>

### Type

[Authorization](/type/Authorization/)

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.

#### [Creating your Telegram Application](/api/obtaining_api_id/)

How to get your application identifier and create a new Telegram app.
