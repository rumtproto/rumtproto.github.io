---
title: "account.getReactionsNotifySettings (метод)"
original: "https://core.telegram.org/method/account.getReactionsNotifySettings"
section: ref
kind: method
layout: layout.njk
---

# account.getReactionsNotifySettings

*Метод из схемы TL.*

> Get the current [reaction notification settings »](https://core.telegram.org/api/reactions#notifications-about-reactions).

## Определение TL

```
reactionsNotifySettings#56e34970 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;
---functions---
account.getReactionsNotifySettings#6dd654c = ReactionsNotifySettings;
```

## Параметры

This constructor does not require any parameters.

## Результат

[ReactionsNotifySettings](/type/ReactionsNotifySettings/)

## Only users can use this method

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
