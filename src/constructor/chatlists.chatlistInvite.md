---
title: "chatlists.chatlistInvite (конструктор)"
original: "https://core.telegram.org/constructor/chatlists.chatlistInvite"
section: ref
kind: constructor
layout: layout.njk
---

# chatlists.chatlistInvite

*Конструктор из схемы TL.*

> Info about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
chatlists.chatlistInvite#f10ece2f flags:# title_noanimate:flags.1?true title:TextWithEntities emoticon:flags.0?string peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| title_noanimate | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, any animated emojis present in title should not be animated and should be instead frozen on the first frame. |
| title | [TextWithEntities](/type/TextWithEntities/) | Name of the link |
| emoticon | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Emoji to use as icon for the folder. |
| peers | [Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | Supergroups and channels to join |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Related chat information |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Related user information |

## Тип

[chatlists.ChatlistInvite](/type/chatlists.ChatlistInvite/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
