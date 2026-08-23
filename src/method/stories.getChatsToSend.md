---
title: "stories.getChatsToSend (метод)"
original: "https://core.telegram.org/method/stories.getChatsToSend"
section: ref
kind: method
layout: layout.njk
---

# stories.getChatsToSend

*Метод из схемы TL.*

> Obtain a list of channels where the user can post [stories](https://core.telegram.org/api/stories)

## Определение TL

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
stories.getChatsToSend#a56a8b60 = messages.Chats;
```

## Параметры

This constructor does not require any parameters.

## Результат

[messages.Chats](/type/messages.Chats/)

## Only users can use this method

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
