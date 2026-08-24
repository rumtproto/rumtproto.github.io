---
title: "PeerNotifySettings"
original: "https://core.telegram.org/type/PeerNotifySettings"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PeerNotifySettings","url":"/type/PeerNotifySettings/"}]
layout: layout.njk
---

# PeerNotifySettings

Notification settings.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/peerNotifySettings/">peerNotifySettings</a>#99622c0c flags:<a href="/type/%23/">#</a> show_previews:flags.0?<a href="/type/Bool/">Bool</a> silent:flags.1?<a href="/type/Bool/">Bool</a> mute_until:flags.2?<a href="/type/int/">int</a> ios_sound:flags.3?<a href="/type/NotificationSound/">NotificationSound</a> android_sound:flags.4?<a href="/type/NotificationSound/">NotificationSound</a> other_sound:flags.5?<a href="/type/NotificationSound/">NotificationSound</a> stories_muted:flags.6?<a href="/type/Bool/">Bool</a> stories_hide_sender:flags.7?<a href="/type/Bool/">Bool</a> stories_ios_sound:flags.8?<a href="/type/NotificationSound/">NotificationSound</a> stories_android_sound:flags.9?<a href="/type/NotificationSound/">NotificationSound</a> stories_other_sound:flags.10?<a href="/type/NotificationSound/">NotificationSound</a> = <a href="/type/PeerNotifySettings/" class="current_page_link">PeerNotifySettings</a>;

---functions---

<a href="/method/account.getNotifySettings/">account.getNotifySettings</a>#12b3ad31 peer:<a href="/type/InputNotifyPeer/">InputNotifyPeer</a> = <a href="/type/PeerNotifySettings/" class="current_page_link">PeerNotifySettings</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/peerNotifySettings/">peerNotifySettings</a></td><td>Notification settings.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getNotifySettings/">account.getNotifySettings</a></td><td>Gets current notification settings for a given user/group, from all users/all groups.</td></tr></tbody></table>
