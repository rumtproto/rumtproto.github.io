---
title: "updateMonoForumNoPaidException"
original: "https://core.telegram.org/constructor/updateMonoForumNoPaidException"
section: ref
description: "An admin has (un)exempted this monoforum topic » from payment to send messages using account.toggleNoPaidMessagesException."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateMonoForumNoPaidException","url":"/constructor/updateMonoForumNoPaidException/"}]
layout: layout.njk
---

# updateMonoForumNoPaidException

An admin has (un)exempted this [monoforum topic »](/api/monoforum/) from payment to send messages using [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateMonoForumNoPaidException/" class="current_page_link">updateMonoForumNoPaidException</a>#9f812b08 flags:<a href="/type/%23/">#</a> exception:flags.0?true channel_id:<a href="/type/long/">long</a> saved_peer_id:<a href="/type/Peer/">Peer</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>exception</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, an admin has exempted this peer, otherwise the peer was unexempted.</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The monoforum ID.</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The peer/topic ID.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/)

Allow a user to send us messages without paying if [paid messages »](/api/paid-messages/) are enabled.
