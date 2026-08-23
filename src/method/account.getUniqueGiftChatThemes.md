---
title: "account.getUniqueGiftChatThemes (метод)"
original: "https://core.telegram.org/method/account.getUniqueGiftChatThemes"
section: ref
kind: method
layout: layout.njk
---

# account.getUniqueGiftChatThemes

*Метод из схемы TL.*

> Obtain all [chat themes »](https://core.telegram.org/api/themes#chat-themes) associated to owned or [hosted collectible gifts »](https://core.telegram.org/api/gifts#hosted-collectible-gifts).

## Определение TL

```
account.chatThemesNotModified#e011e1c4 = account.ChatThemes;
account.chatThemes#be098173 flags:# hash:long themes:Vector<ChatTheme> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = account.ChatThemes;
---functions---
account.getUniqueGiftChatThemes#e42ce9c9 offset:string limit:int hash:long = account.ChatThemes;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset | [string](/type/string/) | Offset for [pagination](https://core.telegram.org/api/offsets), intially an empty string, then equal the value of the last returned [account.chatThemes](/constructor/account.chatThemes/).next_offset (if set). |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets). Note that the server may return less than limit results, even if the actual number of remaining results is >= limit, paginate to fetch them all. |
| hash | [long](/type/long/) | Hash from a previously returned [account.chatThemes](/constructor/account.chatThemes/) constructor, to avoid returning any result if the theme list hasn't changed. |

## Результат

[account.ChatThemes](/type/account.ChatThemes/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [account.chatThemes](/constructor/account.chatThemes/)

Available [chat themes](https://core.telegram.org/api/themes#chat-themes)

#### [Telegram themes](https://core.telegram.org/api/themes)

Telegram apps support generating, sharing and synchronizing app themes.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
