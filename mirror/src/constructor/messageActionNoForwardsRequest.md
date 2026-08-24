---
title: "messageActionNoForwardsRequest"
original: "https://core.telegram.org/constructor/messageActionNoForwardsRequest"
section: ref
description: "Emitted only in private chats if the other side requested to disable content protection »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionNoForwardsRequest","url":"/constructor/messageActionNoForwardsRequest/"}]
layout: layout.njk
---

# messageActionNoForwardsRequest

Emitted only in private chats if the other side requested to disable [content protection »](/api/content-protection/#for-users).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionNoForwardsRequest/" class="current_page_link">messageActionNoForwardsRequest</a>#3e2793ba flags:<a href="/type/%23/">#</a> expired:flags.0?true prev_value:<a href="/type/Bool/">Bool</a> new_value:<a href="/type/Bool/">Bool</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>expired</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, this request was accepted or rejected by the other user and thus cannot be used anymore.</td></tr><tr><td><strong>prev_value</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Previous protection status.</td></tr><tr><td><strong>new_value</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>New requested protection status.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Content protection](/api/content-protection/)

Users and bots who want to keep their messages private, as well as Group and Channel owners who want to keep their content members-only can enable content protection, which prevents screenshots, copying, disables message forwards and limits the ability to save media from posts.
