---
title: "groupCallMessage"
original: "https://core.telegram.org/constructor/groupCallMessage"
section: ref
description: "Represents an in-call message », emoji reaction, paid live story comment or standalone paid live story donation."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"groupCallMessage","url":"/constructor/groupCallMessage/"}]
layout: layout.njk
---

# groupCallMessage

Represents an [in-call message »](/api/group-calls/#in-call-messages), emoji reaction, paid live story comment or standalone paid live story donation.

#### [End-to-end schema](/schema/end-to-end/)

```
===216===
groupCallMessage#907ce88e random_id:long message:TextWithEntities = GroupCallMessage;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/groupCallMessage/" class="current_page_link">groupCallMessage</a>#1a8afc7e flags:<a href="/type/%23/">#</a> from_admin:flags.1?true id:<a href="/type/int/">int</a> from_id:<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> message:<a href="/type/TextWithEntities/">TextWithEntities</a> paid_message_stars:flags.0?<a href="/type/long/">long</a> = <a href="/type/GroupCallMessage/">GroupCallMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>from_admin</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the message was sent by a group call admin</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Displayed message author</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message date</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Message text or emoji reaction; empty for standalone paid live story donations.<br>Must be at most <a href="/api/config/#group-call-message-length-limit"><code>group_call_message_length_limit</code> »</a> UTF-8 characters long.<br>For paid chats, use <a href="/api/config/#stars-groupcall-message-limits"><code>stars_groupcall_message_limits</code> »</a> to source limits according to the passed value of <code>paid_message_stars</code>, instead.</td></tr><tr><td><strong>paid_message_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>Number of Telegram Stars donated with the message or standalone donation</td></tr></tbody></table>

### Type

[GroupCallMessage](/type/GroupCallMessage/)

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
