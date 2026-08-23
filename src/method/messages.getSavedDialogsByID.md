---
title: "messages.getSavedDialogsByID (метод)"
original: "https://core.telegram.org/method/messages.getSavedDialogsByID"
section: ref
kind: method
layout: layout.njk
---

# messages.getSavedDialogsByID

*Метод из схемы TL.*

> Obtain information about specific [saved message dialogs »](https://core.telegram.org/api/saved-messages#saved-message-dialogs) or [monoforum topics »](https://core.telegram.org/api/monoforum).

## Определение TL

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;
---functions---
messages.getSavedDialogsByID#6f6f9c96 flags:# parent_peer:flags.1?InputPeer ids:Vector<InputPeer> = messages.SavedDialogs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| parent_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputPeer](/type/InputPeer/) | If set, fetches [monoforum topics »](https://core.telegram.org/api/monoforum), otherwise fetches [saved message dialogs »](https://core.telegram.org/api/saved-messages#saved-message-dialogs). |
| ids | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | IDs of dialogs (topics) to fetch. |

## Результат

[messages.SavedDialogs](/type/messages.SavedDialogs/)

## Only users can use this method

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
