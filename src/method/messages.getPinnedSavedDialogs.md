---
title: "messages.getPinnedSavedDialogs"
original: "https://core.telegram.org/method/messages.getPinnedSavedDialogs"
section: ref
kind: method
description: "Получить закреплённые сохранённые диалоги, подробнее см. здесь »."
layout: layout.njk
---

# messages.getPinnedSavedDialogs

Получить закреплённые [сохранённые диалоги, подробнее см. здесь »](/api/saved-messages/).

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;
---functions---
messages.getPinnedSavedDialogs#d63d94e0 = messages.SavedDialogs;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[messages.SavedDialogs](/type/messages.SavedDialogs/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
