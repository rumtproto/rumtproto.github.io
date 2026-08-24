---
title: "messages.getEmojiURL"
original: "https://core.telegram.org/method/messages.getEmojiURL"
section: ref
description: "Returns an HTTP URL which can be used to automatically log in into translation platform and suggest new emoji keywords ». The URL will be valid for 30 seconds after generation."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getEmojiURL","url":"/method/messages.getEmojiURL/"}]
layout: layout.njk
---

# messages.getEmojiURL

Returns an HTTP URL which can be used to automatically log in into translation platform and suggest new [emoji keywords »](/api/custom-emoji/#emoji-keywords). The URL will be valid for 30 seconds after generation.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiURL/">emojiURL</a>#a575739d url:<a href="/type/string/">string</a> = <a href="/type/EmojiURL/">EmojiURL</a>;
---functions---
<a href="/method/messages.getEmojiURL/" class="current_page_link">messages.getEmojiURL</a>#d5b10c26 lang_code:<a href="/type/string/">string</a> = <a href="/type/EmojiURL/">EmojiURL</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language code for which the emoji keywords will be suggested</td></tr></tbody></table>

### Result

[EmojiURL](/type/EmojiURL/)

### Only users can use this method

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
