---
title: "e2e.chain.sharedKey"
original: "https://core.telegram.org/constructor/e2e.chain.sharedKey"
section: ref
kind: constructor
description: "Зашифрованный общий групповой ключевой материал для конференц-звонка со сквозным шифрованием."
layout: layout.njk
---

# e2e.chain.sharedKey

Зашифрованный [общий групповой ключевой материал](/api/end-to-end/group-calls/#shared-key-encryption) для конференц-звонка со сквозным шифрованием.

```
e2e.chain.sharedKey#8a847e7f ek:int256 encrypted_shared_key:string dest_user_id:Vector<long> dest_header:Vector<bytes> = e2e.chain.SharedKey;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>ek</strong></td><td style="text-align: center;"><a href="/type/int256">int256</a></td><td>Эфемерный открытый ключ, используемый для получения секретов каждого участника для расшифровки общего ключа.</td></tr><tr><td><strong>encrypted_shared_key</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Зашифрованный необработанный общий групповой ключ.</td></tr><tr><td><strong>dest_user_id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Ровно один уникальный идентификатор пользователя для каждого участника в текущем состоянии группы, в произвольном порядке</td></tr><tr><td><strong>dest_header</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/bytes">bytes</a>&gt;</td><td>Зашифрованные заголовки для каждого участника, содержащие одноразовый секрет, необходимый для расшифровки <code>encrypted_shared_key</code>; каждая запись соответствует идентификатору пользователя, расположенному под тем же ключом в <code>dest_user_id</code>.</td></tr></tbody></table>

### Тип

[e2e.chain.SharedKey](/type/e2e.chain.SharedKey/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
