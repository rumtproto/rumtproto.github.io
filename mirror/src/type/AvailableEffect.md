---
title: "AvailableEffect"
original: "https://core.telegram.org/type/AvailableEffect"
section: ref
description: "Describes a message effect »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"AvailableEffect","url":"/type/AvailableEffect/"}]
layout: layout.njk
---

# AvailableEffect

Describes a [message effect »](/api/effects/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/availableEffect/">availableEffect</a>#93c3e27e flags:<a href="/type/%23/">#</a> premium_required:flags.2?true id:<a href="/type/long/">long</a> emoticon:<a href="/type/string/">string</a> static_icon_id:flags.0?<a href="/type/long/">long</a> effect_sticker_id:<a href="/type/long/">long</a> effect_animation_id:flags.1?<a href="/type/long/">long</a> = <a href="/type/AvailableEffect/" class="current_page_link">AvailableEffect</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/availableEffect/">availableEffect</a></td><td>Represents a <a href="/api/effects/">message effect »</a>.<br><br>All <code>long</code> IDs except for <code>id</code> are <a href="/constructor/document/">document</a>.<code>id</code>s from the containing <a href="/constructor/messages.availableEffects/">messages.availableEffects</a> constructor.<br><br>See <a href="/api/effects/">here »</a> for more info on how to use following fields.</td></tr></tbody></table>

### Related pages

#### [Animated message effects](/api/effects/)

Telegram allows adding spectacular animated effects to messages you send.
