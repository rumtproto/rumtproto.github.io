---
title: "Aicompose.Tones"
original: "https://core.telegram.org/type/aicompose.Tones"
section: ref
description: "The list of saved AI composer tones » of the current user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Aicompose.Tones","url":"/type/aicompose.Tones/"}]
layout: layout.njk
---

# Aicompose.Tones

The list of saved [AI composer tones »](/api/ai/#ai-compose-tones) of the current user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="/type/aicompose.Tones/">Switch »</a></code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/aicompose.tonesNotModified/">aicompose.tonesNotModified</a></td><td>The list of saved <a href="/api/ai/#ai-compose-tones">AI composer tones »</a> hasn't changed since the last time it was fetched (i.e. the <code>hash</code> passed to <a href="/method/aicompose.getTones/">aicompose.getTones</a> is still valid).</td></tr><tr><td><a href="/constructor/aicompose.tones/">aicompose.tones</a></td><td>The list of saved <a href="/api/ai/#ai-compose-tones">AI composer tones »</a> of the current user.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/aicompose.getTone/">aicompose.getTone</a></td><td>Fetch information about a single <a href="/api/ai/#ai-compose-tones">AI composer tone »</a>, for example to resolve a shared tone deep link.</td></tr><tr><td><a href="/method/aicompose.getTones/">aicompose.getTones</a></td><td>Fetch the list of saved <a href="/api/ai/#ai-compose-tones">AI composer tones »</a> of the current user.</td></tr></tbody></table>

### Related pages

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
