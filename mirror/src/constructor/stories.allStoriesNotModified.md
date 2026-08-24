---
title: "stories.allStoriesNotModified"
original: "https://core.telegram.org/constructor/stories.allStoriesNotModified"
section: ref
description: "The list of active (or active and hidden) stories has not changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.allStoriesNotModified","url":"/constructor/stories.allStoriesNotModified/"}]
layout: layout.njk
---

# stories.allStoriesNotModified

The list of active (or active and hidden) [stories](/api/stories/#watching-stories) has not changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.allStoriesNotModified/" class="current_page_link">stories.allStoriesNotModified</a>#1158fe3e flags:<a href="/type/%23/">#</a> state:<a href="/type/string/">string</a> stealth_mode:<a href="/type/StoriesStealthMode/">StoriesStealthMode</a> = <a href="/type/stories.AllStories/">stories.AllStories</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>State to use to ask for updates</td></tr><tr><td><strong>stealth_mode</strong></td><td style="text-align: center;"><a href="/type/StoriesStealthMode/">StoriesStealthMode</a></td><td>Current <a href="/api/stories/#stealth-mode">stealth mode</a> information</td></tr></tbody></table>

### Type

[stories.AllStories](/type/stories.AllStories/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
