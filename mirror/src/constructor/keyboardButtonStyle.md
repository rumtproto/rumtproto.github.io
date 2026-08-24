---
title: "keyboardButtonStyle"
original: "https://core.telegram.org/constructor/keyboardButtonStyle"
section: ref
description: "This constructor allows setting a custom background color and custom emoji label for a button, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"keyboardButtonStyle","url":"/constructor/keyboardButtonStyle/"}]
layout: layout.njk
---

# keyboardButtonStyle

This constructor allows setting a custom background color and custom emoji label for a button, see [here »](/api/bots/buttons/#button-styles) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/keyboardButtonStyle/" class="current_page_link">keyboardButtonStyle</a>#4fdd3430 flags:<a href="/type/%23/">#</a> bg_primary:flags.0?true bg_danger:flags.1?true bg_success:flags.2?true icon:flags.3?<a href="/type/long/">long</a> = <a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>bg_primary</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>A dark blue color, recommended for main actions.</td></tr><tr><td><strong>bg_danger</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>A red color, recommended for destructive actions.</td></tr><tr><td><strong>bg_success</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>A green color, recommended for positive actions.</td></tr><tr><td><strong>icon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/long/">long</a></td><td>The ID of a <a href="/api/custom-emoji/">custom emoji</a> to be displayed before the button's label.</td></tr></tbody></table>

### Type

[KeyboardButtonStyle](/type/KeyboardButtonStyle/)

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.
