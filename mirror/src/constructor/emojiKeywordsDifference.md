---
title: "emojiKeywordsDifference"
original: "https://core.telegram.org/constructor/emojiKeywordsDifference"
section: ref
description: "Changes to emoji keywords"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"emojiKeywordsDifference","url":"/constructor/emojiKeywordsDifference/"}]
layout: layout.njk
---

# emojiKeywordsDifference

Changes to emoji keywords

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiKeywordsDifference/" class="current_page_link">emojiKeywordsDifference</a>#5cc761bd lang_code:<a href="/type/string/">string</a> from_version:<a href="/type/int/">int</a> version:<a href="/type/int/">int</a> keywords:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiKeyword/">EmojiKeyword</a>&gt; = <a href="/type/EmojiKeywordsDifference/">EmojiKeywordsDifference</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language code for keywords</td></tr><tr><td><strong>from_version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Previous emoji keyword list version</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Current version of emoji keyword list</td></tr><tr><td><strong>keywords</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiKeyword/">EmojiKeyword</a>&gt;</td><td>Emojis associated to keywords</td></tr></tbody></table>

### Type

[EmojiKeywordsDifference](/type/EmojiKeywordsDifference/)
