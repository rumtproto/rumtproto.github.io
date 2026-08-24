---
title: "ReactionsNotifySettings"
original: "https://core.telegram.org/type/ReactionsNotifySettings"
section: ref
kind: type
description: "Настройки уведомлений о реакциях; подробнее см. здесь »."
layout: layout.njk
---

# ReactionsNotifySettings

Настройки уведомлений о реакциях; подробнее см. [здесь »](/api/reactions/#notifications-about-reactions).

```
reactionsNotifySettings#56e34970 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;

---functions---

account.getReactionsNotifySettings#6dd654c = ReactionsNotifySettings;
account.setReactionsNotifySettings#316ce548 settings:ReactionsNotifySettings = ReactionsNotifySettings;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/reactionsNotifySettings">reactionsNotifySettings</a></td><td>Настройки уведомлений о реакциях; подробнее см. <a href="/api/reactions#notifications-about-reactions">здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getReactionsNotifySettings">account.getReactionsNotifySettings</a></td><td>Получить текущие <a href="/api/reactions#notifications-about-reactions">настройки уведомлений о реакциях »</a>.</td></tr><tr><td><a href="/method/account.setReactionsNotifySettings">account.setReactionsNotifySettings</a></td><td>Изменить <a href="/api/reactions#notifications-about-reactions">настройки уведомлений о реакциях »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
