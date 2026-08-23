---
title: "messages.sponsoredMessages (конструктор)"
original: "https://core.telegram.org/constructor/messages.sponsoredMessages"
section: ref
kind: constructor
layout: layout.njk
---

# messages.sponsoredMessages

*Конструктор из схемы TL.*

> A set of sponsored messages associated to a channel

## Определение TL

```
messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| posts_between | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | If set, specifies the minimum number of messages between shown sponsored messages; otherwise, only one sponsored message must be shown after all ordinary messages. |
| start_delay | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | For [sponsored messages to show on channel videos »](https://core.telegram.org/api/sponsored-messages#getting-sponsored-video-advertisements), the number of seconds to wait before showing the first ad. |
| between_delay | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | For [sponsored messages to show on channel videos »](https://core.telegram.org/api/sponsored-messages#getting-sponsored-video-advertisements), the number of seconds to wait after the previous ad is hidden, before showing the next ad. |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[SponsoredMessage](/type/SponsoredMessage/)> | Sponsored messages |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in the sponsored messages |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the sponsored messages |

## Тип

[messages.SponsoredMessages](/type/messages.SponsoredMessages/)

## Related pages

#### [Sponsored messages](https://core.telegram.org/api/sponsored-messages)

How clients should fetch, display and interact with sponsored messages.
