---
title: "aicompose.deleteTone"
original: "https://core.telegram.org/method/aicompose.deleteTone"
section: ref
description: "Permanently delete a custom AI composer tone » created by the current user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"aicompose.deleteTone","url":"/method/aicompose.deleteTone/"}]
layout: layout.njk
---

# aicompose.deleteTone

Permanently delete a custom [AI composer tone »](/api/ai/#ai-compose-tones) created by the current user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="https://core.telegram.org/method/aicompose.deleteTone?layer=225">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/type/InputAiComposeTone/">InputAiComposeTone</a></td><td>The tone to delete</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_TONE_INVALID</td><td>The specified tone is invalid.</td></tr></tbody></table>

### Related pages

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
