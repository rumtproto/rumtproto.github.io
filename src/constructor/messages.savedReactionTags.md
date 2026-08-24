---
title: "messages.savedReactionTags"
original: "https://core.telegram.org/constructor/messages.savedReactionTags"
section: ref
kind: constructor
description: "Список имён тегов-реакций », назначенных пользователем."
layout: layout.njk
---

# messages.savedReactionTags

Список имён [тегов-реакций »](/api/saved-messages/#tags), назначенных пользователем.

```
messages.savedReactionTags#3259950a tags:Vector<SavedReactionTag> hash:long = messages.SavedReactionTags;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>tags</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SavedReactionTag">SavedReactionTag</a>&gt;</td><td>Сохранённые теги реакций.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>. При необходимости его можно пересчитать вручную по <a href="/api/saved-messages#tags">особому алгоритму, описанному здесь »</a>.</td></tr></tbody></table>

### Тип

[messages.SavedReactionTags](/type/messages.SavedReactionTags/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
