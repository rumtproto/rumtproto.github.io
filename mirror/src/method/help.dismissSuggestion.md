---
title: "help.dismissSuggestion"
original: "https://core.telegram.org/method/help.dismissSuggestion"
section: ref
description: "Dismiss a suggestion, see here for more info »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.dismissSuggestion","url":"/method/help.dismissSuggestion/"}]
layout: layout.njk
---

# help.dismissSuggestion

Dismiss a [suggestion, see here for more info »](/api/config/#suggestions).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/help.dismissSuggestion/" class="current_page_link">help.dismissSuggestion</a>#f50dbaa1 peer:<a href="/type/InputPeer/">InputPeer</a> suggestion:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>In the case of pending suggestions in <a href="/constructor/channelFull/">channels</a>, the channel ID.</td></tr><tr><td><strong>suggestion</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/config/#suggestions">Suggestion, see here for more info »</a>.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](/api/channel/#channels), [supergroup](/api/channel/#supergroups) or [gigagroup](/api/channel/#gigagroups).

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
