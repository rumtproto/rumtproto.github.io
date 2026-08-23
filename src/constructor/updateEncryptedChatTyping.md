---
title: "updateEncryptedChatTyping (конструктор)"
original: "https://core.telegram.org/constructor/updateEncryptedChatTyping"
section: ref
kind: constructor
layout: layout.njk
---

# updateEncryptedChatTyping

*Конструктор из схемы TL.*

> Interlocutor is typing a message in an encrypted chat. Update period is 6 second. If upon this time there is no repeated update, it shall be considered that the interlocutor stopped typing.

## Определение TL

```
updateEncryptedChatTyping#1710f156 chat_id:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [int](/type/int/) | Chat ID |

## Тип

[Update](/type/Update/)
