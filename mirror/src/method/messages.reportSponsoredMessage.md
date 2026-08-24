---
title: "messages.reportSponsoredMessage"
original: "https://core.telegram.org/method/messages.reportSponsoredMessage"
section: ref
description: "Report a sponsored message », see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reportSponsoredMessage","url":"/method/messages.reportSponsoredMessage/"}]
layout: layout.njk
---

# messages.reportSponsoredMessage

Report a [sponsored message »](/api/sponsored-messages/), see [here »](/api/sponsored-messages/#reporting-sponsored-messages) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channels.sponsoredMessageReportResultChooseOption/">channels.sponsoredMessageReportResultChooseOption</a>#846f9e42 title:<a href="/type/string/">string</a> options:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SponsoredMessageReportOption/">SponsoredMessageReportOption</a>&gt; = <a href="/type/channels.SponsoredMessageReportResult/">channels.SponsoredMessageReportResult</a>;
<a href="/constructor/channels.sponsoredMessageReportResultAdsHidden/">channels.sponsoredMessageReportResultAdsHidden</a>#3e3bcf2f = <a href="/type/channels.SponsoredMessageReportResult/">channels.SponsoredMessageReportResult</a>;
<a href="/constructor/channels.sponsoredMessageReportResultReported/">channels.sponsoredMessageReportResultReported</a>#ad798849 = <a href="/type/channels.SponsoredMessageReportResult/">channels.SponsoredMessageReportResult</a>;
---functions---
<a href="/method/messages.reportSponsoredMessage/" class="current_page_link">messages.reportSponsoredMessage</a>#12cbf0c4 random_id:<a href="/type/bytes/">bytes</a> option:<a href="/type/bytes/">bytes</a> = <a href="/type/channels.SponsoredMessageReportResult/">channels.SponsoredMessageReportResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>The ad's unique ID. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Chosen report option, initially an empty string, see <a href="/api/sponsored-messages/#reporting-sponsored-messages">here »</a> for more info on the full flow.</td></tr></tbody></table>

### Result

[channels.SponsoredMessageReportResult](/type/channels.SponsoredMessageReportResult/)

### Only users can use this method

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Sponsored messages](/api/sponsored-messages/)

How clients should fetch, display and interact with sponsored messages.
