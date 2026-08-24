---
title: "messageReportOption"
original: "https://core.telegram.org/constructor/messageReportOption"
section: ref
description: "Report a message in a chat for violation of telegram's Terms of Service"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageReportOption","url":"/constructor/messageReportOption/"}]
layout: layout.njk
---

# messageReportOption

Report menu option

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageReportOption/" class="current_page_link">messageReportOption</a>#7903e3d9 text:<a href="/type/string/">string</a> option:<a href="/type/bytes/">bytes</a> = <a href="/type/MessageReportOption/">MessageReportOption</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Option title</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Option identifier: if the user selects this option, re-invoke <a href="/method/messages.report/">messages.report</a>, passing this option to <code>option</code></td></tr></tbody></table>

### Type

[MessageReportOption](/type/MessageReportOption/)

### Related pages

#### [messages.report](/method/messages.report/)

Report a message in a chat for violation of telegram's Terms of Service
