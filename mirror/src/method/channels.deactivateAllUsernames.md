---
title: "channels.deactivateAllUsernames"
original: "https://core.telegram.org/method/channels.deactivateAllUsernames"
section: ref
description: "Disable all purchased usernames of a supergroup or channel"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.deactivateAllUsernames","url":"/method/channels.deactivateAllUsernames/"}]
layout: layout.njk
---

# channels.deactivateAllUsernames

Disable all purchased usernames of a supergroup or channel

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/channels.deactivateAllUsernames/" class="current_page_link">channels.deactivateAllUsernames</a>#a245dd3 channel:<a href="/type/InputChannel/">InputChannel</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>Supergroup or channel</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr></tbody></table>
