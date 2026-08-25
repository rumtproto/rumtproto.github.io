---
title: "inputAiComposeToneID"
original: "https://core.telegram.org/constructor/inputAiComposeToneID"
section: ref
description: "References a custom AI composer tone » by its ID and access hash."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputAiComposeToneID","url":"/constructor/inputAiComposeToneID/"}]
layout: layout.njk
---

# inputAiComposeToneID

References a custom [AI composer tone »](/api/ai/#ai-compose-tones) by its ID and access hash.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 225. <a href="/constructor/inputAiComposeToneID/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Tone identifier, as returned in <a href="/constructor/aiComposeTone/">aiComposeTone</a>.<code>id</code></td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Tone <a href="/api/peers/#access-hash">access hash</a>, as returned in <a href="/constructor/aiComposeTone/">aiComposeTone</a>.<code>access_hash</code></td></tr></tbody></table>

### Type

[InputAiComposeTone](/type/InputAiComposeTone/)

### Related pages

#### [aiComposeTone](/constructor/aiComposeTone/)

A custom [AI composer tone »](/api/ai/#ai-compose-tones), used to rephrase messages in a specific style with the [AI message composer](/api/ai/#compose-messages).

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
