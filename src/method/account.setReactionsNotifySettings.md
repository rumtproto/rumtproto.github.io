---
title: "account.setReactionsNotifySettings"
original: "https://core.telegram.org/method/account.setReactionsNotifySettings"
section: ref
kind: method
description: "Изменить настройки уведомлений о реакциях »."
layout: layout.njk
---

# account.setReactionsNotifySettings

Изменить [настройки уведомлений о реакциях »](/api/reactions/#notifications-about-reactions).

```
reactionsNotifySettings#56e34970 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;
---functions---
account.setReactionsNotifySettings#316ce548 settings:ReactionsNotifySettings = ReactionsNotifySettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/ReactionsNotifySettings">ReactionsNotifySettings</a></td><td>Новые настройки уведомлений о реакциях.</td></tr></tbody></table>

### Результат

[ReactionsNotifySettings](/type/ReactionsNotifySettings/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
