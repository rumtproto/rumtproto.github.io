---
title: "aiComposeTone"
original: "https://core.telegram.org/constructor/aiComposeTone"
section: ref
description: "A custom AI composer tone », used to rephrase messages in a specific style with the AI message composer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"aiComposeTone","url":"/constructor/aiComposeTone/"}]
layout: layout.njk
---

# aiComposeTone

A custom [AI composer tone »](/api/ai/#ai-compose-tones), used to rephrase messages in a specific style with the [AI message composer](/api/ai/#compose-messages).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 225. <a href="/constructor/aiComposeTone/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the current user is the creator of this tone</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Tone identifier</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Tone access hash</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Unique tone slug, used to share and install the tone via <a href="/api/links/#ai-compose-tone-links">AI compose tone links »</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Human-readable tone name, up to <a href="/api/config/#aicompose-tone-title-length-max">aicompose_tone_title_length_max »</a> UTF-8 characters long</td></tr><tr><td><strong>emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/long/">long</a></td><td><a href="/api/custom-emoji/">Custom emoji ID</a> of the tone's icon</td></tr><tr><td><strong>prompt</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>The prompt that describes how the AI should rephrase messages using this tone, up to <a href="/api/config/#aicompose-tone-prompt-length-max">aicompose_tone_prompt_length_max »</a> UTF-8 characters long; only present for tones created by the current user</td></tr><tr><td><strong>installs_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Number of users that have installed this tone</td></tr><tr><td><strong>author_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/long/">long</a></td><td>ID of the user that created this tone, if made public by the author.</td></tr><tr><td><strong>example_english</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/AiComposeToneExample/">AiComposeToneExample</a></td><td>An example showing how a sample English message is rephrased by this tone; use <a href="/method/aicompose.getToneExample/">aicompose.getToneExample</a> to fetch more examples.</td></tr></tbody></table>

### Type

[AiComposeTone](/type/AiComposeTone/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [aicompose.getToneExample](/method/aicompose.getToneExample/)

Fetch an example showing how an [AI composer tone »](/api/ai/#ai-compose-tones) rephrases a sample message, used as a preview in the tone picker.

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
