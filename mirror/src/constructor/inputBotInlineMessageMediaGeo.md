---
title: "inputBotInlineMessageMediaGeo"
original: "https://core.telegram.org/constructor/inputBotInlineMessageMediaGeo"
section: ref
description: "Telegram allows sending the live geolocation of a user in a chat, optionally setting a proximity alert."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputBotInlineMessageMediaGeo","url":"/constructor/inputBotInlineMessageMediaGeo/"}]
layout: layout.njk
---

# inputBotInlineMessageMediaGeo

Geolocation

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBotInlineMessageMediaGeo/" class="current_page_link">inputBotInlineMessageMediaGeo</a>#96929a85 flags:<a href="/type/%23/">#</a> geo_point:<a href="/type/InputGeoPoint/">InputGeoPoint</a> heading:flags.0?<a href="/type/int/">int</a> period:flags.1?<a href="/type/int/">int</a> proximity_notification_radius:flags.3?<a href="/type/int/">int</a> reply_markup:flags.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a> = <a href="/type/InputBotInlineMessage/">InputBotInlineMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/type/InputGeoPoint/">InputGeoPoint</a></td><td>Geolocation</td></tr><tr><td><strong>heading</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>For <a href="/api/live-location/">live locations</a>, a direction in which the location moves, in degrees; 1-360</td></tr><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Validity period</td></tr><tr><td><strong>proximity_notification_radius</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>For <a href="/api/live-location/">live locations</a>, a maximum distance to another chat member for proximity alerts, in meters (0-100000)</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a></td><td>Reply markup for bot/inline keyboards</td></tr></tbody></table>

### Type

[InputBotInlineMessage](/type/InputBotInlineMessage/)

### Related pages

#### [Live geolocation](/api/live-location/)

Telegram allows sending the live geolocation of a user in a chat, optionally setting a proximity alert.
