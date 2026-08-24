---
title: "messageExtendedMediaPreview"
original: "https://core.telegram.org/constructor/messageExtendedMediaPreview"
section: ref
description: "Paid media preview for not yet purchased paid media, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageExtendedMediaPreview","url":"/constructor/messageExtendedMediaPreview/"}]
layout: layout.njk
---

# messageExtendedMediaPreview

Paid media preview for not yet purchased paid media, [see here »](/api/paid-media/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageExtendedMediaPreview/" class="current_page_link">messageExtendedMediaPreview</a>#ad628cc8 flags:<a href="/type/%23/">#</a> w:flags.0?<a href="/type/int/">int</a> h:flags.0?<a href="/type/int/">int</a> thumb:flags.1?<a href="/type/PhotoSize/">PhotoSize</a> video_duration:flags.2?<a href="/type/int/">int</a> = <a href="/type/MessageExtendedMedia/">MessageExtendedMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Width</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Height</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/PhotoSize/">PhotoSize</a></td><td><a href="/api/files/#stripped-thumbnails">Extremely low resolution thumbnail</a>.</td></tr><tr><td><strong>video_duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Video duration for videos.</td></tr></tbody></table>

### Type

[MessageExtendedMedia](/type/MessageExtendedMedia/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Paid media](/api/paid-media/)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
