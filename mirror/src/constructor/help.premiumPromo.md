---
title: "help.premiumPromo"
original: "https://core.telegram.org/constructor/help.premiumPromo"
section: ref
description: "Telegram Premium promotion information"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.premiumPromo","url":"/constructor/help.premiumPromo/"}]
layout: layout.njk
---

# help.premiumPromo

Telegram Premium promotion information

Note that the `video_sections`+`videos` fields are a list of videos, and the corresponding premium feature identifiers.  
They're equivalent to a section => video dictionary, with keys from `video_section` and values from `videos`.  
The keys in `video_sections` correspond to a specific feature identifier, and the associated promotional video should be shown when the associated feature row is clicked.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.premiumPromo/" class="current_page_link">help.premiumPromo</a>#5334759c status_text:<a href="/type/string/">string</a> status_entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; video_sections:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; videos:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; period_options:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PremiumSubscriptionOption/">PremiumSubscriptionOption</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/help.PremiumPromo/">help.PremiumPromo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>status_text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Description of the current state of the user's Telegram Premium subscription</td></tr><tr><td><strong>status_entities</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr><tr><td><strong>video_sections</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>A list of <a href="/api/premium/">premium feature identifiers »</a>, associated to each video</td></tr><tr><td><strong>videos</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt;</td><td>A list of videos</td></tr><tr><td><strong>period_options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PremiumSubscriptionOption/">PremiumSubscriptionOption</a>&gt;</td><td>Telegram Premium subscription options</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Related user information</td></tr></tbody></table>

### Type

[help.PremiumPromo](/type/help.PremiumPromo/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
