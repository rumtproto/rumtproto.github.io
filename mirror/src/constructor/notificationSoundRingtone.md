---
title: "notificationSoundRingtone"
original: "https://core.telegram.org/constructor/notificationSoundRingtone"
section: ref
description: "A specific previously uploaded notification sound should be used"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"notificationSoundRingtone","url":"/constructor/notificationSoundRingtone/"}]
layout: layout.njk
---

# notificationSoundRingtone

A specific previously uploaded notification sound should be used

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/notificationSoundRingtone/" class="current_page_link">notificationSoundRingtone</a>#ff6c8049 id:<a href="/type/long/">long</a> = <a href="/type/NotificationSound/">NotificationSound</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Document ID of notification sound uploaded using <a href="/method/account.uploadRingtone/">account.uploadRingtone</a></td></tr></tbody></table>

### Type

[NotificationSound](/type/NotificationSound/)

### Related pages

#### [account.uploadRingtone](/method/account.uploadRingtone/)

Upload notification sound, use [account.saveRingtone](/method/account.saveRingtone/) to convert it and add it to the list of saved notification sounds.
