---
title: "recentStory"
original: "https://core.telegram.org/constructor/recentStory"
section: ref
kind: constructor
description: "Сводка активных историй » пира, встроенная в user.stories_max_id и channel.stories_max_id и возвращаемая методом stories.getPeerMaxIDs."
layout: layout.njk
---

# recentStory

Сводка [активных историй »](/api/stories/#recent-story-summaries) пира, встроенная в [user](/constructor/user/).`stories_max_id` и [channel](/constructor/channel/).`stories_max_id` и возвращаемая методом [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/).

```
recentStory#711d692d flags:# live:flags.0?true max_id:flags.1?int = RecentStory;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>live</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Ведёт ли пир сейчас <a href="/api/stories#live-stories">прямой эфир в историях »</a>.</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Если задан флаг <code>live</code> — идентификатор активной <a href="/api/stories#live-stories">прямой истории »</a> пира; иначе — идентификатор максимальной активной истории пира.</td></tr></tbody></table>

### Тип

[RecentStory](/type/RecentStory/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [user](/constructor/user/)

Содержит сведения об определённом пользователе.

Если не указано иное, при обновлении [локальной базы пиров](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).

См. [здесь »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) реализацию логики, которую следует применять при обновлении [локальной базы пиров-пользователей](/api/peers/).

#### [channel](/constructor/channel/)

Информация о канале или супергруппе

При обновлении [локальной базы пиров](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).

[@term:min] Единственное исключение из приведённого выше правила — установленный флаг `min`: в этом случае поверх локально сохранённой версии обязаны применяться **только** следующие поля:

-   `title`
-   `megagroup`
-   `color`
-   `photo`
-   `username`
-   `usernames`
-   `has_geo`
-   `noforwards`
-   `emoji_status`
-   `has_link`
-   `slow_mode_enabled`
-   `scam`
-   `fake`
-   `gigagroup`
-   `forum`
-   `level`
-   `restricted`
-   `restriction_reason`
-   `join_to_send`
-   `join_request`
-   `is_verified`
-   `default_banned_rights`
-   `signature_profiles`
-   `autotranslation`
-   `broadcast_messages_allowed`
-   [@term:monoforum] `monoforum`
-   `forum_tabs`
-   `linked_monoforum_id`
-   `send_paid_messages_stars`
-   `bot_verification_icon`

См. [здесь »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L9176) реализацию логики, которую следует применять при обновлении [локальной базы пиров-каналов](/api/peers/).

#### [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/)

Получить компактные [сводки активных историй »](/api/stories/#recent-story-summaries) для набора пиров.
