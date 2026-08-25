---
title: "aicompose.getTone"
original: "https://core.telegram.org/method/aicompose.getTone"
section: ref
description: "Fetch information about a single AI composer tone », for example to resolve a shared tone deep link."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"aicompose.getTone","url":"/method/aicompose.getTone/"}]
layout: layout.njk
---

# aicompose.getTone

Fetch information about a single [AI composer tone »](/api/ai/#ai-compose-tones), for example to resolve a shared tone deep link.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="/method/aicompose.getTone/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/type/InputAiComposeTone/">InputAiComposeTone</a></td><td>The tone to fetch</td></tr></tbody></table>

### Result

[aicompose.Tones](/type/aicompose.Tones/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_TONE_INVALID</td><td>The specified tone is invalid.</td></tr></tbody></table>

### Related pages

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
