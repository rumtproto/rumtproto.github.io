---
title: "paidReactionPrivacyPeer (конструктор)"
original: "https://core.telegram.org/constructor/paidReactionPrivacyPeer"
section: ref
kind: constructor
layout: layout.njk
---

# paidReactionPrivacyPeer

*Конструктор из схемы TL.*

> Send paid reactions as the specified peer, fetched using [channels.getSendAs](/method/channels.getSendAs/) with the `for_paid_reactions` flag set.

## Определение TL

```
paidReactionPrivacyPeer#dc6cfcf0 peer:InputPeer = PaidReactionPrivacy;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer to send reactions as. |

## Тип

[PaidReactionPrivacy](/type/PaidReactionPrivacy/)

## Related pages

#### [channels.getSendAs](/method/channels.getSendAs/)

Obtains a list of peers that can be displayed as the sender in a specific context. With `for_live_stories`, returns peers that may author [live story in-call messages »](https://core.telegram.org/api/group-calls#in-call-messages).
