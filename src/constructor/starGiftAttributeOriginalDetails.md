---
title: "starGiftAttributeOriginalDetails (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAttributeOriginalDetails"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAttributeOriginalDetails

*Конструктор из схемы TL.*

> Info about the sender, receiver and message attached to the original [gift »](https://core.telegram.org/api/gifts), before it was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
starGiftAttributeOriginalDetails#e0bff26c flags:# sender_id:flags.0?Peer recipient_id:Peer date:int message:flags.1?TextWithEntities = StarGiftAttribute;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| sender_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Peer](/type/Peer/) | Original sender of the gift, absent if the gift was private. |
| recipient_id | [Peer](/type/Peer/) | Original receiver of the gift. |
| date | [int](/type/int/) | When was the gift sent. |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[TextWithEntities](/type/TextWithEntities/) | Original message attached to the gift, if present. |

## Тип

[StarGiftAttribute](/type/StarGiftAttribute/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
