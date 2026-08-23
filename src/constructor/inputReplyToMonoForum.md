---
title: "inputReplyToMonoForum (конструктор)"
original: "https://core.telegram.org/constructor/inputReplyToMonoForum"
section: ref
kind: constructor
layout: layout.njk
---

# inputReplyToMonoForum

*Конструктор из схемы TL.*

> Used to send messages to a [monoforum topic](https://core.telegram.org/api/monoforum).

## Определение TL

```
inputReplyToMonoForum#69d66c45 monoforum_peer_id:InputPeer = InputReplyTo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| monoforum_peer_id | [InputPeer](/type/InputPeer/) | The topic ID. |

## Тип

[InputReplyTo](/type/InputReplyTo/)

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
