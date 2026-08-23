---
title: "invokeWithBusinessConnection (метод)"
original: "https://core.telegram.org/method/invokeWithBusinessConnection"
section: ref
kind: method
layout: layout.njk
---

# invokeWithBusinessConnection

*Метод из схемы TL.*

> Invoke a method using a [Telegram Business Bot connection, see here » for more info, including a list of the methods that can be wrapped in this constructor](https://core.telegram.org/api/bots/connected-business-bots).
> Make sure to always send queries wrapped in a `invokeWithBusinessConnection` to the datacenter ID, specified in the `dc_id` field of the [botBusinessConnection](/constructor/botBusinessConnection/) that is being used.

## Определение TL

```
---functions---
invokeWithBusinessConnection#dd289f8e {X:Type} connection_id:string query:!X = X;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| connection_id | [string](/type/string/) | Business connection ID. |
| query | !X | The actual query. |

## Результат

Returns the type returned by the invoked method.

## Both users and bots can use this method

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [botBusinessConnection](/constructor/botBusinessConnection/)

Contains info about a [bot business connection](https://core.telegram.org/api/bots/connected-business-bots).
