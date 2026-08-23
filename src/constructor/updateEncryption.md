---
title: "updateEncryption (конструктор)"
original: "https://core.telegram.org/constructor/updateEncryption"
section: ref
kind: constructor
layout: layout.njk
---

# updateEncryption

*Конструктор из схемы TL.*

> Change of state in an encrypted chat.

## Определение TL

```
updateEncryption#b4a2e88d chat:EncryptedChat date:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat | [EncryptedChat](/type/EncryptedChat/) | Encrypted chat |
| date | [int](/type/int/) | Date of change |

## Тип

[Update](/type/Update/)
