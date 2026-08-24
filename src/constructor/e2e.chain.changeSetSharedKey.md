---
title: "e2e.chain.changeSetSharedKey"
original: "https://core.telegram.org/constructor/e2e.chain.changeSetSharedKey"
section: ref
kind: constructor
description: "Устанавливает новый общий ключ шифрования для конференц-звонка со сквозным шифрованием, см. типы изменений для групповых звонков »."
layout: layout.njk
---

# e2e.chain.changeSetSharedKey

Устанавливает новый общий ключ шифрования для конференц-звонка со сквозным шифрованием, см. [типы изменений для групповых звонков »](/api/end-to-end/group-calls/#change-types-for-group-calls).

```
e2e.chain.changeSetSharedKey#987a2158 shared_key:e2e.chain.SharedKey = e2e.chain.Change;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>shared_key</strong></td><td style="text-align: center;"><a href="/type/e2e.chain.SharedKey">e2e.chain.SharedKey</a></td><td>Зашифрованный общий ключевой материал для всех участников в текущем состоянии группы.</td></tr></tbody></table>

### Тип

[e2e.chain.Change](/type/e2e.chain.Change/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
