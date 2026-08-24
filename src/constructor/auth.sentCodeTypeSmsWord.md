---
title: "auth.sentCodeTypeSmsWord"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeSmsWord"
section: ref
kind: constructor
description: "Код был отправлен по SMS в виде секретного слова, начинающегося с буквы, указанной в beginning"
layout: layout.njk
---

# auth.sentCodeTypeSmsWord

Код был отправлен по SMS в виде секретного слова, начинающегося с буквы, указанной в `beginning`

```
auth.sentCodeTypeSmsWord#a416ac81 flags:# beginning:flags.0?string = auth.SentCodeType;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>beginning</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Если установлено, секретное слово в отправленном SMS (которое может состоять из нескольких слов) начинается с этой буквы.</td></tr></tbody></table>

### Тип

[auth.SentCodeType](/type/auth.SentCodeType/)
