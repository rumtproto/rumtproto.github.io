---
title: "inputBotInlineResult"
original: "https://core.telegram.org/constructor/inputBotInlineResult"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputBotInlineResult","url":"/constructor/inputBotInlineResult/"}]
layout: layout.njk
---

# inputBotInlineResult

An inline bot result

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBotInlineResult/" class="current_page_link">inputBotInlineResult</a>#88bf9319 flags:<a href="/type/%23/">#</a> id:<a href="/type/string/">string</a> type:<a href="/type/string/">string</a> title:flags.1?<a href="/type/string/">string</a> description:flags.2?<a href="/type/string/">string</a> url:flags.3?<a href="/type/string/">string</a> thumb:flags.4?<a href="/type/InputWebDocument/">InputWebDocument</a> content:flags.5?<a href="/type/InputWebDocument/">InputWebDocument</a> send_message:<a href="/type/InputBotInlineMessage/">InputBotInlineMessage</a> = <a href="/type/InputBotInlineResult/">InputBotInlineResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>ID of result</td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Result type (see <a href="https://core.telegram.org/bots/api#inlinequeryresult">bot API docs</a>)</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Result title</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Result description</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>URL of result</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/InputWebDocument/">InputWebDocument</a></td><td>Thumbnail for result</td></tr><tr><td><strong>content</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/InputWebDocument/">InputWebDocument</a></td><td>Result contents</td></tr><tr><td><strong>send_message</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineMessage/">InputBotInlineMessage</a></td><td>Message to send when the result is selected</td></tr></tbody></table>

### Type

[InputBotInlineResult](/type/InputBotInlineResult/)

### Related pages

#### [Telegram Bot API](https://core.telegram.org/bots/api)
