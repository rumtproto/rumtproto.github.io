---
title: "EmojiURL"
original: "https://core.telegram.org/type/EmojiURL"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EmojiURL","url":"/type/EmojiURL/"}]
layout: layout.njk
---

# EmojiURL

Emoji URL

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiURL/">emojiURL</a>#a575739d url:<a href="/type/string/">string</a> = <a href="/type/EmojiURL/" class="current_page_link">EmojiURL</a>;

---functions---

<a href="/method/messages.getEmojiURL/">messages.getEmojiURL</a>#d5b10c26 lang_code:<a href="/type/string/">string</a> = <a href="/type/EmojiURL/" class="current_page_link">EmojiURL</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/emojiURL/">emojiURL</a></td><td>An HTTP URL which can be used to automatically log in into translation platform and suggest new emoji replacements. The URL will be valid for 30 seconds after generation</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getEmojiURL/">messages.getEmojiURL</a></td><td>Returns an HTTP URL which can be used to automatically log in into translation platform and suggest new <a href="/api/custom-emoji/#emoji-keywords">emoji keywords »</a>. The URL will be valid for 30 seconds after generation.</td></tr></tbody></table>
