---
title: "e2e.chain.GroupBroadcast"
original: "https://core.telegram.org/type/e2e.chain.GroupBroadcast"
section: ref
kind: type
description: "Широковещательное сообщение, используемое в протоколе проверки ключей сквозного конференц-звонка, которое реализует схему commit/reveal для генерации проверяемых эмодзи звонка."
layout: layout.njk
---

# E2e.chain.GroupBroadcast

Широковещательное сообщение, используемое в [протоколе проверки ключей сквозного конференц-звонка](/api/end-to-end/group-calls/#commit-reveal-protocol-workflow), которое реализует схему commit/reveal для генерации проверяемых эмодзи звонка.

```
e2e.chain.groupBroadcastNonceCommit#d1512ae7 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce_hash:int256 = e2e.chain.GroupBroadcast;
e2e.chain.groupBroadcastNonceReveal#83f4f9d8 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce:int256 = e2e.chain.GroupBroadcast;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.groupBroadcastNonceCommit">e2e.chain.groupBroadcastNonceCommit</a></td><td>Сообщение-обязательство для <a href="/api/end-to-end/group-calls#commit-reveal-protocol-workflow">протокола проверки эмодзи в сквозно шифрованных конференц-звонках</a>.<br><br>При отправке этой рассылки на сервер используйте канонический идентификатор конструктора, указанный в схеме; рассылки, возвращаемые сервером, используют идентификатор конструктора, описанный в <a href="/api/end-to-end/group-calls#subchains">документации по подцепочкам</a>.</td></tr><tr><td><a href="/constructor/e2e.chain.groupBroadcastNonceReveal">e2e.chain.groupBroadcastNonceReveal</a></td><td>Сообщение с раскрытием для <a href="/api/end-to-end/group-calls#commit-reveal-protocol-workflow">протокола проверки эмодзи в сквозном шифрованном конференц-звонке</a>.<br><br>При отправке этой широковещательной рассылки на сервер используйте канонический идентификатор конструктора, указанный в схеме; в рассылках, возвращаемых сервером, используется идентификатор конструктора, описанный в <a href="/api/end-to-end/group-calls#subchains">документации по подцепочкам</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
