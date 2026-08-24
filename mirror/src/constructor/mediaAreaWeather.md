---
title: "mediaAreaWeather"
original: "https://core.telegram.org/constructor/mediaAreaWeather"
section: ref
description: "Represents a weather widget »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"mediaAreaWeather","url":"/constructor/mediaAreaWeather/"}]
layout: layout.njk
---

# mediaAreaWeather

Represents a [weather widget »](/api/stories/#weather).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/mediaAreaWeather/" class="current_page_link">mediaAreaWeather</a>#49a6549c coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> emoji:<a href="/type/string/">string</a> temperature_c:<a href="/type/double/">double</a> color:<a href="/type/int/">int</a> = <a href="/type/MediaArea/">MediaArea</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a></td><td>The size and location of the media area corresponding to the widget on top of the story media.</td></tr><tr><td><strong>emoji</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Weather emoji, should be rendered as an <a href="/api/animated-emojis/">animated emoji</a>.</td></tr><tr><td><strong>temperature_c</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Temperature in degrees Celsius.</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ARGB background color.</td></tr></tbody></table>

### Type

[MediaArea](/type/MediaArea/)

### Related pages

#### [Animated Emojis](/api/animated-emojis/)

Graphical telegram clients should transform emojis into their respective animated version.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
