---
title: "urlAuthResultRequest"
original: "https://core.telegram.org/constructor/urlAuthResultRequest"
section: ref
description: "Details about the authorization request, for more info click here »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"urlAuthResultRequest","url":"/constructor/urlAuthResultRequest/"}]
layout: layout.njk
---

# urlAuthResultRequest

Details about the authorization request, for more info [click here »](/api/url-authorization/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/urlAuthResultRequest/" class="current_page_link">urlAuthResultRequest</a>#f8f8eb1e flags:<a href="/type/%23/">#</a> request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:<a href="/type/User/">User</a> domain:<a href="/type/string/">string</a> browser:flags.2?<a href="/type/string/">string</a> platform:flags.2?<a href="/type/string/">string</a> ip:flags.2?<a href="/type/string/">string</a> region:flags.2?<a href="/type/string/">string</a> match_codes:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; user_id_hint:flags.4?<a href="/type/long/">long</a> = <a href="/type/UrlAuthResult/">UrlAuthResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>request_write_access</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the bot would like to send messages to the user</td></tr><tr><td><strong>request_phone_number</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>The app/website is requesting the user's phone number; if the user consents, set <code>share_phone_number</code> when calling <a href="/method/messages.acceptUrlAuth/">messages.acceptUrlAuth</a></td></tr><tr><td><strong>match_codes_first</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Can only be set if <code>match_codes</code> is also set; if set, clients must ask the user to select the matching code <em>before</em> showing the rest of the login confirmation UI, and must validate the selection with <a href="/method/messages.checkUrlAuthMatchCode/">messages.checkUrlAuthMatchCode</a> before proceeding</td></tr><tr><td><strong>is_app</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Set if an OAuth request originated from an app rather than a website; when set, <code>domain</code> must be replaced in the confirmation prompt by <code>verified_app_name</code> (if present) or "Unverified App"</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/User/">User</a></td><td>Username of a bot, which will be used for user authorization. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See <a href="/bots/telegram-login/">Linking your domain to the bot</a> for more details.</td></tr><tr><td><strong>domain</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The domain name of the website on which the user will log in.</td></tr><tr><td><strong>browser</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>The browser the user used to make the OAuth request</td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>The platform (operating system) of the user that made the OAuth request</td></tr><tr><td><strong>ip</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>The IP address of the user making the OAuth request</td></tr><tr><td><strong>region</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>The location of the user, inferred from the IP address</td></tr><tr><td><strong>match_codes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>A list of emojis or codes, one of which is currently being shown on the login page of the website/app; the user must select the matching one and pass it to <a href="/method/messages.acceptUrlAuth/">messages.acceptUrlAuth</a>.<code>match_code</code></td></tr><tr><td><strong>user_id_hint</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/long/">long</a></td><td>May contain the ID of the account for which the login request was created; if it matches a logged-in account, clients should automatically switch to that account and re-invoke <a href="/method/messages.requestUrlAuth/">messages.requestUrlAuth</a> before showing the prompt</td></tr><tr><td><strong>verified_app_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/string/">string</a></td><td>Can only be set if <code>is_app</code> is set and the app is verified; must replace <code>domain</code> in the confirmation prompt when present</td></tr></tbody></table>

### Type

[UrlAuthResult](/type/UrlAuthResult/)

### Related pages

#### [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)

Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](/api/url-authorization/)

#### [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/)

Validate the match code selected by the user against the code shown on the login page, as part of the [OAuth authorization flow »](/api/url-authorization/#oauth-authorization).

Only usable when both `match_codes` and `match_codes_first` are set in the [urlAuthResultRequest](/constructor/urlAuthResultRequest/) returned by [messages.requestUrlAuth](/method/messages.requestUrlAuth/).  
If [boolTrue](/constructor/boolTrue/) is returned, proceed with the login flow and pass the verified code to [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code`.

#### [messages.requestUrlAuth](/method/messages.requestUrlAuth/)

Get more info about a Seamless Telegram Login authorization request, for more info [click here »](/api/url-authorization/)

#### [Seamless Telegram Login](/api/url-authorization/)

Handle Seamless Telegram Login URL authorization requests.
