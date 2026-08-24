---
title: "keyboardButtonUserProfile"
original: "https://core.telegram.org/constructor/keyboardButtonUserProfile"
section: ref
description: "Button that links directly to a user profile"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"keyboardButtonUserProfile","url":"/constructor/keyboardButtonUserProfile/"}]
layout: layout.njk
---

# keyboardButtonUserProfile

Button that links directly to a user profile

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients must open the profile of the user identified by `user_id`.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/keyboardButtonUserProfile/" class="current_page_link">keyboardButtonUserProfile</a>#c0fd5d09 flags:<a href="/type/%23/">#</a> style:flags.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a> text:<a href="/type/string/">string</a> user_id:<a href="/type/long/">long</a> = <a href="/type/KeyboardButton/">KeyboardButton</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a></td><td>Button style, see <a href="/api/bots/buttons/#button-styles">here »</a> for more info on button styles.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Button text</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User ID</td></tr></tbody></table>

### Type

[KeyboardButton](/type/KeyboardButton/)

### Related pages

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Represents an inline keyboard
