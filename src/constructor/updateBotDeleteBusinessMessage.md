---
title: "updateBotDeleteBusinessMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateBotDeleteBusinessMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotDeleteBusinessMessage

*Конструктор из схемы TL.*

> A message was deleted in a [connected business chat »](https://core.telegram.org/api/bots/connected-business-bots).

## Определение TL

```
updateBotDeleteBusinessMessage#a02a982e connection_id:string peer:Peer messages:Vector<int> qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| connection_id | [string](/type/string/) | Business connection ID. |
| peer | [Peer](/type/Peer/) | [Peer](https://core.telegram.org/api/peers) where the messages were deleted. |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of the messages that were deleted. |
| qts | [int](/type/int/) | New qts value, see [updates »](/api/updates/) for more info. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
