---
title: "messages.checkUrlAuthMatchCode"
original: "https://core.telegram.org/method/messages.checkUrlAuthMatchCode"
section: ref
description: "Validate the match code selected by the user against the code shown on the login page, as part of the OAuth authorization flow »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.checkUrlAuthMatchCode","url":"/method/messages.checkUrlAuthMatchCode/"}]
layout: layout.njk
---

# messages.checkUrlAuthMatchCode

Validate the match code selected by the user against the code shown on the login page, as part of the [OAuth authorization flow »](/api/url-authorization/#oauth-authorization).

Only usable when both `match_codes` and `match_codes_first` are set in the [urlAuthResultRequest](/constructor/urlAuthResultRequest/) returned by [messages.requestUrlAuth](/method/messages.requestUrlAuth/).  
If [boolTrue](/constructor/boolTrue/) is returned, proceed with the login flow and pass the verified code to [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code`.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.checkUrlAuthMatchCode/" class="current_page_link">messages.checkUrlAuthMatchCode</a>#c9a47b0b url:<a href="/type/string/">string</a> match_code:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The OAuth deep link</td></tr><tr><td><strong>match_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The emoji or code selected by the user from the list in <a href="/constructor/urlAuthResultRequest/">urlAuthResultRequest</a>.<code>match_codes</code></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>URL_INVALID</td><td>Invalid URL provided.</td></tr></tbody></table>

### Related pages

#### [urlAuthResultRequest](/constructor/urlAuthResultRequest/)

Details about the authorization request, for more info [click here »](/api/url-authorization/)

#### [Seamless Telegram Login](/api/url-authorization/)

Handle Seamless Telegram Login URL authorization requests.

#### [messages.requestUrlAuth](/method/messages.requestUrlAuth/)

Get more info about a Seamless Telegram Login authorization request, for more info [click here »](/api/url-authorization/)

#### [boolTrue](/constructor/boolTrue/)

The constructor can be interpreted as a **boolean**`true` value.

#### [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)

Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](/api/url-authorization/)
