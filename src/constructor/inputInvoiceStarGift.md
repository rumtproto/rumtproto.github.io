---
title: "inputInvoiceStarGift (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoiceStarGift"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoiceStarGift

*Конструктор из схемы TL.*

> Used to buy a [Telegram Star Gift, see here »](https://core.telegram.org/api/gifts) for more info.

## Определение TL

```
inputInvoiceStarGift#e8625e92 flags:# hide_name:flags.0?true include_upgrade:flags.2?true peer:InputPeer gift_id:long message:flags.1?TextWithEntities = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| hide_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, your name will be hidden if the destination user decides to display the gift on their profile (they will still see that you sent the gift) |
| include_upgrade | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Also pay for an eventual upgrade of the gift to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| peer | [InputPeer](/type/InputPeer/) | Receiver of the gift. |
| gift_id | [long](/type/long/) | Identifier of the gift, from [starGift](/constructor/starGift/).id |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[TextWithEntities](/type/TextWithEntities/) | Optional message, attached with the gift. The maximum length for this field is specified in the [stargifts_message_length_max client configuration value »](https://core.telegram.org/api/config#stargifts-message-length-max). |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
