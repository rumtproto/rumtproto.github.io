---
title: "auth.sentCodeTypeSmsPhrase"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeSmsPhrase"
section: ref
kind: constructor
description: "Код был отправлен по SMS в виде секретной фразы, начинающейся со слова, указанного в beginning"
layout: layout.njk
---

# auth.sentCodeTypeSmsPhrase

Код был отправлен по SMS в виде секретной фразы, начинающейся со слова, указанного в `beginning`

```
auth.sentCodeTypeSmsPhrase#b37794af flags:# beginning:flags.0?string = auth.SentCodeType;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>beginning</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Если установлено, секретная фраза (и SMS) начинается с этого слова.</td></tr></tbody></table>

### Тип

[auth.SentCodeType](/type/auth.SentCodeType/)
