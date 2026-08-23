---
title: "contacts.getTopPeers (метод)"
original: "https://core.telegram.org/method/contacts.getTopPeers"
section: ref
kind: method
layout: layout.njk
---

# contacts.getTopPeers

*Метод из схемы TL.*

> Get most used peers

## Определение TL

```
contacts.topPeersNotModified#de266ef5 = contacts.TopPeers;
contacts.topPeers#70b772a8 categories:Vector<TopPeerCategoryPeers> chats:Vector<Chat> users:Vector<User> = contacts.TopPeers;
contacts.topPeersDisabled#b52c939d = contacts.TopPeers;
---functions---
contacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true offset:int limit:int hash:long = contacts.TopPeers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| correspondents | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Users we've chatted most frequently with |
| bots_pm | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Most used bots |
| bots_inline | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Most used inline bots |
| phone_calls | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Most frequently called users |
| forward_users | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Users to which the users often forwards messages to |
| forward_chats | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Chats to which the users often forwards messages to |
| groups | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | Often-opened groups and supergroups |
| channels | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[true](/constructor/true/) | Most frequently visited channels |
| bots_app | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | Most frequently used [Main Mini Bot Apps](https://core.telegram.org/api/bots/webapps#main-mini-apps). |
| bots_guestchat | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[true](/constructor/true/) | Most frequently used [guest bots »](https://core.telegram.org/api/bots/guest-mode) |
| offset | [int](/type/int/) | Offset for [pagination](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Результат

[contacts.TopPeers](/type/contacts.TopPeers/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | TYPES_EMPTY | No top peer type was provided. |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Guest mode for bots](https://core.telegram.org/api/bots/guest-mode)

Guest bots can be queried by username from **any** non-secret private chat, group and supergroup (except for groups/supergroups with [content protection »](https://core.telegram.org/api/content-protection#for-groups-and-channels) enabled), posting their results directly into the chat, even if they're not a member.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
