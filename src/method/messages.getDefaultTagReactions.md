---
title: "messages.getDefaultTagReactions"
original: "https://core.telegram.org/method/messages.getDefaultTagReactions"
section: ref
kind: method
description: "Получить рекомендуемый список реакций-тегов для сохранённых сообщений по умолчанию."
layout: layout.njk
---

# messages.getDefaultTagReactions

Получить рекомендуемый список [реакций-тегов для сохранённых сообщений](/api/saved-messages/#tags) по умолчанию.

```
messages.reactionsNotModified#b06fdbdf = messages.Reactions;
messages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;
---functions---
messages.getDefaultTagReactions#bdf93428 hash:long = messages.Reactions;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[messages.Reactions](/type/messages.Reactions/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
