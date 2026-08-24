---
title: "updateMessagePoll"
original: "https://core.telegram.org/constructor/updateMessagePoll"
section: ref
description: "The results of a poll have changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateMessagePoll","url":"/constructor/updateMessagePoll/"}]
layout: layout.njk
---

# updateMessagePoll

The results of a poll have changed

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateMessagePoll/" class="current_page_link">updateMessagePoll</a>#aca1657b flags:<a href="/type/%23/">#</a> poll_id:<a href="/type/long/">long</a> poll:flags.0?<a href="/type/Poll/">Poll</a> results:<a href="/type/PollResults/">PollResults</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Peer/">Peer</a></td><td>Peer of the message containing the poll</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Message ID of the poll</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>If the poll is in a forum topic, the ID of the top message of the topic</td></tr><tr><td><strong>poll_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Poll ID</td></tr><tr><td><strong>poll</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Poll/">Poll</a></td><td>If the server knows the client hasn't cached this poll yet, the poll itself</td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/type/PollResults/">PollResults</a></td><td>New poll results</td></tr></tbody></table>

### Type

[Update](/type/Update/)
