---
title: "decryptedMessageActionResend (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageActionResend"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageActionResend

*Конструктор из схемы TL.*

> Request for the other party in a Secret Chat to automatically resend a contiguous range of previously sent messages, as explained in [Sequence number is Secret Chats](https://core.telegram.org/api/end-to-end/seq_no).

## Определение TL

```
===17===
decryptedMessageActionResend#511110b0 start_seq_no:int end_seq_no:int = DecryptedMessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| start_seq_no | [int](/type/int/) | out_seq_no of the first message to be resent, with correct parity |
| end_seq_no | [int](/type/int/) | out_seq_no of the last message to be resent, with same parity. |

## Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)

## Related pages

#### [Sequence numbers in Secret Chats](https://core.telegram.org/api/end-to-end/seq_no)

How to assign and interpret seq\_no counters in secret chats to protect against message manipulation.
