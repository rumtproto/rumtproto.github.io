---
title: "invokeWithoutUpdates"
original: "https://core.telegram.org/method/invokeWithoutUpdates"
section: ref
description: "Invoke a request without subscribing the used connection for updates (this is enabled by default for file queries)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"invokeWithoutUpdates","url":"/method/invokeWithoutUpdates/"}]
layout: layout.njk
---

# invokeWithoutUpdates

Invoke a request without subscribing the used connection for [updates](/api/updates/) (this is enabled by default for [file queries](/api/files/)).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/invokeWithoutUpdates/" class="current_page_link">invokeWithoutUpdates</a>#bf9459b7 {X:Type} query:!X = X;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>The query</td></tr></tbody></table>

### Result

Returns the type returned by the invoked method.

### Both users and bots can use this method

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
