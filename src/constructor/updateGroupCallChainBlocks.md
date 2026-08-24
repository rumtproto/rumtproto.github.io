---
title: "updateGroupCallChainBlocks"
original: "https://core.telegram.org/constructor/updateGroupCallChainBlocks"
section: ref
kind: constructor
description: "Содержит блоки блокчейна конференц-звонка, см. обработку обновлений сквозного группового звонка »."
layout: layout.njk
---

# updateGroupCallChainBlocks

Содержит блоки блокчейна конференц-звонка, см. [обработку обновлений сквозного группового звонка »](/api/end-to-end/group-calls/#handling-updates).

```
updateGroupCallChainBlocks#a477288f call:InputGroupCall sub_chain_id:int blocks:Vector<bytes> next_offset:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Конференция, указанная подцепочка которой получила эти блоки</td></tr><tr><td><strong>sub_chain_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><code>0</code> — для основного блокчейна состояния, <code>1</code> — для подцепочки проверки звонков</td></tr><tr><td><strong>blocks</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/bytes">bytes</a>&gt;</td><td>Сериализованные блоки подцепочки со скорректированными сервером идентификаторами конструкторов, описанными в <a href="/api/end-to-end/group-calls#subchains">документации по подцепочкам »</a></td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:next_offset] Высота блока, расположенного <em>после</em> последнего блока в <code>blocks</code>; первый возвращённый блок имеет высоту <code>next_offset - blocks.length</code></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
