---
title: "messages.setTyping"
original: "https://core.telegram.org/method/messages.setTyping"
section: ref
description: "Sends a current user typing event (see SendMessageAction for all event types) to a conversation partner or group."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.setTyping","url":"/method/messages.setTyping/"}]
layout: layout.njk
---

# messages.setTyping

Sends a current user typing event (see [SendMessageAction](/type/SendMessageAction/) for all event types) to a conversation partner or group.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.setTyping/" class="current_page_link">messages.setTyping</a>#58943ee2 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> top_msg_id:flags.0?<a href="/type/int/">int</a> action:<a href="/type/SendMessageAction/">SendMessageAction</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Target user or group</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td><a href="/api/threads/">Topic ID</a></td></tr><tr><td><strong>action</strong></td><td style="text-align: center;"><a href="/type/SendMessageAction/">SendMessageAction</a></td><td>Type of action</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>BUSINESS_PEER_INVALID</td><td>Messages can't be set to the specified peer through the current <a href="/api/business/#connected-bots">business connection</a>.</td></tr><tr><td>400</td><td>BUSINESS_PEER_USAGE_MISSING</td><td>You cannot send a message to a user through a <a href="/api/business/#connected-bots">business connection</a> if the user hasn't recently contacted us.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel/#monoforums">Monoforums</a> do not support this feature.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>403</td><td>GROUPCALL_FORBIDDEN</td><td>The specified group call cannot be used in this context.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>The provided message is too long.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>406</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>TEXTDRAFT_PEER_INVALID</td><td>sendMessageTextDraftAction can only be used in private 1-on-1 chats.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>You were blocked by this user.</td></tr><tr><td>400</td><td>USER_IS_BOT</td><td>Bots can't send messages to other bots.</td></tr></tbody></table>

### Related pages

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [SendMessageAction](/type/SendMessageAction/)

User actions. Use this to provide users with detailed info about their chat partner's actions: typing or sending attachments of all kinds.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
