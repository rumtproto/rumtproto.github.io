---
title: "account.setReactionsNotifySettings"
original: "https://core.telegram.org/method/account.setReactionsNotifySettings"
section: ref
description: "Change the reaction notification settings »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.setReactionsNotifySettings","url":"/method/account.setReactionsNotifySettings/"}]
layout: layout.njk
---

# account.setReactionsNotifySettings

Change the [reaction notification settings »](/api/reactions/#notifications-about-reactions).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/reactionsNotifySettings/">reactionsNotifySettings</a>#56e34970 flags:<a href="/type/%23/">#</a> messages_notify_from:flags.0?<a href="/type/ReactionNotificationsFrom/">ReactionNotificationsFrom</a> stories_notify_from:flags.1?<a href="/type/ReactionNotificationsFrom/">ReactionNotificationsFrom</a> sound:<a href="/type/NotificationSound/">NotificationSound</a> show_previews:<a href="/type/Bool/">Bool</a> = <a href="/type/ReactionsNotifySettings/">ReactionsNotifySettings</a>;
---functions---
<a href="/method/account.setReactionsNotifySettings/" class="current_page_link">account.setReactionsNotifySettings</a>#316ce548 settings:<a href="/type/ReactionsNotifySettings/">ReactionsNotifySettings</a> = <a href="/type/ReactionsNotifySettings/">ReactionsNotifySettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/ReactionsNotifySettings/">ReactionsNotifySettings</a></td><td>New reaction notification settings.</td></tr></tbody></table>

### Result

[ReactionsNotifySettings](/type/ReactionsNotifySettings/)

### Only users can use this method

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
