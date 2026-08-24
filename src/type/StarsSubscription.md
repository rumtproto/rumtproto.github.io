---
title: "StarsSubscription"
original: "https://core.telegram.org/type/StarsSubscription"
section: ref
kind: type
description: "Представляет подписку за Telegram Stars »."
layout: layout.njk
---

# StarsSubscription

Представляет [подписку за Telegram Stars »](/api/invites/#paid-invite-links).

```
starsSubscription#2e6eab1a flags:# canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:string peer:Peer until_date:int pricing:StarsSubscriptionPricing chat_invite_hash:flags.3?string title:flags.4?string photo:flags.5?WebDocument invoice_slug:flags.6?string = StarsSubscription;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/starsSubscription">starsSubscription</a></td><td>Представляет <a href="/api/invites#paid-invite-links">подписку за Telegram Stars »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.
