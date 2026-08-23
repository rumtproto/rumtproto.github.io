---
title: "encryptedChatDiscarded (конструктор)"
original: "https://core.telegram.org/constructor/encryptedChatDiscarded"
section: ref
kind: constructor
layout: layout.njk
---

# encryptedChatDiscarded

*Конструктор из схемы TL.*

> Discarded or deleted chat.

## Определение TL

```
encryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| history_deleted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether both users of this secret chat should also remove all of its messages |
| id | [int](/type/int/) | Chat ID |

## Тип

[EncryptedChat](/type/EncryptedChat/)
