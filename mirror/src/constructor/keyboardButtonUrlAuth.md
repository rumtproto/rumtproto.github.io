---
title: "keyboardButtonUrlAuth"
original: "https://core.telegram.org/constructor/keyboardButtonUrlAuth"
section: ref
description: "Button to request a user to authorize via URL using Seamless Telegram Login. When the user clicks on such a button, messages.requestUrlAuth should be called, providing the…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"keyboardButtonUrlAuth","url":"/constructor/keyboardButtonUrlAuth/"}]
layout: layout.njk
---

# keyboardButtonUrlAuth

Button to request a user to authorize via URL using [Seamless Telegram Login](/blog/privacy-discussions-web-bots/#meet-seamless-web-bots). When the user clicks on such a button, [messages.requestUrlAuth](/method/messages.requestUrlAuth/) should be called, providing the `button_id` and the ID of the container message. The returned [urlAuthResultRequest](/constructor/urlAuthResultRequest/) object will contain more details about the authorization request (`request_write_access` if the bot would like to send messages to the user along with the username of the bot which will be used for user authorization). Finally, the user can choose to call [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) to get a [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) with the URL to open instead of the `url` of this constructor, or a [urlAuthResultDefault](/constructor/urlAuthResultDefault/), in which case the `url` of this constructor must be opened, instead. If the user refuses the authorization request but still wants to open the link, the `url` of this constructor must be used.

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/keyboardButtonUrlAuth/" class="current_page_link">keyboardButtonUrlAuth</a>#f51006f9 flags:<a href="/type/%23/">#</a> style:flags.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a> text:<a href="/type/string/">string</a> fwd_text:flags.0?<a href="/type/string/">string</a> url:<a href="/type/string/">string</a> button_id:<a href="/type/int/">int</a> = <a href="/type/KeyboardButton/">KeyboardButton</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a></td><td>Button style, see <a href="/api/bots/buttons/#button-styles">here »</a> for more info on button styles.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Button label</td></tr><tr><td><strong>fwd_text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>New text of the button in forwarded messages.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in <a href="/bots/telegram-login/">Receiving authorization data</a>.<br><br><strong>NOTE</strong>: Services must <strong>always</strong> check the hash of the received data to verify the authentication and the integrity of the data as described in <a href="/bots/telegram-login/">Checking authorization</a>.</td></tr><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the button to pass to <a href="/method/messages.requestUrlAuth/">messages.requestUrlAuth</a></td></tr></tbody></table>

### Type

[KeyboardButton](/type/KeyboardButton/)

### Related pages

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [Telegram Login Widget](/bots/telegram-login/)

#### [messages.requestUrlAuth](/method/messages.requestUrlAuth/)

Get more info about a Seamless Telegram Login authorization request, for more info [click here »](/api/url-authorization/)

#### [urlAuthResultRequest](/constructor/urlAuthResultRequest/)

Details about the authorization request, for more info [click here »](/api/url-authorization/)

#### [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)

Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](/api/url-authorization/)

#### [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/)

Details about an accepted authorization request, for more info [click here »](/api/url-authorization/)

#### [urlAuthResultDefault](/constructor/urlAuthResultDefault/)

Details about an accepted authorization request, for more info [click here »](/api/url-authorization/)

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Represents an inline keyboard
