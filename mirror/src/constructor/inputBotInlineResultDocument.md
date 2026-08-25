---
title: "inputBotInlineResultDocument"
original: "https://core.telegram.org/constructor/inputBotInlineResultDocument"
section: ref
description: "Document (media of any type except for photos)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputBotInlineResultDocument","url":"/constructor/inputBotInlineResultDocument/"}]
layout: layout.njk
---

# inputBotInlineResultDocument

Document (media of any type except for photos)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBotInlineResultDocument/" class="current_page_link">inputBotInlineResultDocument</a>#fff8fdc4 flags:<a href="/type/%23/">#</a> id:<a href="/type/string/">string</a> type:<a href="/type/string/">string</a> title:flags.1?<a href="/type/string/">string</a> description:flags.2?<a href="/type/string/">string</a> document:<a href="/type/InputDocument/">InputDocument</a> send_message:<a href="/type/InputBotInlineMessage/">InputBotInlineMessage</a> = <a href="/type/InputBotInlineResult/">InputBotInlineResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Result ID</td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Result type (see <a href="/bots/api/#inlinequeryresult">bot API docs</a>)</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Result title</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Result description</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/type/InputDocument/">InputDocument</a></td><td>Document to send</td></tr><tr><td><strong>send_message</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineMessage/">InputBotInlineMessage</a></td><td>Message to send when the result is selected</td></tr></tbody></table>

### Type

[InputBotInlineResult](/type/InputBotInlineResult/)

### Related pages

#### [Telegram Bot API](/bots/api/)
