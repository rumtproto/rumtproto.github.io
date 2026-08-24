---
title: "messages.acceptUrlAuth"
original: "https://core.telegram.org/method/messages.acceptUrlAuth"
section: ref
description: "Use this to accept a Seamless Telegram Login authorization request, for more info click here »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.acceptUrlAuth","url":"/method/messages.acceptUrlAuth/"}]
layout: layout.njk
---

# messages.acceptUrlAuth

Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](/api/url-authorization/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/urlAuthResultRequest/">urlAuthResultRequest</a>#f8f8eb1e flags:<a href="/type/%23/">#</a> request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:<a href="/type/User/">User</a> domain:<a href="/type/string/">string</a> browser:flags.2?<a href="/type/string/">string</a> platform:flags.2?<a href="/type/string/">string</a> ip:flags.2?<a href="/type/string/">string</a> region:flags.2?<a href="/type/string/">string</a> match_codes:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; user_id_hint:flags.4?<a href="/type/long/">long</a> = <a href="/type/UrlAuthResult/">UrlAuthResult</a>;
<a href="/constructor/urlAuthResultAccepted/">urlAuthResultAccepted</a>#623a8fa0 flags:<a href="/type/%23/">#</a> url:flags.0?<a href="/type/string/">string</a> = <a href="/type/UrlAuthResult/">UrlAuthResult</a>;
<a href="/constructor/urlAuthResultDefault/">urlAuthResultDefault</a>#a9d6db1f = <a href="/type/UrlAuthResult/">UrlAuthResult</a>;
---functions---
<a href="/method/messages.acceptUrlAuth/" class="current_page_link">messages.acceptUrlAuth</a>#67a3f0de flags:<a href="/type/%23/">#</a> write_allowed:flags.0?true share_phone_number:flags.3?true peer:flags.1?<a href="/type/InputPeer/">InputPeer</a> msg_id:flags.1?<a href="/type/int/">int</a> button_id:flags.1?<a href="/type/int/">int</a> url:flags.2?<a href="/type/string/">string</a> match_code:flags.4?<a href="/type/string/">string</a> = <a href="/type/UrlAuthResult/">UrlAuthResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>write_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Set this flag to allow the bot to send messages to you (if requested)</td></tr><tr><td><strong>share_phone_number</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Set this flag to share the user's phone number with the bot (if requested via <a href="/constructor/urlAuthResultRequest/">urlAuthResultRequest</a>.<code>request_phone_number</code> and consented to by the user)</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputPeer/">InputPeer</a></td><td>The location of the message</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Message ID of the message with the login button</td></tr><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>ID of the login button</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>URL used for <a href="/api/url-authorization/#link-url-authorization">link URL authorization, click here for more info »</a></td></tr><tr><td><strong>match_code</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>If <a href="/constructor/urlAuthResultRequest/">urlAuthResultRequest</a>.<code>match_codes</code> was set, the emoji or code selected by the user from the provided list; must always be provided when <code>match_codes</code> is set, even if <code>match_codes_first</code> was set and the code was already validated via <a href="/method/messages.checkUrlAuthMatchCode/">messages.checkUrlAuthMatchCode</a></td></tr></tbody></table>

### Result

[UrlAuthResult](/type/UrlAuthResult/)

### Only users can use this method

### Related pages

#### [urlAuthResultRequest](/constructor/urlAuthResultRequest/)

Details about the authorization request, for more info [click here »](/api/url-authorization/)

#### [Seamless Telegram Login](/api/url-authorization/)

Handle Seamless Telegram Login URL authorization requests.

#### [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/)

Validate the match code selected by the user against the code shown on the login page, as part of the [OAuth authorization flow »](/api/url-authorization/#oauth-authorization).

Only usable when both `match_codes` and `match_codes_first` are set in the [urlAuthResultRequest](/constructor/urlAuthResultRequest/) returned by [messages.requestUrlAuth](/method/messages.requestUrlAuth/).  
If [boolTrue](/constructor/boolTrue/) is returned, proceed with the login flow and pass the verified code to [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code`.
