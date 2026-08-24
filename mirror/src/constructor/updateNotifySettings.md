---
title: "updateNotifySettings"
original: "https://core.telegram.org/constructor/updateNotifySettings"
section: ref
description: "Changes in notification settings."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateNotifySettings","url":"/constructor/updateNotifySettings/"}]
layout: layout.njk
---

# updateNotifySettings

Changes in notification settings.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateNotifySettings/" class="current_page_link">updateNotifySettings</a>#bec268ef peer:<a href="/type/NotifyPeer/">NotifyPeer</a> notify_settings:<a href="/type/PeerNotifySettings/">PeerNotifySettings</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/NotifyPeer/">NotifyPeer</a></td><td>Notification source</td></tr><tr><td><strong>notify_settings</strong></td><td style="text-align: center;"><a href="/type/PeerNotifySettings/">PeerNotifySettings</a></td><td>New notification settings</td></tr></tbody></table>

### Type

[Update](/type/Update/)
