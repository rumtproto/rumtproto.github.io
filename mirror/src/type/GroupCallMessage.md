---
title: "GroupCallMessage"
original: "https://core.telegram.org/type/GroupCallMessage"
section: ref
description: "Represents an in-call message, emoji reaction », paid live story comment or standalone paid live story donation."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"GroupCallMessage","url":"/type/GroupCallMessage/"}]
layout: layout.njk
---

# GroupCallMessage

Represents an in-call message, [emoji reaction »](/api/group-calls/#in-call-reactions), paid live story comment or standalone paid live story donation.

#### [End-to-end schema](/schema/end-to-end/)

```
===216===
groupCallMessage#907ce88e random_id:long message:TextWithEntities = GroupCallMessage;
```

API schema:

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/groupCallMessage/">groupCallMessage</a>#1a8afc7e flags:<a href="/type/%23/">#</a> from_admin:flags.1?true id:<a href="/type/int/">int</a> from_id:<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> message:<a href="/type/TextWithEntities/">TextWithEntities</a> paid_message_stars:flags.0?<a href="/type/long/">long</a> = <a href="/type/GroupCallMessage/" class="current_page_link">GroupCallMessage</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/groupCallMessage/">groupCallMessage</a></td><td>Represents an <a href="/api/group-calls/#in-call-messages">in-call message »</a>, emoji reaction, paid live story comment or standalone paid live story donation.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
