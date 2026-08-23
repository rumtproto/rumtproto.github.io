---
title: "updateGroupCallChainBlocks (конструктор)"
original: "https://core.telegram.org/constructor/updateGroupCallChainBlocks"
section: ref
kind: constructor
layout: layout.njk
---

# updateGroupCallChainBlocks

*Конструктор из схемы TL.*

> Contains conference call blockchain blocks, see [handling E2E group call updates »](https://core.telegram.org/api/end-to-end/group-calls#handling-updates).

## Определение TL

```
updateGroupCallChainBlocks#a477288f call:InputGroupCall sub_chain_id:int blocks:Vector<bytes> next_offset:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Conference whose specified subchain received these blocks |
| sub_chain_id | [int](/type/int/) | 0 for the main state blockchain, 1 for the call verification subchain |
| blocks | [Vector](https://core.telegram.org/type/Vector%20t)<[bytes](/type/bytes/)> | Serialized subchain blocks with the server-adjusted constructor IDs described in the [subchain documentation »](https://core.telegram.org/api/end-to-end/group-calls#subchains) |
| next_offset | [int](/type/int/) | Height of the block located after the last block in blocks; the first returned block has height next_offset - blocks.length |

## Тип

[Update](/type/Update/)

## Related pages

#### [E2E Group Calls](https://core.telegram.org/api/end-to-end/group-calls)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
