---
title: "InputMessage"
original: "https://core.telegram.org/type/InputMessage"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputMessage","url":"/type/InputMessage/"}]
layout: layout.njk
---

# InputMessage

A message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMessageID/">inputMessageID</a>#a676a322 id:<a href="/type/int/">int</a> = <a href="/type/InputMessage/" class="current_page_link">InputMessage</a>;
<a href="/constructor/inputMessageReplyTo/">inputMessageReplyTo</a>#bad88395 id:<a href="/type/int/">int</a> = <a href="/type/InputMessage/" class="current_page_link">InputMessage</a>;
<a href="/constructor/inputMessagePinned/">inputMessagePinned</a>#86872538 = <a href="/type/InputMessage/" class="current_page_link">InputMessage</a>;
<a href="/constructor/inputMessageCallbackQuery/">inputMessageCallbackQuery</a>#acfa1a7e id:<a href="/type/int/">int</a> query_id:<a href="/type/long/">long</a> = <a href="/type/InputMessage/" class="current_page_link">InputMessage</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputMessageID/">inputMessageID</a></td><td>Message by ID</td></tr><tr><td><a href="/constructor/inputMessageReplyTo/">inputMessageReplyTo</a></td><td>Message to which the specified message replies to</td></tr><tr><td><a href="/constructor/inputMessagePinned/">inputMessagePinned</a></td><td>Pinned message</td></tr><tr><td><a href="/constructor/inputMessageCallbackQuery/">inputMessageCallbackQuery</a></td><td>Used by bots for fetching information about the message that originated a callback query</td></tr></tbody></table>
