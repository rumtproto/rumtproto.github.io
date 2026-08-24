---
title: "e2e.chain.groupBroadcastNonceReveal"
original: "https://core.telegram.org/constructor/e2e.chain.groupBroadcastNonceReveal"
section: ref
kind: constructor
description: "Сообщение с раскрытием для протокола проверки эмодзи в сквозном шифрованном конференц-звонке."
layout: layout.njk
---

# e2e.chain.groupBroadcastNonceReveal

Сообщение с раскрытием для [протокола проверки эмодзи в сквозном шифрованном конференц-звонке](/api/end-to-end/group-calls/#commit-reveal-protocol-workflow).

При отправке этой рассылки на сервер используйте канонический идентификатор конструктора, указанный в схеме; рассылки, возвращаемые сервером, используют идентификатор конструктора, описанный в [документации по подцепочкам](/api/end-to-end/group-calls/#subchains).

```
e2e.chain.groupBroadcastNonceReveal#83f4f9d8 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce:int256 = e2e.chain.GroupBroadcast;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>signature</strong></td><td style="text-align: center;"><a href="/type/int512">int512</a></td><td>Подпись TL-сериализованного сообщения раскрытия с обнулённым полем <code>signature</code>.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/int64">int64</a></td><td>Идентификатор пользователя Telegram, отправляющего раскрытие.</td></tr><tr><td><strong>chain_height</strong></td><td style="text-align: center;"><a href="/type/int32">int32</a></td><td>Высота блока основной цепочки (main-chain), для которого формируются эмодзи подтверждения.</td></tr><tr><td><strong>chain_hash</strong></td><td style="text-align: center;"><a href="/type/int256">int256</a></td><td>Хеш блока основной цепочки (main-chain), для которого формируются эмодзи подтверждения.</td></tr><tr><td><strong>nonce</strong></td><td style="text-align: center;"><a href="/type/int256">int256</a></td><td>Исходное случайное одноразовое значение; действительно, только если его хеш SHA256 совпадает с ранее зафиксированным <code>nonce_hash</code>.</td></tr></tbody></table>

### Тип

[e2e.chain.GroupBroadcast](/type/e2e.chain.GroupBroadcast/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
