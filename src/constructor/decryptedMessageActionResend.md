---
title: "decryptedMessageActionResend"
original: "https://core.telegram.org/constructor/decryptedMessageActionResend"
section: ref
kind: constructor
description: "Запрос к другой стороне секретного чата на автоматическую повторную отправку непрерывного диапазона ранее отправленных сообщений, как описано в разделе Sequence number is Secret…"
layout: layout.njk
---

# decryptedMessageActionResend

Запрос к другой стороне секретного чата на автоматическую повторную отправку непрерывного диапазона ранее отправленных сообщений, как описано в разделе [Sequence number is Secret Chats](/api/end-to-end/seq_no/).

```
===17===
decryptedMessageActionResend#511110b0 start_seq_no:int end_seq_no:int = DecryptedMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>start_seq_no</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><code>out_seq_no</code> первого сообщения, которое нужно переслать заново, с правильной чётностью</td></tr><tr><td><strong>end_seq_no</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><code>out_seq_no</code> последнего сообщения, которое нужно переслать заново, с той же чётностью.</td></tr></tbody></table>

### Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)

### Связанные страницы

#### [Порядковые номера в секретных чатах](/api/end-to-end/seq_no/)

Как назначать и интерпретировать счётчики seq\_no в секретных чатах для защиты от манипуляций с сообщениями.
