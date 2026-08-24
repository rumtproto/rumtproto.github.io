---
title: "stories.CanSendStoryCount"
original: "https://core.telegram.org/type/stories.CanSendStoryCount"
section: ref
description: "Contains the number of available active story slots (equal to the value of the story_expiring_limit_* client configuration parameter minus the number of currently active stories)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.CanSendStoryCount","url":"/type/stories.CanSendStoryCount/"}]
layout: layout.njk
---

# stories.CanSendStoryCount

Contains the number of available active story slots (equal to the value of the [`story_expiring_limit_*` client configuration parameter](/api/config/#story-expiring-limit-default) minus the number of currently active stories).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.canSendStoryCount/">stories.canSendStoryCount</a>#c387c04e count_remains:<a href="/type/int/">int</a> = <a href="/type/stories.CanSendStoryCount/" class="current_page_link">stories.CanSendStoryCount</a>;

---functions---

<a href="/method/stories.canSendStory/">stories.canSendStory</a>#30eb63f0 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/stories.CanSendStoryCount/" class="current_page_link">stories.CanSendStoryCount</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.canSendStoryCount/">stories.canSendStoryCount</a></td><td>Contains the number of available active story slots (equal to the value of the <a href="/api/config/#story-expiring-limit-default"><code>story_expiring_limit_*</code> client configuration parameter</a> minus the number of currently active stories).</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.canSendStory/">stories.canSendStory</a></td><td>Check whether we can post stories as the specified peer.</td></tr></tbody></table>

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
