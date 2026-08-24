---
title: "messageActionSetMessagesTTL"
original: "https://core.telegram.org/constructor/messageActionSetMessagesTTL"
section: ref
description: "The Time-To-Live of messages in this chat was changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionSetMessagesTTL","url":"/constructor/messageActionSetMessagesTTL/"}]
layout: layout.njk
---

# messageActionSetMessagesTTL

The Time-To-Live of messages in this chat was changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionSetMessagesTTL/" class="current_page_link">messageActionSetMessagesTTL</a>#3c134d7b flags:<a href="/type/%23/">#</a> period:<a href="/type/int/">int</a> auto_setting_from:flags.0?<a href="/type/long/">long</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New Time-To-Live of all messages sent in this chat; if 0, autodeletion was disabled.</td></tr><tr><td><strong>auto_setting_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>If set, the chat TTL setting was set not due to a manual change by one of participants, but automatically because one of the participants has the <a href="/method/messages.setDefaultHistoryTTL/">default TTL settings enabled »</a>. For example, when a user writes to us for the first time and we have set a default messages TTL of 1 week, this service message (with <code>auto_setting_from=our_userid</code>) will be emitted before our first message.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [messages.setDefaultHistoryTTL](/method/messages.setDefaultHistoryTTL/)

Changes the default value of the Time-To-Live setting, applied to all new chats.
