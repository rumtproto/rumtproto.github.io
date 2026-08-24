---
title: "messages.Dialogs"
original: "https://core.telegram.org/type/messages.Dialogs"
section: ref
description: "Object contains a list of chats with messages and auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.Dialogs","url":"/type/messages.Dialogs/"}]
layout: layout.njk
---

# messages.Dialogs

Object contains a list of chats with messages and auxiliary data.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.dialogs/">messages.dialogs</a>#15ba6c40 dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Dialog/">Dialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Dialogs/" class="current_page_link">messages.Dialogs</a>;
<a href="/constructor/messages.dialogsSlice/">messages.dialogsSlice</a>#71e094f3 count:<a href="/type/int/">int</a> dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Dialog/">Dialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Dialogs/" class="current_page_link">messages.Dialogs</a>;
<a href="/constructor/messages.dialogsNotModified/">messages.dialogsNotModified</a>#f0e3e596 count:<a href="/type/int/">int</a> = <a href="/type/messages.Dialogs/" class="current_page_link">messages.Dialogs</a>;

---functions---

<a href="/method/messages.getDialogs/">messages.getDialogs</a>#a0f4cb4f flags:<a href="/type/%23/">#</a> exclude_pinned:flags.0?true folder_id:flags.1?<a href="/type/int/">int</a> offset_date:<a href="/type/int/">int</a> offset_id:<a href="/type/int/">int</a> offset_peer:<a href="/type/InputPeer/">InputPeer</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.Dialogs/" class="current_page_link">messages.Dialogs</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.dialogs/">messages.dialogs</a></td><td>Full list of chats with messages and auxiliary data.</td></tr><tr><td><a href="/constructor/messages.dialogsSlice/">messages.dialogsSlice</a></td><td>Incomplete list of dialogs with messages and auxiliary data.</td></tr><tr><td><a href="/constructor/messages.dialogsNotModified/">messages.dialogsNotModified</a></td><td>Dialogs haven't changed</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getDialogs/">messages.getDialogs</a></td><td>Returns the current user dialog list.</td></tr></tbody></table>
