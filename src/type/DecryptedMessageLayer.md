---
title: "DecryptedMessageLayer (тип)"
original: "https://core.telegram.org/type/DecryptedMessageLayer"
section: ref
kind: type
layout: layout.njk
---

# DecryptedMessageLayer

*Тип из схемы TL.*

> Object describes encrypted message content in relation to the required layer.

## Определение TL

```
===17===
decryptedMessageLayer#1be31789 random_bytes:bytes layer:int in_seq_no:int out_seq_no:int message:DecryptedMessage = DecryptedMessageLayer;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [decryptedMessageLayer](/constructor/decryptedMessageLayer/) | Sets the layer number for the contents of an encrypted message. |
