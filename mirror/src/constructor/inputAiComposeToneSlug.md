---
title: "inputAiComposeToneSlug"
original: "https://core.telegram.org/constructor/inputAiComposeToneSlug"
section: ref
description: "References a custom AI composer tone » by its public slug, used when opening an AI compose tone link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputAiComposeToneSlug","url":"/constructor/inputAiComposeToneSlug/"}]
layout: layout.njk
---

# inputAiComposeToneSlug

References a custom [AI composer tone »](/api/ai/#ai-compose-tones) by its public slug, used when opening an [AI compose tone link »](/api/links/#ai-compose-tone-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 225. <a href="https://core.telegram.org/constructor/inputAiComposeToneSlug?layer=225">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Public tone slug, as returned in <a href="/constructor/aiComposeTone/">aiComposeTone</a>.<code>slug</code></td></tr></tbody></table>

### Type

[InputAiComposeTone](/type/InputAiComposeTone/)

### Related pages

#### [aiComposeTone](/constructor/aiComposeTone/)

A custom [AI composer tone »](/api/ai/#ai-compose-tones), used to rephrase messages in a specific style with the [AI message composer](/api/ai/#compose-messages).

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
