---
title: "aicompose.getTones"
original: "https://core.telegram.org/method/aicompose.getTones"
section: ref
description: "Fetch the list of saved AI composer tones » of the current user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"aicompose.getTones","url":"/method/aicompose.getTones/"}]
layout: layout.njk
---

# aicompose.getTones

Fetch the list of saved [AI composer tones »](/api/ai/#ai-compose-tones) of the current user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="https://core.telegram.org/method/aicompose.getTones?layer=225">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Hash from a previously cached <a href="/constructor/aicompose.tones/">aicompose.tones</a>.<code>hash</code> to avoid refetching the list if it hasn't changed; initially 0.</td></tr></tbody></table>

### Result

[aicompose.Tones](/type/aicompose.Tones/)

### Only users can use this method

### Related pages

#### [aicompose.tones](/constructor/aicompose.tones/)

The list of saved [AI composer tones »](/api/ai/#ai-compose-tones) of the current user.

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
