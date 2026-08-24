---
title: "payments.fulfillStarsSubscription"
original: "https://core.telegram.org/method/payments.fulfillStarsSubscription"
section: ref
kind: method
description: "Повторно вступить в приватный канал, связанный с активной подпиской за Telegram Stars »."
layout: layout.njk
---

# payments.fulfillStarsSubscription

Повторно вступить в приватный канал, связанный с активной [подпиской за Telegram Stars »](/api/invites/#paid-invite-links).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.fulfillStarsSubscription#cc5bebb3 peer:InputPeer subscription_id:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Всегда передавайте <a href="/constructor/inputPeerSelf">inputPeerSelf</a>.</td></tr><tr><td><strong>subscription_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор подписки.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Определяет текущего пользователя.

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.
