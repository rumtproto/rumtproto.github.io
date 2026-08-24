---
title: "account.updateNotifySettings"
original: "https://core.telegram.org/method/account.updateNotifySettings"
section: ref
kind: method
description: "Изменяет настройки уведомлений для заданного пользователя или группы, для всех пользователей или всех групп."
layout: layout.njk
---

# account.updateNotifySettings

Изменяет настройки уведомлений для заданного пользователя или группы, для всех пользователей или всех групп.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateNotifySettings#84be5b93 peer:InputNotifyPeer settings:InputPeerNotifySettings = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputNotifyPeer">InputNotifyPeer</a></td><td>[@term:peer] Источник уведомления</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/InputPeerNotifySettings">InputPeerNotifySettings</a></td><td>Настройки уведомлений</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>SETTINGS_INVALID</td><td>Указаны недопустимые настройки.</td></tr></tbody></table>
