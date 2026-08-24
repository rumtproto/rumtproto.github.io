---
title: "e2e.chain.stateProof"
original: "https://core.telegram.org/constructor/e2e.chain.stateProof"
section: ref
kind: constructor
description: "Подтверждение состояния блокчейна сквозного шифрования конференц-звонка после применения блока."
layout: layout.njk
---

# e2e.chain.stateProof

Подтверждение [состояния блокчейна сквозного шифрования конференц-звонка](/api/end-to-end/group-calls/#block-application-process) после применения блока.

```
e2e.chain.stateProof#d6b679e6 flags:# kv_hash:int256 group_state:flags.0?e2e.chain.GroupState shared_key:flags.1?e2e.chain.SharedKey = e2e.chain.StateProof;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>kv_hash</strong></td><td style="text-align: center;"><a href="/type/int256">int256</a></td><td>Корневой хеш дерева «ключ — значение» после применения блока.</td></tr><tr><td><strong>group_state</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/e2e.chain.GroupState">e2e.chain.GroupState</a></td><td>Итоговое состояние участников и разрешений.<br><strong>Обязательно</strong> должно отсутствовать, если блок содержит действие <code>ChangeSetGroupState</code>.<br><strong>Обязательно</strong> должно присутствовать, если блок не содержит действия <code>ChangeSetGroupState</code>.</td></tr><tr><td><strong>shared_key</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/e2e.chain.SharedKey">e2e.chain.SharedKey</a></td><td>Итоговое состояние общего ключа.<br><strong>Обязательно</strong> должно отсутствовать, если блок содержит действие <code>ChangeSetGroupState</code> <em>и/или</em> действие <code>ChangeSetSharedKey</code>.<br><strong>Обязательно</strong> должно присутствовать, если блок не содержит действия <code>ChangeSetGroupState</code> <em>и/или</em> действия <code>ChangeSetSharedKey</code>.</td></tr></tbody></table>

### Тип

[e2e.chain.StateProof](/type/e2e.chain.StateProof/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
