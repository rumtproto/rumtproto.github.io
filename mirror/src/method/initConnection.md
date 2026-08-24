---
title: "initConnection"
original: "https://core.telegram.org/method/initConnection"
section: ref
description: "Returns the type returned by the invoked method."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"initConnection","url":"/method/initConnection/"}]
layout: layout.njk
---

# initConnection

Initialize connection

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/initConnection/" class="current_page_link">initConnection</a>#c1cd5ea9 {X:Type} flags:<a href="/type/%23/">#</a> api_id:<a href="/type/int/">int</a> device_model:<a href="/type/string/">string</a> system_version:<a href="/type/string/">string</a> app_version:<a href="/type/string/">string</a> system_lang_code:<a href="/type/string/">string</a> lang_pack:<a href="/type/string/">string</a> lang_code:<a href="/type/string/">string</a> proxy:flags.0?<a href="/type/InputClientProxy/">InputClientProxy</a> params:flags.1?<a href="/type/JSONValue/">JSONValue</a> query:!X = X;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Application identifier (see. <a href="https://core.telegram.org/myapp">App configuration</a>)</td></tr><tr><td><strong>device_model</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Device model</td></tr><tr><td><strong>system_version</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Operation system version</td></tr><tr><td><strong>app_version</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Application version</td></tr><tr><td><strong>system_lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Code for the language used on the device's OS, ISO 639-1 standard</td></tr><tr><td><strong>lang_pack</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Platform identifier (i.e. <code>android</code>, <code>tdesktop</code>, etc).</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Either an ISO 639-1 language code or a language pack name obtained from a <a href="/api/links/#language-pack-links">language pack link</a>.</td></tr><tr><td><strong>proxy</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputClientProxy/">InputClientProxy</a></td><td>Info about an MTProto proxy</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/JSONValue/">JSONValue</a></td><td>Additional initConnection parameters.<br>For now, only the <code>tz_offset</code> field is supported, for specifying the timezone offset in seconds.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>The query itself</td></tr></tbody></table>

### Result

Returns the type returned by the invoked method.

### Both users and bots can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CONNECTION_LAYER_INVALID</td><td>Layer invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
