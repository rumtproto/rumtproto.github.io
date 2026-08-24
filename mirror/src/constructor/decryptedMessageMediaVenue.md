---
title: "decryptedMessageMediaVenue"
original: "https://core.telegram.org/constructor/decryptedMessageMediaVenue"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageMediaVenue","url":"/constructor/decryptedMessageMediaVenue/"}]
layout: layout.njk
---

# decryptedMessageMediaVenue

Venue

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===45===
<a href="/constructor/decryptedMessageMediaVenue/" class="current_page_link">decryptedMessageMediaVenue</a>#8a0df56f lat:<a href="/type/double/">double</a> long:<a href="/type/double/">double</a> title:<a href="/type/string/">string</a> address:<a href="/type/string/">string</a> provider:<a href="/type/string/">string</a> venue_id:<a href="/type/string/">string</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lat</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Latitude of venue</td></tr><tr><td><strong>long</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Longitude of venue</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Venue name</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Address</td></tr><tr><td><strong>provider</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Venue provider: currently only "foursquare" and "gplaces" (Google Places) need to be supported</td></tr><tr><td><strong>venue_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Venue ID in the provider's database</td></tr></tbody></table>

### Type

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
