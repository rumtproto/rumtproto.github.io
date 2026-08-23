---
title: "DcOption (тип)"
original: "https://core.telegram.org/type/DcOption"
section: ref
kind: type
layout: layout.njk
---

# DcOption

*Тип из схемы TL.*

> Information for connection to data center.

## Определение TL

```
dcOption#18b7a10d flags:# ipv6:flags.0?true media_only:flags.1?true tcpo_only:flags.2?true cdn:flags.3?true static:flags.4?true this_port_only:flags.5?true id:int ip_address:string port:int secret:flags.10?bytes = DcOption;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [dcOption](/constructor/dcOption/) | Data center |
