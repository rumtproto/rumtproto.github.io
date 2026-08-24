---
title: "keyboardButtonRequestGeoLocation"
original: "https://core.telegram.org/constructor/keyboardButtonRequestGeoLocation"
section: ref
description: "Button to request a user's geolocation"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"keyboardButtonRequestGeoLocation","url":"/constructor/keyboardButtonRequestGeoLocation/"}]
layout: layout.njk
---

# keyboardButtonRequestGeoLocation

Button to request a user's geolocation

Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/).

When pressed, clients must request permission from the user to send the current user's geolocation to the chat, replying to the message that attached the [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/keyboardButtonRequestGeoLocation/" class="current_page_link">keyboardButtonRequestGeoLocation</a>#aa40f94d flags:<a href="/type/%23/">#</a> style:flags.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a> text:<a href="/type/string/">string</a> = <a href="/type/KeyboardButton/">KeyboardButton</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a></td><td>Button style, see <a href="/api/bots/buttons/#button-styles">here »</a> for more info on button styles.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Button text</td></tr></tbody></table>

### Type

[KeyboardButton](/type/KeyboardButton/)

### Related pages

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/)

Represents a reply keyboard
