---
title: "forumTopic"
original: "https://core.telegram.org/constructor/forumTopic"
section: ref
description: "Represents a forum topic."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"forumTopic","url":"/constructor/forumTopic/"}]
layout: layout.njk
---

# forumTopic

Represents a [forum topic](/api/forum/#forum-topics).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/forumTopic/" class="current_page_link">forumTopic</a>#cdff0eca flags:<a href="/type/%23/">#</a> my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> peer:<a href="/type/Peer/">Peer</a> title:<a href="/type/string/">string</a> icon_color:<a href="/type/int/">int</a> icon_emoji_id:flags.0?<a href="/type/long/">long</a> top_message:<a href="/type/int/">int</a> read_inbox_max_id:<a href="/type/int/">int</a> read_outbox_max_id:<a href="/type/int/">int</a> unread_count:<a href="/type/int/">int</a> unread_mentions_count:<a href="/type/int/">int</a> unread_reactions_count:<a href="/type/int/">int</a> from_id:<a href="/type/Peer/">Peer</a> notify_settings:<a href="/type/PeerNotifySettings/">PeerNotifySettings</a> draft:flags.4?<a href="/type/DraftMessage/">DraftMessage</a> = <a href="/type/ForumTopic/">ForumTopic</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>my</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the topic was created by the current user</td></tr><tr><td><strong>closed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether the topic is closed (no messages can be sent to it)</td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether the topic is pinned</td></tr><tr><td><strong>short</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether this constructor is a reduced version of the full topic information.<br>If set, only the <code>my</code>, <code>closed</code>, <code>id</code>, <code>date</code>, <code>title</code>, <code>icon_color</code>, <code>icon_emoji_id</code> and <code>from_id</code> parameters will contain valid information.<br>Reduced info is usually only returned in topic-related <a href="/api/recent-actions/">admin log events »</a> and in the <a href="/constructor/messages.channelMessages/">messages.channelMessages</a> constructor: if needed, full information can be fetched using <a href="/method/messages.getForumTopicsByID/">messages.getForumTopicsByID</a>.</td></tr><tr><td><strong>hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether the topic is hidden (only valid for the "General" topic, <code>id=1</code>)</td></tr><tr><td><strong>title_missing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>If set, the topic has no user-defined title, can only be set for the per-user topics of <a href="/api/forum/#bot-forums">bot forums</a>; if this field is set, the topic title likely needs to be changed by the bot.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/forum/#forum-topics">Topic ID</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Topic creation date</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Contains the supergroup/private chat where the topic is located.<br>This field is useful especially when this object is returned by methods like <a href="/method/messages.getMessages/">messages.getMessages</a>, which can return messages and forum topics belonging to different (private chat) peers in the same method call, making it impossible to tell the topic's peer based on the method call parameters or surrounding context.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Topic title</td></tr><tr><td><strong>icon_color</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>If no custom emoji icon is specified, specifies the color of the fallback topic icon (RGB), one of <code>0x6FB9F0</code>, <code>0xFFD67E</code>, <code>0xCB86DB</code>, <code>0x8EEE98</code>, <code>0xFF93B2</code>, or <code>0xFB6F5F</code>.</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>ID of the <a href="/api/custom-emoji/">custom emoji</a> used as topic icon.</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the last message that was sent to this topic</td></tr><tr><td><strong>read_inbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position up to which all incoming messages are read.</td></tr><tr><td><strong>read_outbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position up to which all outgoing messages are read.</td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread messages</td></tr><tr><td><strong>unread_mentions_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of <a href="/api/mentions/">unread mentions</a></td></tr><tr><td><strong>unread_reactions_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread reactions to messages you sent</td></tr><tr><td><strong>unread_poll_votes_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of <a href="/api/poll/#unread-poll-votes">unread votes cast in non-anonymous polls »</a> owned by the user in this forum topic.</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>ID of the peer that created the topic</td></tr><tr><td><strong>notify_settings</strong></td><td style="text-align: center;"><a href="/type/PeerNotifySettings/">PeerNotifySettings</a></td><td>Notification settings</td></tr><tr><td><strong>draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/DraftMessage/">DraftMessage</a></td><td>Message <a href="/api/drafts/">draft</a></td></tr></tbody></table>

### Type

[ForumTopic](/type/ForumTopic/)

### Related pages

#### [Admin log](/api/recent-actions/)

Both supergroups and channels offer a so-called admin log, a log of recent relevant supergroup and channel actions, like the modification of group/channel settings or information on behalf of an admin, user kicks and bans, and more.

#### [messages.channelMessages](/constructor/messages.channelMessages/)

Channel messages

#### [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/)

Get forum topics by their ID

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [messages.getMessages](/method/messages.getMessages/)

Returns the list of messages by their IDs.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Mentions and replies](/api/mentions/)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Message drafts](/api/drafts/)

How to handle message drafts
