---
title: "stories.exportStoryLink"
original: "https://core.telegram.org/method/stories.exportStoryLink"
section: ref
description: "Generate a story deep link for a specific story"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.exportStoryLink","url":"/method/stories.exportStoryLink/"}]
layout: layout.njk
---

# stories.exportStoryLink

Generate a [story deep link](/api/links/#story-links) for a specific story

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/exportedStoryLink/">exportedStoryLink</a>#3fc9053b link:<a href="/type/string/">string</a> = <a href="/type/ExportedStoryLink/">ExportedStoryLink</a>;
---functions---
<a href="/method/stories.exportStoryLink/" class="current_page_link">stories.exportStoryLink</a>#7b8def20 peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/int/">int</a> = <a href="/type/ExportedStoryLink/">ExportedStoryLink</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer where the story was posted</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Story ID</td></tr></tbody></table>

### Result

[ExportedStoryLink](/type/ExportedStoryLink/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>STORY_ID_EMPTY</td><td>You specified no story IDs.</td></tr><tr><td>400</td><td>USER_PUBLIC_MISSING</td><td>Cannot generate a link to stories posted by a peer without a username.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
