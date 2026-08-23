---
title: "account.chatThemes (конструктор)"
original: "https://core.telegram.org/constructor/account.chatThemes"
section: ref
kind: constructor
layout: layout.njk
---

# account.chatThemes

*Конструктор из схемы TL.*

> Available [chat themes](https://core.telegram.org/api/themes#chat-themes)

## Определение TL

```
account.chatThemes#be098173 flags:# hash:long themes:Vector<ChatTheme> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = account.ChatThemes;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| hash | [long](/type/long/) | Hash to pass to the method that returned this constructor, to avoid refetching the result if it hasn't changed. |
| themes | [Vector](https://core.telegram.org/type/Vector%20t)<[ChatTheme](/type/ChatTheme/)> | Themes. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in the themes field. |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the themes field. |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Next offset for pagination. |

## Тип

[account.ChatThemes](/type/account.ChatThemes/)

## Related pages

#### [Telegram themes](https://core.telegram.org/api/themes)

Telegram apps support generating, sharing and synchronizing app themes.
