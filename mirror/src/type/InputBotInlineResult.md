---
title: "InputBotInlineResult"
original: "https://core.telegram.org/type/InputBotInlineResult"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputBotInlineResult","url":"/type/InputBotInlineResult/"}]
layout: layout.njk
---

# InputBotInlineResult

Inline bot result

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBotInlineResult/">inputBotInlineResult</a>#88bf9319 flags:<a href="/type/%23/">#</a> id:<a href="/type/string/">string</a> type:<a href="/type/string/">string</a> title:flags.1?<a href="/type/string/">string</a> description:flags.2?<a href="/type/string/">string</a> url:flags.3?<a href="/type/string/">string</a> thumb:flags.4?<a href="/type/InputWebDocument/">InputWebDocument</a> content:flags.5?<a href="/type/InputWebDocument/">InputWebDocument</a> send_message:<a href="/type/InputBotInlineMessage/">InputBotInlineMessage</a> = <a href="/type/InputBotInlineResult/" class="current_page_link">InputBotInlineResult</a>;
<a href="/constructor/inputBotInlineResultPhoto/">inputBotInlineResultPhoto</a>#a8d864a7 id:<a href="/type/string/">string</a> type:<a href="/type/string/">string</a> photo:<a href="/type/InputPhoto/">InputPhoto</a> send_message:<a href="/type/InputBotInlineMessage/">InputBotInlineMessage</a> = <a href="/type/InputBotInlineResult/" class="current_page_link">InputBotInlineResult</a>;
<a href="/constructor/inputBotInlineResultDocument/">inputBotInlineResultDocument</a>#fff8fdc4 flags:<a href="/type/%23/">#</a> id:<a href="/type/string/">string</a> type:<a href="/type/string/">string</a> title:flags.1?<a href="/type/string/">string</a> description:flags.2?<a href="/type/string/">string</a> document:<a href="/type/InputDocument/">InputDocument</a> send_message:<a href="/type/InputBotInlineMessage/">InputBotInlineMessage</a> = <a href="/type/InputBotInlineResult/" class="current_page_link">InputBotInlineResult</a>;
<a href="/constructor/inputBotInlineResultGame/">inputBotInlineResultGame</a>#4fa417f2 id:<a href="/type/string/">string</a> short_name:<a href="/type/string/">string</a> send_message:<a href="/type/InputBotInlineMessage/">InputBotInlineMessage</a> = <a href="/type/InputBotInlineResult/" class="current_page_link">InputBotInlineResult</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputBotInlineResult/">inputBotInlineResult</a></td><td>An inline bot result</td></tr><tr><td><a href="/constructor/inputBotInlineResultPhoto/">inputBotInlineResultPhoto</a></td><td>Photo</td></tr><tr><td><a href="/constructor/inputBotInlineResultDocument/">inputBotInlineResultDocument</a></td><td>Document (media of any type except for photos)</td></tr><tr><td><a href="/constructor/inputBotInlineResultGame/">inputBotInlineResultGame</a></td><td>Game</td></tr></tbody></table>
