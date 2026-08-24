---
title: "InputAiComposeTone"
original: "https://core.telegram.org/type/InputAiComposeTone"
section: ref
description: "References an AI composer tone », either a built-in default tone or a custom one (by ID or slug)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputAiComposeTone","url":"/type/InputAiComposeTone/"}]
layout: layout.njk
---

# InputAiComposeTone

References an [AI composer tone »](/api/ai/#ai-compose-tones), either a built-in default tone or a custom one (by ID or slug).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 228. <a href="https://core.telegram.org/type/InputAiComposeTone?layer=228">Switch »</a></code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputAiComposeToneDefault/">inputAiComposeToneDefault</a></td><td>References a built-in, default <a href="/api/ai/#ai-compose-tones">AI composer tone »</a> by its string identifier.</td></tr><tr><td><a href="/constructor/inputAiComposeToneID/">inputAiComposeToneID</a></td><td>References a custom <a href="/api/ai/#ai-compose-tones">AI composer tone »</a> by its ID and access hash.</td></tr><tr><td><a href="/constructor/inputAiComposeToneSlug/">inputAiComposeToneSlug</a></td><td>References a custom <a href="/api/ai/#ai-compose-tones">AI composer tone »</a> by its public slug, used when opening an <a href="/api/links/#ai-compose-tone-links">AI compose tone link »</a>.</td></tr></tbody></table>

### Related pages

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
