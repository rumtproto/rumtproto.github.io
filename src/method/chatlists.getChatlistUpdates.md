---
title: "chatlists.getChatlistUpdates (метод)"
original: "https://core.telegram.org/method/chatlists.getChatlistUpdates"
section: ref
kind: method
layout: layout.njk
---

# chatlists.getChatlistUpdates

*Метод из схемы TL.*

> Fetch new chats associated with an imported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). Must be invoked at most every `chatlist_update_period` seconds (as per the related [client configuration parameter »](https://core.telegram.org/api/config#chatlist-update-period)).

## Определение TL

```
chatlists.chatlistUpdates#93bd878d missing_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistUpdates;
---functions---
chatlists.getChatlistUpdates#89419521 chatlist:InputChatlist = chatlists.ChatlistUpdates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chatlist | [InputChatlist](/type/InputChatlist/) | The folder |

## Результат

[chatlists.ChatlistUpdates](/type/chatlists.ChatlistUpdates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FILTER_ID_INVALID | The specified filter ID is invalid. |
| 400 | FILTER_NOT_SUPPORTED | The specified filter cannot be used in this context. |
| 400 | INPUT_CHATLIST_INVALID | The specified folder is invalid. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
