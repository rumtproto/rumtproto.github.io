---
title: "encryptedChat"
original: "https://core.telegram.org/constructor/encryptedChat"
section: ref
kind: constructor
description: "Зашифрованный чат"
layout: layout.njk
---

# encryptedChat

Зашифрованный чат

```
encryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор чата</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Контрольная сумма, зависящая от идентификатора пользователя</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата создания чата</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор создателя чата</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор второго участника чата</td></tr><tr><td><strong>g_a_or_b</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><code>B = g ^ b mod p</code>, если текущий авторизованный пользователь является создателем чата,<br>иначе <code>A = g ^ a mod p</code><br>Подробнее см. <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Википедию</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>64-битный отпечаток полученного ключа</td></tr></tbody></table>

### Тип

[EncryptedChat](/type/EncryptedChat/)
