---
title: "account.ChatThemes (тип)"
original: "https://core.telegram.org/type/account.ChatThemes"
section: ref
kind: type
layout: layout.njk
---

# account.ChatThemes

*Тип из схемы TL.*

> Available chat themes

## Определение TL

```
account.chatThemesNotModified#e011e1c4 = account.ChatThemes;
account.chatThemes#be098173 flags:# hash:long themes:Vector<ChatTheme> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = account.ChatThemes;

---functions---

account.getUniqueGiftChatThemes#e42ce9c9 offset:string limit:int hash:long = account.ChatThemes;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.chatThemesNotModified](/constructor/account.chatThemesNotModified/) | The available chat themes were not modified |
| [account.chatThemes](/constructor/account.chatThemes/) | Available [chat themes](https://core.telegram.org/api/themes#chat-themes) |

## Методы

| Method | Описание |
|---|---|
| [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/) | Obtain all [chat themes »](https://core.telegram.org/api/themes#chat-themes) associated to owned or [hosted collectible gifts »](https://core.telegram.org/api/gifts#hosted-collectible-gifts). |
