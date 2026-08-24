---
title: "messageMediaPoll"
original: "https://core.telegram.org/constructor/messageMediaPoll"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaPoll","url":"/constructor/messageMediaPoll/"}]
layout: layout.njk
---

# messageMediaPoll

Poll

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaPoll/" class="current_page_link">messageMediaPoll</a>#4bd6e798 poll:<a href="/type/Poll/">Poll</a> results:<a href="/type/PollResults/">PollResults</a> = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>poll</strong></td><td style="text-align: center;"><a href="/type/Poll/">Poll</a></td><td>The poll</td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/type/PollResults/">PollResults</a></td><td>The results of the poll</td></tr><tr><td><strong>attached_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/MessageMedia/">MessageMedia</a></td><td>Optional media attachment displayed alongside the poll</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)
