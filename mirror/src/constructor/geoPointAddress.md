---
title: "geoPointAddress"
original: "https://core.telegram.org/constructor/geoPointAddress"
section: ref
description: "Address optionally associated to a geoPoint."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"geoPointAddress","url":"/constructor/geoPointAddress/"}]
layout: layout.njk
---

# geoPointAddress

Address optionally associated to a [geoPoint](/constructor/geoPoint/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/geoPointAddress/" class="current_page_link">geoPointAddress</a>#de4c5d93 flags:<a href="/type/%23/">#</a> country_iso2:<a href="/type/string/">string</a> state:flags.0?<a href="/type/string/">string</a> city:flags.1?<a href="/type/string/">string</a> street:flags.2?<a href="/type/string/">string</a> = <a href="/type/GeoPointAddress/">GeoPointAddress</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>country_iso2</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Two-letter ISO 3166-1 alpha-2 country code</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>State</td></tr><tr><td><strong>city</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>City</td></tr><tr><td><strong>street</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Street</td></tr></tbody></table>

### Type

[GeoPointAddress](/type/GeoPointAddress/)

### Related pages

#### [geoPoint](/constructor/geoPoint/)

GeoPoint.
