---
title: "messages.TranslatedText"
original: "https://core.telegram.org/type/messages.TranslatedText"
section: ref
kind: type
description: "Переведённый текст с сущностями оформления."
layout: layout.njk
---

# messages.TranslatedText

Переведённый текст с [сущностями оформления](/api/entities/).

```
messages.translateResult#33db32f8 result:Vector<TextWithEntities> = messages.TranslatedText;

---functions---

messages.translateText#63183030 flags:# peer:flags.0?InputPeer id:flags.0?Vector<int> text:flags.1?Vector<TextWithEntities> to_lang:string = messages.TranslatedText;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.translateResult">messages.translateResult</a></td><td>Переведённый текст с <a href="/api/entities">сущностями оформления</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.translateText">messages.translateText</a></td><td>Перевести заданный текст.<br><br><a href="/api/entities">Сущности оформления текста</a> сохраняются только для пользователей <a href="/api/premium">Telegram Premium</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
