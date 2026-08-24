---
title: "updateDeleteScheduledMessages"
original: "https://core.telegram.org/constructor/updateDeleteScheduledMessages"
section: ref
description: "Some scheduled messages were deleted (or sent) from the schedule queue of a chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateDeleteScheduledMessages","url":"/constructor/updateDeleteScheduledMessages/"}]
layout: layout.njk
---

# updateDeleteScheduledMessages

Some [scheduled messages](/api/scheduled-messages/) were deleted (or sent) from the schedule queue of a chat

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateDeleteScheduledMessages/" class="current_page_link">updateDeleteScheduledMessages</a>#f2a71983 flags:<a href="/type/%23/">#</a> peer:<a href="/type/Peer/">Peer</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; sent_messages:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Deleted scheduled messages</td></tr><tr><td><strong>sent_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>If set, this update indicates that some scheduled messages were sent (not simply deleted from the schedule queue).<br>In this case, the <code>messages</code> field will contain the scheduled message IDs for the sent messages (initially returned in <a href="/constructor/updateNewScheduledMessage/">updateNewScheduledMessage</a>), and <code>sent_messages</code> will contain the real message IDs for the sent messages.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/)

A message was added to the [schedule queue of a chat](/api/scheduled-messages/)

#### [Scheduled messages](/api/scheduled-messages/)

Telegram allows scheduling messages
