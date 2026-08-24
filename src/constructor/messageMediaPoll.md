---
title: "messageMediaPoll"
original: "https://core.telegram.org/constructor/messageMediaPoll"
section: ref
kind: constructor
description: "Опрос"
layout: layout.njk
---

# messageMediaPoll

Опрос

```
messageMediaPoll#4bd6e798 poll:Poll results:PollResults = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>poll</strong></td><td style="text-align: center;"><a href="/type/Poll">Poll</a></td><td>Опрос</td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/type/PollResults">PollResults</a></td><td>Результаты опроса</td></tr><tr><td><strong>attached_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/MessageMedia">MessageMedia</a></td><td>Необязательное вложение, отображаемое рядом с опросом</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)
