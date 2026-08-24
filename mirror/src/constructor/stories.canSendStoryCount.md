---
title: "stories.canSendStoryCount"
original: "https://core.telegram.org/constructor/stories.canSendStoryCount"
section: ref
description: "Contains the number of available active story slots (equal to the value of the story_expiring_limit_* client configuration parameter minus the number of currently active stories)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.canSendStoryCount","url":"/constructor/stories.canSendStoryCount/"}]
layout: layout.njk
---

# stories.canSendStoryCount

Contains the number of available active story slots (equal to the value of the [`story_expiring_limit_*` client configuration parameter](/api/config/#story-expiring-limit-default) minus the number of currently active stories).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.canSendStoryCount/" class="current_page_link">stories.canSendStoryCount</a>#c387c04e count_remains:<a href="/type/int/">int</a> = <a href="/type/stories.CanSendStoryCount/">stories.CanSendStoryCount</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count_remains</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Remaining active story slots.</td></tr></tbody></table>

### Type

[stories.CanSendStoryCount](/type/stories.CanSendStoryCount/)

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
