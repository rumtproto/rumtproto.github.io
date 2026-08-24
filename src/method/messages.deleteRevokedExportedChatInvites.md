---
title: "messages.deleteRevokedExportedChatInvites"
original: "https://core.telegram.org/method/messages.deleteRevokedExportedChatInvites"
section: ref
kind: method
description: "Удалить все отозванные приглашения в чат"
layout: layout.njk
---

# messages.deleteRevokedExportedChatInvites

Удалить все отозванные приглашения в чат

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.deleteRevokedExportedChatInvites#56987bd5 peer:InputPeer admin_id:InputUser = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор администратора, изначально создавшего отозванные пригласительные ссылки</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ADMIN_ID_INVALID</td><td>Указанный идентификатор администратора недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>
