---
title: "reportResultAddComment"
original: "https://core.telegram.org/constructor/reportResultAddComment"
section: ref
description: "The user should enter an additional comment for the moderators, and then messages.report must be re-invoked, passing the comment to messages.report.message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"reportResultAddComment","url":"/constructor/reportResultAddComment/"}]
layout: layout.njk
---

# reportResultAddComment

The user should enter an additional comment for the moderators, and then [messages.report](/method/messages.report/) must be re-invoked, passing the comment to [messages.report](/method/messages.report/).`message`.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/reportResultAddComment/" class="current_page_link">reportResultAddComment</a>#6f09ac31 flags:<a href="/type/%23/">#</a> optional:flags.0?true option:<a href="/type/bytes/">bytes</a> = <a href="/type/ReportResult/">ReportResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>optional</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this step can be skipped by the user, passing an empty <code>message</code> to <a href="/method/messages.report/">messages.report</a>, or if a non-empty <code>message</code> is mandatory.</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>The <a href="/method/messages.report/">messages.report</a> method must be re-invoked, passing this option to <code>option</code></td></tr></tbody></table>

### Type

[ReportResult](/type/ReportResult/)

### Related pages

#### [messages.report](/method/messages.report/)

Report a message in a chat for violation of telegram's Terms of Service
