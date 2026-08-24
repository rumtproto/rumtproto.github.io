---
title: "account.getReactionsNotifySettings"
original: "https://core.telegram.org/method/account.getReactionsNotifySettings"
section: ref
kind: method
description: "Получить текущие настройки уведомлений о реакциях »."
layout: layout.njk
---

# account.getReactionsNotifySettings

Получить текущие [настройки уведомлений о реакциях »](/api/reactions/#notifications-about-reactions).

```
reactionsNotifySettings#56e34970 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;
---functions---
account.getReactionsNotifySettings#6dd654c = ReactionsNotifySettings;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[ReactionsNotifySettings](/type/ReactionsNotifySettings/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
