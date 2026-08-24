---
title: "monoForumDialog"
original: "https://core.telegram.org/constructor/monoForumDialog"
section: ref
description: "Represents a monoforum topic »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"monoForumDialog","url":"/constructor/monoForumDialog/"}]
layout: layout.njk
---

# monoForumDialog

Represents a [monoforum topic »](/api/monoforum/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/monoForumDialog/" class="current_page_link">monoForumDialog</a>#64407ea7 flags:<a href="/type/%23/">#</a> unread_mark:flags.3?true nopaid_messages_exception:flags.4?true peer:<a href="/type/Peer/">Peer</a> top_message:<a href="/type/int/">int</a> read_inbox_max_id:<a href="/type/int/">int</a> read_outbox_max_id:<a href="/type/int/">int</a> unread_count:<a href="/type/int/">int</a> unread_reactions_count:<a href="/type/int/">int</a> draft:flags.1?<a href="/type/DraftMessage/">DraftMessage</a> = <a href="/type/SavedDialog/">SavedDialog</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>unread_mark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this topic has a manually set (with <a href="/method/messages.markDialogUnread/">messages.markDialogUnread</a>) unread mark.</td></tr><tr><td><strong>nopaid_messages_exception</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>If set, an admin has exempted this peer from payment to send messages using <a href="/method/account.toggleNoPaidMessagesException/">account.toggleNoPaidMessagesException</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The peer associated to the topic, AKA the topic ID.</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The latest message ID</td></tr><tr><td><strong>read_inbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position up to which all incoming messages are read.</td></tr><tr><td><strong>read_outbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position up to which all outgoing messages are read.</td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread messages.</td></tr><tr><td><strong>unread_reactions_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread reactions.</td></tr><tr><td><strong>draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/DraftMessage/">DraftMessage</a></td><td>A pending message <a href="/api/drafts/">draft</a>.</td></tr></tbody></table>

### Type

[SavedDialog](/type/SavedDialog/)

### Related pages

#### [messages.markDialogUnread](/method/messages.markDialogUnread/)

Manually mark dialog as unread

#### [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/)

Allow a user to send us messages without paying if [paid messages »](/api/paid-messages/) are enabled.

#### [Message drafts](/api/drafts/)

How to handle message drafts

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
