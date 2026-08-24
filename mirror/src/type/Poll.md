---
title: "Poll"
original: "https://core.telegram.org/type/Poll"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Poll","url":"/type/Poll/"}]
layout: layout.njk
---

# Poll

Indicates a poll message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/poll/">poll</a>#58747131 id:<a href="/type/long/">long</a> flags:<a href="/type/%23/">#</a> closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true question:<a href="/type/TextWithEntities/">TextWithEntities</a> answers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PollAnswer/">PollAnswer</a>&gt; close_period:flags.4?<a href="/type/int/">int</a> close_date:flags.5?<a href="/type/int/">int</a> = <a href="/type/Poll/" class="current_page_link">Poll</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/poll/">poll</a></td><td>Poll</td></tr></tbody></table>
