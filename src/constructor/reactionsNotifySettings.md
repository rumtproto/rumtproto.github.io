---
title: "reactionsNotifySettings (конструктор)"
original: "https://core.telegram.org/constructor/reactionsNotifySettings"
section: ref
kind: constructor
layout: layout.njk
---

# reactionsNotifySettings

*Конструктор из схемы TL.*

> Reaction notification settings, see [here »](https://core.telegram.org/api/reactions#notifications-about-reactions) for more info.

## Определение TL

```
reactionsNotifySettings#56e34970 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| messages_notify_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[ReactionNotificationsFrom](/type/ReactionNotificationsFrom/) | Message reaction notification settings, if not set completely disables notifications/updates about message reactions. |
| stories_notify_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[ReactionNotificationsFrom](/type/ReactionNotificationsFrom/) | Story reaction notification settings, if not set completely disables notifications/updates about reactions to stories. |
| poll_votes_notify_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReactionNotificationsFrom](/type/ReactionNotificationsFrom/) | [Non-anonymous poll vote »](https://core.telegram.org/api/poll#unread-poll-votes) notification settings, if not set completely disables notifications/updates about votes cast in the user's non-anonymous polls. |
| sound | [NotificationSound](/type/NotificationSound/) | [Notification sound for reactions »](https://core.telegram.org/api/ringtones) |
| show_previews | [Bool](/type/Bool/) | If false, [push notifications »](https://core.telegram.org/api/push-updates) about message/story reactions will only be of type REACT_HIDDEN/REACT_STORY_HIDDEN, without any information about the reacted-to story or the reaction itself. |

## Тип

[ReactionsNotifySettings](/type/ReactionsNotifySettings/)

## Related pages

#### [Polls and quizzes](https://core.telegram.org/api/poll)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Notification sounds](https://core.telegram.org/api/ringtones)

The API allows uploading and synchronizing notification sounds associated to a specific chat.

#### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
