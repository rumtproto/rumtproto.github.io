---
title: "Stats.PublicForwards (тип)"
original: "https://core.telegram.org/type/stats.PublicForwards"
section: ref
kind: type
layout: layout.njk
---

# Stats.PublicForwards

*Тип из схемы TL.*

> Contains info about the forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels.

## Определение TL

```
stats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;

---functions---

stats.getMessagePublicForwards#5f150144 channel:InputChannel msg_id:int offset:string limit:int = stats.PublicForwards;
stats.getStoryPublicForwards#a6437ef6 peer:InputPeer id:int offset:string limit:int = stats.PublicForwards;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stats.publicForwards](/constructor/stats.publicForwards/) | Contains info about the forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels. |

## Методы

| Method | Описание |
|---|---|
| [stats.getMessagePublicForwards](/method/stats.getMessagePublicForwards/) | Obtains a list of messages, indicating to which other public channels was a channel message forwarded. Will return a list of [messages](/constructor/message/) with peer_id equal to the public channel to which this message was forwarded. |
| [stats.getStoryPublicForwards](/method/stats.getStoryPublicForwards/) | Obtain forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
