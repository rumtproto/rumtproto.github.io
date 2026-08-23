---
title: "help.promoData (конструктор)"
original: "https://core.telegram.org/constructor/help.promoData"
section: ref
kind: constructor
layout: layout.njk
---

# help.promoData

*Конструктор из схемы TL.*

> A set of useful suggestions and a PSA/MTProxy sponsored peer, see [here »](https://core.telegram.org/api/config#suggestions) for more info.

## Определение TL

```
help.promoData#8a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| proxy | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Set when connecting using an MTProxy that has configured an associated peer (that will be passed in peer, i.e. the channel that sponsored the MTProxy) that should be pinned on top of the chat list. |
| expires | [int](/type/int/) | Unixtime when to re-invoke [help.getPromoData](/method/help.getPromoData/). |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Peer](/type/Peer/) | MTProxy/PSA peer |
| psa_type | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | For Public Service Announcement peers, indicates the type of the PSA. |
| psa_message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | For Public Service Announcement peers, contains the PSA itself. |
| pending_suggestions | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | Contains a list of [pending suggestions »](https://core.telegram.org/api/config#basic-suggestions). |
| dismissed_suggestions | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | Contains a list of [inverted suggestions »](https://core.telegram.org/api/config#inverted-suggestions). |
| custom_pending_suggestion | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[PendingSuggestion](/type/PendingSuggestion/) | Contains a list of [custom pending suggestions »](https://core.telegram.org/api/config#custom-suggestions). |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chat info |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | User info |

## Тип

[help.PromoData](/type/help.PromoData/)

## Related pages

#### [help.getPromoData](/method/help.getPromoData/)

Returns a set of useful suggestions and PSA/MTProxy sponsored peers, see [here »](https://core.telegram.org/api/config#suggestions) for more info.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
