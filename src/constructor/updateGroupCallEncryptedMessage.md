---
title: "updateGroupCallEncryptedMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateGroupCallEncryptedMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateGroupCallEncryptedMessage

*Конструктор из схемы TL.*

> A new E2E-encrypted message or emoji reaction was received in a conference call, see [here »](https://core.telegram.org/api/end-to-end/group-calls#receiving-and-decrypting-a-message) for the decryption process.

## Определение TL

```
updateGroupCallEncryptedMessage#c957a766 call:InputGroupCall from_id:Peer encrypted_message:bytes = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Conference call that received the encrypted message |
| from_id | [Peer](/type/Peer/) | Sender whose blockchain public key must be used to verify the encrypted packet |
| encrypted_message | [bytes](/type/bytes/) | Complete encrypted packet |

## Тип

[Update](/type/Update/)

## Related pages

#### [E2E Group Calls](https://core.telegram.org/api/end-to-end/group-calls)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
