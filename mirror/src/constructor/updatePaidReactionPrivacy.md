---
title: "updatePaidReactionPrivacy"
original: "https://core.telegram.org/constructor/updatePaidReactionPrivacy"
section: ref
description: "Contains the current default paid reaction privacy, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePaidReactionPrivacy","url":"/constructor/updatePaidReactionPrivacy/"}]
layout: layout.njk
---

# updatePaidReactionPrivacy

Contains the current [default paid reaction privacy, see here »](/api/reactions/#paid-reactions) for more info.

Clients should invoke [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/) on startup to fetch the current default reaction privacy because this update is only sent to currently online sessions and cannot be fetched using getDifference on client startup.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatePaidReactionPrivacy/" class="current_page_link">updatePaidReactionPrivacy</a>#8b725fce private:<a href="/type/PaidReactionPrivacy/">PaidReactionPrivacy</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>private</strong></td><td style="text-align: center;"><a href="/type/PaidReactionPrivacy/">PaidReactionPrivacy</a></td><td>Paid reaction privacy settings.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/)

Fetches an [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) update with the current [default paid reaction privacy, see here »](/api/reactions/#paid-reactions) for more info.
