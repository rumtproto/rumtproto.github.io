---
title: "updates.getDifference"
original: "https://core.telegram.org/method/updates.getDifference"
section: ref
description: "How to subscribe to updates and handle them properly."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"updates.getDifference","url":"/method/updates.getDifference/"}]
layout: layout.njk
---

# updates.getDifference

Get new [updates](/api/updates/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updates.differenceEmpty/">updates.differenceEmpty</a>#5d75a138 date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/updates.Difference/">updates.Difference</a>;
<a href="/constructor/updates.difference/">updates.difference</a>#f49ca0 new_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; new_encrypted_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EncryptedMessage/">EncryptedMessage</a>&gt; other_updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; state:<a href="/type/updates.State/">updates.State</a> = <a href="/type/updates.Difference/">updates.Difference</a>;
<a href="/constructor/updates.differenceSlice/">updates.differenceSlice</a>#a8fb1981 new_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; new_encrypted_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EncryptedMessage/">EncryptedMessage</a>&gt; other_updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; intermediate_state:<a href="/type/updates.State/">updates.State</a> = <a href="/type/updates.Difference/">updates.Difference</a>;
<a href="/constructor/updates.differenceTooLong/">updates.differenceTooLong</a>#4afe8f6d pts:<a href="/type/int/">int</a> = <a href="/type/updates.Difference/">updates.Difference</a>;
---functions---
<a href="/method/updates.getDifference/" class="current_page_link">updates.getDifference</a>#19c2f763 flags:<a href="/type/%23/">#</a> pts:<a href="/type/int/">int</a> pts_limit:flags.1?<a href="/type/int/">int</a> pts_total_limit:flags.0?<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> qts:<a href="/type/int/">int</a> qts_limit:flags.2?<a href="/type/int/">int</a> = <a href="/type/updates.Difference/">updates.Difference</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>PTS, see <a href="/api/updates/">updates</a>.</td></tr><tr><td><strong>pts_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>PTS limit</td></tr><tr><td><strong>pts_total_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>For fast updating: if provided and <code>pts + pts_total_limit &lt; remote pts</code>, <a href="/constructor/updates.differenceTooLong/">updates.differenceTooLong</a> will be returned.<br>Simply tells the server to not return the difference if it is bigger than <code>pts_total_limit</code><br>If the remote pts is too big (&gt; ~4000000), this field will default to 1000000</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>date, see <a href="/api/updates/">updates</a>.</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>QTS, see <a href="/api/updates/">updates</a>.</td></tr><tr><td><strong>qts_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>QTS limit</td></tr></tbody></table>

### Result

[updates.Difference](/type/updates.Difference/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CDN_METHOD_INVALID</td><td>You can't call this method in a CDN DC.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>DATE_EMPTY</td><td>Date empty.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PERSISTENT_TIMESTAMP_EMPTY</td><td>Persistent timestamp empty.</td></tr><tr><td>400</td><td>PERSISTENT_TIMESTAMP_INVALID</td><td>Persistent timestamp invalid.</td></tr><tr><td>500</td><td>RANDOM_ID_DUPLICATE</td><td>You provided a random ID that was already used.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>The provided username is not valid.</td></tr><tr><td>400</td><td>USER_NOT_PARTICIPANT</td><td>You're not a member of this supergroup/channel.</td></tr></tbody></table>

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [updates.differenceTooLong](/constructor/updates.differenceTooLong/)

The difference is [too long](/api/updates/#recovering-gaps), and the specified state must be used to refetch updates.
