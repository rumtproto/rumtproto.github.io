---
title: "Channels.AdminLogResults"
original: "https://core.telegram.org/type/channels.AdminLogResults"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Channels.AdminLogResults","url":"/type/channels.AdminLogResults/"}]
layout: layout.njk
---

# Channels.AdminLogResults

Admin log events

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channels.adminLogResults/">channels.adminLogResults</a>#ed8af74d events:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChannelAdminLogEvent/">ChannelAdminLogEvent</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/channels.AdminLogResults/" class="current_page_link">channels.AdminLogResults</a>;

---functions---

<a href="/method/channels.getAdminLog/">channels.getAdminLog</a>#33ddf480 flags:<a href="/type/%23/">#</a> channel:<a href="/type/InputChannel/">InputChannel</a> q:<a href="/type/string/">string</a> events_filter:flags.0?<a href="/type/ChannelAdminLogEventsFilter/">ChannelAdminLogEventsFilter</a> admins:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; max_id:<a href="/type/long/">long</a> min_id:<a href="/type/long/">long</a> limit:<a href="/type/int/">int</a> = <a href="/type/channels.AdminLogResults/" class="current_page_link">channels.AdminLogResults</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channels.adminLogResults/">channels.adminLogResults</a></td><td>Admin log events</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/channels.getAdminLog/">channels.getAdminLog</a></td><td>Get the admin log of a <a href="/api/channel/">channel/supergroup</a></td></tr></tbody></table>
