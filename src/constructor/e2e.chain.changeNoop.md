---
title: "e2e.chain.changeNoop"
original: "https://core.telegram.org/constructor/e2e.chain.changeNoop"
section: ref
kind: constructor
description: "Холостое изменение блокчейна сквозного шифрования конференц-звонка, которое может использоваться только для рандомизации итогового хеша блока."
layout: layout.njk
---

# e2e.chain.changeNoop

Холостое [изменение блокчейна сквозного шифрования конференц-звонка](/api/end-to-end/group-calls/#change-types-for-group-calls), которое может использоваться только для рандомизации итогового хеша блока.

```
e2e.chain.changeNoop#deb4a41b nonce:int256 = e2e.chain.Change;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>nonce</strong></td><td style="text-align: center;"><a href="/type/int256">int256</a></td><td>Случайное значение, включённое в холостое изменение.</td></tr></tbody></table>

### Тип

[e2e.chain.Change](/type/e2e.chain.Change/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
