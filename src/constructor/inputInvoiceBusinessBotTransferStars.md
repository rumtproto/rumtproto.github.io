---
title: "inputInvoiceBusinessBotTransferStars (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoiceBusinessBotTransferStars"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoiceBusinessBotTransferStars

*Конструктор из схемы TL.*

> Transfer stars from the balance of a user account [connected to a business bot](https://core.telegram.org/api/bots/connected-business-bots), to the balance of the [business bot](https://core.telegram.org/api/bots/connected-business-bots), see [here »](https://core.telegram.org/api/stars#transferring-stars-from-a-business-account-to-the-business-bot) for more info on the full flow.

## Определение TL

```
inputInvoiceBusinessBotTransferStars#f4997e42 bot:InputUser stars:long = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | Always [inputUserSelf](/constructor/inputUserSelf/). |
| stars | [long](/type/long/) | The number of stars to transfer. |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [inputUserSelf](/constructor/inputUserSelf/)

Defines the current user.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
