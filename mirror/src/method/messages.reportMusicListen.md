---
title: "messages.reportMusicListen"
original: "https://core.telegram.org/method/messages.reportMusicListen"
section: ref
description: "Report the listening duration of a music track (audio document without the voice flag), see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reportMusicListen","url":"/method/messages.reportMusicListen/"}]
layout: layout.njk
---

# messages.reportMusicListen

Report the listening duration of a music track (audio document without the `voice` flag), see [here »](/api/views/#music-listens) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 224. <a href="https://core.telegram.org/method/messages.reportMusicListen?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument/">InputDocument</a></td><td>The <a href="/type/InputDocument/">InputDocument</a> of the listened song</td></tr><tr><td><strong>listened_duration</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Accumulated playing time in whole seconds</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [InputDocument](/type/InputDocument/)

Defines a document for subsequent interaction.

#### [Views and read metrics](/api/views/)

Clients should report read state, message views and music listens using a specific set of methods.
