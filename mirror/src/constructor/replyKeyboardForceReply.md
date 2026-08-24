---
title: "replyKeyboardForceReply"
original: "https://core.telegram.org/constructor/replyKeyboardForceReply"
section: ref
description: "Force the user to send a reply"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"replyKeyboardForceReply","url":"/constructor/replyKeyboardForceReply/"}]
layout: layout.njk
---

# replyKeyboardForceReply

Force the user to send a reply

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/replyKeyboardForceReply/" class="current_page_link">replyKeyboardForceReply</a>#86b40b08 flags:<a href="/type/%23/">#</a> single_use:flags.1?true selective:flags.2?true placeholder:flags.3?<a href="/type/string/">string</a> = <a href="/type/ReplyMarkup/">ReplyMarkup</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>single_use</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again.</td></tr><tr><td><strong>selective</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.<br>Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.</td></tr><tr><td><strong>placeholder</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>The placeholder to be shown in the input field when the keyboard is active; 1-64 characters.</td></tr></tbody></table>

### Type

[ReplyMarkup](/type/ReplyMarkup/)
