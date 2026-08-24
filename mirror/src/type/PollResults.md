---
title: "PollResults"
original: "https://core.telegram.org/type/PollResults"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PollResults","url":"/type/PollResults/"}]
layout: layout.njk
---

# PollResults

Results of poll

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pollResults/">pollResults</a>#7adf2420 flags:<a href="/type/%23/">#</a> min:flags.0?true results:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PollAnswerVoters/">PollAnswerVoters</a>&gt; total_voters:flags.2?<a href="/type/int/">int</a> recent_voters:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; solution:flags.4?<a href="/type/string/">string</a> solution_entities:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/PollResults/" class="current_page_link">PollResults</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/pollResults/">pollResults</a></td><td>Results of poll</td></tr></tbody></table>
