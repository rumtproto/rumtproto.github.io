---
title: "e2e.chain.groupState"
original: "https://core.telegram.org/constructor/e2e.chain.groupState"
section: ref
kind: constructor
description: "Список участников и внешняя маска разрешений для состояния блокчейна сквозного шифрования конференц-звонка »."
layout: layout.njk
---

# e2e.chain.groupState

Список участников и внешняя маска разрешений для [состояния блокчейна сквозного шифрования конференц-звонка »](/api/end-to-end/group-calls/#participants-and-permissions).

```
e2e.chain.groupState#1ddc7584 participants:Vector<e2e.chain.GroupParticipant> external_permissions:int = e2e.chain.GroupState;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/e2e.chain.GroupParticipant">e2e.chain.GroupParticipant</a>&gt;</td><td>Текущие участники звонка, определяемые идентификатором пользователя и открытым ключом.</td></tr><tr><td><strong>external_permissions</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Биты разрешений <code>add_users</code>, <code>remove_users</code> и <code>set_value</code>, используемые только при применении изменения состояния группы, подписанного пользователем, которого ещё нет в <code>participants</code>; маска не может расширяться</td></tr></tbody></table>

### Тип

[e2e.chain.GroupState](/type/e2e.chain.GroupState/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
