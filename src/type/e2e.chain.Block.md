---
title: "e2e.chain.Block"
original: "https://core.telegram.org/type/e2e.chain.Block"
section: ref
kind: type
description: "Блок основного блокчейна E2E-конференц-звонка, содержащий изменения состояния этого звонка и итоговое доказательство состояния."
layout: layout.njk
---

# E2e.chain.Block

Блок [основного блокчейна E2E-конференц-звонка](/api/end-to-end/group-calls/#block-structure), содержащий изменения состояния этого звонка и итоговое доказательство состояния.

При отправке блоков на сервер используйте канонический идентификатор конструктора, указанный в схеме; блоки, возвращаемые сервером, используют увеличенный идентификатор конструктора, описанный в [документации по подцепочкам](/api/end-to-end/group-calls/#subchains).

```
e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.block">e2e.chain.block</a></td><td>Блок в <a href="/api/end-to-end/group-calls#block-structure">основном блокчейне сквозного шифрования конференц-звонков</a>, содержащий изменения состояния звонка и итоговое доказательство состояния.<br><br>При отправке блоков на сервер используйте канонический идентификатор конструктора, указанный в схеме; блоки, возвращаемые сервером, используют увеличенный идентификатор конструктора, описанный в <a href="/api/end-to-end/group-calls#subchains">документации по подцепочкам</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
