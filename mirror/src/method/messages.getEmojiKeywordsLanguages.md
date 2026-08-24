---
title: "messages.getEmojiKeywordsLanguages"
original: "https://core.telegram.org/method/messages.getEmojiKeywordsLanguages"
section: ref
description: "Obtain a list of related languages that must be used when fetching emoji keyword lists »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getEmojiKeywordsLanguages","url":"/method/messages.getEmojiKeywordsLanguages/"}]
layout: layout.njk
---

# messages.getEmojiKeywordsLanguages

Obtain a list of related languages that must be used when fetching [emoji keyword lists »](/api/custom-emoji/#emoji-keywords).

Usually the method will return the passed language codes (if localized) + `en` + some language codes for similar languages (if applicable).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/messages.getEmojiKeywordsLanguages/" class="current_page_link">messages.getEmojiKeywordsLanguages</a>#4e9963b2 lang_codes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiLanguage/">EmojiLanguage</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lang_codes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>The user's language codes</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[EmojiLanguage](/type/EmojiLanguage/)\>

### Only users can use this method

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
