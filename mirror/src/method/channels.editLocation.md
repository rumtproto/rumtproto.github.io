---
title: "channels.editLocation"
original: "https://core.telegram.org/method/channels.editLocation"
section: ref
description: "Edit location of geogroup, see here » for more info on geogroups."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.editLocation","url":"/method/channels.editLocation/"}]
layout: layout.njk
---

# channels.editLocation

Edit location of geogroup, see [here »](/api/nearby/) for more info on geogroups.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/channels.editLocation/" class="current_page_link">channels.editLocation</a>#58e63f6d channel:<a href="/type/InputChannel/">InputChannel</a> geo_point:<a href="/type/InputGeoPoint/">InputGeoPoint</a> address:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td><a href="/api/channel/">Geogroup</a></td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/type/InputGeoPoint/">InputGeoPoint</a></td><td>New geolocation</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Address string</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>400</td><td>MEGAGROUP_GEO_REQUIRED</td><td>This method can only be invoked on a geogroup.</td></tr><tr><td>400</td><td>MEGAGROUP_REQUIRED</td><td>You can only use this method on a supergroup.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Nearby users&chats](/api/nearby/)

How to work with geolocation-based features like geochats and the nearby users feature.
