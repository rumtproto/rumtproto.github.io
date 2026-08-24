---
title: "e2e.chain.block"
original: "https://core.telegram.org/constructor/e2e.chain.block"
section: ref
kind: constructor
description: "Блок основного блокчейна E2E-конференц-звонка, содержащий изменения состояния этого звонка и итоговое доказательство состояния."
layout: layout.njk
---

# e2e.chain.block

Блок [основного блокчейна E2E-конференц-звонка](/api/end-to-end/group-calls/#block-structure), содержащий изменения состояния этого звонка и итоговое доказательство состояния.

При отправке блоков на сервер используйте канонический идентификатор конструктора, указанный в схеме; блоки, возвращаемые сервером, используют увеличенный идентификатор конструктора, описанный в [документации по подцепочкам](/api/end-to-end/group-calls/#subchains).

```
e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>signature</strong></td><td style="text-align: center;"><a href="/type/int512">int512</a></td><td>Подпись TL-сериализованного блока с обнулённым полем <code>signature</code>.</td></tr><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>prev_block_hash</strong></td><td style="text-align: center;"><a href="/type/int256">int256</a></td><td>Хеш SHA256 предыдущего принятого блока основной цепочки.</td></tr><tr><td><strong>changes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/e2e.chain.Change">e2e.chain.Change</a>&gt;</td><td>Изменения состояния, вносимые этим блоком; допустимый блок обязан содержать как минимум изменение состояния группы или изменение пары «ключ — значение».</td></tr><tr><td><strong>height</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Порядковый номер блока; он обязан быть ровно на единицу больше локально принятой высоты.</td></tr><tr><td><strong>state_proof</strong></td><td style="text-align: center;"><a href="/type/e2e.chain.StateProof">e2e.chain.StateProof</a></td><td>Итоговое состояние блокчейна после применения всех изменений из этого блока.</td></tr><tr><td><strong>signature_public_key</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int256">int256</a></td><td>Открытый ключ участника, создавшего и подписавшего блок; может отсутствовать, если он совпадает с ключом первого участника, кроме случая высоты <code>0</code>.</td></tr></tbody></table>

### Тип

[e2e.chain.Block](/type/e2e.chain.Block/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
