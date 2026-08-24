---
title: "messages.composedMessageWithAI"
original: "https://core.telegram.org/constructor/messages.composedMessageWithAI"
section: ref
description: "Represents a message modified by AI."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.composedMessageWithAI","url":"/constructor/messages.composedMessageWithAI/"}]
layout: layout.njk
---

# messages.composedMessageWithAI

Represents a message modified by AI.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 224. <a href="https://core.telegram.org/constructor/messages.composedMessageWithAI?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>result_text</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>The modified message.</td></tr><tr><td><strong>diff_text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>If <strong>only</strong> the proofreading mode (<a href="/method/messages.composeMessageWithAI/">messages.composeMessageWithAI</a>.<code>proofread</code>) is enabled, this field will be populated with a "pre-rendered" diff between the old and the new message text using <strong>only</strong> <a href="/api/entities/#diff-entities">diff entities »</a>.</td></tr></tbody></table>

### Type

[messages.ComposedMessageWithAI](/type/messages.ComposedMessageWithAI/)

### Related pages

#### [messages.composeMessageWithAI](/method/messages.composeMessageWithAI/)

Invokes telegram's AI Editor that can translate, transform, fixup and/or emojify your message in a number of different ways, privately powered by [Cocoon](https://cocoon.org), see [here »](/api/ai/#compose-messages) for more info!

All of the modes specified below can be combined.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
