---
title: "messages.composeMessageWithAI"
original: "https://core.telegram.org/method/messages.composeMessageWithAI"
section: ref
description: "Invokes telegram's AI Editor that can translate, transform, fixup and/or emojify your message in a number of different ways, privately powered by Cocoon, see here » for more info!"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.composeMessageWithAI","url":"/method/messages.composeMessageWithAI/"}]
layout: layout.njk
---

# messages.composeMessageWithAI

Invokes telegram's AI Editor that can translate, transform, fixup and/or emojify your message in a number of different ways, privately powered by [Cocoon](https://cocoon.org), see [here »](/api/ai/#compose-messages) for more info!

All of the modes specified below can be combined.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="/method/messages.composeMessageWithAI/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>proofread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, proofreads and fixes mistakes in the message</td></tr><tr><td><strong>emojify</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set, adds emojis to the message</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>The message</td></tr><tr><td><strong>translate_to_lang</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>If set, translates the message to the specified language</td></tr><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputAiComposeTone/">InputAiComposeTone</a></td><td>If set, rephrases the message using the specified <a href="/api/ai/#ai-compose-tones">AI composer tone »</a></td></tr></tbody></table>

### Result

[messages.ComposedMessageWithAI](/type/messages.ComposedMessageWithAI/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_FLOOD_PREMIUM</td><td>You've reached the daily limit of AI text transformations, upgrade to <a href="/api/premium/">Telegram Premium</a> to get <strong>50x</strong> times more AI text transformations per day!</td></tr><tr><td>500</td><td>AICOMPOSE_TIMEOUT</td><td>A timeout occurred while composing the message.</td></tr><tr><td>400</td><td>AI_COMPOSE_TASK_MISSING</td><td>No AI task was specified. The caller must provide at least one of: proofread, translate (with a target language), tone, or emojify.</td></tr><tr><td>400</td><td>MESSAGE_EMPTY</td><td>The provided message is empty.</td></tr></tbody></table>

### Related pages

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
