---
title: "reactionCount"
original: "https://core.telegram.org/constructor/reactionCount"
section: ref
kind: constructor
description: "Реакции"
layout: layout.njk
---

# reactionCount

Реакции

```
reactionCount#a3d1cb80 flags:# chosen_order:flags.0?int reaction:Reaction count:int = ReactionCount;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>chosen_order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Если установлено, указывает, что текущий пользователь также поставил эту реакцию.<br>Целое значение указывает, когда была добавлена реакция: чем больше значение, тем новее реакция.</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction">Reaction</a></td><td>Реакция.</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество пользователей, отреагировавших этим эмодзи.</td></tr></tbody></table>

### Тип

[ReactionCount](/type/ReactionCount/)
