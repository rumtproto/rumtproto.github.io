---
title: "replyKeyboardHide"
original: "https://core.telegram.org/constructor/replyKeyboardHide"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"replyKeyboardHide","url":"/constructor/replyKeyboardHide/"}]
layout: layout.njk
---

# replyKeyboardHide

Hide sent reply keyboard

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/replyKeyboardHide/" class="current_page_link">replyKeyboardHide</a>#a03e5b85 flags:<a href="/type/%23/">#</a> selective:flags.2?true = <a href="/type/ReplyMarkup/">ReplyMarkup</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>selective</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Use this flag if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.<br><br>Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet</td></tr></tbody></table>

### Type

[ReplyMarkup](/type/ReplyMarkup/)
