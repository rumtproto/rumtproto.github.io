---
title: "messagePeerVoteMultiple"
original: "https://core.telegram.org/constructor/messagePeerVoteMultiple"
section: ref
kind: constructor
description: "Как пир проголосовал в опросе с несколькими вариантами ответа"
layout: layout.njk
---

# messagePeerVoteMultiple

Как пир проголосовал в опросе с несколькими вариантами ответа

```
messagePeerVoteMultiple#4628f6e6 peer:Peer options:Vector<bytes> date:int = MessagePeerVote;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Идентификатор пира</td></tr><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/bytes">bytes</a>&gt;</td><td>Варианты, выбранные пиром</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда пир отдал свои голоса</td></tr></tbody></table>

### Тип

[MessagePeerVote](/type/MessagePeerVote/)
