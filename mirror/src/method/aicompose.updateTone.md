---
title: "aicompose.updateTone"
original: "https://core.telegram.org/method/aicompose.updateTone"
section: ref
description: "Edit a custom AI composer tone » previously created by the current user. Only the fields whose flag is set will be modified."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"aicompose.updateTone","url":"/method/aicompose.updateTone/"}]
layout: layout.njk
---

# aicompose.updateTone

Edit a custom [AI composer tone »](/api/ai/#ai-compose-tones) previously created by the current user. Only the fields whose flag is set will be modified.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="/method/aicompose.updateTone/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/type/InputAiComposeTone/">InputAiComposeTone</a></td><td>The tone to edit</td></tr><tr><td><strong>display_author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Bool/">Bool</a></td><td>If set, changes whether the current user is publicly credited as the author of the tone (ternary value, can be not set, set and true, set and false).</td></tr><tr><td><strong>emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/long/">long</a></td><td>If set, the new <a href="/api/custom-emoji/">custom emoji ID</a> of the tone's icon</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>If set, the new human-readable tone name, up to <a href="/api/config/#aicompose-tone-title-length-max">aicompose_tone_title_length_max »</a> UTF-8 characters long</td></tr><tr><td><strong>prompt</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>If set, the new prompt that describes how the AI should rephrase messages using this tone, up to <a href="/api/config/#aicompose-tone-prompt-length-max">aicompose_tone_prompt_length_max »</a> UTF-8 characters long</td></tr></tbody></table>

### Result

[AiComposeTone](/type/AiComposeTone/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_TONE_INVALID</td><td>The specified tone is invalid.</td></tr></tbody></table>

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
