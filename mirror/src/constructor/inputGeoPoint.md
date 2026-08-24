---
title: "inputGeoPoint"
original: "https://core.telegram.org/constructor/inputGeoPoint"
section: ref
description: "Defines a GeoPoint by its coordinates."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputGeoPoint","url":"/constructor/inputGeoPoint/"}]
layout: layout.njk
---

# inputGeoPoint

Defines a GeoPoint by its coordinates.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputGeoPoint/" class="current_page_link">inputGeoPoint</a>#48222faf flags:<a href="/type/%23/">#</a> lat:<a href="/type/double/">double</a> long:<a href="/type/double/">double</a> accuracy_radius:flags.0?<a href="/type/int/">int</a> = <a href="/type/InputGeoPoint/">InputGeoPoint</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>lat</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Latitude</td></tr><tr><td><strong>long</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Longitude</td></tr><tr><td><strong>accuracy_radius</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>The estimated horizontal accuracy of the location, in meters; as defined by the sender.</td></tr></tbody></table>

### Type

[InputGeoPoint](/type/InputGeoPoint/)
