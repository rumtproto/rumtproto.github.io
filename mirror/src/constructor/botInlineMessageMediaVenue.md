---
title: "botInlineMessageMediaVenue"
original: "https://core.telegram.org/constructor/botInlineMessageMediaVenue"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botInlineMessageMediaVenue","url":"/constructor/botInlineMessageMediaVenue/"}]
layout: layout.njk
---

# botInlineMessageMediaVenue

Send a venue

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botInlineMessageMediaVenue/" class="current_page_link">botInlineMessageMediaVenue</a>#8a86659c flags:<a href="/type/%23/">#</a> geo:<a href="/type/GeoPoint/">GeoPoint</a> title:<a href="/type/string/">string</a> address:<a href="/type/string/">string</a> provider:<a href="/type/string/">string</a> venue_id:<a href="/type/string/">string</a> venue_type:<a href="/type/string/">string</a> reply_markup:flags.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a> = <a href="/type/BotInlineMessage/">BotInlineMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/type/GeoPoint/">GeoPoint</a></td><td>Geolocation of venue</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Venue name</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Address</td></tr><tr><td><strong>provider</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Venue provider: currently only "foursquare" and "gplaces" (Google Places) need to be supported</td></tr><tr><td><strong>venue_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Venue ID in the provider's database</td></tr><tr><td><strong>venue_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Venue type in the provider's database</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a></td><td>Inline keyboard</td></tr></tbody></table>

### Type

[BotInlineMessage](/type/BotInlineMessage/)
