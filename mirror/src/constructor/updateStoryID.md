---
title: "updateStoryID"
original: "https://core.telegram.org/constructor/updateStoryID"
section: ref
description: "A story was successfully uploaded."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateStoryID","url":"/constructor/updateStoryID/"}]
layout: layout.njk
---

# updateStoryID

A story was successfully uploaded.

Once a story is successfully uploaded, an [updateStoryID](/constructor/updateStoryID/) will be returned, indicating the story ID (`id`) that was attributed to the story (like for messages, `random_id` indicates the `random_id` that was passed to [stories.sendStory](/method/stories.sendStory/): this way, you can tell which story was assigned a specific `id` by checking which [stories.sendStory](/method/stories.sendStory/) call has the returned `random_id`).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateStoryID/" class="current_page_link">updateStoryID</a>#1bf335b9 id:<a href="/type/int/">int</a> random_id:<a href="/type/long/">long</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The <code>id</code> that was attributed to the story.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The <code>random_id</code> that was passed to <a href="/method/stories.sendStory/">stories.sendStory</a>. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [stories.sendStory](/method/stories.sendStory/)

Uploads a [Telegram Story](/api/stories/).

May also be used in a [business connection](/api/bots/connected-business-bots/), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the ID of a controlled business user in `peer`.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [updateStoryID](/constructor/updateStoryID/)

A story was successfully uploaded.

Once a story is successfully uploaded, an [updateStoryID](/constructor/updateStoryID/) will be returned, indicating the story ID (`id`) that was attributed to the story (like for messages, `random_id` indicates the `random_id` that was passed to [stories.sendStory](/method/stories.sendStory/): this way, you can tell which story was assigned a specific `id` by checking which [stories.sendStory](/method/stories.sendStory/) call has the returned `random_id`).
