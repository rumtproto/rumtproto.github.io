---
title: "businessIntro"
original: "https://core.telegram.org/constructor/businessIntro"
section: ref
description: "Telegram Business introduction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"businessIntro","url":"/constructor/businessIntro/"}]
layout: layout.njk
---

# businessIntro

[Telegram Business introduction »](/api/business/#business-introduction).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessIntro/" class="current_page_link">businessIntro</a>#5a0a066d flags:<a href="/type/%23/">#</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> sticker:flags.0?<a href="/type/Document/">Document</a> = <a href="/type/BusinessIntro/">BusinessIntro</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title of the introduction message (max <a href="/api/config/#intro-title-length-limit">intro_title_length_limit »</a> UTF-8 characters).</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Profile introduction (max <a href="/api/config/#intro-description-length-limit">intro_description_length_limit »</a> UTF-8 characters).</td></tr><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Document/">Document</a></td><td>Optional introduction <a href="/api/stickers/">sticker</a>.</td></tr></tbody></table>

### Type

[BusinessIntro](/type/BusinessIntro/)

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
