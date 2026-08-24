---
title: "e2e.chain.changeSetValue"
original: "https://core.telegram.org/constructor/e2e.chain.changeSetValue"
section: ref
kind: constructor
description: "Обновляет состояние префиксного дерева «ключ-значение» блокчейна конференц-звонка со сквозным шифрованием."
layout: layout.njk
---

# e2e.chain.changeSetValue

Обновляет [состояние префиксного дерева «ключ-значение» блокчейна конференц-звонка со сквозным шифрованием](/api/end-to-end/group-calls/#change-types-for-group-calls).

```
e2e.chain.changeSetValue#7c4f9bfa key:bytes value:bytes = e2e.chain.Change;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Ключ префиксного дерева «ключ-значение»; клиенты, не реализующие такое дерево, должны игнорировать его содержимое</td></tr><tr><td><strong>value</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Значение префиксного дерева «ключ-значение»; клиенты, не реализующие такое дерево, должны игнорировать его содержимое и принимать поле <code>state_proof.kv_hash</code> содержащего его блока</td></tr></tbody></table>

### Тип

[e2e.chain.Change](/type/e2e.chain.Change/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
