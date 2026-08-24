---
title: "messages.requestUrlAuth"
original: "https://core.telegram.org/method/messages.requestUrlAuth"
section: ref
description: "Get more info about a Seamless Telegram Login authorization request, for more info click here »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.requestUrlAuth","url":"/method/messages.requestUrlAuth/"}]
layout: layout.njk
---

# messages.requestUrlAuth

Get more info about a Seamless Telegram Login authorization request, for more info [click here »](/api/url-authorization/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/urlAuthResultRequest/">urlAuthResultRequest</a>#f8f8eb1e flags:<a href="/type/%23/">#</a> request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:<a href="/type/User/">User</a> domain:<a href="/type/string/">string</a> browser:flags.2?<a href="/type/string/">string</a> platform:flags.2?<a href="/type/string/">string</a> ip:flags.2?<a href="/type/string/">string</a> region:flags.2?<a href="/type/string/">string</a> match_codes:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; user_id_hint:flags.4?<a href="/type/long/">long</a> = <a href="/type/UrlAuthResult/">UrlAuthResult</a>;
<a href="/constructor/urlAuthResultAccepted/">urlAuthResultAccepted</a>#623a8fa0 flags:<a href="/type/%23/">#</a> url:flags.0?<a href="/type/string/">string</a> = <a href="/type/UrlAuthResult/">UrlAuthResult</a>;
<a href="/constructor/urlAuthResultDefault/">urlAuthResultDefault</a>#a9d6db1f = <a href="/type/UrlAuthResult/">UrlAuthResult</a>;
---functions---
<a href="/method/messages.requestUrlAuth/" class="current_page_link">messages.requestUrlAuth</a>#894cc99c flags:<a href="/type/%23/">#</a> peer:flags.1?<a href="/type/InputPeer/">InputPeer</a> msg_id:flags.1?<a href="/type/int/">int</a> button_id:flags.1?<a href="/type/int/">int</a> url:flags.2?<a href="/type/string/">string</a> in_app_origin:flags.3?<a href="/type/string/">string</a> = <a href="/type/UrlAuthResult/">UrlAuthResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputPeer/">InputPeer</a></td><td>Peer where the message is located</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>The message</td></tr><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>The ID of the button with the authorization request</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>URL used for <a href="/api/url-authorization/#link-url-authorization">link URL authorization, click here for more info »</a></td></tr><tr><td><strong>in_app_origin</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>For <a href="/api/url-authorization/#oauth-authorization-for-mini-apps">OAuth authorization from mini apps »</a>: the origin of the webview that originated the OAuth request, in the format <code>scheme://host</code> (or <code>scheme://host:port</code> for non-default ports)</td></tr></tbody></table>

### Result

[UrlAuthResult](/type/UrlAuthResult/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>500</td><td>OAUTH_REQUEST_INVALID</td><td>The specified OAuth request is invalid.</td></tr><tr><td>400</td><td>URL_EXPIRED</td><td>The specified OAuth request has expired.</td></tr><tr><td>400</td><td>URL_INVALID</td><td>Invalid URL provided.</td></tr></tbody></table>

### Related pages

#### [Seamless Telegram Login](/api/url-authorization/)

Handle Seamless Telegram Login URL authorization requests.
