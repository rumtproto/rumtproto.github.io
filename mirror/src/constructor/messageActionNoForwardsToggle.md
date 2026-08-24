---
title: "messageActionNoForwardsToggle"
original: "https://core.telegram.org/constructor/messageActionNoForwardsToggle"
section: ref
description: "Emitted only in private chats when enabling or disabling content protection »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionNoForwardsToggle","url":"/constructor/messageActionNoForwardsToggle/"}]
layout: layout.njk
---

# messageActionNoForwardsToggle

Emitted only in private chats when enabling or disabling [content protection »](/api/content-protection/#for-users).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionNoForwardsToggle/" class="current_page_link">messageActionNoForwardsToggle</a>#bf7d6572 prev_value:<a href="/type/Bool/">Bool</a> new_value:<a href="/type/Bool/">Bool</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prev_value</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Previous protection status (if true, the chat was protected). May be equal to <code>new_value</code> when replying to requests, see <a href="/api/content-protection/#for-users">here »</a> for more info on the full flow.</td></tr><tr><td><strong>new_value</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>New protection status.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Content protection](/api/content-protection/)

Users and bots who want to keep their messages private, as well as Group and Channel owners who want to keep their content members-only can enable content protection, which prevents screenshots, copying, disables message forwards and limits the ability to save media from posts.
