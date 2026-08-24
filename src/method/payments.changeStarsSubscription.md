---
title: "payments.changeStarsSubscription"
original: "https://core.telegram.org/method/payments.changeStarsSubscription"
section: ref
kind: method
description: "Активировать или деактивировать подписку за Telegram Stars »."
layout: layout.njk
---

# payments.changeStarsSubscription

Активировать или деактивировать [подписку за Telegram Stars »](/api/invites/#paid-invite-links).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.changeStarsSubscription#c7770878 flags:# peer:InputPeer subscription_id:string canceled:flags.0?Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Всегда передавайте <a href="/constructor/inputPeerSelf">inputPeerSelf</a>.</td></tr><tr><td><strong>subscription_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор подписки.</td></tr><tr><td><strong>canceled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Bool">Bool</a></td><td>Отменить подписку или возобновить её.</td></tr></tbody></table>

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
