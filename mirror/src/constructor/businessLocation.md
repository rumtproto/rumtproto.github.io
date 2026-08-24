---
title: "businessLocation"
original: "https://core.telegram.org/constructor/businessLocation"
section: ref
description: "Represents the location of a Telegram Business »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"businessLocation","url":"/constructor/businessLocation/"}]
layout: layout.njk
---

# businessLocation

Represents the location of a [Telegram Business »](/api/business/#location).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessLocation/" class="current_page_link">businessLocation</a>#ac5c1af7 flags:<a href="/type/%23/">#</a> geo_point:flags.0?<a href="/type/GeoPoint/">GeoPoint</a> address:<a href="/type/string/">string</a> = <a href="/type/BusinessLocation/">BusinessLocation</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/GeoPoint/">GeoPoint</a></td><td>Geographical coordinates (optional).</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Textual description of the address (mandatory).</td></tr></tbody></table>

### Type

[BusinessLocation](/type/BusinessLocation/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
