---
title: "messageActionSetMessagesTTL"
original: "https://core.telegram.org/constructor/messageActionSetMessagesTTL"
section: ref
kind: constructor
description: "Время жизни сообщений в этом чате было изменено."
layout: layout.njk
---

# messageActionSetMessagesTTL

Время жизни сообщений в этом чате было изменено.

```
messageActionSetMessagesTTL#3c134d7b flags:# period:int auto_setting_from:flags.0?long = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Новое время жизни (Time-To-Live) всех сообщений, отправляемых в этом чате; если 0, автоудаление было отключено.</td></tr><tr><td><strong>auto_setting_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>[@term:TTL] Если установлено, настройка TTL чата была изменена не вручную одним из участников, а автоматически, потому что у одного из участников включены <a href="/method/messages.setDefaultHistoryTTL">настройки TTL по умолчанию »</a>. Например, если пользователь пишет нам впервые, а у нас задан TTL сообщений по умолчанию в одну неделю, это сервисное сообщение (с <code>auto_setting_from=our_userid</code>) будет отправлено перед нашим первым сообщением.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [messages.setDefaultHistoryTTL](/method/messages.setDefaultHistoryTTL/)

Изменяет значение по умолчанию настройки времени жизни сообщений (Time-To-Live), применяемое ко всем новым чатам.
