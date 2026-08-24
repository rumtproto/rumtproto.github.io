---
title: "paidReactionPrivacyPeer"
original: "https://core.telegram.org/constructor/paidReactionPrivacyPeer"
section: ref
description: "Send paid reactions as the specified peer, fetched using channels.getSendAs with the for_paid_reactions flag set."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"paidReactionPrivacyPeer","url":"/constructor/paidReactionPrivacyPeer/"}]
layout: layout.njk
---

# paidReactionPrivacyPeer

Send paid reactions as the specified peer, fetched using [channels.getSendAs](/method/channels.getSendAs/) with the `for_paid_reactions` flag set.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/paidReactionPrivacyPeer/" class="current_page_link">paidReactionPrivacyPeer</a>#dc6cfcf0 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/PaidReactionPrivacy/">PaidReactionPrivacy</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer to send reactions as.</td></tr></tbody></table>

### Type

[PaidReactionPrivacy](/type/PaidReactionPrivacy/)

### Related pages

#### [channels.getSendAs](/method/channels.getSendAs/)

Obtains a list of peers that can be displayed as the sender in a specific context. With `for_live_stories`, returns peers that may author [live story in-call messages »](/api/group-calls/#in-call-messages).
