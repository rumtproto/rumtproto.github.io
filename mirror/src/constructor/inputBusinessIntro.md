---
title: "inputBusinessIntro"
original: "https://core.telegram.org/constructor/inputBusinessIntro"
section: ref
description: "Telegram Business introduction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputBusinessIntro","url":"/constructor/inputBusinessIntro/"}]
layout: layout.njk
---

# inputBusinessIntro

[Telegram Business introduction »](/api/business/#business-introduction).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBusinessIntro/" class="current_page_link">inputBusinessIntro</a>#9c469cd flags:<a href="/type/%23/">#</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> sticker:flags.0?<a href="/type/InputDocument/">InputDocument</a> = <a href="/type/InputBusinessIntro/">InputBusinessIntro</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title of the introduction message</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Profile introduction</td></tr><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputDocument/">InputDocument</a></td><td>Optional introduction <a href="/api/stickers/">sticker</a>.</td></tr></tbody></table>

### Type

[InputBusinessIntro](/type/InputBusinessIntro/)

### Related pages

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
