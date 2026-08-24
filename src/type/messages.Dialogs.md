---
title: "messages.Dialogs"
original: "https://core.telegram.org/type/messages.Dialogs"
section: ref
kind: type
description: "Объект содержит список чатов с сообщениями и вспомогательными данными."
layout: layout.njk
---

# messages.Dialogs

Объект содержит список чатов с сообщениями и вспомогательными данными.

```
messages.dialogs#15ba6c40 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
messages.dialogsSlice#71e094f3 count:int dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
messages.dialogsNotModified#f0e3e596 count:int = messages.Dialogs;

---functions---

messages.getDialogs#a0f4cb4f flags:# exclude_pinned:flags.0?true folder_id:flags.1?int offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.Dialogs;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.dialogs">messages.dialogs</a></td><td>Полный список чатов с сообщениями и вспомогательными данными.</td></tr><tr><td><a href="/constructor/messages.dialogsSlice">messages.dialogsSlice</a></td><td>Неполный список диалогов с сообщениями и вспомогательными данными.</td></tr><tr><td><a href="/constructor/messages.dialogsNotModified">messages.dialogsNotModified</a></td><td>Диалоги не изменились</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getDialogs">messages.getDialogs</a></td><td>Возвращает список диалогов текущего пользователя.</td></tr></tbody></table>
