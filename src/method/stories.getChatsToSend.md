---
title: "stories.getChatsToSend"
original: "https://core.telegram.org/method/stories.getChatsToSend"
section: ref
kind: method
description: "Получить список каналов, в которых пользователь может публиковать истории"
layout: layout.njk
---

# stories.getChatsToSend

Получить список каналов, в которых пользователь может публиковать [истории](/api/stories/)

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
stories.getChatsToSend#a56a8b60 = messages.Chats;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[messages.Chats](/type/messages.Chats/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
