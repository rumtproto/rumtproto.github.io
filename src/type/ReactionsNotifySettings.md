---
title: "ReactionsNotifySettings (тип)"
original: "https://core.telegram.org/type/ReactionsNotifySettings"
section: ref
kind: type
layout: layout.njk
---

# ReactionsNotifySettings

*Тип из схемы TL.*

> Reaction notification settings, see [here »](https://core.telegram.org/api/reactions#notifications-about-reactions) for more info.

## Определение TL

```
reactionsNotifySettings#56e34970 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;

---functions---

account.getReactionsNotifySettings#6dd654c = ReactionsNotifySettings;
account.setReactionsNotifySettings#316ce548 settings:ReactionsNotifySettings = ReactionsNotifySettings;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [reactionsNotifySettings](/constructor/reactionsNotifySettings/) | Reaction notification settings, see [here »](https://core.telegram.org/api/reactions#notifications-about-reactions) for more info. |

## Методы

| Method | Описание |
|---|---|
| [account.getReactionsNotifySettings](/method/account.getReactionsNotifySettings/) | Get the current [reaction notification settings »](https://core.telegram.org/api/reactions#notifications-about-reactions). |
| [account.setReactionsNotifySettings](/method/account.setReactionsNotifySettings/) | Change the [reaction notification settings »](https://core.telegram.org/api/reactions#notifications-about-reactions). |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
