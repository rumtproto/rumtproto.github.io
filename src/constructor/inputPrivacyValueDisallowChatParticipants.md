---
title: "inputPrivacyValueDisallowChatParticipants"
original: "https://core.telegram.org/constructor/inputPrivacyValueDisallowChatParticipants"
section: ref
kind: constructor
description: "Запретить только участникам определённых чатов"
layout: layout.njk
---

# inputPrivacyValueDisallowChatParticipants

Запретить только участникам определённых чатов

```
inputPrivacyValueDisallowChatParticipants#e94f0f86 chats:Vector<long> = InputPrivacyRule;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Запрещённые идентификаторы чатов (идентификатор <a href="/constructor/chat">чата</a> или <a href="/constructor/channel">супергруппы</a>, в точности в том виде, в каком он получен в конструкторе (то есть, в отличие от идентификаторов Bot API, здесь идентификаторы групп и супергрупп следует обрабатывать одинаково)).</td></tr></tbody></table>

### Тип

[InputPrivacyRule](/type/InputPrivacyRule/)

### Связанные страницы

#### [chat](/constructor/chat/)

Информация о группе.

При обновлении [локальной базы пиров](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).

См. [здесь »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L5679) реализацию логики, которую следует применять при обновлении [локальной базы чатов-пиров](/api/peers/).

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
