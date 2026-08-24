---
title: "channels.adminLogResults"
original: "https://core.telegram.org/constructor/channels.adminLogResults"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channels.adminLogResults","url":"/constructor/channels.adminLogResults/"}]
layout: layout.njk
---

# channels.adminLogResults

Admin log events

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channels.adminLogResults/" class="current_page_link">channels.adminLogResults</a>#ed8af74d events:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChannelAdminLogEvent/">ChannelAdminLogEvent</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/channels.AdminLogResults/">channels.AdminLogResults</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>events</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChannelAdminLogEvent/">ChannelAdminLogEvent</a>&gt;</td><td>Admin log events</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats mentioned in events</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in events</td></tr></tbody></table>

### Type

[channels.AdminLogResults](/type/channels.AdminLogResults/)
