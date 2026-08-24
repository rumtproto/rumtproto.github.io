---
title: "BotInlineResult"
original: "https://core.telegram.org/type/BotInlineResult"
section: ref
description: "Results of an inline query"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BotInlineResult","url":"/type/BotInlineResult/"}]
layout: layout.njk
---

# BotInlineResult

Results of an inline query

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botInlineResult/">botInlineResult</a>#11965f3a flags:<a href="/type/%23/">#</a> id:<a href="/type/string/">string</a> type:<a href="/type/string/">string</a> title:flags.1?<a href="/type/string/">string</a> description:flags.2?<a href="/type/string/">string</a> url:flags.3?<a href="/type/string/">string</a> thumb:flags.4?<a href="/type/WebDocument/">WebDocument</a> content:flags.5?<a href="/type/WebDocument/">WebDocument</a> send_message:<a href="/type/BotInlineMessage/">BotInlineMessage</a> = <a href="/type/BotInlineResult/" class="current_page_link">BotInlineResult</a>;
<a href="/constructor/botInlineMediaResult/">botInlineMediaResult</a>#17db940b flags:<a href="/type/%23/">#</a> id:<a href="/type/string/">string</a> type:<a href="/type/string/">string</a> photo:flags.0?<a href="/type/Photo/">Photo</a> document:flags.1?<a href="/type/Document/">Document</a> title:flags.2?<a href="/type/string/">string</a> description:flags.3?<a href="/type/string/">string</a> send_message:<a href="/type/BotInlineMessage/">BotInlineMessage</a> = <a href="/type/BotInlineResult/" class="current_page_link">BotInlineResult</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/botInlineResult/">botInlineResult</a></td><td>Generic result</td></tr><tr><td><a href="/constructor/botInlineMediaResult/">botInlineMediaResult</a></td><td>Media result</td></tr></tbody></table>
