---
title: "e2e.chain.Change"
original: "https://core.telegram.org/type/e2e.chain.Change"
section: ref
kind: type
description: "Изменение, применённое к состоянию блокчейна сквозного конференц-звонка и записанное в e2e.chain.Block для изменения хранилища «ключ-значение» звонка, списка участников или общего…"
layout: layout.njk
---

# E2e.chain.Change

Изменение, применённое к [состоянию блокчейна сквозного конференц-звонка](/api/end-to-end/group-calls/#change-types-for-group-calls) и записанное в [e2e.chain.Block](/type/e2e.chain.Block/) для изменения хранилища «ключ-значение» звонка, списка участников или общего ключа шифрования.

```
e2e.chain.changeNoop#deb4a41b nonce:int256 = e2e.chain.Change;
e2e.chain.changeSetValue#7c4f9bfa key:bytes value:bytes = e2e.chain.Change;
e2e.chain.changeSetGroupState#2cf17146 group_state:e2e.chain.GroupState = e2e.chain.Change;
e2e.chain.changeSetSharedKey#987a2158 shared_key:e2e.chain.SharedKey = e2e.chain.Change;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.changeNoop">e2e.chain.changeNoop</a></td><td>Холостое <a href="/api/end-to-end/group-calls#change-types-for-group-calls">изменение блокчейна сквозного шифрования конференц-звонка</a>, которое может использоваться только для рандомизации итогового хеша блока.</td></tr><tr><td><a href="/constructor/e2e.chain.changeSetValue">e2e.chain.changeSetValue</a></td><td>Обновляет <a href="/api/end-to-end/group-calls#change-types-for-group-calls">состояние префиксного дерева «ключ-значение» блокчейна конференц-звонка со сквозным шифрованием</a>.</td></tr><tr><td><a href="/constructor/e2e.chain.changeSetGroupState">e2e.chain.changeSetGroupState</a></td><td>Обновляет <a href="/api/end-to-end/group-calls#change-types-for-group-calls">список участников и права в конференц-звонке со сквозным шифрованием</a>, очищая текущее состояние общего ключа.</td></tr><tr><td><a href="/constructor/e2e.chain.changeSetSharedKey">e2e.chain.changeSetSharedKey</a></td><td>Устанавливает новый общий ключ шифрования для конференц-звонка со сквозным шифрованием, см. <a href="/api/end-to-end/group-calls#change-types-for-group-calls">типы изменений для групповых звонков »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.

#### [E2e.chain.Block](/type/e2e.chain.Block/)

Блок [основного блокчейна E2E-конференц-звонка](/api/end-to-end/group-calls/#block-structure), содержащий изменения состояния этого звонка и итоговое доказательство состояния.

При отправке блоков на сервер используйте канонический идентификатор конструктора, указанный в схеме; блоки, возвращаемые сервером, используют увеличенный идентификатор конструктора, описанный в [документации по подцепочкам](/api/end-to-end/group-calls/#subchains).
