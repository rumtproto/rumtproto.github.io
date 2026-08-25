---
title: "aicompose.getToneExample"
original: "https://core.telegram.org/method/aicompose.getToneExample"
section: ref
description: "Fetch an example showing how an AI composer tone » rephrases a sample message, used as a preview in the tone picker."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"aicompose.getToneExample","url":"/method/aicompose.getToneExample/"}]
layout: layout.njk
---

# aicompose.getToneExample

Fetch an example showing how an [AI composer tone »](/api/ai/#ai-compose-tones) rephrases a sample message, used as a preview in the tone picker.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="/method/aicompose.getToneExample/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/type/InputAiComposeTone/">InputAiComposeTone</a></td><td>The tone to preview</td></tr><tr><td><strong>num</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>0-based index of the example to fetch, to cycle through the available examples (there are <a href="/api/config/#aicompose-tone-examples-num">aicompose_tone_examples_num »</a> examples per tone)</td></tr></tbody></table>

### Result

[AiComposeToneExample](/type/AiComposeToneExample/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_TONE_INVALID</td><td>The specified tone is invalid.</td></tr></tbody></table>

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
