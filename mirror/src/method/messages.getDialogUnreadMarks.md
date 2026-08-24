---
title: "messages.getDialogUnreadMarks"
original: "https://core.telegram.org/method/messages.getDialogUnreadMarks"
section: ref
description: "Get dialogs manually marked as unread"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getDialogUnreadMarks","url":"/method/messages.getDialogUnreadMarks/"}]
layout: layout.njk
---

# messages.getDialogUnreadMarks

Get dialogs manually marked as unread

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/messages.getDialogUnreadMarks/" class="current_page_link">messages.getDialogUnreadMarks</a>#21202222 flags:<a href="/type/%23/">#</a> parent_peer:flags.0?<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DialogPeer/">DialogPeer</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputPeer/">InputPeer</a></td><td>Can be equal to the ID of a monoforum, to fetch monoforum topics manually marked as unread.</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[DialogPeer](/type/DialogPeer/)\>

### Only users can use this method
