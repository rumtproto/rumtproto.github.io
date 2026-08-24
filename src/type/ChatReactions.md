---
title: "ChatReactions"
original: "https://core.telegram.org/type/ChatReactions"
section: ref
kind: type
description: "Доступные реакции в чате"
layout: layout.njk
---

# ChatReactions

Доступные реакции в чате

```
chatReactionsNone#eafc32bc = ChatReactions;
chatReactionsAll#52928bca flags:# allow_custom:flags.0?true = ChatReactions;
chatReactionsSome#661d4037 reactions:Vector<Reaction> = ChatReactions;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/chatReactionsNone">chatReactionsNone</a></td><td>Реакции не разрешены</td></tr><tr><td><a href="/constructor/chatReactionsAll">chatReactionsAll</a></td><td>Разрешены все реакции или все реакции, кроме пользовательских</td></tr><tr><td><a href="/constructor/chatReactionsSome">chatReactionsSome</a></td><td>Разрешены некоторые реакции</td></tr></tbody></table>
