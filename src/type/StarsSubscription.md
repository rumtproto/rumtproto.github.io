---
title: "StarsSubscription (тип)"
original: "https://core.telegram.org/type/StarsSubscription"
section: ref
kind: type
layout: layout.njk
---

# StarsSubscription

*Тип из схемы TL.*

> Represents a [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links).

## Определение TL

```
starsSubscription#2e6eab1a flags:# canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:string peer:Peer until_date:int pricing:StarsSubscriptionPricing chat_invite_hash:flags.3?string title:flags.4?string photo:flags.5?WebDocument invoice_slug:flags.6?string = StarsSubscription;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starsSubscription](/constructor/starsSubscription/) | Represents a [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links). |

## Related pages

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
