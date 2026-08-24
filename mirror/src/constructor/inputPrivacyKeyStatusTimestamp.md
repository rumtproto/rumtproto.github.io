---
title: "inputPrivacyKeyStatusTimestamp"
original: "https://core.telegram.org/constructor/inputPrivacyKeyStatusTimestamp"
section: ref
description: "Whether people will be able to see our exact last online timestamp."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPrivacyKeyStatusTimestamp","url":"/constructor/inputPrivacyKeyStatusTimestamp/"}]
layout: layout.njk
---

# inputPrivacyKeyStatusTimestamp

Whether people will be able to see our exact last online timestamp.

Note that if _we_ decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) **and** we do not have a [Premium](/api/premium/) subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users _do_ share it with us.

If those users _do_ share their exact online status with us, but we can't see it due to the reason mentioned above, the `by_me` flag of [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/) will be set.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPrivacyKeyStatusTimestamp/" class="current_page_link">inputPrivacyKeyStatusTimestamp</a>#4f96cb18 = <a href="/type/InputPrivacyKey/">InputPrivacyKey</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Type

[InputPrivacyKey](/type/InputPrivacyKey/)

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [userStatusRecently](/constructor/userStatusRecently/)

Online status: last seen recently

#### [userStatusLastWeek](/constructor/userStatusLastWeek/)

Online status: last seen last week

#### [userStatusLastMonth](/constructor/userStatusLastMonth/)

Online status: last seen last month
