---
title: "messages.readMessageContents"
original: "https://core.telegram.org/method/messages.readMessageContents"
section: ref
description: "Notifies the sender about the recipient having listened a voice message or watched a video, emitting an updateReadMessagesContents."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.readMessageContents","url":"/method/messages.readMessageContents/"}]
layout: layout.njk
---

# messages.readMessageContents

Notifies the sender about the recipient having listened a voice message or watched a video, emitting an [updateReadMessagesContents](/constructor/updateReadMessagesContents/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.affectedMessages/">messages.affectedMessages</a>#84d19185 pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/messages.AffectedMessages/">messages.AffectedMessages</a>;
---functions---
<a href="/method/messages.readMessageContents/" class="current_page_link">messages.readMessageContents</a>#36a73f77 id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.AffectedMessages/">messages.AffectedMessages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Message ID list</td></tr></tbody></table>

### Result

[messages.AffectedMessages](/type/messages.AffectedMessages/)

### Only users can use this method

### Related pages

#### [updateReadMessagesContents](/constructor/updateReadMessagesContents/)

Contents of messages in the common [message box](/api/updates/) were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using [messages.readMessageContents](/method/messages.readMessageContents/)).
