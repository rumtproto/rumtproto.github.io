---
title: "updateReadHistoryInbox"
original: "https://core.telegram.org/constructor/updateReadHistoryInbox"
section: ref
description: "Incoming messages were read"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateReadHistoryInbox","url":"/constructor/updateReadHistoryInbox/"}]
layout: layout.njk
---

# updateReadHistoryInbox

Incoming messages were read

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateReadHistoryInbox/" class="current_page_link">updateReadHistoryInbox</a>#9e84bc99 flags:<a href="/type/%23/">#</a> folder_id:flags.0?<a href="/type/int/">int</a> peer:<a href="/type/Peer/">Peer</a> top_msg_id:flags.1?<a href="/type/int/">int</a> max_id:<a href="/type/int/">int</a> still_unread_count:<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>If set, the messages were read only within the specified <a href="/api/forum/#bot-forums">bot forum topic »</a>.</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum ID of messages read</td></tr><tr><td><strong>still_unread_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of messages that are still unread</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Event count after generation</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Number of events that were generated</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
