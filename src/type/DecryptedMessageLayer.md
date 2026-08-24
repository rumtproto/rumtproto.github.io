---
title: "DecryptedMessageLayer"
original: "https://core.telegram.org/type/DecryptedMessageLayer"
section: ref
kind: type
description: "Объект описывает содержимое зашифрованного сообщения применительно к требуемому слою."
layout: layout.njk
---

# DecryptedMessageLayer

Объект описывает содержимое зашифрованного сообщения применительно к требуемому слою.

```
===17===
decryptedMessageLayer#1be31789 random_bytes:bytes layer:int in_seq_no:int out_seq_no:int message:DecryptedMessage = DecryptedMessageLayer;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/decryptedMessageLayer">decryptedMessageLayer</a></td><td>Задаёт номер слоя для содержимого зашифрованного сообщения.</td></tr></tbody></table>
