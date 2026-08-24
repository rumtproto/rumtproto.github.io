---
title: "account.reportProfilePhoto"
original: "https://core.telegram.org/method/account.reportProfilePhoto"
section: ref
kind: method
description: "Пожаловаться на фотографию профиля диалога"
layout: layout.njk
---

# account.reportProfilePhoto

Пожаловаться на фотографию профиля диалога

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.reportProfilePhoto#fa8cc6f5 peer:InputPeer photo_id:InputPhoto reason:ReportReason message:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Диалог</td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/type/InputPhoto">InputPhoto</a></td><td>Идентификатор фотографии диалога</td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/type/ReportReason">ReportReason</a></td><td>Причина жалобы</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Комментарий для модерации жалобы</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>
