---
title: "chatlists.checkChatlistInvite (метод)"
original: "https://core.telegram.org/method/chatlists.checkChatlistInvite"
section: ref
kind: method
layout: layout.njk
---

# chatlists.checkChatlistInvite

*Метод из схемы TL.*

> Obtain information about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
chatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
chatlists.chatlistInvite#f10ece2f flags:# title_noanimate:flags.1?true title:TextWithEntities emoticon:flags.0?string peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
---functions---
chatlists.checkChatlistInvite#41c10fff slug:string = chatlists.ChatlistInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| slug | [string](/type/string/) | slug obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links) |

## Результат

[chatlists.ChatlistInvite](/type/chatlists.ChatlistInvite/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | INVITE_SLUG_EMPTY | The specified invite slug is empty. |
| 400 | INVITE_SLUG_EXPIRED | The specified chat folder link has expired. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
