---
title: "phoneCallProtocol (конструктор)"
original: "https://core.telegram.org/constructor/phoneCallProtocol"
section: ref
kind: constructor
layout: layout.njk
---

# phoneCallProtocol

*Конструктор из схемы TL.*

> Protocol info for the VoIP library, see [here »](https://core.telegram.org/api/calls#populating-phonecallprotocol) for details on how to populate it.

## Определение TL

```
phoneCallProtocol#fc878fc8 flags:# udp_p2p:flags.0?true udp_reflector:flags.1?true min_layer:int max_layer:int library_versions:Vector<string> = PhoneCallProtocol;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| udp_p2p | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to allow P2P connection to the other participant |
| udp_reflector | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether to allow connection to the other participants through the reflector servers |
| min_layer | [int](/type/int/) | Minimum layer for remote libtgvoip |
| max_layer | [int](/type/int/) | Maximum layer for remote libtgvoip |
| library_versions | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | When using [phone.requestCall](/method/phone.requestCall/) and [phone.acceptCall](/method/phone.acceptCall/), specify all library versions supported by the client. The server will merge and choose the best library version supported by both peers, returning only the best value in the result of the callee's [phone.acceptCall](/method/phone.acceptCall/) and in the [phoneCallAccepted](/constructor/phoneCallAccepted/) update received by the caller. |

## Тип

[PhoneCallProtocol](/type/PhoneCallProtocol/)

## Related pages

#### [phone.requestCall](/method/phone.requestCall/)

Start a telegram phone call, see [here »](https://core.telegram.org/api/calls#one-to-one-calls) for more info on the full flow.

#### [phone.acceptCall](/method/phone.acceptCall/)

Accept incoming call, see [here »](https://core.telegram.org/api/calls#one-to-one-calls) for more info on the full flow.

#### [phoneCallAccepted](/constructor/phoneCallAccepted/)

An accepted phone call, see [here »](https://core.telegram.org/api/calls) for more info on the full flow.

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
