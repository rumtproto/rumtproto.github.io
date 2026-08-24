---
title: "UrlAuthResult"
original: "https://core.telegram.org/type/UrlAuthResult"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"UrlAuthResult","url":"/type/UrlAuthResult/"}]
layout: layout.njk
---

# UrlAuthResult

URL authorization result

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/urlAuthResultRequest/">urlAuthResultRequest</a>#f8f8eb1e flags:<a href="/type/%23/">#</a> request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:<a href="/type/User/">User</a> domain:<a href="/type/string/">string</a> browser:flags.2?<a href="/type/string/">string</a> platform:flags.2?<a href="/type/string/">string</a> ip:flags.2?<a href="/type/string/">string</a> region:flags.2?<a href="/type/string/">string</a> match_codes:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; user_id_hint:flags.4?<a href="/type/long/">long</a> = <a href="/type/UrlAuthResult/" class="current_page_link">UrlAuthResult</a>;
<a href="/constructor/urlAuthResultAccepted/">urlAuthResultAccepted</a>#623a8fa0 flags:<a href="/type/%23/">#</a> url:flags.0?<a href="/type/string/">string</a> = <a href="/type/UrlAuthResult/" class="current_page_link">UrlAuthResult</a>;
<a href="/constructor/urlAuthResultDefault/">urlAuthResultDefault</a>#a9d6db1f = <a href="/type/UrlAuthResult/" class="current_page_link">UrlAuthResult</a>;

---functions---

<a href="/method/messages.requestUrlAuth/">messages.requestUrlAuth</a>#894cc99c flags:<a href="/type/%23/">#</a> peer:flags.1?<a href="/type/InputPeer/">InputPeer</a> msg_id:flags.1?<a href="/type/int/">int</a> button_id:flags.1?<a href="/type/int/">int</a> url:flags.2?<a href="/type/string/">string</a> in_app_origin:flags.3?<a href="/type/string/">string</a> = <a href="/type/UrlAuthResult/" class="current_page_link">UrlAuthResult</a>;
<a href="/method/messages.acceptUrlAuth/">messages.acceptUrlAuth</a>#67a3f0de flags:<a href="/type/%23/">#</a> write_allowed:flags.0?true share_phone_number:flags.3?true peer:flags.1?<a href="/type/InputPeer/">InputPeer</a> msg_id:flags.1?<a href="/type/int/">int</a> button_id:flags.1?<a href="/type/int/">int</a> url:flags.2?<a href="/type/string/">string</a> match_code:flags.4?<a href="/type/string/">string</a> = <a href="/type/UrlAuthResult/" class="current_page_link">UrlAuthResult</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/urlAuthResultRequest/">urlAuthResultRequest</a></td><td>Details about the authorization request, for more info <a href="/api/url-authorization/">click here »</a></td></tr><tr><td><a href="/constructor/urlAuthResultAccepted/">urlAuthResultAccepted</a></td><td>Details about an accepted authorization request, for more info <a href="/api/url-authorization/">click here »</a></td></tr><tr><td><a href="/constructor/urlAuthResultDefault/">urlAuthResultDefault</a></td><td>Details about an accepted authorization request, for more info <a href="/api/url-authorization/">click here »</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.requestUrlAuth/">messages.requestUrlAuth</a></td><td>Get more info about a Seamless Telegram Login authorization request, for more info <a href="/api/url-authorization/">click here »</a></td></tr><tr><td><a href="/method/messages.acceptUrlAuth/">messages.acceptUrlAuth</a></td><td>Use this to accept a Seamless Telegram Login authorization request, for more info <a href="/api/url-authorization/">click here »</a></td></tr></tbody></table>
