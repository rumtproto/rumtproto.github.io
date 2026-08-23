---
title: "account.setReactionsNotifySettings (метод)"
original: "https://core.telegram.org/method/account.setReactionsNotifySettings"
section: ref
kind: method
layout: layout.njk
---

# account.setReactionsNotifySettings

*Метод из схемы TL.*

> Change the [reaction notification settings »](https://core.telegram.org/api/reactions#notifications-about-reactions).

## Определение TL

```
reactionsNotifySettings#56e34970 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;
---functions---
account.setReactionsNotifySettings#316ce548 settings:ReactionsNotifySettings = ReactionsNotifySettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| settings | [ReactionsNotifySettings](/type/ReactionsNotifySettings/) | New reaction notification settings. |

## Результат

[ReactionsNotifySettings](/type/ReactionsNotifySettings/)

## Only users can use this method

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
