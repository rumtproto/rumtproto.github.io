---
title: "messages.SavedDialogs"
original: "https://core.telegram.org/type/messages.SavedDialogs"
section: ref
kind: type
description: "Представляет несколько диалогов из сохранённых сообщений »."
layout: layout.njk
---

# messages.SavedDialogs

Представляет несколько [диалогов из сохранённых сообщений »](/api/saved-messages/).

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;

---functions---

messages.getSavedDialogs#1e91fc99 flags:# exclude_pinned:flags.0?true parent_peer:flags.1?InputPeer offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.SavedDialogs;
messages.getPinnedSavedDialogs#d63d94e0 = messages.SavedDialogs;
messages.getSavedDialogsByID#6f6f9c96 flags:# parent_peer:flags.1?InputPeer ids:Vector<InputPeer> = messages.SavedDialogs;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.savedDialogs">messages.savedDialogs</a></td><td>Представляет несколько <a href="/api/saved-messages">диалогов из сохранённых сообщений »</a>.</td></tr><tr><td><a href="/constructor/messages.savedDialogsSlice">messages.savedDialogsSlice</a></td><td>Неполный список <a href="/api/saved-messages">диалогов из сохранённых сообщений »</a> с сообщениями и вспомогательными данными.</td></tr><tr><td><a href="/constructor/messages.savedDialogsNotModified">messages.savedDialogsNotModified</a></td><td>Сохранённые диалоги не изменились</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getSavedDialogs">messages.getSavedDialogs</a></td><td>Возвращает текущий <a href="/api/saved-messages">список избранных диалогов »</a> или <a href="/api/monoforum">список тем монофорума »</a>.</td></tr><tr><td><a href="/method/messages.getPinnedSavedDialogs">messages.getPinnedSavedDialogs</a></td><td>Получить закреплённые <a href="/api/saved-messages">сохранённые диалоги, подробнее см. здесь »</a>.</td></tr><tr><td><a href="/method/messages.getSavedDialogsByID">messages.getSavedDialogsByID</a></td><td>Получить информацию о конкретных <a href="/api/saved-messages#saved-message-dialogs">диалогах сохранённых сообщений »</a> или <a href="/api/monoforum">темах монофорума »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
