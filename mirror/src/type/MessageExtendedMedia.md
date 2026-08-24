---
title: "MessageExtendedMedia"
original: "https://core.telegram.org/type/MessageExtendedMedia"
section: ref
description: "Paid media, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MessageExtendedMedia","url":"/type/MessageExtendedMedia/"}]
layout: layout.njk
---

# MessageExtendedMedia

[Paid media, see here »](/api/paid-media/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageExtendedMediaPreview/">messageExtendedMediaPreview</a>#ad628cc8 flags:<a href="/type/%23/">#</a> w:flags.0?<a href="/type/int/">int</a> h:flags.0?<a href="/type/int/">int</a> thumb:flags.1?<a href="/type/PhotoSize/">PhotoSize</a> video_duration:flags.2?<a href="/type/int/">int</a> = <a href="/type/MessageExtendedMedia/" class="current_page_link">MessageExtendedMedia</a>;
<a href="/constructor/messageExtendedMedia/">messageExtendedMedia</a>#ee479c64 media:<a href="/type/MessageMedia/">MessageMedia</a> = <a href="/type/MessageExtendedMedia/" class="current_page_link">MessageExtendedMedia</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messageExtendedMediaPreview/">messageExtendedMediaPreview</a></td><td>Paid media preview for not yet purchased paid media, <a href="/api/paid-media/">see here »</a> for more info.</td></tr><tr><td><a href="/constructor/messageExtendedMedia/">messageExtendedMedia</a></td><td>Already purchased paid media, <a href="/api/paid-media/">see here »</a> for more info.</td></tr></tbody></table>

### Related pages

#### [Paid media](/api/paid-media/)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
