---
title: "sponsoredPeer (конструктор)"
original: "https://core.telegram.org/constructor/sponsoredPeer"
section: ref
kind: constructor
layout: layout.njk
---

# sponsoredPeer

*Конструктор из схемы TL.*

> A sponsored peer.

## Определение TL

```
sponsoredPeer#c69708d3 flags:# random_id:bytes peer:Peer sponsor_info:flags.0?string additional_info:flags.1?string = SponsoredPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| random_id | [bytes](/type/bytes/) | ID of the sponsored peer, to be passed to [messages.viewSponsoredMessage](/method/messages.viewSponsoredMessage/), [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/) or [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/) (the same methods used for [sponsored messages &raquo](https://core.telegram.org/api/sponsored-messages)). See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| peer | [Peer](/type/Peer/) | The sponsored peer. |
| sponsor_info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | If set, contains additional information about the sponsor to be shown along with the peer. |
| additional_info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | If set, contains additional information about the sponsored message to be shown along with the peer. |

## Тип

[SponsoredPeer](/type/SponsoredPeer/)

## Related pages

#### [messages.viewSponsoredMessage](/method/messages.viewSponsoredMessage/)

Mark a specific [sponsored message »](https://core.telegram.org/api/sponsored-messages) as read

#### [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/)

Informs the server that the user has interacted with a sponsored message in [one of the ways listed here »](https://core.telegram.org/api/sponsored-messages#clicking-on-sponsored-messages).

#### [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/)

Report a [sponsored message »](https://core.telegram.org/api/sponsored-messages), see [here »](https://core.telegram.org/api/sponsored-messages#reporting-sponsored-messages) for more info on the full flow.

#### [Sponsored messages](https://core.telegram.org/api/sponsored-messages)

How clients should fetch, display and interact with sponsored messages.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
