---
title: "messageActionTopicCreate"
original: "https://core.telegram.org/constructor/messageActionTopicCreate"
section: ref
description: "A forum topic was created."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionTopicCreate","url":"/constructor/messageActionTopicCreate/"}]
layout: layout.njk
---

# messageActionTopicCreate

A [forum topic](/api/forum/#forum-topics) was created.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionTopicCreate/" class="current_page_link">messageActionTopicCreate</a>#d999256 flags:<a href="/type/%23/">#</a> title_missing:flags.1?true title:<a href="/type/string/">string</a> icon_color:<a href="/type/int/">int</a> icon_emoji_id:flags.0?<a href="/type/long/">long</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>title_missing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, the topic has no user-defined title, can only be set for the per-user topics of <a href="/api/forum/#bot-forums">bot forums</a>; if this field is set, the topic title likely needs to be changed by the bot.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Topic name.</td></tr><tr><td><strong>icon_color</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>If no custom emoji icon is specified, specifies the color of the fallback topic icon (RGB), one of <code>0x6FB9F0</code>, <code>0xFFD67E</code>, <code>0xCB86DB</code>, <code>0x8EEE98</code>, <code>0xFF93B2</code>, or <code>0xFB6F5F</code>.</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>ID of the <a href="/api/custom-emoji/">custom emoji</a> used as topic icon.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
