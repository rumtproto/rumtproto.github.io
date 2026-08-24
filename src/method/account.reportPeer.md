---
title: "account.reportPeer"
original: "https://core.telegram.org/method/account.reportPeer"
section: ref
kind: method
description: "Пожаловаться на пира за нарушение условий использования Telegram"
layout: layout.njk
---

# account.reportPeer

Пожаловаться на пира за нарушение условий использования Telegram

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.reportPeer#c5ba3d86 peer:InputPeer reason:ReportReason message:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, на которого нужно пожаловаться</td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/type/ReportReason">ReportReason</a></td><td>Причина, по которой на этот пир подаётся жалоба</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Комментарий для модерации жалобы</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>
