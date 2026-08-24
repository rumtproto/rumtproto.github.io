---
title: "reportResultChooseOption"
original: "https://core.telegram.org/constructor/reportResultChooseOption"
section: ref
description: "The user must choose one of the following options, and then messages.report must be re-invoked, passing the option's option identifier to messages.report.option."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"reportResultChooseOption","url":"/constructor/reportResultChooseOption/"}]
layout: layout.njk
---

# reportResultChooseOption

The user must choose one of the following options, and then [messages.report](/method/messages.report/) must be re-invoked, passing the option's `option` identifier to [messages.report](/method/messages.report/).`option`.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/reportResultChooseOption/" class="current_page_link">reportResultChooseOption</a>#f0e4e0b6 title:<a href="/type/string/">string</a> options:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageReportOption/">MessageReportOption</a>&gt; = <a href="/type/ReportResult/">ReportResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title of the option popup</td></tr><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageReportOption/">MessageReportOption</a>&gt;</td><td>Available options, rendered as menu entries.</td></tr></tbody></table>

### Type

[ReportResult](/type/ReportResult/)

### Related pages

#### [messages.report](/method/messages.report/)

Report a message in a chat for violation of telegram's Terms of Service
