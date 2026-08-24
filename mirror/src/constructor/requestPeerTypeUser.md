---
title: "requestPeerTypeUser"
original: "https://core.telegram.org/constructor/requestPeerTypeUser"
section: ref
description: "Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"requestPeerTypeUser","url":"/constructor/requestPeerTypeUser/"}]
layout: layout.njk
---

# requestPeerTypeUser

Choose a user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/requestPeerTypeUser/" class="current_page_link">requestPeerTypeUser</a>#5f3b8a00 flags:<a href="/type/%23/">#</a> bot:flags.0?<a href="/type/Bool/">Bool</a> premium:flags.1?<a href="/type/Bool/">Bool</a> = <a href="/type/RequestPeerType/">RequestPeerType</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Bool/">Bool</a></td><td>Whether to allow choosing only bots.</td></tr><tr><td><strong>premium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Bool/">Bool</a></td><td>Whether to allow choosing only <a href="/api/premium/">Premium</a> users.</td></tr></tbody></table>

### Type

[RequestPeerType](/type/RequestPeerType/)

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
