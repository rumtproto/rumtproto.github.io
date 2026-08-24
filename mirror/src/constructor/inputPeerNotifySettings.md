---
title: "inputPeerNotifySettings"
original: "https://core.telegram.org/constructor/inputPeerNotifySettings"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPeerNotifySettings","url":"/constructor/inputPeerNotifySettings/"}]
layout: layout.njk
---

# inputPeerNotifySettings

Notification settings.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPeerNotifySettings/" class="current_page_link">inputPeerNotifySettings</a>#cacb6ae2 flags:<a href="/type/%23/">#</a> show_previews:flags.0?<a href="/type/Bool/">Bool</a> silent:flags.1?<a href="/type/Bool/">Bool</a> mute_until:flags.2?<a href="/type/int/">int</a> sound:flags.3?<a href="/type/NotificationSound/">NotificationSound</a> stories_muted:flags.6?<a href="/type/Bool/">Bool</a> stories_hide_sender:flags.7?<a href="/type/Bool/">Bool</a> stories_sound:flags.8?<a href="/type/NotificationSound/">NotificationSound</a> = <a href="/type/InputPeerNotifySettings/">InputPeerNotifySettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>show_previews</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Bool/">Bool</a></td><td>If the text of the message shall be displayed in notification</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Bool/">Bool</a></td><td>Peer was muted?</td></tr><tr><td><strong>mute_until</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Date until which all notifications shall be switched off</td></tr><tr><td><strong>sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/NotificationSound/">NotificationSound</a></td><td>Identifier of an audio file to play for notifications.</td></tr><tr><td><strong>stories_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/Bool/">Bool</a></td><td>Whether story notifications should be disabled.</td></tr><tr><td><strong>stories_hide_sender</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/Bool/">Bool</a></td><td>Whether the sender name should be displayed in story notifications.</td></tr><tr><td><strong>stories_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/NotificationSound/">NotificationSound</a></td><td>Identifier of an audio file to play for story notifications.</td></tr></tbody></table>

### Type

[InputPeerNotifySettings](/type/InputPeerNotifySettings/)
