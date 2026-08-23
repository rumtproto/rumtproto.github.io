---
title: "inputEncryptedChat (конструктор)"
original: "https://core.telegram.org/constructor/inputEncryptedChat"
section: ref
kind: constructor
layout: layout.njk
---

# inputEncryptedChat

*Конструктор из схемы TL.*

> An [e2e encrypted chat](/api/end-to-end/).

## Определение TL

```
inputEncryptedChat#f141b5e1 chat_id:int access_hash:long = InputEncryptedChat;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [int](/type/int/) | Chat ID |
| access_hash | [long](/type/long/) | Access hash from [encryptedChat](/constructor/encryptedChat/), [encryptedChatWaiting](/constructor/encryptedChatWaiting/) or [encryptedChatRequested](/constructor/encryptedChatRequested/) |

## Тип

[InputEncryptedChat](/type/InputEncryptedChat/)

## Related pages

#### [encryptedChat](/constructor/encryptedChat/)

Encrypted chat

#### [encryptedChatWaiting](/constructor/encryptedChatWaiting/)

Chat waiting for approval of second participant.

#### [encryptedChatRequested](/constructor/encryptedChatRequested/)

Request to create an encrypted chat.

#### [End-to-End Encryption, Secret Chats](/api/end-to-end/)

New feature for end-to-end-encrypted messaging.
