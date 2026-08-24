---
title: "e2e.chain.GroupParticipant"
original: "https://core.telegram.org/type/e2e.chain.GroupParticipant"
section: ref
kind: type
description: "Участник в групповом состоянии конференц-звонка со сквозным шифрованием."
layout: layout.njk
---

# E2e.chain.GroupParticipant

Участник в [групповом состоянии конференц-звонка со сквозным шифрованием](/api/end-to-end/group-calls/#blockchain-state-management).

```
e2e.chain.groupParticipant#28852f20 user_id:long public_key:int256 flags:# add_users:flags.0?true remove_users:flags.1?true set_value:flags.2?true version:int = e2e.chain.GroupParticipant;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.groupParticipant">e2e.chain.groupParticipant</a></td><td>Участник и его права в <a href="/api/end-to-end/group-calls#participants-and-permissions">групповом состоянии конференц-звонка со сквозным шифрованием »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
