---
title: "PublicForward"
original: "https://core.telegram.org/type/PublicForward"
section: ref
description: "Contains info about the forwards of a story as a message to public chats and reposts by public channels."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PublicForward","url":"/type/PublicForward/"}]
layout: layout.njk
---

# PublicForward

Contains info about the forwards of a [story](/api/stories/) as a message to public chats and reposts by public channels.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/publicForwardMessage/">publicForwardMessage</a>#1f2bf4a message:<a href="/type/Message/">Message</a> = <a href="/type/PublicForward/" class="current_page_link">PublicForward</a>;
<a href="/constructor/publicForwardStory/">publicForwardStory</a>#edf3add0 peer:<a href="/type/Peer/">Peer</a> story:<a href="/type/StoryItem/">StoryItem</a> = <a href="/type/PublicForward/" class="current_page_link">PublicForward</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/publicForwardMessage/">publicForwardMessage</a></td><td>Contains info about a forward of a <a href="/api/stories/">story</a> as a message.</td></tr><tr><td><a href="/constructor/publicForwardStory/">publicForwardStory</a></td><td>Contains info about a forward of a <a href="/api/stories/">story</a> as a repost by a public channel.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
