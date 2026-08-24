---
title: "ReplyMarkup"
original: "https://core.telegram.org/type/ReplyMarkup"
section: ref
description: "Reply markup for bot and inline keyboards"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ReplyMarkup","url":"/type/ReplyMarkup/"}]
layout: layout.njk
---

# ReplyMarkup

Reply markup for bot and inline keyboards

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/replyKeyboardHide/">replyKeyboardHide</a>#a03e5b85 flags:<a href="/type/%23/">#</a> selective:flags.2?true = <a href="/type/ReplyMarkup/" class="current_page_link">ReplyMarkup</a>;
<a href="/constructor/replyKeyboardForceReply/">replyKeyboardForceReply</a>#86b40b08 flags:<a href="/type/%23/">#</a> single_use:flags.1?true selective:flags.2?true placeholder:flags.3?<a href="/type/string/">string</a> = <a href="/type/ReplyMarkup/" class="current_page_link">ReplyMarkup</a>;
<a href="/constructor/replyKeyboardMarkup/">replyKeyboardMarkup</a>#85dd99d1 flags:<a href="/type/%23/">#</a> resize:flags.0?true single_use:flags.1?true selective:flags.2?true persistent:flags.4?true rows:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/KeyboardButtonRow/">KeyboardButtonRow</a>&gt; placeholder:flags.3?<a href="/type/string/">string</a> = <a href="/type/ReplyMarkup/" class="current_page_link">ReplyMarkup</a>;
<a href="/constructor/replyInlineMarkup/">replyInlineMarkup</a>#48a30254 rows:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/KeyboardButtonRow/">KeyboardButtonRow</a>&gt; = <a href="/type/ReplyMarkup/" class="current_page_link">ReplyMarkup</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/replyKeyboardHide/">replyKeyboardHide</a></td><td>Hide sent reply keyboard</td></tr><tr><td><a href="/constructor/replyKeyboardForceReply/">replyKeyboardForceReply</a></td><td>Force the user to send a reply</td></tr><tr><td><a href="/constructor/replyKeyboardMarkup/">replyKeyboardMarkup</a></td><td>Represents a reply keyboard</td></tr><tr><td><a href="/constructor/replyInlineMarkup/">replyInlineMarkup</a></td><td>Represents an inline keyboard</td></tr></tbody></table>
