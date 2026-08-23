---
title: "messages.SavedDialogs (тип)"
original: "https://core.telegram.org/type/messages.SavedDialogs"
section: ref
kind: type
layout: layout.njk
---

# messages.SavedDialogs

*Тип из схемы TL.*

> Represents some [saved message dialogs »](https://core.telegram.org/api/saved-messages).

## Определение TL

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;

---functions---

messages.getSavedDialogs#1e91fc99 flags:# exclude_pinned:flags.0?true parent_peer:flags.1?InputPeer offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.SavedDialogs;
messages.getPinnedSavedDialogs#d63d94e0 = messages.SavedDialogs;
messages.getSavedDialogsByID#6f6f9c96 flags:# parent_peer:flags.1?InputPeer ids:Vector<InputPeer> = messages.SavedDialogs;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.savedDialogs](/constructor/messages.savedDialogs/) | Represents some [saved message dialogs »](https://core.telegram.org/api/saved-messages). |
| [messages.savedDialogsSlice](/constructor/messages.savedDialogsSlice/) | Incomplete list of [saved message dialogs »](https://core.telegram.org/api/saved-messages) with messages and auxiliary data. |
| [messages.savedDialogsNotModified](/constructor/messages.savedDialogsNotModified/) | The saved dialogs haven't changed |

## Методы

| Method | Описание |
|---|---|
| [messages.getSavedDialogs](/method/messages.getSavedDialogs/) | Returns the current [saved dialog list »](https://core.telegram.org/api/saved-messages) or [monoforum topic list »](https://core.telegram.org/api/monoforum). |
| [messages.getPinnedSavedDialogs](/method/messages.getPinnedSavedDialogs/) | Get pinned [saved dialogs, see here »](https://core.telegram.org/api/saved-messages) for more info. |
| [messages.getSavedDialogsByID](/method/messages.getSavedDialogsByID/) | Obtain information about specific [saved message dialogs »](https://core.telegram.org/api/saved-messages#saved-message-dialogs) or [monoforum topics »](https://core.telegram.org/api/monoforum). |

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
