---
title: "e2e.chain.StateProof"
original: "https://core.telegram.org/type/e2e.chain.StateProof"
section: ref
kind: type
description: "Подтверждение состояния блокчейна сквозного шифрования конференц-звонка после применения блока."
layout: layout.njk
---

# E2e.chain.StateProof

Подтверждение [состояния блокчейна сквозного шифрования конференц-звонка](/api/end-to-end/group-calls/#block-application-process) после применения блока.

```
e2e.chain.stateProof#d6b679e6 flags:# kv_hash:int256 group_state:flags.0?e2e.chain.GroupState shared_key:flags.1?e2e.chain.SharedKey = e2e.chain.StateProof;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.stateProof">e2e.chain.stateProof</a></td><td>Подтверждение <a href="/api/end-to-end/group-calls#block-application-process">состояния блокчейна сквозного шифрования конференц-звонка</a> после применения блока.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
