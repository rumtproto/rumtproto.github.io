---
title: "updates.state"
original: "https://core.telegram.org/constructor/updates.state"
section: ref
description: "New feature for end-to-end-encrypted messaging."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updates.state","url":"/constructor/updates.state/"}]
layout: layout.njk
---

# updates.state

Updates state.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updates.state/" class="current_page_link">updates.state</a>#a56c2a3e pts:<a href="/type/int/">int</a> qts:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> unread_count:<a href="/type/int/">int</a> = <a href="/type/updates.State/">updates.State</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of events occurred in a text box</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position in a sequence of updates in secret chats. For further details refer to article <a href="/api/end-to-end/">secret chats</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of condition</td></tr><tr><td><strong>seq</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of sent updates</td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread messages</td></tr></tbody></table>

### Type

[updates.State](/type/updates.State/)

### Related pages

#### [End-to-End Encryption, Secret Chats](/api/end-to-end/)

New feature for end-to-end-encrypted messaging.
