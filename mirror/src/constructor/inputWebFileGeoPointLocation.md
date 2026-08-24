---
title: "inputWebFileGeoPointLocation"
original: "https://core.telegram.org/constructor/inputWebFileGeoPointLocation"
section: ref
description: "Used to download a server-generated image with the map preview from a geoPoint, see the webfile docs for more info »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputWebFileGeoPointLocation","url":"/constructor/inputWebFileGeoPointLocation/"}]
layout: layout.njk
---

# inputWebFileGeoPointLocation

Used to download a server-generated image with the map preview from a [geoPoint](/constructor/geoPoint/), see the [webfile docs for more info »](/api/files/#downloading-webfiles).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputWebFileGeoPointLocation/" class="current_page_link">inputWebFileGeoPointLocation</a>#9f2221c9 geo_point:<a href="/type/InputGeoPoint/">InputGeoPoint</a> access_hash:<a href="/type/long/">long</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> zoom:<a href="/type/int/">int</a> scale:<a href="/type/int/">int</a> = <a href="/type/InputWebFileLocation/">InputWebFileLocation</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/type/InputGeoPoint/">InputGeoPoint</a></td><td>Generated from the <code>lat</code>, <code>long</code> and <code>accuracy_radius</code> parameters of the <a href="/constructor/geoPoint/">geoPoint</a></td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash of the <a href="/constructor/geoPoint/">geoPoint</a></td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Map width in pixels before applying scale; 16-1024</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Map height in pixels before applying scale; 16-1024</td></tr><tr><td><strong>zoom</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Map zoom level; 13-20</td></tr><tr><td><strong>scale</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Map scale; 1-3</td></tr></tbody></table>

### Type

[InputWebFileLocation](/type/InputWebFileLocation/)

### Related pages

#### [geoPoint](/constructor/geoPoint/)

GeoPoint.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
