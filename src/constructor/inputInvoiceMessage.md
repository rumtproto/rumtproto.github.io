---
title: "inputInvoiceMessage (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoiceMessage"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoiceMessage

*Конструктор из схемы TL.*

> An invoice contained in a [messageMediaInvoice](/constructor/messageMediaInvoice/) message or [paid media »](https://core.telegram.org/api/paid-media).

## Определение TL

```
inputInvoiceMessage#c5b56859 peer:InputPeer msg_id:int = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Chat where the invoice/paid media was sent |
| msg_id | [int](/type/int/) | Message ID |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [messageMediaInvoice](/constructor/messageMediaInvoice/)

Invoice

#### [Paid media](https://core.telegram.org/api/paid-media)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
