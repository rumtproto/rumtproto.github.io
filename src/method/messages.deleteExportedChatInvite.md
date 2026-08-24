---
title: "messages.deleteExportedChatInvite"
original: "https://core.telegram.org/method/messages.deleteExportedChatInvite"
section: ref
kind: method
description: "Удалить приглашение в чат"
layout: layout.njk
---

# messages.deleteExportedChatInvite

Удалить приглашение в чат

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.deleteExportedChatInvite#d464a42b peer:InputPeer link:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир</td></tr><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Пригласительная ссылка</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>INVITE_HASH_EXPIRED</td><td>Срок действия пригласительной ссылки истёк.</td></tr><tr><td>400</td><td>INVITE_REVOKED_MISSING</td><td>Указанная пригласительная ссылка уже отозвана или недействительна.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>
