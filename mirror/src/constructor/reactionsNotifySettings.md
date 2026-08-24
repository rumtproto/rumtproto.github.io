---
title: "reactionsNotifySettings"
original: "https://core.telegram.org/constructor/reactionsNotifySettings"
section: ref
description: "Reaction notification settings, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"reactionsNotifySettings","url":"/constructor/reactionsNotifySettings/"}]
layout: layout.njk
---

# reactionsNotifySettings

Reaction notification settings, see [here »](/api/reactions/#notifications-about-reactions) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/reactionsNotifySettings/" class="current_page_link">reactionsNotifySettings</a>#56e34970 flags:<a href="/type/%23/">#</a> messages_notify_from:flags.0?<a href="/type/ReactionNotificationsFrom/">ReactionNotificationsFrom</a> stories_notify_from:flags.1?<a href="/type/ReactionNotificationsFrom/">ReactionNotificationsFrom</a> sound:<a href="/type/NotificationSound/">NotificationSound</a> show_previews:<a href="/type/Bool/">Bool</a> = <a href="/type/ReactionsNotifySettings/">ReactionsNotifySettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>messages_notify_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/ReactionNotificationsFrom/">ReactionNotificationsFrom</a></td><td>Message reaction notification settings, if not set completely disables notifications/updates about message reactions.</td></tr><tr><td><strong>stories_notify_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/ReactionNotificationsFrom/">ReactionNotificationsFrom</a></td><td>Story reaction notification settings, if not set completely disables notifications/updates about reactions to stories.</td></tr><tr><td><strong>poll_votes_notify_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/ReactionNotificationsFrom/">ReactionNotificationsFrom</a></td><td><a href="/api/poll/#unread-poll-votes">Non-anonymous poll vote »</a> notification settings, if not set completely disables notifications/updates about votes cast in the user's non-anonymous polls.</td></tr><tr><td><strong>sound</strong></td><td style="text-align: center;"><a href="/type/NotificationSound/">NotificationSound</a></td><td><a href="/api/ringtones/">Notification sound for reactions »</a></td></tr><tr><td><strong>show_previews</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>If false, <a href="/api/push-updates/">push notifications »</a> about message/story reactions will only be of type <code>REACT_HIDDEN</code>/<code>REACT_STORY_HIDDEN</code>, without any information about the reacted-to story or the reaction itself.</td></tr></tbody></table>

### Type

[ReactionsNotifySettings](/type/ReactionsNotifySettings/)

### Related pages

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Notification sounds](/api/ringtones/)

The API allows uploading and synchronizing notification sounds associated to a specific chat.

#### [Handling PUSH-notifications](/api/push-updates/)

How to subscribe to and handle PUSH notifications

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
