---
title: "stories.report"
original: "https://core.telegram.org/method/stories.report"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.report","url":"/method/stories.report/"}]
layout: layout.njk
---

# stories.report

Report a story.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/reportResultChooseOption/">reportResultChooseOption</a>#f0e4e0b6 title:<a href="/type/string/">string</a> options:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageReportOption/">MessageReportOption</a>&gt; = <a href="/type/ReportResult/">ReportResult</a>;
<a href="/constructor/reportResultAddComment/">reportResultAddComment</a>#6f09ac31 flags:<a href="/type/%23/">#</a> optional:flags.0?true option:<a href="/type/bytes/">bytes</a> = <a href="/type/ReportResult/">ReportResult</a>;
<a href="/constructor/reportResultReported/">reportResultReported</a>#8db33c4b = <a href="/type/ReportResult/">ReportResult</a>;
---functions---
<a href="/method/stories.report/" class="current_page_link">stories.report</a>#19d8eb45 peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; option:<a href="/type/bytes/">bytes</a> message:<a href="/type/string/">string</a> = <a href="/type/ReportResult/">ReportResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer that uploaded the story.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>IDs of the stories to report.</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Menu option, intially empty</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Comment for report moderation</td></tr></tbody></table>

### Result

[ReportResult](/type/ReportResult/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
