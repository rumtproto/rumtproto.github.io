---
title: "ReactionsNotifySettings"
original: "https://core.telegram.org/type/ReactionsNotifySettings"
section: ref
description: "Reaction notification settings, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ReactionsNotifySettings","url":"/type/ReactionsNotifySettings/"}]
layout: layout.njk
---

# ReactionsNotifySettings

Reaction notification settings, see [here »](/api/reactions/#notifications-about-reactions) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/reactionsNotifySettings/">reactionsNotifySettings</a>#56e34970 flags:<a href="/type/%23/">#</a> messages_notify_from:flags.0?<a href="/type/ReactionNotificationsFrom/">ReactionNotificationsFrom</a> stories_notify_from:flags.1?<a href="/type/ReactionNotificationsFrom/">ReactionNotificationsFrom</a> sound:<a href="/type/NotificationSound/">NotificationSound</a> show_previews:<a href="/type/Bool/">Bool</a> = <a href="/type/ReactionsNotifySettings/" class="current_page_link">ReactionsNotifySettings</a>;

---functions---

<a href="/method/account.getReactionsNotifySettings/">account.getReactionsNotifySettings</a>#6dd654c = <a href="/type/ReactionsNotifySettings/" class="current_page_link">ReactionsNotifySettings</a>;
<a href="/method/account.setReactionsNotifySettings/">account.setReactionsNotifySettings</a>#316ce548 settings:<a href="/type/ReactionsNotifySettings/" class="current_page_link">ReactionsNotifySettings</a> = <a href="/type/ReactionsNotifySettings/" class="current_page_link">ReactionsNotifySettings</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/reactionsNotifySettings/">reactionsNotifySettings</a></td><td>Reaction notification settings, see <a href="/api/reactions/#notifications-about-reactions">here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getReactionsNotifySettings/">account.getReactionsNotifySettings</a></td><td>Get the current <a href="/api/reactions/#notifications-about-reactions">reaction notification settings »</a>.</td></tr><tr><td><a href="/method/account.setReactionsNotifySettings/">account.setReactionsNotifySettings</a></td><td>Change the <a href="/api/reactions/#notifications-about-reactions">reaction notification settings »</a>.</td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
