---
title: "inputMessagesFilterPhoneCalls"
original: "https://core.telegram.org/constructor/inputMessagesFilterPhoneCalls"
section: ref
kind: constructor
description: "Возвращать только телефонные звонки"
layout: layout.njk
---

# inputMessagesFilterPhoneCalls

Возвращать только телефонные звонки

```
inputMessagesFilterPhoneCalls#80c99768 flags:# missed:flags.0?true = MessagesFilter;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>missed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Возвращать только пропущенные звонки</td></tr></tbody></table>

### Тип

[MessagesFilter](/type/MessagesFilter/)
