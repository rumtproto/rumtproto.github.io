---
title: "botAppSettings"
original: "https://core.telegram.org/constructor/botAppSettings"
section: ref
description: "How to transfer large data batches correctly."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botAppSettings","url":"/constructor/botAppSettings/"}]
layout: layout.njk
---

# botAppSettings

[Mini app »](/api/bots/webapps/) settings

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botAppSettings/" class="current_page_link">botAppSettings</a>#c99b1950 flags:<a href="/type/%23/">#</a> placeholder_path:flags.0?<a href="/type/bytes/">bytes</a> background_color:flags.1?<a href="/type/int/">int</a> background_dark_color:flags.2?<a href="/type/int/">int</a> header_color:flags.3?<a href="/type/int/">int</a> header_dark_color:flags.4?<a href="/type/int/">int</a> = <a href="/type/BotAppSettings/">BotAppSettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>placeholder_path</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/bytes/">bytes</a></td><td>SVG placeholder logo, compressed using the same format used for <a href="/api/files/#vector-thumbnails">vector thumbnails »</a>.</td></tr><tr><td><strong>background_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Default light mode background color</td></tr><tr><td><strong>background_dark_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Default dark mode background color</td></tr><tr><td><strong>header_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>Default light mode header color</td></tr><tr><td><strong>header_dark_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Default dark mode header color</td></tr></tbody></table>

### Type

[BotAppSettings](/type/BotAppSettings/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
