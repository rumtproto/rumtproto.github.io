---
title: "webPageAttributeStory"
original: "https://core.telegram.org/constructor/webPageAttributeStory"
section: ref
description: "Webpage preview of a Telegram story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"webPageAttributeStory","url":"/constructor/webPageAttributeStory/"}]
layout: layout.njk
---

# webPageAttributeStory

Webpage preview of a Telegram story

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webPageAttributeStory/" class="current_page_link">webPageAttributeStory</a>#2e94c3e7 flags:<a href="/type/%23/">#</a> peer:<a href="/type/Peer/">Peer</a> id:<a href="/type/int/">int</a> story:flags.0?<a href="/type/StoryItem/">StoryItem</a> = <a href="/type/WebPageAttribute/">WebPageAttribute</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer that posted the story</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/stories/#watching-stories">Story ID</a></td></tr><tr><td><strong>story</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/StoryItem/">StoryItem</a></td><td>May contain the story, if not the story should be fetched when and if needed using <a href="/method/stories.getStoriesByID/">stories.getStoriesByID</a> with the above <code>id</code> and <code>peer</code>.</td></tr></tbody></table>

### Type

[WebPageAttribute](/type/WebPageAttribute/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [stories.getStoriesByID](/method/stories.getStoriesByID/)

Obtain full info about a set of [stories](/api/stories/) by their IDs.
