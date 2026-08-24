---
title: "inputPollAnswer"
original: "https://core.telegram.org/constructor/inputPollAnswer"
section: ref
description: "An answer option to add to an open-answer poll »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPollAnswer","url":"/constructor/inputPollAnswer/"}]
layout: layout.njk
---

# inputPollAnswer

An answer option to add to an [open-answer poll »](/api/poll/#open-answer-polls)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 224. <a href="https://core.telegram.org/constructor/inputPollAnswer?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>The answer text</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputMedia/">InputMedia</a></td><td>Optional media attachment to display alongside the answer</td></tr></tbody></table>

### Type

[PollAnswer](/type/PollAnswer/)

### Related pages

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.
