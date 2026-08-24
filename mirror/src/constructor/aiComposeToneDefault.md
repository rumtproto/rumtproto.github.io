---
title: "aiComposeToneDefault"
original: "https://core.telegram.org/constructor/aiComposeToneDefault"
section: ref
description: "A built-in, default AI composer tone », identified by a string identifier rather than by a numeric ID."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"aiComposeToneDefault","url":"/constructor/aiComposeToneDefault/"}]
layout: layout.njk
---

# aiComposeToneDefault

A built-in, default [AI composer tone »](/api/ai/#ai-compose-tones), identified by a string identifier rather than by a numeric ID.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 225. <a href="https://core.telegram.org/constructor/aiComposeToneDefault?layer=225">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>String identifier of the built-in tone, to be passed to <a href="/constructor/inputAiComposeToneDefault/">inputAiComposeToneDefault</a></td></tr><tr><td><strong>emoji_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/custom-emoji/">Custom emoji ID</a> of the tone's icon</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Localized, human-readable name of the tone</td></tr></tbody></table>

### Type

[AiComposeTone](/type/AiComposeTone/)

### Related pages

#### [inputAiComposeToneDefault](/constructor/inputAiComposeToneDefault/)

References a built-in, default [AI composer tone »](/api/ai/#ai-compose-tones) by its string identifier.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
