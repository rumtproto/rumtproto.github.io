---
title: "messageActionTopicEdit"
original: "https://core.telegram.org/constructor/messageActionTopicEdit"
section: ref
description: "Forum topic information was edited."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionTopicEdit","url":"/constructor/messageActionTopicEdit/"}]
layout: layout.njk
---

# messageActionTopicEdit

[Forum topic](/api/forum/#forum-topics) information was edited.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionTopicEdit/" class="current_page_link">messageActionTopicEdit</a>#c0944820 flags:<a href="/type/%23/">#</a> title:flags.0?<a href="/type/string/">string</a> icon_emoji_id:flags.1?<a href="/type/long/">long</a> closed:flags.2?<a href="/type/Bool/">Bool</a> hidden:flags.3?<a href="/type/Bool/">Bool</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>New topic title.</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/long/">long</a></td><td>ID of the new <a href="/api/custom-emoji/">custom emoji</a> used as topic icon, or if it was removed.</td></tr><tr><td><strong>closed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Bool/">Bool</a></td><td>Whether the topic was opened or closed.</td></tr><tr><td><strong>hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Bool/">Bool</a></td><td>Whether the topic was hidden or unhidden (only valid for the "General" topic, <code>id=1</code>).</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
