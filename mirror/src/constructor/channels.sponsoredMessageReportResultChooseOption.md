---
title: "channels.sponsoredMessageReportResultChooseOption"
original: "https://core.telegram.org/constructor/channels.sponsoredMessageReportResultChooseOption"
section: ref
description: "The user must choose a report option from the localized options available in options, and after selection, messages.reportSponsoredMessage must be invoked again, passing the…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channels.sponsoredMessageReportResultChooseOption","url":"/constructor/channels.sponsoredMessageReportResultChooseOption/"}]
layout: layout.njk
---

# channels.sponsoredMessageReportResultChooseOption

The user must choose a report option from the localized options available in `options`, and after selection, [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/) must be invoked again, passing the option's `option` field to the `option` param of the method.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channels.sponsoredMessageReportResultChooseOption/" class="current_page_link">channels.sponsoredMessageReportResultChooseOption</a>#846f9e42 title:<a href="/type/string/">string</a> options:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SponsoredMessageReportOption/">SponsoredMessageReportOption</a>&gt; = <a href="/type/channels.SponsoredMessageReportResult/">channels.SponsoredMessageReportResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title of the option selection popup.</td></tr><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SponsoredMessageReportOption/">SponsoredMessageReportOption</a>&gt;</td><td>Localized list of options.</td></tr></tbody></table>

### Type

[channels.SponsoredMessageReportResult](/type/channels.SponsoredMessageReportResult/)

### Related pages

#### [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/)

Report a [sponsored message »](/api/sponsored-messages/), see [here »](/api/sponsored-messages/#reporting-sponsored-messages) for more info on the full flow.
