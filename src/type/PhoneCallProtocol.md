---
title: "PhoneCallProtocol (тип)"
original: "https://core.telegram.org/type/PhoneCallProtocol"
section: ref
kind: type
layout: layout.njk
---

# PhoneCallProtocol

*Тип из схемы TL.*

> Phone call protocol

## Определение TL

```
phoneCallProtocol#fc878fc8 flags:# udp_p2p:flags.0?true udp_reflector:flags.1?true min_layer:int max_layer:int library_versions:Vector<string> = PhoneCallProtocol;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [phoneCallProtocol](/constructor/phoneCallProtocol/) | Protocol info for the VoIP library, see [here »](https://core.telegram.org/api/calls#populating-phonecallprotocol) for details on how to populate it. |
