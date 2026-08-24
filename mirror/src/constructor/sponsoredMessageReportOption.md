---
title: "sponsoredMessageReportOption"
original: "https://core.telegram.org/constructor/sponsoredMessageReportOption"
section: ref
description: "A report option for a sponsored message »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"sponsoredMessageReportOption","url":"/constructor/sponsoredMessageReportOption/"}]
layout: layout.njk
---

# sponsoredMessageReportOption

A [report option for a sponsored message »](/api/sponsored-messages/#reporting-sponsored-messages).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/sponsoredMessageReportOption/" class="current_page_link">sponsoredMessageReportOption</a>#430d3150 text:<a href="/type/string/">string</a> option:<a href="/type/bytes/">bytes</a> = <a href="/type/SponsoredMessageReportOption/">SponsoredMessageReportOption</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Localized description of the option.</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Option identifier to pass to <a href="/method/messages.reportSponsoredMessage/">messages.reportSponsoredMessage</a>.</td></tr></tbody></table>

### Type

[SponsoredMessageReportOption](/type/SponsoredMessageReportOption/)

### Related pages

#### [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/)

Report a [sponsored message »](/api/sponsored-messages/), see [here »](/api/sponsored-messages/#reporting-sponsored-messages) for more info on the full flow.

#### [Sponsored messages](/api/sponsored-messages/)

How clients should fetch, display and interact with sponsored messages.
