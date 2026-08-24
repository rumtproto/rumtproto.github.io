---
title: "inputKeyboardButtonUserProfile"
original: "https://core.telegram.org/constructor/inputKeyboardButtonUserProfile"
section: ref
description: "Button that links directly to a user profile"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputKeyboardButtonUserProfile","url":"/constructor/inputKeyboardButtonUserProfile/"}]
layout: layout.njk
---

# inputKeyboardButtonUserProfile

Button that links directly to a user profile

Use this constructor to send a [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/) button in an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputKeyboardButtonUserProfile/" class="current_page_link">inputKeyboardButtonUserProfile</a>#7d5e07c7 flags:<a href="/type/%23/">#</a> style:flags.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a> text:<a href="/type/string/">string</a> user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/KeyboardButton/">KeyboardButton</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a></td><td>Button style, see <a href="/api/bots/buttons/#button-styles">here »</a> for more info on button styles.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Button text</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>User ID</td></tr></tbody></table>

### Type

[KeyboardButton](/type/KeyboardButton/)

### Related pages

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/)

Button that links directly to a user profile

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients must open the profile of the user identified by `user_id`.

#### [Telegram Bot Features](https://core.telegram.org/bots/features)

This page describes individual bot elements in greater detail. For a general overview of bots, read the introduction to bots first.
