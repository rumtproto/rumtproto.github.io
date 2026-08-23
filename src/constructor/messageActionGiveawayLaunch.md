---
title: "messageActionGiveawayLaunch (конструктор)"
original: "https://core.telegram.org/constructor/messageActionGiveawayLaunch"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionGiveawayLaunch

*Конструктор из схемы TL.*

> A [giveaway](https://core.telegram.org/api/giveaways) was started.

## Определение TL

```
messageActionGiveawayLaunch#a80f51e4 flags:# stars:flags.0?long = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | For [Telegram Star giveaways](https://core.telegram.org/api/stars#star-giveaways), the total number of Telegram Stars being given away. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
