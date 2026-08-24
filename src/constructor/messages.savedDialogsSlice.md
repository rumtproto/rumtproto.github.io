---
title: "messages.savedDialogsSlice"
original: "https://core.telegram.org/constructor/messages.savedDialogsSlice"
section: ref
kind: constructor
description: "Неполный список диалогов из сохранённых сообщений » с сообщениями и вспомогательными данными."
layout: layout.njk
---

# messages.savedDialogsSlice

Неполный список [диалогов из сохранённых сообщений »](/api/saved-messages/) с сообщениями и вспомогательными данными.

```
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число диалогов в сохранённых сообщениях</td></tr><tr><td><strong>dialogs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SavedDialog">SavedDialog</a>&gt;</td><td>Список сохранённых диалогов сообщений</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Список последних сообщений из диалогов</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr></tbody></table>

### Тип

[messages.SavedDialogs](/type/messages.SavedDialogs/)

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
