---
title: "updates.getChannelDifference"
original: "https://core.telegram.org/method/updates.getChannelDifference"
section: ref
description: "Returns the difference between the current state of updates of a certain channel and transmitted."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"updates.getChannelDifference","url":"/method/updates.getChannelDifference/"}]
layout: layout.njk
---

# updates.getChannelDifference

Returns the difference between the current state of updates of a certain channel and transmitted.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updates.channelDifferenceEmpty/">updates.channelDifferenceEmpty</a>#3e11affb flags:<a href="/type/%23/">#</a> final:flags.0?true pts:<a href="/type/int/">int</a> timeout:flags.1?<a href="/type/int/">int</a> = <a href="/type/updates.ChannelDifference/">updates.ChannelDifference</a>;
<a href="/constructor/updates.channelDifferenceTooLong/">updates.channelDifferenceTooLong</a>#a4bcc6fe flags:<a href="/type/%23/">#</a> final:flags.0?true timeout:flags.1?<a href="/type/int/">int</a> dialog:<a href="/type/Dialog/">Dialog</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/updates.ChannelDifference/">updates.ChannelDifference</a>;
<a href="/constructor/updates.channelDifference/">updates.channelDifference</a>#2064674e flags:<a href="/type/%23/">#</a> final:flags.0?true pts:<a href="/type/int/">int</a> timeout:flags.1?<a href="/type/int/">int</a> new_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; other_updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/updates.ChannelDifference/">updates.ChannelDifference</a>;
---functions---
<a href="/method/updates.getChannelDifference/" class="current_page_link">updates.getChannelDifference</a>#3173d78 flags:<a href="/type/%23/">#</a> force:flags.0?true channel:<a href="/type/InputChannel/">InputChannel</a> filter:<a href="/type/ChannelMessagesFilter/">ChannelMessagesFilter</a> pts:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/updates.ChannelDifference/">updates.ChannelDifference</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>force</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Set to true to skip some possibly unneeded updates and reduce server-side load</td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>The channel</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/ChannelMessagesFilter/">ChannelMessagesFilter</a></td><td>Messsage filter</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Persistent timestamp (see <a href="/api/updates/">updates</a>)</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>How many updates to fetch, max <code>100000</code><br>Ordinary (non-bot) users are supposed to pass <code>10-100</code></td></tr></tbody></table>

### Result

[updates.ChannelDifference](/type/updates.ChannelDifference/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHANNEL_PUBLIC_GROUP_NA</td><td>channel/supergroup not available.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>FROM_MESSAGE_BOT_DISABLED</td><td>Bots can't use fromMessage min constructors.</td></tr><tr><td>400</td><td>FROZEN_PARTICIPANT_MISSING</td><td>The current account is <a href="/api/auth/#frozen-accounts">frozen</a>, and cannot access the specified peer.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PERSISTENT_TIMESTAMP_EMPTY</td><td>Persistent timestamp empty.</td></tr><tr><td>400</td><td>PERSISTENT_TIMESTAMP_INVALID</td><td>Persistent timestamp invalid.</td></tr><tr><td>500</td><td>PERSISTENT_TIMESTAMP_OUTDATED</td><td>Channel internal replication issues, try again later (treat this like an RPC_CALL_FAIL).</td></tr><tr><td>400</td><td>PINNED_DIALOGS_TOO_MUCH</td><td>Too many pinned dialogs.</td></tr><tr><td>400</td><td>RANGES_INVALID</td><td>Invalid range provided.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr></tbody></table>

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
