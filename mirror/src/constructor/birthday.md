---
title: "birthday"
original: "https://core.telegram.org/constructor/birthday"
section: ref
description: "Birthday information for a user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"birthday","url":"/constructor/birthday/"}]
layout: layout.njk
---

# birthday

[Birthday](/api/profile/#birthday) information for a user.

Also used to invite users to gift [Telegram Premium subscriptions »](/api/premium/#gifting-telegram-premium) to other users with birthdays within a +1/-1 day time range, related to the current day.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/birthday/" class="current_page_link">birthday</a>#6c8e1e06 flags:<a href="/type/%23/">#</a> day:<a href="/type/int/">int</a> month:<a href="/type/int/">int</a> year:flags.0?<a href="/type/int/">int</a> = <a href="/type/Birthday/">Birthday</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>day</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Birth day</td></tr><tr><td><strong>month</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Birth month</td></tr><tr><td><strong>year</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>(Optional) birth year.</td></tr></tbody></table>

### Type

[Birthday](/type/Birthday/)

### Related pages

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
