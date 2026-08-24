---
title: "channelAdminLogEventActionToggleSlowMode"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionToggleSlowMode"
section: ref
description: "Slow mode setting for supergroups was changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionToggleSlowMode","url":"/constructor/channelAdminLogEventActionToggleSlowMode/"}]
layout: layout.njk
---

# channelAdminLogEventActionToggleSlowMode

[Slow mode setting for supergroups was changed](/method/channels.toggleSlowMode/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventActionToggleSlowMode/" class="current_page_link">channelAdminLogEventActionToggleSlowMode</a>#53909779 prev_value:<a href="/type/int/">int</a> new_value:<a href="/type/int/">int</a> = <a href="/type/ChannelAdminLogEventAction/">ChannelAdminLogEventAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prev_value</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Previous slow mode value</td></tr><tr><td><strong>new_value</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New slow mode value</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [channels.toggleSlowMode](/method/channels.toggleSlowMode/)

Toggle supergroup slow mode: if enabled, users will only be able to send one message every `seconds` seconds
