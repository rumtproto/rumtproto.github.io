---
title: "e2e.chain.changeSetGroupState"
original: "https://core.telegram.org/constructor/e2e.chain.changeSetGroupState"
section: ref
kind: constructor
description: "Обновляет список участников и права в конференц-звонке со сквозным шифрованием, очищая текущее состояние общего ключа."
layout: layout.njk
---

# e2e.chain.changeSetGroupState

Обновляет [список участников и права в конференц-звонке со сквозным шифрованием](/api/end-to-end/group-calls/#change-types-for-group-calls), очищая текущее состояние общего ключа.

```
e2e.chain.changeSetGroupState#2cf17146 group_state:e2e.chain.GroupState = e2e.chain.Change;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>group_state</strong></td><td style="text-align: center;"><a href="/type/e2e.chain.GroupState">e2e.chain.GroupState</a></td><td>Новое состояние группы, содержащее список участников и биты разрешений.</td></tr></tbody></table>

### Тип

[e2e.chain.Change](/type/e2e.chain.Change/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
