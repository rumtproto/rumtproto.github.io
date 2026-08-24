---
title: "inputMediaPoll"
original: "https://core.telegram.org/constructor/inputMediaPoll"
section: ref
description: "How to create styled text with message entities"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaPoll","url":"/constructor/inputMediaPoll/"}]
layout: layout.njk
---

# inputMediaPoll

A poll

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMediaPoll/" class="current_page_link">inputMediaPoll</a>#f94e5f1 flags:<a href="/type/%23/">#</a> poll:<a href="/type/Poll/">Poll</a> correct_answers:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt; solution:flags.1?<a href="/type/string/">string</a> solution_entities:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/InputMedia/">InputMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>poll</strong></td><td style="text-align: center;"><a href="/type/Poll/">Poll</a></td><td>The poll to send</td></tr><tr><td><strong>correct_answers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>0-based indices of the correct answers in the <code>answers</code> vector (for quiz polls)</td></tr><tr><td><strong>attached_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/InputMedia/">InputMedia</a></td><td>Optional media attachment to display alongside the poll</td></tr><tr><td><strong>solution</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds.</td></tr><tr><td><strong>solution_entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Styled text message entities</a> for the <code>solution</code> explanation.</td></tr><tr><td><strong>solution_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputMedia/">InputMedia</a></td><td>Optional media attachment shown alongside the quiz solution explanation</td></tr></tbody></table>

### Type

[InputMedia](/type/InputMedia/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
