---
title: "messages.setDefaultReaction"
original: "https://core.telegram.org/method/messages.setDefaultReaction"
section: ref
description: "Change default emoji reaction to use in the quick reaction menu: the value is synced across devices and can be fetched using help.getConfig, reactions_default field."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.setDefaultReaction","url":"/method/messages.setDefaultReaction/"}]
layout: layout.njk
---

# messages.setDefaultReaction

Change default emoji reaction to use in the quick reaction menu: the value is synced across devices and can be fetched using [help.getConfig, `reactions_default` field](/method/help.getConfig/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.setDefaultReaction/" class="current_page_link">messages.setDefaultReaction</a>#4f47a016 reaction:<a href="/type/Reaction/">Reaction</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction/">Reaction</a></td><td>New emoji reaction</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>REACTION_INVALID</td><td>The specified reaction is invalid.</td></tr></tbody></table>

### Related pages

#### [help.getConfig](/method/help.getConfig/)

Returns current configuration, including data center configuration.
