---
title: "messages.getEmojiKeywordsDifference"
original: "https://core.telegram.org/method/messages.getEmojiKeywordsDifference"
section: ref
description: "Get changed emoji keywords »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getEmojiKeywordsDifference","url":"/method/messages.getEmojiKeywordsDifference/"}]
layout: layout.njk
---

# messages.getEmojiKeywordsDifference

Get changed [emoji keywords »](/api/custom-emoji/#emoji-keywords).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiKeywordsDifference/">emojiKeywordsDifference</a>#5cc761bd lang_code:<a href="/type/string/">string</a> from_version:<a href="/type/int/">int</a> version:<a href="/type/int/">int</a> keywords:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiKeyword/">EmojiKeyword</a>&gt; = <a href="/type/EmojiKeywordsDifference/">EmojiKeywordsDifference</a>;
---functions---
<a href="/method/messages.getEmojiKeywordsDifference/" class="current_page_link">messages.getEmojiKeywordsDifference</a>#1508b6af lang_code:<a href="/type/string/">string</a> from_version:<a href="/type/int/">int</a> = <a href="/type/EmojiKeywordsDifference/">EmojiKeywordsDifference</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language code</td></tr><tr><td><strong>from_version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Previous stored emoji keyword list <code>version</code></td></tr></tbody></table>

### Result

[EmojiKeywordsDifference](/type/EmojiKeywordsDifference/)

### Only users can use this method

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
