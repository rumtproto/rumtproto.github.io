---
title: "messages.SavedReactionTags"
original: "https://core.telegram.org/type/messages.SavedReactionTags"
section: ref
kind: type
description: "Список имён тегов-реакций », назначенных пользователем."
layout: layout.njk
---

# messages.SavedReactionTags

Список имён [тегов-реакций »](/api/saved-messages/#tags), назначенных пользователем.

```
messages.savedReactionTagsNotModified#889b59ef = messages.SavedReactionTags;
messages.savedReactionTags#3259950a tags:Vector<SavedReactionTag> hash:long = messages.SavedReactionTags;

---functions---

messages.getSavedReactionTags#3637e05b flags:# peer:flags.0?InputPeer hash:long = messages.SavedReactionTags;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.savedReactionTagsNotModified">messages.savedReactionTagsNotModified</a></td><td>Список имён <a href="/api/saved-messages#tags">тегов-реакций »</a>, назначенных пользователем, не изменился.</td></tr><tr><td><a href="/constructor/messages.savedReactionTags">messages.savedReactionTags</a></td><td>Список имён <a href="/api/saved-messages#tags">тегов-реакций »</a>, назначенных пользователем.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getSavedReactionTags">messages.getSavedReactionTags</a></td><td>Получить полный список <a href="/api/saved-messages#tags">тегов сохранённых сообщений</a>, созданных пользователем.</td></tr></tbody></table>

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
