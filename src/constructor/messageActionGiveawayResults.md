---
title: "messageActionGiveawayResults (конструктор)"
original: "https://core.telegram.org/constructor/messageActionGiveawayResults"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionGiveawayResults

*Конструктор из схемы TL.*

> A [giveaway](https://core.telegram.org/api/giveaways) has ended.

## Определение TL

```
messageActionGiveawayResults#87e2f155 flags:# stars:flags.0?true winners_count:int unclaimed_count:int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, this is a [Telegram Star giveaway](https://core.telegram.org/api/stars#star-giveaways) |
| winners_count | [int](/type/int/) | Number of winners in the giveaway |
| unclaimed_count | [int](/type/int/) | Number of undistributed prizes |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
