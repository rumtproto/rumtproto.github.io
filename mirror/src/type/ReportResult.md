---
title: "ReportResult"
original: "https://core.telegram.org/type/ReportResult"
section: ref
description: "Represents a report menu or result"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ReportResult","url":"/type/ReportResult/"}]
layout: layout.njk
---

# ReportResult

Represents a report menu or result

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/reportResultChooseOption/">reportResultChooseOption</a>#f0e4e0b6 title:<a href="/type/string/">string</a> options:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageReportOption/">MessageReportOption</a>&gt; = <a href="/type/ReportResult/" class="current_page_link">ReportResult</a>;
<a href="/constructor/reportResultAddComment/">reportResultAddComment</a>#6f09ac31 flags:<a href="/type/%23/">#</a> optional:flags.0?true option:<a href="/type/bytes/">bytes</a> = <a href="/type/ReportResult/" class="current_page_link">ReportResult</a>;
<a href="/constructor/reportResultReported/">reportResultReported</a>#8db33c4b = <a href="/type/ReportResult/" class="current_page_link">ReportResult</a>;

---functions---

<a href="/method/messages.report/">messages.report</a>#fc78af9b peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; option:<a href="/type/bytes/">bytes</a> message:<a href="/type/string/">string</a> = <a href="/type/ReportResult/" class="current_page_link">ReportResult</a>;

<a href="/method/stories.report/">stories.report</a>#19d8eb45 peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; option:<a href="/type/bytes/">bytes</a> message:<a href="/type/string/">string</a> = <a href="/type/ReportResult/" class="current_page_link">ReportResult</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/reportResultChooseOption/">reportResultChooseOption</a></td><td>The user must choose one of the following options, and then <a href="/method/messages.report/">messages.report</a> must be re-invoked, passing the option's <code>option</code> identifier to <a href="/method/messages.report/">messages.report</a>.<code>option</code>.</td></tr><tr><td><a href="/constructor/reportResultAddComment/">reportResultAddComment</a></td><td>The user should enter an additional comment for the moderators, and then <a href="/method/messages.report/">messages.report</a> must be re-invoked, passing the comment to <a href="/method/messages.report/">messages.report</a>.<code>message</code>.</td></tr><tr><td><a href="/constructor/reportResultReported/">reportResultReported</a></td><td>The report was sent successfully, no further actions are required.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.report/">messages.report</a></td><td>Report a message in a chat for violation of telegram's Terms of Service</td></tr><tr><td><a href="/method/stories.report/">stories.report</a></td><td>Report a story.</td></tr></tbody></table>
