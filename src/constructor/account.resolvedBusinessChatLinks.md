---
title: "account.resolvedBusinessChatLinks (конструктор)"
original: "https://core.telegram.org/constructor/account.resolvedBusinessChatLinks"
section: ref
kind: constructor
layout: layout.njk
---

# account.resolvedBusinessChatLinks

*Конструктор из схемы TL.*

> Contains info about a single resolved [business chat deep link »](https://core.telegram.org/api/business#business-chat-links).

## Определение TL

```
account.resolvedBusinessChatLinks#9a23af21 flags:# peer:Peer message:string entities:flags.0?Vector<MessageEntity> chats:Vector<Chat> users:Vector<User> = account.ResolvedBusinessChatLinks;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [Peer](/type/Peer/) | Destination peer |
| message | [string](/type/string/) | Message to pre-fill in the message input field. |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[account.ResolvedBusinessChatLinks](/type/account.ResolvedBusinessChatLinks/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
