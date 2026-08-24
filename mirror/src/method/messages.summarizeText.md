---
title: "messages.summarizeText"
original: "https://core.telegram.org/method/messages.summarizeText"
section: ref
description: "Summarize the contents of a message with AI, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.summarizeText","url":"/method/messages.summarizeText/"}]
layout: layout.njk
---

# messages.summarizeText

Summarize the contents of a message with AI, see [here »](/api/ai/#summarize-messages) for more info.

Clients should use [message](/constructor/message/).`summary_from_language` as a hint for showing a summarization button; its absence does not forbid invoking this method.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/textWithEntities/">textWithEntities</a>#751f3146 text:<a href="/type/string/">string</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/TextWithEntities/">TextWithEntities</a>;
---functions---
<a href="/method/messages.summarizeText/" class="current_page_link">messages.summarizeText</a>#9d4104e2 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/int/">int</a> to_lang:flags.0?<a href="/type/string/">string</a> = <a href="/type/TextWithEntities/">TextWithEntities</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer where the message is located.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID.</td></tr><tr><td><strong>to_lang</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>If set, generates the summary in the specified target language (two-letter ISO 639-1 language code) instead of the message's language.</td></tr><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>If set, rephrases the summary using the specified <a href="/api/ai/#ai-compose-tones">AI composer tone »</a> (pass the tone identifier)</td></tr></tbody></table>

### Result

[TextWithEntities](/type/TextWithEntities/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>INPUT_TEXT_TOO_LONG</td><td>The specified text is too long.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.

#### [message](/constructor/message/)

A message
