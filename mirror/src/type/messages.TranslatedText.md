---
title: "messages.TranslatedText"
original: "https://core.telegram.org/type/messages.TranslatedText"
section: ref
description: "Translated text with entities."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.TranslatedText","url":"/type/messages.TranslatedText/"}]
layout: layout.njk
---

# messages.TranslatedText

Translated text with [entities](/api/entities/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.translateResult/">messages.translateResult</a>#33db32f8 result:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TextWithEntities/">TextWithEntities</a>&gt; = <a href="/type/messages.TranslatedText/" class="current_page_link">messages.TranslatedText</a>;

---functions---

<a href="/method/messages.translateText/">messages.translateText</a>#63183030 flags:<a href="/type/%23/">#</a> peer:flags.0?<a href="/type/InputPeer/">InputPeer</a> id:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; text:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TextWithEntities/">TextWithEntities</a>&gt; to_lang:<a href="/type/string/">string</a> = <a href="/type/messages.TranslatedText/" class="current_page_link">messages.TranslatedText</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.translateResult/">messages.translateResult</a></td><td>Translated text with <a href="/api/entities/">entities</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.translateText/">messages.translateText</a></td><td>Translate a given text.<br><br><a href="/api/entities/">Styled text entities</a> will only be preserved for <a href="/api/premium/">Telegram Premium</a> users.</td></tr></tbody></table>

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
