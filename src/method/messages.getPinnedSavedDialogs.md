---
title: "messages.getPinnedSavedDialogs (метод)"
original: "https://core.telegram.org/method/messages.getPinnedSavedDialogs"
section: ref
kind: method
layout: layout.njk
---

# messages.getPinnedSavedDialogs

*Метод из схемы TL.*

> Get pinned [saved dialogs, see here »](https://core.telegram.org/api/saved-messages) for more info.

## Определение TL

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;
---functions---
messages.getPinnedSavedDialogs#d63d94e0 = messages.SavedDialogs;
```

## Параметры

This constructor does not require any parameters.

## Результат

[messages.SavedDialogs](/type/messages.SavedDialogs/)

## Only users can use this method

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
