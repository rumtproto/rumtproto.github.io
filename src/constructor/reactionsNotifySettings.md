---
title: "reactionsNotifySettings"
original: "https://core.telegram.org/constructor/reactionsNotifySettings"
section: ref
kind: constructor
description: "Настройки уведомлений о реакциях; подробнее см. здесь »."
layout: layout.njk
---

# reactionsNotifySettings

Настройки уведомлений о реакциях; подробнее см. [здесь »](/api/reactions/#notifications-about-reactions).

```
reactionsNotifySettings#56e34970 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>messages_notify_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/ReactionNotificationsFrom">ReactionNotificationsFrom</a></td><td>Настройки уведомлений о реакциях на сообщения; если не заданы, уведомления и обновления о реакциях на сообщения полностью отключаются.</td></tr><tr><td><strong>stories_notify_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/ReactionNotificationsFrom">ReactionNotificationsFrom</a></td><td>Настройки уведомлений о реакциях на истории; если не заданы, уведомления и обновления о реакциях на истории полностью отключаются.</td></tr><tr><td><strong>poll_votes_notify_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ReactionNotificationsFrom">ReactionNotificationsFrom</a></td><td>Настройки уведомлений о <a href="/api/poll#unread-poll-votes">голосах в неанонимных опросах »</a>; если не заданы, уведомления и обновления о голосах в неанонимных опросах пользователя полностью отключаются.</td></tr><tr><td><strong>sound</strong></td><td style="text-align: center;"><a href="/type/NotificationSound">NotificationSound</a></td><td><a href="/api/ringtones">Звук уведомления о реакциях »</a></td></tr><tr><td><strong>show_previews</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Если false, <a href="/api/push-updates">push-уведомления »</a> о реакциях на сообщения и истории будут иметь только тип <code>REACT_HIDDEN</code>/<code>REACT_STORY_HIDDEN</code>, без каких-либо сведений об истории, на которую поставлена реакция, и о самой реакции.</td></tr></tbody></table>

### Тип

[ReactionsNotifySettings](/type/ReactionsNotifySettings/)

### Связанные страницы

#### [Опросы и викторины](/api/poll/)

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, если не миллионы пользователей в чатах и каналах.

#### [Звуки уведомлений](/api/ringtones/)

API позволяет загружать и синхронизировать звуки уведомлений, привязанные к конкретному чату.

#### [Обработка PUSH-уведомлений](/api/push-updates/)

Как подписаться на PUSH-уведомления и обрабатывать их

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
