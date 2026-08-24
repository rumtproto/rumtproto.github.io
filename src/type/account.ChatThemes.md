---
title: "account.ChatThemes"
original: "https://core.telegram.org/type/account.ChatThemes"
section: ref
kind: type
description: "Доступные темы чата"
layout: layout.njk
---

# account.ChatThemes

Доступные темы чата

```
account.chatThemesNotModified#e011e1c4 = account.ChatThemes;
account.chatThemes#be098173 flags:# hash:long themes:Vector<ChatTheme> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = account.ChatThemes;

---functions---

account.getUniqueGiftChatThemes#e42ce9c9 offset:string limit:int hash:long = account.ChatThemes;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.chatThemesNotModified">account.chatThemesNotModified</a></td><td>Доступные темы оформления чатов не изменились</td></tr><tr><td><a href="/constructor/account.chatThemes">account.chatThemes</a></td><td>Доступные <a href="/api/themes#chat-themes">темы чата</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getUniqueGiftChatThemes">account.getUniqueGiftChatThemes</a></td><td>Получить все <a href="/api/themes#chat-themes">темы оформления чатов »</a>, связанные с принадлежащими вам или <a href="/api/gifts#hosted-collectible-gifts">размещёнными коллекционными подарками »</a>.</td></tr></tbody></table>
