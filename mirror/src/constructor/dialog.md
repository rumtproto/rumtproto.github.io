---
title: "dialog"
original: "https://core.telegram.org/constructor/dialog"
section: ref
description: "Telegram allows creating forums with multiple distinct topics."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"dialog","url":"/constructor/dialog/"}]
layout: layout.njk
---

# dialog

Chat

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/dialog/" class="current_page_link">dialog</a>#d58a08c6 flags:<a href="/type/%23/">#</a> pinned:flags.2?true unread_mark:flags.3?true view_forum_as_messages:flags.6?true peer:<a href="/type/Peer/">Peer</a> top_message:<a href="/type/int/">int</a> read_inbox_max_id:<a href="/type/int/">int</a> read_outbox_max_id:<a href="/type/int/">int</a> unread_count:<a href="/type/int/">int</a> unread_mentions_count:<a href="/type/int/">int</a> unread_reactions_count:<a href="/type/int/">int</a> notify_settings:<a href="/type/PeerNotifySettings/">PeerNotifySettings</a> pts:flags.0?<a href="/type/int/">int</a> draft:flags.1?<a href="/type/DraftMessage/">DraftMessage</a> folder_id:flags.4?<a href="/type/int/">int</a> ttl_period:flags.5?<a href="/type/int/">int</a> = <a href="/type/Dialog/">Dialog</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Is the dialog pinned</td></tr><tr><td><strong>unread_mark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether the chat was manually marked as unread</td></tr><tr><td><strong>view_forum_as_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Users may also choose to display messages from all topics of a <a href="/api/forum/">forum</a> as if they were sent to a normal group, using a "View as messages" setting in the local client.<br>This setting only affects the current account, and is synced to other logged in sessions using the <a href="/method/channels.toggleViewForumAsMessages/">channels.toggleViewForumAsMessages</a> method; invoking this method will update the value of this flag.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The chat</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The latest message ID</td></tr><tr><td><strong>read_inbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position up to which all incoming messages are read.</td></tr><tr><td><strong>read_outbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position up to which all outgoing messages are read.</td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread messages</td></tr><tr><td><strong>unread_mentions_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of <a href="/api/mentions/">unread mentions</a></td></tr><tr><td><strong>unread_reactions_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread reactions to messages you sent</td></tr><tr><td><strong>unread_poll_votes_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of <a href="/api/poll/#unread-poll-votes">unread votes cast in non-anonymous polls »</a> owned by the user in this dialog.</td></tr><tr><td><strong>notify_settings</strong></td><td style="text-align: center;"><a href="/type/PeerNotifySettings/">PeerNotifySettings</a></td><td>Notification settings</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td><a href="/api/updates/">PTS</a></td></tr><tr><td><strong>draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/DraftMessage/">DraftMessage</a></td><td>Message <a href="/api/drafts/">draft</a></td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>Time-to-live of all messages sent in this dialog</td></tr></tbody></table>

### Type

[Dialog](/type/Dialog/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/)

Users may also choose to display messages from all topics of a [forum](/api/forum/) as if they were sent to a normal group, using a "View as messages" setting in the local client: this setting only affects the current account, and is synced to other logged in sessions using this method.

Invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

#### [Mentions and replies](/api/mentions/)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Message drafts](/api/drafts/)

How to handle message drafts

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
