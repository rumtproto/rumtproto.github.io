---
title: "requestPeerTypeUser (конструктор)"
original: "https://core.telegram.org/constructor/requestPeerTypeUser"
section: ref
kind: constructor
layout: layout.njk
---

# requestPeerTypeUser

*Конструктор из схемы TL.*

> Choose a user.

## Определение TL

```
requestPeerTypeUser#5f3b8a00 flags:# bot:flags.0?Bool premium:flags.1?Bool = RequestPeerType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| bot | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Bool](/type/Bool/) | Whether to allow choosing only bots. |
| premium | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Bool](/type/Bool/) | Whether to allow choosing only [Premium](https://core.telegram.org/api/premium) users. |

## Тип

[RequestPeerType](/type/RequestPeerType/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
