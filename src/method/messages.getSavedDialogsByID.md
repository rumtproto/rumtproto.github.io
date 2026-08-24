---
title: "messages.getSavedDialogsByID"
original: "https://core.telegram.org/method/messages.getSavedDialogsByID"
section: ref
kind: method
description: "Получить информацию о конкретных диалогах сохранённых сообщений » или темах монофорума »."
layout: layout.njk
---

# messages.getSavedDialogsByID

Получить информацию о конкретных [диалогах сохранённых сообщений »](/api/saved-messages/#saved-message-dialogs) или [темах монофорума »](/api/monoforum/).

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;
---functions---
messages.getSavedDialogsByID#6f6f9c96 flags:# parent_peer:flags.1?InputPeer ids:Vector<InputPeer> = messages.SavedDialogs;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputPeer">InputPeer</a></td><td>Если установлено, получает <a href="/api/monoforum">темы монофорума »</a>, иначе получает <a href="/api/saved-messages#saved-message-dialogs">диалоги избранных сообщений »</a>.</td></tr><tr><td><strong>ids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Идентификаторы диалогов (тем), которые нужно получить.</td></tr></tbody></table>

### Результат

[messages.SavedDialogs](/type/messages.SavedDialogs/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
