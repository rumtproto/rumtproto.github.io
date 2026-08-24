---
title: "inputChannel"
original: "https://core.telegram.org/constructor/inputChannel"
section: ref
kind: constructor
description: "Представляет канал"
layout: layout.njk
---

# inputChannel

Представляет канал

```
inputChannel#f35aec28 channel_id:long access_hash:long = InputChannel;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа, взятый из конструктора <a href="/constructor/channel">channel</a></td></tr></tbody></table>

### Тип

[InputChannel](/type/InputChannel/)

### Связанные страницы

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
