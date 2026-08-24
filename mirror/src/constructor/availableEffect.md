---
title: "availableEffect"
original: "https://core.telegram.org/constructor/availableEffect"
section: ref
description: "Represents a message effect »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"availableEffect","url":"/constructor/availableEffect/"}]
layout: layout.njk
---

# availableEffect

Represents a [message effect »](/api/effects/).

All `long` IDs except for `id` are [document](/constructor/document/).`id`s from the containing [messages.availableEffects](/constructor/messages.availableEffects/) constructor.

See [here »](/api/effects/) for more info on how to use following fields.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/availableEffect/" class="current_page_link">availableEffect</a>#93c3e27e flags:<a href="/type/%23/">#</a> premium_required:flags.2?true id:<a href="/type/long/">long</a> emoticon:<a href="/type/string/">string</a> static_icon_id:flags.0?<a href="/type/long/">long</a> effect_sticker_id:<a href="/type/long/">long</a> effect_animation_id:flags.1?<a href="/type/long/">long</a> = <a href="/type/AvailableEffect/">AvailableEffect</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>premium_required</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether a <a href="/api/premium/">Premium</a> subscription is required to use this effect.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Unique effect ID.</td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Emoji corresponding to the effect, to be used as icon for the effect if <code>static_icon_id</code> is not set.</td></tr><tr><td><strong>static_icon_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>ID of the document containing the static icon (WEBP) of the effect.</td></tr><tr><td><strong>effect_sticker_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Contains the preview <a href="/api/stickers/#animated-stickers">animation (TGS format »)</a>, used for the effect selection menu.</td></tr><tr><td><strong>effect_animation_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/long/">long</a></td><td>If set, contains the actual animated effect <a href="/api/stickers/#animated-stickers">(TGS format »)</a>. If not set, the animated effect must be set equal to the <a href="/api/stickers/#premium-animated-sticker-effects">premium animated sticker effect</a> associated to the animated sticker specified in <code>effect_sticker_id</code> (always different from the preview animation, fetched thanks to the <a href="/constructor/videoSize/">videoSize</a> of type <code>f</code> as specified <a href="/api/stickers/#premium-animated-sticker-effects">here »</a>).</td></tr></tbody></table>

### Type

[AvailableEffect](/type/AvailableEffect/)

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.

#### [videoSize](/constructor/videoSize/)

An [animated profile picture](/api/files/#animated-profile-pictures) in MPEG4 format

#### [Animated message effects](/api/effects/)

Telegram allows adding spectacular animated effects to messages you send.

#### [document](/constructor/document/)

Document

#### [messages.availableEffects](/constructor/messages.availableEffects/)

The full list of usable [animated message effects »](/api/effects/).
