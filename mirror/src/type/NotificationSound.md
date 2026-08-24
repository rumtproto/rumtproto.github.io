---
title: "NotificationSound"
original: "https://core.telegram.org/type/NotificationSound"
section: ref
description: "Represents a notification sound"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"NotificationSound","url":"/type/NotificationSound/"}]
layout: layout.njk
---

# NotificationSound

Represents a notification sound

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/notificationSoundDefault/">notificationSoundDefault</a>#97e8bebe = <a href="/type/NotificationSound/" class="current_page_link">NotificationSound</a>;
<a href="/constructor/notificationSoundNone/">notificationSoundNone</a>#6f0c34df = <a href="/type/NotificationSound/" class="current_page_link">NotificationSound</a>;
<a href="/constructor/notificationSoundLocal/">notificationSoundLocal</a>#830b9ae4 title:<a href="/type/string/">string</a> data:<a href="/type/string/">string</a> = <a href="/type/NotificationSound/" class="current_page_link">NotificationSound</a>;
<a href="/constructor/notificationSoundRingtone/">notificationSoundRingtone</a>#ff6c8049 id:<a href="/type/long/">long</a> = <a href="/type/NotificationSound/" class="current_page_link">NotificationSound</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/notificationSoundDefault/">notificationSoundDefault</a></td><td>Indicates the default notification sound should be used</td></tr><tr><td><a href="/constructor/notificationSoundNone/">notificationSoundNone</a></td><td>No notification sound should be used</td></tr><tr><td><a href="/constructor/notificationSoundLocal/">notificationSoundLocal</a></td><td>Indicates a specific local notification sound should be used</td></tr><tr><td><a href="/constructor/notificationSoundRingtone/">notificationSoundRingtone</a></td><td>A specific previously uploaded notification sound should be used</td></tr></tbody></table>
