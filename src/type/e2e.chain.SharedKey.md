---
title: "e2e.chain.SharedKey"
original: "https://core.telegram.org/type/e2e.chain.SharedKey"
section: ref
kind: type
description: "Зашифрованный общий групповой ключевой материал для конференц-звонка со сквозным шифрованием."
layout: layout.njk
---

# E2e.chain.SharedKey

Зашифрованный [общий групповой ключевой материал](/api/end-to-end/group-calls/#shared-key-encryption) для конференц-звонка со сквозным шифрованием.

```
e2e.chain.sharedKey#8a847e7f ek:int256 encrypted_shared_key:string dest_user_id:Vector<long> dest_header:Vector<bytes> = e2e.chain.SharedKey;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.sharedKey">e2e.chain.sharedKey</a></td><td>Зашифрованный <a href="/api/end-to-end/group-calls#shared-key-encryption">общий групповой ключевой материал</a> для конференц-звонка со сквозным шифрованием.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
