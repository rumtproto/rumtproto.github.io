---
title: "account.getReactionsNotifySettings"
original: "https://core.telegram.org/method/account.getReactionsNotifySettings"
section: ref
description: "Get the current reaction notification settings »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getReactionsNotifySettings","url":"/method/account.getReactionsNotifySettings/"}]
layout: layout.njk
---

# account.getReactionsNotifySettings

Get the current [reaction notification settings »](/api/reactions/#notifications-about-reactions).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/reactionsNotifySettings/">reactionsNotifySettings</a>#56e34970 flags:<a href="/type/%23/">#</a> messages_notify_from:flags.0?<a href="/type/ReactionNotificationsFrom/">ReactionNotificationsFrom</a> stories_notify_from:flags.1?<a href="/type/ReactionNotificationsFrom/">ReactionNotificationsFrom</a> sound:<a href="/type/NotificationSound/">NotificationSound</a> show_previews:<a href="/type/Bool/">Bool</a> = <a href="/type/ReactionsNotifySettings/">ReactionsNotifySettings</a>;
---functions---
<a href="/method/account.getReactionsNotifySettings/" class="current_page_link">account.getReactionsNotifySettings</a>#6dd654c = <a href="/type/ReactionsNotifySettings/">ReactionsNotifySettings</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[ReactionsNotifySettings](/type/ReactionsNotifySettings/)

### Only users can use this method

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
